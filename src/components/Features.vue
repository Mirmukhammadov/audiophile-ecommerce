<template>
  <div class="container flex justify-start space-x-24">
    <div class="max-w-[635px] w-full space-y-8">
      <h3 class="heading3 heading">FEATURES</h3>
      <p
        class="w-full opacity-50 text-black text-[15px] font-medium font-['Manrope'] leading-[25px]"
      >
        {{ props.objValue[0].features }}
      </p>
    </div>
    <div class="space-y-8 ml-10">
      <h3 class="heading3 heading">in the box</h3>
      <div class="space-y-3">
        <ul v-for="obj in props.objValue[0].includes" :key="obj">
          <li
            class="opacity-50 text-black text-[15px] font-medium font-['Manrope'] leading-[25px]"
          >
            <span class="text-orange-400 font-bold mr-1"
              >{{ obj.quantity }}x</span
            >
            {{ obj.item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["objValue"]);
</script>
