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
  <v-list-item @click="() => {}">
    <v-list-item-title>{{ props.name }}</v-list-item-title>
    <v-list-item-subtitle> {{ versionSummary }}</v-list-item-subtitle>
  </v-list-item>
</template>
