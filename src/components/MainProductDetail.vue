<template>
  <div
    class="flex container justify-between items-center md:flex-row flex-col md:text-start text-center"
  >
    <div class="max-w-[540px] max-h-[560px]">
      <img
        :src="'src/' + props.mainProduct[0].image.desktop"
        alt=""
        class="w-full h-full"
      />
    </div>
    <div class="flex flex-col max-w-[400px] space-y-5 ml-5">
      <span
        v-if="props.mainProduct[0].new"
        class="text-orange-400 text-sm font-normal font-['Manrope'] uppercase tracking-[10px]"
        >NEW PRODUCT</span
      >
      <heading2 class="heading sm:heading2 heading-4 w-full">{{
        props.mainProduct[0].name
      }}</heading2>
      <paragraph
        class="w-full opacity-50 text-black text-[15px] font-medium font-['Manrope'] leading-[25px]"
      >
        {{ props.mainProduct[0].description }}
      </paragraph>
      <span
        class="font-['Manrope'] font-semibold text-xl leading-[24.59px] tracking-[1.29px] text-black"
      >
        ${{ props.mainProduct[0].price }}</span
      >
      <div class="flex justify-start space-x-3 pt-8">
        <div
          class="flex bg-[#f1f1f1] max-w-[120px] w-full justify-between items-center px-4 py-2"
        >
          <button
            class="w-4 opacity-25 text-center text-black text-[13px] font-bold font-['Manrope'] uppercase tracking-wide"
            @click="minusFuntion"
          >
            -
          </button>
          <p
            class="w-4 text-center text-black text-[13px] font-bold font-['Manrope'] uppercase tracking-wide"
          >
            {{ itemCount }}
          </p>
          <button
            class="w-4 opacity-25 text-center text-black text-[13px] font-bold font-['Manrope'] uppercase tracking-wide"
            @click="itemCount++"
          >
            +
          </button>
        </div>
        <cbutton @click="addToCart">Add to Cart</cbutton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useMyModule } from "../store/modules/myModule";
const myModule = useMyModule();
const props = defineProps(["mainProduct"]);
const itemCount = ref(1);
function minusFuntion() {
  if (itemCount.value > 1) {
    itemCount.value--;
  }
}

function addToCart() {
  const product = props.mainProduct[0];
  const quantity = itemCount.value;

  // Check if the product is already in the cartArr
  const existingCartItem = myModule.cartArr.find(
    (item) => item.product === product
  );

  if (existingCartItem) {
    // If the product is found, update the quantity
    existingCartItem.quantity = quantity;
  } else {
    // If the product is not found, add a new entry
    const cartItem = { product, quantity };
    console.log(cartItem);
    myModule.addObjectToStore(cartItem);
  }
}

import cbutton from "./Cbutton.vue";
</script>
