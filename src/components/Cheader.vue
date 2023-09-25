<template>
  <div class="bg-[#141414] py-[30px]">
    <div class="container flex flex-col space-y-10">
      <nav class="flex justify-between">
        <div class="flex items-center justify-between">
          <div class="md:hidden visible">
            <img
              src="../assets/shared/tablet/icon-hamburger.svg"
              alt=""
              class="cursor-pointer"
            />
          </div>
          <div class="md:ml-0 ml-10">
            <img
              src="../assets/shared/desktop/logo.svg"
              alt=""
              class="cursor-pointer"
            />
          </div>
        </div>
        <CnavListVue class="w-full max-w-[430px] text-center hide" />
        <div>
          <img
            src="../assets/shared/desktop/icon-cart.svg"
            alt=""
            class="cursor-pointer"
          />
        </div>
      </nav>
      <span class="opacity-20 bg-white block h-px w-full"></span>
      <h1
        class="text-center text-white heading2 md:pl-20 pl-0 uppercase"
        v-if="props.categoryName"
      >
        {{ props.categoryName }}
      </h1>
    </div>
  </div>
</template>

<script setup>
import CnavListVue from "./Cnav-list.vue";
import { defineProps } from "vue";

const props = defineProps(["categoryName"]);
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .hide {
    display: none;
  }
}
</style>
