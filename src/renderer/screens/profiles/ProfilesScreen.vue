<script setup lang="ts">
import UserAvatar from '../../domains/user/UserAvatar.vue';
import { mdiPlayCircle } from '@mdi/js';
</script>

<template>
  <v-layout>
    <v-app-bar>
      <v-btn rounded>Create Profile</v-btn>
      <v-divider class="mx-2" vertical></v-divider>
      <v-btn rounded>Buy me a coffee</v-btn>
      <v-divider class="mx-2" vertical></v-divider>
      <v-btn rounded>Settings</v-btn>
      <v-divider class="ml-2" vertical></v-divider>

      <v-spacer></v-spacer>
      <user-avatar></user-avatar>
    </v-app-bar>

    <v-navigation-drawer permanent>
      <v-list density="compact">
        <v-list-item @click="() => {}">
          <v-list-item-title> Item 1 </v-list-item-title>
          <v-list-item-subtitle>1.19.3</v-list-item-subtitle>
        </v-list-item>

        <v-list-item @click="() => {}">
          <v-list-item-title> Item 2 </v-list-item-title>
          <v-list-item-subtitle>1.16.5 | Modded (Fabric)</v-list-item-subtitle>
        </v-list-item>

        <v-list-item @click="() => {}">
          <v-list-item-title> Item 3 </v-list-item-title>
          <v-list-item-subtitle>1.12.2 | Modded (Forge)</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <div class="d-flex align-center">
              <div class="mr-8">
                <v-btn
                  :prepend-icon="mdiPlayCircle"
                  size="x-large"
                  color="primary"
                  flat
                >
                  Play
                </v-btn>
              </div>
              <div>
                <h2 class="text-h5">Item 2</h2>
                <h3 class="text-subtitle-2">
                  Minecraft 1.16.5, Modded with Fabric (0.22.12)
                </h3>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>
