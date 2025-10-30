<template>
  <div class="slidev-layout two-cols-header w-full h-full">
    <div class="col-header">
      <slot/>
    </div>
    <div class="col-left">
      <slot name="left"/>
    </div>
    <div class="col-right">
      <slot name="right"/>
    </div>
    <div class="col-bottom">
      <slot name="bottom"/>
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

<style scoped>
.two-cols-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content auto min-content;
  gap: 1rem;
}

.col-header {
  grid-area: 1 / 1 / 2 / 3;
}

.col-left {
  grid-area: 2 / 1 / 3 / 2;
}

.col-right {
  grid-area: 2 / 2 / 3 / 3;
}

.col-bottom {
  align-self: end;
  grid-area: 3 / 1 / 3 / 3;
}
</style>
