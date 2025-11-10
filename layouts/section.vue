<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  color: {
    default: 'light',
  },
})

const colorscheme = computed(() => {
  return `createiq-${props.color}-scheme`
})
</script>

<template>
  <div class="slidev-layout section w-full h-full grid" :class="colorscheme">
    <div class="my-auto text-center">
      <slot />
    </div>

    <div class="createiq-footer-bar">
      <div class="footer-content">
        <div class="footer-left">
          <img src="../assets/ciq_logo.svg" alt="CreateiQ" class="logo-glow"/>
          <img src="../assets/extraction-icon.svg" alt="AI" class="footer-icon"/>
        </div>

        <div class="footer-right">
          {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
        </div>
      </div>
    </div>
  </div>
</template>
