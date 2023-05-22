<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
  version: string;
}

const props = defineProps<Props>();
</script>

<template>
  <VListItem @click="() => {}">
    <VListItemTitle>{{ props.name }}</VListItemTitle>
  </VListItem>
</template>
