import { defineStore } from "pinia"
export const useHomeStore = defineStore("homeSotre", {
  state: () => {
    return {
      count: 0,
    }
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})
