<script setup lang="ts">
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

onMounted(() => {
  console.log('Hello, world from renderer!');
});
</script>

<template>
  <HelloWorld></HelloWorld>
</template>
