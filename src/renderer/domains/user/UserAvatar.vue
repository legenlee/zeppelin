<script setup lang="ts"></script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn icon rounded="lg" size="lg" v-bind="props">
        <v-avatar rounded="lg" color="primary"></v-avatar>
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="() => {}">
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
