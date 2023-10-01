<template>
  <div
    class="flex container justify-between items-center md:flex-row flex-col md:text-start text-center"
  >
    <div class="max-w-[540px] max-h-[560px]">
      <img
        :src="'src/' + props.mainProduct[0].image.desktop"
        alt=""
        class="w-full h-full"
      />
    </div>
    <div class="flex flex-col max-w-[400px] space-y-5 ml-5">
      <span
        v-if="props.mainProduct[0].new"
        class="text-orange-400 text-sm font-normal font-['Manrope'] uppercase tracking-[10px]"
        >NEW PRODUCT</span
      >
      <heading2 class="heading sm:heading2 heading-4 w-full">{{
        props.mainProduct[0].name
      }}</heading2>
      <paragraph
        class="w-full opacity-50 text-black text-[15px] font-medium font-['Manrope'] leading-[25px]"
      >
        {{ props.mainProduct[0].description }}
      </paragraph>
      <span
        class="font-['Manrope'] font-semibold text-xl leading-[24.59px] tracking-[1.29px] text-black"
      >
        ${{ props.mainProduct[0].price }}</span
      >
      <cbutton />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps(["mainProduct"]);
console.log(props.mainProduct.value, "main");

import cbutton from "./Cbutton.vue";
</script>
