<template>
  <div class="w-[380px] p-5 inline-block">
    <div class="flex justify-between">
      <h4 class="heading-6 heading">cart</h4>
      <button
        @click="removeAll"
        class="opacity-50 text-black text-[15px] font-medium font-['Manrope'] underline leading-[25px]"
      >
        Remove all
      </button>
    </div>

    <div v-for="obj in valueFromStore" :key="obj.ID">
      <div class="flex mt-6 mb-4 justify-between items-center">
        <div class="flex">
          <div class="w-16 h-16">
            <img
              :src="'src/' + obj.product.image.mobile"
              alt="not ok"
              class="w-full h-full"
            />
          </div>
          <div class="pl-4">
            <p
              class="text-black text-[15px] font-bold font-['Manrope'] leading-[25px]"
            >
              {{ obj.product.slug }}
            </p>
            <span
              class="font-['Manrope'] font-semibold text-xl leading-[24.59px] tracking-[1.29px] text-black"
            >
              ${{ obj.quantity * obj.product.price }}</span
            >
          </div>
        </div>

        <div class="text-center">
          <span>{{ obj.quantity }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-4">
      <h4 class="heading-6 heading">Total</h4>
      <p
        class="text-center text-black text-lg font-bold font-['Manrope'] uppercase"
      >
        ${{ total }}
      </p>
    </div>
    <div class="max-w-[350px] mt-4">
      <router-link :to="'/checkout'">
        <button
          class="text-white text-[13px] w-full font-bold font-['Manrope'] uppercase tracking-wide bg-orange-400 hover:bg-orange-300 duration-300 py-4 px-6"
        >
          Checkout
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import Cbutton from "./Cbutton.vue";
import { ref } from "vue";
import { useMyModule } from "../store/modules/myModule";
const myModule = useMyModule();
const valueFromStore = myModule.cartArr;
let total = 0;
valueFromStore.forEach((item) => {
  total += item.quantity * item.product.price;
});
function removeAll() {
  myModule.cartArr = [];
  localStorage.removeItem("cartArr");
}
</script>
