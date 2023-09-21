<template>
  <div class="bg-black py-[30px]">
    <nav class="flex justify-between container">
      <div class="flex items-center justify-between">
        <div class="md:hidden visible">
          <img
            src="../assets/shared/tablet/icon-hamburger.svg"
            alt=""
            class="cursor-pointer"
          />
        </div>
        <div class="ml-10">
          <img
            src="../assets/shared/desktop/logo.svg"
            alt=""
            class="cursor-pointer"
          />
        </div>
      </div>
      <CnavListVue class="max-w-[430px] w-full hidden md:visible" />
      <div>
        <img
          src="../assets/shared/desktop/icon-cart.svg"
          alt=""
          class="cursor-pointer"
        />
      </div>
    </nav>
  </div>
</template>

<script setup>
import CnavListVue from "./Cnav-list.vue";
</script>
