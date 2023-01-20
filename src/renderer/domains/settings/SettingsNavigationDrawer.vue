<script setup lang="ts">
import { computed } from 'vue';
import { Routes } from '../../plugins/router/routes';
import { routes } from '../../plugins/router';
import { useRoute } from 'vue-router';

const route = useRoute();

const settingRoutes = computed(
  () => routes.find((c) => c.name === Routes.SETTINGS).children
);

const currentSettingRouteName = computed(() => route.name);
</script>

<template>
  <VTabs :model-value="currentSettingRouteName" direction="vertical">
    <VTab v-for="settingRoute in settingRoutes" :key="settingRoute.name">
      {{ settingRoute.name }}
    </VTab>
  </VTabs>
</template>
