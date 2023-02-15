<script setup lang="ts">
import { ModPlatform } from 'core/enums/modPlatform';
import { computed } from 'vue';

interface Props {
  name: string;
  version: string;
  modded?: ModPlatform;
}

const props = defineProps<Props>();

const versionSummary = computed(() =>
  props.modded != null
    ? `${props.version} | Modded (${props.modded})`
    : props.version
);
</script>

<template>
  <VListItem @click="() => {}">
    <VListItemTitle>{{ props.name }}</VListItemTitle>
    <VListItemSubtitle> {{ versionSummary }}</VListItemSubtitle>
  </VListItem>
</template>
