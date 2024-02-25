<template>
  <div
    class="absolute top-[20%] right-[10%] bg-white rounded-lg cartopened"
    v-if="cart"
  >
    <Cart v-if="cart" />
  </div>

  <div
    class="flex flex-col space-y-24"
    :class="{ 'opacity-50': cart, 'max-h-100px': cart }"
  >
    <Cheader @toggleCartValue="getvalue" />

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
import Cart from "../components/Cart.vue";
MainProductDetailVue;

function getvalue(item) {
  cart.value = item;
}
const cart = ref();
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
