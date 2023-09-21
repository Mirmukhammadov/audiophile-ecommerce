<template>
  <div class="bg-black">
    <div class="container flex flex-col">
      <div
        class="flex md:flex-row flex-col justify-between pt-10 flex-wrap sm:items-start items-center"
      >
        <div class="inline-block">
          <img
            src="../assets/shared/desktop/logo.svg"
            alt=""
            class="cursor-pointer"
          />
        </div>
        <CnavList class="max-w-[430px] w-full md:mt-0 mt-5 text-center" />
      </div>
      <div
        class="flex justify-center sm:justify-between items-center py-10 flex-wrap"
      >
        <p
          class="max-w-[540px] w-full opacity-50 text-white text-[15px] font-medium font-['Manrope'] leading-[25px]"
        >
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div
          class="flex max-w-[120px] w-full justify-between flex-wrap md:mt-0 mt-5 md:items-start items-center"
        >
          <a href="" class="hover:text-[#d87d4a]">
            <img src="../assets/shared/desktop/icon-facebook.svg" alt="" />
          </a>
          <a href="" class="hover:text-[#d87d4a]">
            <img src="../assets/shared/desktop/icon-twitter.svg" alt="" />
          </a>
          <a href="" class="hover:text-[#d87d4a]">
            <img src="../assets/shared/desktop/icon-instagram.svg" alt="" />
          </a>
        </div>
      </div>
      <p
        class="max-w-[540px] w-full opacity-50 text-white text-[15px] font-bold font-['Manrope'] leading-[25px] pb-10"
      >
        Copyright 2021. All Rights Reserved
      </p>
    </div>
  </div>
</template>

<script setup>
import CnavList from "./Cnav-list.vue";
</script>
