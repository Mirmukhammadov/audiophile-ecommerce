<template>
  <div class="flex justify-between container">
    <div class="flex flex-col space-y-4">
      <img
        :src="'src/' + props.galleryValue.first.desktop"
        alt=""
        class="w-full h-full bg-zinc-100 rounded-lg"
      />
      <img
        :src="'src/' + props.galleryValue.second.desktop"
        alt=""
        class="w-full h-full bg-zinc-100 rounded-lg"
      />
    </div>
    <div class="max-w-[635px] max-h-[600px]">
      <img
        :src="'src/' + props.galleryValue.third.desktop"
        alt=""
        class="bg-zinc-100 rounded-lg object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["galleryValue"]);

function getImageUrl(relativePath) {
  return `${process.env.BASE_URL}src/${relativePath.slice(2)}`;
}
</script>
