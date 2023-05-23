<script setup lang="ts">
import AppScaffold from './components/AppScaffold.vue';
</script>

<template>
  <AppScaffold>
    <VContainer class="fill-height">
      <VRow class="fill-height" align="center" justify="center">
        <VCol cols="auto">
          <VCard max-width="700">
            <VContainer fluid>
              <VRow>
                <VCol>
                  <VAlert type="warning">
                    <VAlertTitle>
                      Zeppelin is currently on development!
                    </VAlertTitle>
                    This application, Zeppelin. is currently on development.
                    Many features are not yet implemented.
                  </VAlert>
                </VCol>
              </VRow>

              <VRow>
                <VCol>
                  <VTextField label="Name" disabled />
                </VCol>

                <VCol>
                  <VSelect label="Version" />
                </VCol>
              </VRow>

              <VRow>
                <VCol>
                  <VTextField label="Game directory" />
                </VCol>
              </VRow>

              <VRow>
                <VCol>
                  <VTextField label="Java arguments" />
                </VCol>
              </VRow>

              <VRow>
                <VCol>
                  <VTextField label="Java runtime path" />
                </VCol>
              </VRow>

              <VRow>
                <VCol>
                  <VBtn color="primary" size="large" block>Launch</VBtn>
                </VCol>
              </VRow>
            </VContainer>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </AppScaffold>
</template>
