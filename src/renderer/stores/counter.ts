import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const increase = () => {
    count.value += 1;
  };

  const decrease = () => {
    count.value -= 1;
  };

  return { count, increase, decrease };
});
