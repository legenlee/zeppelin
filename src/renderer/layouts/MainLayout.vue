<script setup lang="ts">
import UserAvatar from '../domains/user/UserAvatar.vue';
</script>

<template>
  <v-layout>
    <v-app-bar>
      <v-btn @click="() => {}">Create Profile</v-btn>
      <v-btn @click="() => {}">Settings</v-btn>
      <v-spacer></v-spacer>
      <user-avatar></user-avatar>
    </v-app-bar>

    <v-navigation-drawer location="right" permanent></v-navigation-drawer>

    <v-main>
      <slot>
        <router-view></router-view>
      </slot>
    </v-main>
  </v-layout>
</template>
