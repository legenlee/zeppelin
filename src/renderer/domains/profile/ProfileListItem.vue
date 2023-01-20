<script setup lang="ts">
import { ModdedPlatform } from 'core/mod/moddedPlatform';
import { computed } from 'vue';

interface Props {
  name: string;
  version: string;
  modded?: ModdedPlatform;
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
