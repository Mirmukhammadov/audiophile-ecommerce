// import { defineStore } from "pinia";

// export const useMyModule = defineStore("myModule", {
//   state: () => ({
//     cartArr: [],
//   }),
//   actions: {
//     addObjectToStore(value) {
//       this.cartArr.push(value);
//       this.saveState();
//     },

//     saveState() {
//       localStorage.setItem("cartArr", JSON.stringify(this.cartArr));
//     },
//     restoreState() {
//       const savedState = JSON.parse(localStorage.getItem("cartArr"));

//       if (savedState) {
//         this.cartArr = savedState;
//       }
//     },
//   },
// });

import { defineStore } from "pinia";

export const useMyModule = defineStore("myModule", {
  state: () => ({
    cartArr: [],
  }),
  actions: {
    addObjectToStore(value) {
      this.cartArr.push(value);
      this.saveState();
    },

    saveState() {
      localStorage.setItem("cartArr", JSON.stringify(this.cartArr));
    },

    restoreState() {
      const savedState = JSON.parse(localStorage.getItem("cartArr"));

      if (savedState) {
        this.cartArr = savedState;
      }
    },
  },
});
