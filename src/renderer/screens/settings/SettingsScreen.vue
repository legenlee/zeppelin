<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { mdiArrowLeft } from '@mdi/js';
import SettingsNavigationDrawer from '../../components/settings/SettingsNavigationDrawer.vue';

const router = useRouter();
const route = useRoute();

function back() {
  router.back();
}
</script>

<template>
  <VLayout>
    <VNavigationDrawer class="py-4" permanent>
      <VBtn flat :icon="mdiArrowLeft" @click="back"></VBtn>
      <VDivider class="my-4"></VDivider>
      <SettingsNavigationDrawer></SettingsNavigationDrawer>
    </VNavigationDrawer>

    <VMain>
      <div class="pa-4">
        <VContainer>
          <VRow>
            <h1 class="text-h4">{{ route.name }}</h1>
          </VRow>

          <VRow>
            <RouterView></RouterView>
          </VRow>
        </VContainer>
      </div>
    </VMain>
  </VLayout>
</template>
