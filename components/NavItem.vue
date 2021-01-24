<template>
  <ul>
    <li class="mb-3" v-for="(navItem, index) in navigation" :key="index">
      <nuxt-link
        v-if="!!navItem.path"
        :to="navItem.path"
        class="text-blueGray-600 hover:text-blueGray-800"
      >
        {{ navItem.displayName }}
      </nuxt-link>
      <v-template v-else>
        <span class="font-medium mb-3 mt-10 block">{{
          navItem.displayName
        }}</span>
        <NavItem :navigation="navItem.children" />
      </v-template>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { INavItem } from './../interfaces/nav-item.interface'

@Component({})
export default class NavItem extends Vue {
  @Prop() readonly navigation!: INavItem[]
}
</script>
