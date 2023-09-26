<template>
  <div>
    <Cheader :categoryName="headphone[0].category" />
    <div v-for="item in headphone" :key="item.id">
      <div class="mt-[100px]">
        <Productdetail :headphoneValue="item" @buttonclicked="getId" />
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
import PrefooterVue from "../../components/Prefooter.vue";
import CategoryVue from "../../components/Category.vue";
import CfooterVue from "../../components/Cfooter.vue";

const headphone = ref([]);
fetch("/src/data.json")
  .then((response) => response.json())
  .then((data) => {
    headphone.value = data.filter((item) => {
      return item.category === "headphones";
    });
  });

function getId(id) {
  item.value = id;
}
</script>
