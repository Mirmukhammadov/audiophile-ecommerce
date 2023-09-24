<template>
  <div
    class="flex container justify-between items-center md:flex-row flex-col md:text-start text-center"
  >
    <div class="max-w-[540px] max-h-[560px]">
      <img
        src="../assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
        alt=""
        class="w-full h-full"
      />
    </div>

    <div class="flex flex-col max-w-[445px] space-y-5 ml-5">
      <span
        class="text-orange-400 text-sm font-normal font-['Manrope'] uppercase tracking-[10px]"
        >NEW PRODUCT</span
      >
      <heading2 class="heading sm:heading2 heading-4 w-full"
        >XX99 Mark II Headphones</heading2
      >
      <paragraph
        class="w-full opacity-50 text-black text-[15px] font-medium font-['Manrope'] leading-[25px]"
      >
        The new XX99 Mark II headphones is the pinnacle of pristine audio. It
        redefines your premium headphone experience by reproducing the balanced
        depth and precision of studio-quality sound.
      </paragraph>

      <cbutton />
    </div>
  </div>
</template>

<script setup>
import cbutton from "./Cbutton.vue";
</script>
