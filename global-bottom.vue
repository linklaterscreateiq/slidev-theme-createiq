<script setup lang="js">
import { onMounted, ref } from 'vue'

// The theme ships Fira Code through @fontsource, which sets `font-display: swap`:
// the browser lays text out in a fallback face and swaps the real one in when it
// arrives. Slidev's exporter waits for `networkidle` but never for the fonts, so a
// screenshot can land before the swap and capture fallback metrics — which is why
// the code slide drifted between otherwise identical renders.
//
// `data-waitfor` is the exporter's own hook: before screenshotting it waits for the
// element matching that selector to become visible. Rendering the marker only once
// `document.fonts.ready` resolves therefore holds the export until the real faces
// are in use. It is inert outside export, and invisible during it.
const fontsReady = ref(false)

onMounted(async () => {
  await document.fonts.ready
  fontsReady.value = true
})
</script>

<template>
  <div class="fonts-ready-probe" data-waitfor=".fonts-ready">
    <div v-if="fontsReady" class="fonts-ready"/>
  </div>
</template>

<style scoped>
.fonts-ready-probe {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

/* Playwright treats opacity 0 as visible but paints nothing, so the marker
   satisfies the wait without touching a single pixel of the screenshot. */
.fonts-ready {
  width: 1px;
  height: 1px;
  opacity: 0;
}
</style>
