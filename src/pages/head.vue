<template>
  <div class="flex flex-col space-y-24">
    <Cheader />
    <MainProductDetailVue :mainProduct="filtered" />
    <FeaturesVue :objValue="filtered" />
    <GalleryVue :galleryValue="filtered[0].gallery" />
    <Others :othersValue="filtered[0].others" />
    <Category />
    <PrefooterVue />
    <Cfooter />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import Cheader from "../components/Cheader.vue";
import GalleryVue from "../components/Gallery.vue";
import FeaturesVue from "../components/Features.vue";
import Others from "../components/Others.vue";
import Category from "../components/Category.vue";
import Cfooter from "../components/Cfooter.vue";
import PrefooterVue from "../components/Prefooter.vue";
import ProductDetailVue from "../components/Product-detail.vue";
import MainProductDetailVue from "../components/MainProductDetail.vue";
MainProductDetailVue;

const route = useRoute();
const routeId = ref(route.params.id);
const filtered = ref([]);

fetch("/src/data.json")
  .then((response) => response.json())
  .then((data) => {
    filtered.value = data.filter((item) => {
      return item.id == parseInt(routeId.value);
    });
  });
</script>
