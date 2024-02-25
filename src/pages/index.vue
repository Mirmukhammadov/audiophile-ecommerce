<template>
  <div
    class="absolute top-[20%] right-[10%] bg-white rounded-lg cartopened"
    v-if="cart"
  >
    <Cart v-if="cart" />
  </div>

  <div :class="{ 'opacity-50': cart, 'max-h-100px': cart }">
    <div class="pb-24">
      <Cheader @toggleCartValue="getvalue" />

      <div class="backimage flex items-center">
        <div class="container">
          <div
            class="flex flex-col max-w-[500px] space-y-5 mt-[100px] mb-[250px]"
          >
            <span
              v-if="headphones[0].new"
              class="opacity-50 text-white text-sm font-normal font-['Manrope'] uppercase tracking-[10px]"
              >NEW PRODUCT</span
            >
            <heading2
              class="!text-white text-[56px] font-bold font-['Manrope'] uppercase leading-[58px] tracking-widest sm:heading2 w-full"
              >{{ headphones[0].name }}</heading2
            >
            <paragraph
              class="w-full opacity-75 text-white text-[15px] font-medium font-['Manrope'] leading-[25px]"
            >
              {{ headphones[0].description }}
            </paragraph>
            <router-link :to="'/' + headphones[0].id">
              <cbutton>See Product</cbutton>
            </router-link>
          </div>
          <!-- <div class="w-[540px] h-[560px] relative bg-none">
        <img
        src="../assets/home/desktop/image-hero.jpg"
        alt=""
        class="w-full h-full object-cover"
        />
      </div> -->
        </div>
      </div>
    </div>

    <div class="container">
      <div class="bg-[#dedede] flex justify-between relative my-10">
        <div class="flex flex-col space-y-5 p-10 py-14">
          <heading2
            class="text-black text-[28px] font-bold font-['Manrope'] uppercase tracking-widest sm:heading2 w-full"
            >{{ speaker2[0].name }}</heading2
          >
          <router-link :to="'/' + speaker2[0].id">
            <button
              class="text-black text-[13px] font-bold font-['Manrope'] uppercase tracking-wide border border-black p-2 hover:text-white hover:bg-black duration-300"
            >
              See product
            </button>
          </router-link>
        </div>

        <div class="max-w-[540px] max-h-[560px]">
          <img
            src="../assets/home/desktop/image-speaker-zx7.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="flex justify-between items-center md:flex-nowrap flex-wrap">
        <img src="../assets/home/desktop/image-earphones-yx1.jpg" alt="" />
        <div
          class="flex flex-col ml-2 space-y-5 bg-[#dedede] p-11 py-[110px] max-w-[500px] w-full"
        >
          <heading2
            class="text-black text-[28px] font-bold font-['Manrope'] uppercase tracking-widest sm:heading2 w-full"
            >{{ earphones[0].slug }}</heading2
          >
          <router-link :to="'/' + earphones[0].id">
            <button
              class="text-black text-[13px] font-bold font-['Manrope'] uppercase tracking-wide border border-black p-2 hover:text-white hover:bg-black duration-300"
            >
              See product
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <Category />
    <div class="space-y-10 mt-14">
      <prefooter />
      <Cfooter />
    </div>
  </div>

  <!-- <headpones /> -->
  <!-- <speakers /> -->
  <!-- <earphones /> -->
  <!-- <OthersVue /> -->
  <router-view></router-view>
</template>

<script setup>
import { ref } from "vue";
// import  dd from '../components/Cheader.vue'
import Cheader from "../components/Cheader.vue";
import Cfooter from "../components/Cfooter.vue";
import Category from "../components/Category.vue";
import Prefooter from "../components/Prefooter.vue";

import Cbutton from "../components/Cbutton.vue";
import Productdetail from "../components/Product-detail.vue";
import Cart from "../components/Cart.vue";
//   import headpones from "./pages/headpones/index.vue";
//   import speakers from "./pages/speakers/index.vue";
//   import earphones from "./pages/earphones/index.vue";
//   import OthersVue from "./components/Others.vue";

const headphones = ref();
const speaker1 = ref();
const speaker2 = ref();
const earphones = ref();
const cart = ref();
function getvalue(item) {
  cart.value = item;
}

function getData(variable, name) {
  fetch("/src/data.json")
    .then((response) => response.json())
    .then((data) => {
      variable.value = data.filter((item) => {
        return item.name == name;
      });
    });
}

getData(headphones, "XX99 Mark II Headphones");
getData(speaker1, "ZX9 Speaker");
getData(speaker2, "ZX7 Speaker");
getData(earphones, "YX1 Wireless Earphones");
</script>

<style scoped>
.backimage {
  background-image: url(../assets/home/desktop/image-hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

/* .cartopened {
  position: fixed;
  z-index: 1000;
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
} */
</style>
