<template>
  <div id="app"></div>

  <!-- <headpones /> -->
  <!-- <speakers /> -->
  <!-- <earphones /> -->
  <!-- <OthersVue /> -->
  <router-view></router-view>
</template>

<script setup>
import Cheader from "./components/Cheader.vue";
import Cfooter from "./components/Cfooter.vue";
import Category from "./components/Category.vue";
import Prefooter from "./components/Prefooter.vue";
import Cbutton from "./components/Cbutton.vue";
import Productdetail from "./components/Product-detail.vue";
import headpones from "./pages/headpones/index.vue";
import speakers from "./pages/speakers/index.vue";
import earphones from "./pages/earphones/index.vue";
import OthersVue from "./components/Others.vue";
</script>
