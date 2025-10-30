<template>
  <div class="slidev-layout cover text-center cover-bg w-full h-full flex flex-col justify-center">
    <main class="slidev-main flex flex-col justify-center items-center px-8" style="height: calc(100vh - 60vh);">
      <div class="createiq-logo text-6xl font-bold mb-12" style="color: var(--createiq-primary);">
        <img src="../assets/ciq_logo.svg" alt="CreateiQ" width="300"/>
      </div>

      <div class="content-wrapper max-w-4xl">
        <slot/>
      </div>

      <div class="mt-8 text-lg text-gray-600">
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

<style scoped>
.slidev-layout.cover.cover-bg {
  background-image: url('../assets/ciq-slide-bg.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.content-wrapper {
  color: #ffffff;
}

.createiq-footer-bar {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 30px;
}

.logo-glow {
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 3px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 18px rgba(255, 255, 255, 0.4));
}

.footer-left img {
  height: 12px;
}

.footer-icon {
  height: 19px !important;
}
</style>
