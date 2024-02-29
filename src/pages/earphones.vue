<template>
  <div
    class="absolute top-[20%] right-[10%] bg-white rounded-lg cartopened"
    v-if="cart"
  >
    <Cart v-if="cart" />
  </div>

  <div :class="{ 'opacity-50': cart, 'max-h-100px': cart }">
    <Cheader
      :categoryName="earphones[0].category"
      @toggleCartValue="getvalue"
    />

    <div v-for="item in earphones" :key="item.id">
      <div class="mt-[100px]">
        <router-link :to="'/' + item.id">
          <Productdetail :headphoneValue="item" />
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
import Productdetail from "@/components/Product-detail.vue";
import Cheader from "@/components/Cheader.vue";
import PrefooterVue from "../components/Prefooter.vue";
import CategoryVue from "../components/Category.vue";
import CfooterVue from "../components/Cfooter.vue";
import Cart from "../components/Cart.vue";

const earphones = ref([]);
const cart = ref();
function getvalue(item) {
  cart.value = item;
}
fetch("/src/data1.json")
  .then((response) => response.json())
  .then((data) => {
    earphones.value = data.filter((item) => {
      return item.category === "earphones";
    });
  });
</script>
