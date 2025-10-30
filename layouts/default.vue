<template>
  <div class="slidev-layout default w-full h-full">
    <main class="slidev-main px-8 pt-4 pb-16">
      <slot/>
    </main>

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
