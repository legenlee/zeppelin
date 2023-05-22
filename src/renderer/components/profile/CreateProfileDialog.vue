<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { mdiClose } from '@mdi/js';
import { useVersionStore } from '../../stores/version';

const dialog = ref(true);
const loading = ref(true);
const version = useVersionStore();

onMounted(() => {
  init();
});

const init = async () => {
  try {
    loading.value = true;
    await version.fetchVersions();
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <VDialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
    <VCard>
      <VToolbar>
        <VBtn icon @click="dialog = false">
          <VIcon :icon="mdiClose"></VIcon>
        </VBtn>
        <VToolbarTitle>Create new profile</VToolbarTitle>
      </VToolbar>
      <VContainer class="container" fluid>
        <VRow no-gutters>
          <VCol>
            <VTextField label="Name" />
          </VCol>
        </VRow>
        <VRow no-gutters>
          <VCol>
            <VSelect
              label="Version"
              :items="version.versions"
              item-title="id"
              :loading="loading"
            >
            </VSelect>
          </VCol>
        </VRow>
        <VRow no-gutters>
          <VCol>
            <VTextField label="Game directory"></VTextField>
          </VCol>
        </VRow>
      </VContainer>
    </VCard>
  </VDialog>
</template>

<style scoped>
.container {
  max-width: 600px;
}
</style>
