<template>
  <div
    class="flex sm:flex-row flex-col sm:mt-[200px] justify-between items-center container"
  >
    <ul v-for="obj in categoryValue" :key="obj.id" class="mt-10 sm:mt-0">
      <li
        class="relative bg-zinc-100 rounded-lg md:px-[60px] sm:px-10 px-14 text-center flex-col flex"
      >
        <div
          class="max-w-[123px] max-h-[160px] absolute left-1/2 top-[10%] transform -translate-x-1/2 -translate-y-1/2"
        >
          <img :src="obj.img" :alt="obj.heading" class="w-full h-full" />
        </div>
        <div class="pt-12 pb-10 px-10 text-center">
          <h3 class="text-center heading-6 heading">
            {{ obj.heading }}
          </h3>
          <router-link :to="obj.heading">
            <button
              class="opacity-50 items-center text-black text-[13px] font-bold font-['Manrope'] uppercase tracking-wide hover:text-[#d87d4a] duration-200"
            >
              Shop
              <img
                src="../assets/shared/desktop/icon-arrow-right.svg"
                alt=""
                class="inline-block ml-2"
              />
            </button>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const categoryValue = [
  {
    id: 0,
    img: "src/assets/shared/desktop/image-category-thumbnail-headphones.png",
    heading: "HEADPHONES",
  },
  {
    id: 1,
    img: "src/assets/shared/desktop/image-category-thumbnail-speakers.png",
    heading: "SPEAKERS",
  },
  {
    id: 2,
    img: "src/assets/shared/desktop/image-category-thumbnail-earphones.png",
    heading: "EARPHONES",
  },
];
</script>
