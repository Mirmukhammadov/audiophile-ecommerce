<template>
  <div>
    <Cheader :categoryName="earphones[0].category" />
    <div v-for="item in earphones" :key="item.id">
      <div class="mt-[100px]">
        <router-link :to="'/' + item.id">
          <Productdetail :headphoneValue="item" />
        </router-link>
      </div>
    </div>
    <div class="mt-10">
      <CategoryVue />
    </div>
    <div class="mt-[100px]">
      <PrefooterVue />
    </div>
    <div class="mt-[100px]">
      <CfooterVue />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Productdetail from "@/components/Product-detail.vue";
import Cheader from "@/components/Cheader.vue";
import PrefooterVue from "../components/Prefooter.vue";
import CategoryVue from "../components/Category.vue";
import CfooterVue from "../components/Cfooter.vue";

const earphones = ref([]);
fetch("/src/data.json")
  .then((response) => response.json())
  .then((data) => {
    earphones.value = data.filter((item) => {
      return item.category === "earphones";
    });
  });
</script>
