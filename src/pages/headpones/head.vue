<template>
  <div>
    <!-- <ProductDetail /> -->
    <h1 class="text-black">oqish</h1>
    <GalleryVue />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import GalleryVue from "../../components/Gallery.vue";

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
