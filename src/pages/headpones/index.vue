<template>
  <div v-for="item in 3" :key="item">
    <Productdetail />
  </div>
</template>

<script setup>
import Productdetail from "@/components/Product-detail.vue";
</script>
