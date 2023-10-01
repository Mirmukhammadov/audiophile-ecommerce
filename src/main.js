import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/index.vue";
import Headphones from "@/pages/headphones.vue";
import Speakers from "@/pages/speakers.vue";
import Earphones from "@/pages/earphones.vue";

// import HeadphonesDetail from "@/pages/headpones/HeadphonesDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/headphones",
      name: "Headphones",
      component: Headphones,
    },
    {
      path: "/speakers",
      name: "Speakers",
      component: Speakers,
    },
    {
      path: "/earphones",
      name: "Earphones",
      component: Earphones,
    },

    {
      path: "/:id",
      name: "HeadphoneDetail",
      component: () => import("@/pages/head.vue"),
    },
  ],
});
createApp(App).use(router).mount("#app");
