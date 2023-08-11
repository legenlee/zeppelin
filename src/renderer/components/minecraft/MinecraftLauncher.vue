<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import ZeppelinWarning from '../zeppelin/ZeppelinWarning.vue';
import { useMetadataStore } from '../../stores/metadata';

const metadata = useMetadataStore();
const loading = reactive({
  version: false,
  launch: false,
});

const snackbar = reactive({
  show: false,
  text: '',
});

const fetchVersion = async () => {
  try {
    loading.version = true;
    await metadata.fetchMinecraftVersions();
  } finally {
    loading.version = false;
  }
};

const launch = () => {
  if (loading.launch) {
    showSnackbar('Zeppelin is already launching Minecraft.');
    return;
  }

  loading.launch = true;
};

const showSnackbar = (text: string) => {
  snackbar.text = text;
  snackbar.show = true;
};

onMounted(() => {
  fetchVersion();
});
</script>

<template>
  <VContainer class="fill-height">
    <VRow class="fill-height" align="center" justify="center">
      <VCol cols="auto">
        <VCard max-width="700">
          <VContainer fluid>
            <VRow>
              <VCol>
                <ZeppelinWarning />
              </VCol>
            </VRow>

            <VRow>
              <VCol>
                <VTextField label="Name" disabled />
              </VCol>

              <VCol>
                <VSelect
                  label="Version"
                  :items="metadata.releaseMinecraftVersions"
                  :loading="loading.version"
                />
              </VCol>
            </VRow>

            <VRow>
              <VCol>
                <VTextField label="Game directory">
                  <template #append>
                    <VBtn size="small" variant="text">Browse</VBtn>
                  </template>
                </VTextField>
              </VCol>
            </VRow>

            <VRow>
              <VCol>
                <VTextField label="Java arguments" />
              </VCol>
            </VRow>

            <VRow>
              <VCol>
                <VTextField label="Java runtime path">
                  <template #append>
                    <VBtn size="small" variant="text">Browse</VBtn>
                  </template>
                </VTextField>
              </VCol>
            </VRow>

            <VRow>
              <VCol>
                <VBtn color="primary" size="x-large" block @click="launch">
                  Launch
                </VBtn>
              </VCol>
            </VRow>
          </VContainer>
        </VCard>
      </VCol>
    </VRow>

    <VSnackbar v-model="snackbar.show">{{ snackbar.text }}</VSnackbar>
  </VContainer>
</template>
