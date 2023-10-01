<template>
  <div class="container">
    <h3 class="sm:heading-3 heading-5 heading text-center mb-10">
      you may also like
    </h3>
    <ul class="flex sm:flex-row flex-col justify-between items-center">
      <li
        v-for="item in props.othersValue"
        :key="item.id"
        class="flex-col space-y-9 justify-between md:mr-2 mr-2 sm:mt-0 mt-4"
      >
        <div class="bg-zinc-100 rounded-lg">
          <img :src="'src/' + item.image.desktop" :alt="item.image.desktop" />
        </div>
        <div class="text-center space-y-9">
          <p class="heading heading-5">{{ item.name }}</p>

          <CbuttonVue class="items-center" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import CbuttonVue from "./Cbutton.vue";
import { defineProps } from "vue";

const props = defineProps(["othersValue"]);
console.log(props.othersValue, "othersvalue");
</script>
