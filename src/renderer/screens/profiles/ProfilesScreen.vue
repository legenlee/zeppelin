<script setup lang="ts">
import { mdiPlayCircle } from '@mdi/js';
import UserAvatar from '../../domains/user/UserAvatar.vue';
import ProfileListItem from '../../domains/profile/ProfileListItem.vue';
import { ModdedPlatform } from 'core/mod/moddedPlatform';

const profiles = [
  {
    id: 1,
    name: 'Profile 1',
    version: '1.19.3',
  },
  {
    id: 2,
    name: 'Profile 2',
    version: '1.12.2',
    modded: ModdedPlatform.FORGE,
  },
  {
    id: 3,
    name: 'Profile 2',
    version: '1.19.2',
    modded: ModdedPlatform.QUILT,
  },
  {
    id: 4,
    name: 'Profile 3',
    version: '1.16.5',
    modded: ModdedPlatform.FABRIC,
  },
];
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
        <profile-list-item
          v-for="profile in profiles"
          :key="profile.id"
          :name="profile.name"
          :version="profile.version"
          :modded="profile.modded"
        ></profile-list-item>
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
