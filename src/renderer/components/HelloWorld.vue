<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

const store = useCounterStore();
</script>

<template>
  <h1>💖 Hello World!</h1>
  <p>Welcome to your Electron application.</p>
  <div>Count: {{ store.count }}</div>
  <div>
    <v-btn @click="store.increase">Increase</v-btn>
    <v-btn @click="store.decrease">Decrease</v-btn>
  </div>
</template>
