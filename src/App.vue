<template>
  <div id="app"></div>
  <!-- <headpones /> -->
  <!-- <speakers /> -->
  <!-- <earphones /> -->
  <!-- <OthersVue /> -->
  <!-- <GalleryVue /> -->
  <router-view></router-view>
</template>

<script setup>
import Cheader from "./components/Cheader.vue";
import Cfooter from "./components/Cfooter.vue";
import Category from "./components/Category.vue";
import Prefooter from "./components/Prefooter.vue";
import Cbutton from "./components/Cbutton.vue";
import Productdetail from "./components/Product-detail.vue";
// import headpones from "./pages/headpones/index.vue";
import speakers from "./pages/speakers.vue";
import earphones from "./pages/earphones.vue";
import OthersVue from "./components/Others.vue";
import GalleryVue from "./components/Gallery.vue";
// import aydi from "./pages/headpones/head.vue";
</script>
