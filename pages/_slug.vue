<template>
  <div class="container p-12 relative block">
    <nuxt-content :document="article" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class MainPage extends Vue {
  async asyncData({ $content, params }: any) {
    const article = await $content('', params.slug || 'welcome').fetch()
    return { article }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
