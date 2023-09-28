<template>
  <div>
    <Cheader />

    <h1 class="text-black">oqish</h1>
    <FeaturesVue :objValue="filtered" />
    <!-- <GalleryVue :galleryValue="filtered[0].gallery" /> -->
    <Others :othersValue="filtered[0].others" />
    <Category />
    <!-- <PrefooterVue />
    <Cfooter /> -->
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

const route = useRoute();
const routeId = ref(route.params.id);
const filtered = ref([]);

fetch("/src/data.json")
  .then((response) => response.json())
  .then((data) => {
    filtered.value = data.filter((item) => {
      return item.id == parseInt(routeId.value);
    });
    console.log(filtered.value[0].others, "others");
    console.log(filtered.value[0].gallery, "fil");
  });
</script>
