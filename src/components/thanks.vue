<template>
  <div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[540px] p-10 bg-white rounded-lg z-10"
  >
    <div class="flex flex-col gap-6">
      <p
        class="text-black text-[32px] font-bold font-['Manrope'] uppercase leading-9 tracking-wide"
      >
        THANK YOU<br />FOR YOUR ORDER
      </p>

      <p
        class="w-[444px] opacity-50 text-black text-[15px] font-medium font-['Manrope'] leading-[25px]"
      >
        You will receive an email confirmation shortly.
      </p>

      <router-link to="/">
        <CbuttonVue class="!w-[600px]">Back to home</CbuttonVue>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import CbuttonVue from "./Cbutton.vue";
</script>
