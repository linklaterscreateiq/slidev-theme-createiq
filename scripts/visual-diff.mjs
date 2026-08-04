#!/usr/bin/env node
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

const [baseDir, headDir, outDir] = process.argv.slice(2)

if (!baseDir || !headDir || !outDir) {
  console.error('usage: visual-diff.mjs <base-dir> <head-dir> <out-dir>')
  process.exit(2)
}

// Anti-aliasing differs run to run even on an identical tree, so ignore AA pixels
// and allow a small residue before calling a slide changed.
const PIXEL_THRESHOLD = 0.1
const MAX_CHANGED_RATIO = Number(process.env.MAX_CHANGED_RATIO ?? 0.001)

const pngs = dir => new Set(readdirSync(dir).filter(f => f.endsWith('.png')))

const slideOrder = (a, b) => {
  const [na, nb] = [Number.parseInt(a, 10), Number.parseInt(b, 10)]
  return Number.isNaN(na) || Number.isNaN(nb) ? a.localeCompare(b) : na - nb
}

const baseFiles = pngs(baseDir)
const headFiles = pngs(headDir)
const allFiles = [...new Set([...baseFiles, ...headFiles])].sort(slideOrder)

mkdirSync(outDir, { recursive: true })

const results = []

for (const file of allFiles) {
  if (!headFiles.has(file)) {
    results.push({ file, status: 'removed' })
    continue
  }
  if (!baseFiles.has(file)) {
    results.push({ file, status: 'added' })
    continue
  }

  const base = PNG.sync.read(readFileSync(join(baseDir, file)))
  const head = PNG.sync.read(readFileSync(join(headDir, file)))

  if (base.width !== head.width || base.height !== head.height) {
    results.push({
      file,
      status: 'resized',
      detail: `${base.width}x${base.height} -> ${head.width}x${head.height}`,
    })
    continue
  }

  const diff = new PNG({ width: base.width, height: base.height })
  const changed = pixelmatch(base.data, head.data, diff.data, base.width, base.height, {
    threshold: PIXEL_THRESHOLD,
    includeAA: false,
  })
  const ratio = changed / (base.width * base.height)
  const status = ratio > MAX_CHANGED_RATIO ? 'changed' : 'ok'

  if (status === 'changed') writeFileSync(join(outDir, file), PNG.sync.write(diff))

  results.push({ file, status, changed, ratio })
}

const pct = ratio => `${(ratio * 100).toFixed(4)}%`
const failures = results.filter(r => r.status !== 'ok')

const summary = [
  '## Visual regression',
  '',
  failures.length === 0
    ? `No visual change across ${results.length} slides.`
    : `${failures.length} of ${results.length} slides changed. Download the \`visual-diff\` artifact to see them.`,
  '',
  '| Slide | Status | Changed pixels |',
  '| --- | --- | --- |',
  ...results.map(
    r =>
      `| ${r.file} | ${r.status}${r.detail ? ` (${r.detail})` : ''} | ${
        r.changed === undefined ? '-' : `${r.changed} (${pct(r.ratio)})`
      } |`
  ),
  '',
].join('\n')

console.log(summary)
if (process.env.GITHUB_STEP_SUMMARY) writeFileSync(process.env.GITHUB_STEP_SUMMARY, summary, { flag: 'a' })

process.exit(failures.length === 0 ? 0 : 1)
