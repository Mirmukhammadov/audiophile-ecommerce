<template>
  <input
    :type="type"
    :id="id"
    :name="name"
    :value="modelValue"
    @input="updateModel"
    :placeholder="placeholder"
    class="w-[309px] h-14 bg-white rounded-lg border border-stone-300 opacity-40 text-black text-lg font-bold font-['Manrope'] p-2 outline-none"
  />
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["type"]);
</script>
