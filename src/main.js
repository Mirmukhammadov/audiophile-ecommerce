import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/index.vue";
import Headphones from "@/pages/headpones/index.vue";
import Speakers from "@/pages/speakers/index.vue";
import Earphones from "@/pages/earphones/index.vue";

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
  ],
});
createApp(App).use(router).mount("#app");
