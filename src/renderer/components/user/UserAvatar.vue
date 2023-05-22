<script setup lang="ts"></script>

<template>
  <VMenu>
    <template #activator="{ props }">
      <VBtn icon rounded="lg" size="lg" v-bind="props">
        <VAvatar rounded="lg" color="primary"></VAvatar>
      </VBtn>
    </template>

    <VCard>
      <VCardText>
        <div class="mx-auto text-center">
          <VAvatar rounded="lg" color="primary"></VAvatar>
          <h3>User</h3>
          <p class="text-caption mt-1">User@example.com</p>

          <VDivider class="my-3"></VDivider>
          <VBtn rounded variant="text">Edit Account</VBtn>
          <VDivider class="my-3"></VDivider>
          <VBtn rounded variant="text">Logout</VBtn>
        </div>
      </VCardText>
    </VCard>
  </VMenu>
</template>
