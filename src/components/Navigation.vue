<template>
  <div class="nav">
    <div class="nav-items">
      <router-link to="/"
        ><img class="nav-icon" src="../assets/home.svg"
      /></router-link>
      <router-link to="/"
        ><img class="nav-icon" src="../assets/chat.svg"
      /></router-link>
      <router-link to="/"
        ><img class="nav-icon" src="../assets/setting.svg"
      /></router-link>
    </div>
  </div>
</template>
<style lang="sass">
.nav
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  height: 70px
  background-color: white
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.04)
  &-icon
    margin-top: 11px
  &-items
    width: 264px
    margin: auto
    display: flex
    justify-content: space-between
</style>
