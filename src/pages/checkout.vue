<template>
  <div>
    <thanks v-if="thank" />
  </div>
  <div
    class="absolute top-[20%] right-[10%] bg-white rounded-lg cartopened"
    v-if="cart"
  >
    <Cart v-if="cart" />
  </div>

  <div
    class="bg-[#f1f1f1]"
    :class="{
      'opacity-50': cart,
      'max-h-100px': cart,
      'opacity-50': thank,
      'max-h-100px': thank,
    }"
  >
    <Cheader @toggleCartValue="getvalue" />
    <div class="container flex items-start gap-4 !mb-[100px]">
      <!-- <Cfooter /> -->
      <div class="w-[730px] bg-white rounded-lg mt-20 px-8 py-4">
        <h2 class="heading3 heading my-10">CHECKOUT</h2>
        <p
          class="text-orange-400 text-[13px] font-bold font-['Manrope'] uppercase leading-[25px] tracking-wide mb-4"
        >
          Billing Details
        </p>

        <form action="" @submit.prevent="submitForm()">
          <div class="flex flex-wrap justify-between gap-4">
            <div class="flex flex-col">
              <label class="m-1" for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="state.name"
                class="inputStyle"
                :class="{
                  '!border-[red]': v$.name?.$error,
                }"
                placeholder="Alexei Ward"
              />
              <span v-if="v$.name?.$error" class="text-[red]"
                >fill the field correctly</span
              >
            </div>
            <div class="flex flex-col">
              <label class="m-1" for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="state.email"
                class="inputStyle"
                :class="{
                  '!border-[red]': v$.email?.$error,
                }"
                placeholder="alexei@mail.com"
              />
              <span v-if="v$.email?.$error" class="text-[red]"
                >fill the field correctly</span
              >
            </div>
            <div class="flex flex-col">
              <label class="m-1" for="number">Phone Number</label>
              <input
                type="number"
                id="number"
                v-model="state.number"
                class="inputStyle"
                :class="{
                  '!border-[red]': v$.number?.$error,
                }"
                placeholder="+1 202-555-0136"
              />
              <span v-if="v$.number?.$error" class="text-[red]"
                >fill the field correctly</span
              >
            </div>
          </div>

          <p
            class="text-orange-400 text-[13px] font-bold font-['Manrope'] uppercase leading-[25px] tracking-wide m-4"
          >
            shipping info
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex flex-col">
              <label class="m-1" for="address">Address</label>
              <input
                type="text"
                id="address"
                v-model="state.address"
                class="inputStyle"
                :class="{
                  '!border-[red]': v$.address?.$error,
                }"
                placeholder="1137 Williams Avenue"
              />
              <span v-if="v$.address?.$error" class="text-[red]"
                >fill the field correctly</span
              >
            </div>
            <div class="flex flex-col">
              <label class="m-1" for="zipcode">ZIP Code</label>
              <input
                type="number"
                id="zipcode"
                v-model="state.zip"
                class="inputStyle"
                :class="{
                  '!border-[red]': v$.zip?.$error,
                }"
                placeholder="10001"
              />
              <span v-if="v$.zip?.$error" class="text-[red]"
                >fill the field correctly</span
              >
            </div>
            <div class="flex flex-col">
              <label class="m-1" for="city">City</label>
              <input
                type="text"
                id="city"
                v-model="state.city"
                :class="{
                  '!border-[red]': v$.city?.$error,
                }"
                class="inputStyle"
                placeholder="New York"
              />
              <span v-if="v$.city?.$error" class="text-[red]"
                >fill the field correctly</span
              >
            </div>
          </div>
          <Cbutton class="mt-2 mr-2" type="submit">submit</Cbutton>
        </form>
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
    <Cfooter />
  </div>
</template>
<script setup>
import Cheader from "../components/Cheader.vue";
import Cfooter from "../components/Cfooter.vue";
import CInputVue from "../components/CInput.vue";
import Cart from "../components/Cart.vue";
import Cbutton from "../components/Cbutton.vue";
import thanks from "../components/Thanks.vue";
import { useMyModule } from "../store/modules/myModule";
import { useVuelidate } from "@vuelidate/core";
import { required, email, numeric } from "@vuelidate/validators";
import { ref } from "vue";
const myModule = useMyModule();
const productArray = myModule.cartArr;
const thank = ref(false);
let total = 0;
const cart = ref("");
productArray.forEach((item) => {
  total += item.quantity * item.product.price;
});

function getvalue(item) {
  cart.value = item;
}

const state = ref({
  name: "",
  email: "",
  number: "",
  address: "",
  zip: "",
  city: "",
});

const rules = {
  name: { required },
  email: { required, email },
  number: { required, numeric },
  address: { required },
  zip: { required, numeric },
  city: { required },
};

const v$ = useVuelidate(rules, state);

function submitForm() {
  v$.value.$touch();
  if (!v$.value.$error) {
    thank.value = true;
    myModule.cartArr = [];
    localStorage.removeItem("cartArr");
  }
}
</script>

<style scoped>
.inputStyle {
  padding: 4px;
  padding-left: 12px;
  outline: none;
  width: 309px;
  height: 56px;
  background: white;
  border-radius: 8px;
  border: 1px #cfcfcf solid;
  opacity: 0.4;
  color: black;
  font-size: 16px;
  font-family: Manrope;
  font-weight: 700;
  word-wrap: break-word;
}
</style>
