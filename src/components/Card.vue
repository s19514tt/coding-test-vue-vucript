<template>
  <div class="card">
    <picture>
      <source
        class="card-image"
        :srcset="`${imageUrl}?fm=webp&w=500`"
        type="image/webp"
      />
      <img class="card-image" :srcset="`${imageUrl}?w=500`" />
    </picture>
    <div class="card-text">
      <p class="card-text-title">{{ title }}</p>
      <p class="card-text-description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="vucript">
import { prop } from "vucript";
let imageUrl: prop<string>;
let title: prop<string>;
let description: prop<string>;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.card
  margin: 16px 20px
  width: 335px
  height: 100%
  background: #FFFFFF
  border-radius: 10px
  font-size: 0px
  &-text
    padding: 10px 12px
    border-radius: 10px
    &-title
      font-weight: 900
      font-size: 18px
      line-height: 26px
      align-items: center
      letter-spacing: 0.06em
      color: #000000
      margin: 0px
    &-description
      margin: 6px 0px 0px 0px
      font-size: 13px
      line-height: 19px
      text-align: justify
      letter-spacing: 0.01em
      color: #000000
  &-image
    width: 335px
    height: 160px
    object-fit: cover
    object-position: 0% 0%
    border-radius: 10px 10px 0px 0px
</style>
