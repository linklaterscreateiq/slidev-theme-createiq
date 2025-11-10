<template>
  <div class="slidev-layout intro text-center intro-bg w-full h-full flex flex-col justify-center createiq-dark-scheme">
    <main class="slidev-main flex flex-col justify-center items-center px-8" style="height: calc(100vh - 60vh);">
      <div class="createiq-logo text-6xl font-bold mb-12" style="color: var(--createiq-primary);">
        <img src="../assets/ciq_logo.svg" alt="CreateiQ" width="300"/>
      </div>

      <div class="content-wrapper max-w-4xl">
        <slot/>
      </div>

      <div class="mt-8 text-lg">
        <slot name="subtitle"/>
      </div>
    </main>

    <div class="createiq-footer-bar">
      <div class="footer-content">
        <div class="footer-left">
          <img src="../assets/ciq_logo.svg" alt="CreateiQ" class="logo-glow"/>
          <img src="../assets/extraction-icon.svg" alt="AI" class="footer-icon"/>
        </div>
      </div>
    </div>
  </div>
</template>
