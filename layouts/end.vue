<template>
  <div class="slidev-layout end w-full h-full place-content-center createiq-dark-scheme">
    <main class="slidev-main text-center my-auto">
      <slot/>
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
