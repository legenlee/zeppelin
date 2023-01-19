<script setup lang="ts"></script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn icon rounded="lg" size="lg" v-bind="props">
        <v-avatar rounded="lg" color="primary"></v-avatar>
      </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar rounded="lg" color="primary"></v-avatar>
          <h3>User</h3>
          <p class="text-caption mt-1">User@example.com</p>

          <v-divider class="my-3"></v-divider>
          <v-btn rounded variant="text">Edit Account</v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn rounded variant="text">Logout</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
