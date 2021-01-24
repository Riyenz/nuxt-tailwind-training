<template>
  <div class="bg-white border-r-2 h-screen max-h-screen py-16 px-8">
    <NavItem :navigation="navigation" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import navigation from './../constants/navigation.constant'

@Component({})
export default class Sidebar extends Vue {
  navigation = navigation
}
</script>
