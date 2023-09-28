<template>
  <div class="container">
    <h3 class="sm:heading-3 heading-5 heading text-center mb-10">
      you may also like
    </h3>
    <ul class="flex sm:flex-row flex-col justify-between items-center">
      <li
        v-for="item in props.othersValue"
        :key="item.id"
        class="flex-col space-y-9 items-center md:ml-8 ml-2 sm:mt-0 mt-4"
      >
        <div>
          <img
            src="../assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
            alt=""
          />
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
console.log(props.othersValue);
</script>
