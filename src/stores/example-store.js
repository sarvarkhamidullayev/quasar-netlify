import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    items: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async getItems() {
      const response = await api.get("/posts");
      if (response.status === 200) {
        this.items = response.data;
      }
    },
  },
});
