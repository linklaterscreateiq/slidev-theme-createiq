import { resolve } from 'path'

export default {
  colorSchema: 'dark',
  css: [resolve(__dirname, './styles/index.ts')],
  fonts: {
    sans: ['Lato', 'ui-sans-serif'],
    serif: ['ui-serif'],
    mono: ['Fira Code', 'ui-monospace'],
  },
}
