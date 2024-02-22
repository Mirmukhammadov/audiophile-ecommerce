// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: [], // This will store the items in the cart
  },
  mutations: {
    addItemToCart(state, payload) {
      state.cartItems.push(payload);
    },
  },
});
