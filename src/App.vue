<template>
  <div id="app">
    <router-view />
    <navigation />
  </div>
</template>
<script lang="vucript">
import { importComponent } from "vucript";
importComponent("@/components/Navigation.vue", "Navigation");
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;900&display=swap')
#app
  font-family: 'Noto Sans JP', sans-serif
  font-style: normal
  font-weight: normal
  background: $background-color
  margin: auto
  width: 100%
  max-width: 375px
body
  background: $background-color
  margin: 0px
</style>
