<script setup lang="ts">
import ZeppelinWarning from '../zeppelin/ZeppelinWarning.vue';
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
                <VTextField label="Username" />
              </VCol>

              <VCol>
                <VSelect label="Version" />
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
                <VBtn color="primary" size="x-large" block>
                  Launch
                </VBtn>
              </VCol>
            </VRow>
          </VContainer>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
