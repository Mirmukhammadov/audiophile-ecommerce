<template>
  <div
    class="absolute top-[20%] right-[10%] bg-white rounded-lg cartopened"
    v-if="cart"
  >
    <Cart v-if="cart" />
  </div>

  <div :class="{ 'opacity-50': cart, 'max-h-100px': cart }">
    <Cheader
      :categoryName="headphone[2].category"
      @toggleCartValue="getvalue"
    />

    <div class="absolute top-[20%] right-[10%] bg-white rounded-lg">
      <Cart v-if="cart" />
    </div>
    <div v-for="item in headphone" :key="item.id">
      <div class="mt-[100px]">
        <router-link :to="'/' + item.id">
          <Productdetail :headphoneValue="item" @buttonclicked="getId" />
        </router-link>
      </div>
    </div>
    <div class="mt-10">
      <CategoryVue />
    </div>
    <div class="mt-[100px]">
      <PrefooterVue />
    </div>
    <div class="mt-[100px]">
      <CfooterVue />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Productdetail from "../components/Product-detail.vue";
import Cheader from "../components/Cheader.vue";
import PrefooterVue from "../components/Prefooter.vue";
import CategoryVue from "../components/Category.vue";
import CfooterVue from "../components/Cfooter.vue";
import Cart from "../components/Cart.vue";

const headphone = ref([]);
const cart = ref();
function getvalue(item) {
  cart.value = item;
}
fetch("/src/data1.json")
  .then((response) => response.json())
  .then((data) => {
    headphone.value = data.filter((item) => {
      return item.category == "headphones";
    });
  });
</script>
