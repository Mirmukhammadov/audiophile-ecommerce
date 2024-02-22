<template>
  <div
    class="flex container justify-between items-center md:flex-row flex-col md:text-start text-center"
  >
    <div
      class="max-w-[540px] max-h-[560px]"
      :class="{ 'order-[1]': props.headphoneValue.id % 2 == 0 }"
    >
      <img
        :src="'src/' + props.headphoneValue.image.desktop"
        alt=""
        class="w-full h-full"
      />
    </div>
    <div class="flex flex-col max-w-[445px] space-y-5 ml-5">
      <span
        v-if="props.headphoneValue.new"
        class="text-orange-400 text-sm font-normal font-['Manrope'] uppercase tracking-[10px]"
        >NEW PRODUCT</span
      >
      <heading2 class="heading sm:heading2 heading-4 w-full">{{
        props.headphoneValue.name
      }}</heading2>
      <paragraph
        class="w-full opacity-50 text-black text-[15px] font-medium font-['Manrope'] leading-[25px]"
      >
        {{ props.headphoneValue.description }}
      </paragraph>
      <cbutton @click="$emit('buttonclicked', props.headphoneValue.id)"
        >See Product</cbutton
      >
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps(["headphoneValue"]);
import cbutton from "./Cbutton.vue";
</script>
