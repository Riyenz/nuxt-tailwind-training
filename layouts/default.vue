<template>
  <div class="font-sans text-blueGray-800 default-page relative">
    <Sidebar class="default-page__sidebar z-50" />
    <Nuxt class="default-page__main h-screen relative z-0" />
  </div>
</template>

<style lang="scss">
.default-page {
  &__sidebar {
    position: fixed;
    width: 300px;
    top: 0;
    left: 0;
  }

  &__main {
    max-width: calc(100vw - 300px);
    margin-left: 300px;
  }
}
</style>
