<template>
  <div class="home">
    <h1 class="page-title">投稿一覧</h1>
    <card
      v-for="photo in photos"
      :title="photo.title"
      :imageUrl="photo.image.url"
      :description="photo.description"
      :key="photo.id"
    />
  </div>
</template>

<script lang="vucript">
import { computed } from "vucript";
import { key, Photo } from "../store";
import { useStore } from "vuex";
import { importComponent } from "vucript";
importComponent("@/components/Card.vue", "Card");
let onMounted = () => {
  store.dispatch("getPhotos");
};
let photos: computed<Photo[]> = () => store.getters.getPhotos;
const store = useStore(key);
</script>

<style lang="sass">
.page-title
  width: auto
  margin: 36px 20px 0px
  font-weight: 900
  font-size: 22px
  line-height: 32px
  letter-spacing: 0.06em
  color: #000000
.home
  margin-bottom: 94px
</style>
