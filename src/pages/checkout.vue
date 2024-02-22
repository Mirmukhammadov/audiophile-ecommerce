<template>
  <div
    class="absolute top-[20%] right-[10%] bg-white rounded-lg cartopened"
    v-if="cart"
  >
    <Cart v-if="cart" />
  </div>

  <div
    class="bg-[#f1f1f1]"
    :class="{ 'opacity-50': cart, 'max-h-100px': cart }"
  >
    <Cheader @toggleCartValue="getvalue" />
    <div class="container flex items-start gap-4">
      <!-- <Cfooter /> -->
      <div class="w-[730px] bg-white rounded-lg mt-20 px-8 py-4">
        <h2 class="heading3 heading my-10">CHECKOUT</h2>
        <p
          class="text-orange-400 text-[13px] font-bold font-['Manrope'] uppercase leading-[25px] tracking-wide mb-4"
        >
          Billing Details
        </p>
        <div class="flex justify-between flex-wrap gap-6">
          <CInputVue
            label="Username"
            type="text"
            id="username"
            name="username"
            v-model="username"
            placeholder="Enter your username"
            :error="usernameError"
          />

          <CInputVue
            label="Email Address"
            type="email"
            id="email"
            name="email"
            v-model="email"
            placeholder="alexei@mail.com"
            :error="emailError"
          />

          <CInputVue
            label="Phone Number"
            type="Number"
            id="phone_number"
            name="phone_number"
            v-model="phoneNumber"
            placeholder="+1 202-555-0136"
            :error="phoneNumberError"
          />
        </div>

        <p
          class="text-orange-400 text-[13px] font-bold font-['Manrope'] leading-[25px] tracking-wide my-8 uppercase"
        >
          shipping info
        </p>
        <div class="flex justify-between flex-wrap gap-6">
          <CInputVue
            label="Address"
            type="text"
            id="adress"
            name="address"
            v-model="address"
            placeholder="1137 Williams Avenue"
            :error="addressError"
            class=""
          />

          <CInputVue
            label="ZIP Code"
            type="text"
            id="zipcode"
            name="zipcode"
            v-model="zipCode"
            placeholder="10001"
            :error="zipCodeError"
          />

          <CInputVue
            label="City"
            type="text"
            id="city"
            name="city"
            v-model="city"
            placeholder="New York"
            :error="cityError"
          />

          <CInputVue
            label="Country"
            type="text"
            id="country"
            name="country"
            v-model="country"
            placeholder="United States"
            :error="countryError"
            class=""
          />
        </div>
      </div>

      <div class="w-[350px] bg-white rounded-lg mt-20 px-8 py-4">
        <h2 class="heading5 heading">Summary</h2>

        <div v-for="obj in productArray" :key="obj.ID">
          <div class="flex mt-6 mb-4 justify-between items-center">
            <div class="flex">
              <div class="w-16 h-16">
                <img
                  :src="'src/' + obj.product.image.mobile"
                  alt="not ok"
                  class="w-full h-full"
                />
              </div>
              <div class="pl-4">
                <p
                  class="text-black text-[15px] font-bold font-['Manrope'] leading-[25px]"
                >
                  {{ obj.product.slug }}
                </p>
                <span
                  class="font-['Manrope'] font-semibold text-xl leading-[24.59px] tracking-[1.29px] text-black"
                >
                  ${{ obj.quantity * obj.product.price }}</span
                >
              </div>
            </div>

            <div class="text-center">
              <span
                class="opacity-50 text-right text-black text-[15px] font-bold font-['Manrope'] leading-[25px]"
                >x{{ obj.quantity }}</span
              >
            </div>
          </div>
        </div>

        <div class="flex justify-between mt-4">
          <h4 class="heading-6 heading opacity-50">Total</h4>
          <p
            class="text-center text-black text-lg font-bold font-['Manrope'] uppercase italic"
          >
            ${{ total }}
          </p>
        </div>

        <Cbutton class="w-[300px] mt-4">Continue&Pay</Cbutton>
      </div>
    </div>
  </div>
</template>
<script setup>
import Cheader from "../components/Cheader.vue";
import Cfooter from "../components/Cfooter.vue";
import CInputVue from "../components/CInput.vue";
import Cart from "../components/Cart.vue";
import Cbutton from "../components/Cbutton.vue";
import { useMyModule } from "../store/modules/myModule";
import { ref } from "vue";
const myModule = useMyModule();
const productArray = myModule.cartArr;

let total = 0;
const cart = ref("");
productArray.forEach((item) => {
  total += item.quantity * item.product.price;
});

function getvalue(item) {
  console.log(item, "index");
  cart.value = item;
}
const username = ref("");
const usernameError = ref("");
const email = ref("");
const emailError = ref("");
const phoneNumber = ref("");
const phoneNumberError = ref("");

const address = ref("");
const addressError = ref("");
const zipCode = ref("");
const zipCodeError = ref("");
const city = ref("");
const cityError = ref("");
const country = ref("");
const countryError = ref("");
</script>
