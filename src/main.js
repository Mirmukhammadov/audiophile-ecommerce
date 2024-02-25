import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { useMyModule } from "./store/modules/myModule"; // Correct the path
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/index.vue";
import Headphones from "@/pages/headphones.vue";
import Speakers from "@/pages/speakers.vue";
import Earphones from "@/pages/earphones.vue";
import pinia from "./store";

// Remove the unnecessary pinia.use(useMyModule) line

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
      path: "/checkout",
      name: "checkout",
      component: () => import("@/pages/checkout.vue"),
    },

    {
      path: "/:id",
      name: "HeadphoneDetail",
      component: () => import("@/pages/head.vue"),
    },
  ],
});

createApp(App).use(router).use(pinia).mount("#app");

// Debugging: Log a message to confirm that restoreState is called
console.log("Calling restoreState...");
useMyModule().restoreState();
