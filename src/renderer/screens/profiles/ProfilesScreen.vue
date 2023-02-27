<script setup lang="ts">
import { mdiPlayCircle } from '@mdi/js';
import UserAvatar from '../../domains/user/UserAvatar.vue';
import ProfileListItem from '../../domains/profile/ProfileListItem.vue';
import { Routes } from '../../plugins/router/routes';
import { ModPlatform } from 'core/enums/modPlatform';

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
    modded: ModPlatform.FORGE,
  },
  {
    id: 3,
    name: 'Profile 2',
    version: '1.19.2',
    modded: ModPlatform.QUILT,
  },
  {
    id: 4,
    name: 'Profile 3',
    version: '1.16.5',
    modded: ModPlatform.FABRIC,
  },
];
</script>

<template>
  <VLayout>
    <VAppBar>
      <VBtn rounded>Create Profile</VBtn>
      <VDivider class="mx-2" vertical></VDivider>
      <VBtn rounded :to="{ name: Routes.SETTINGS }">Settings</VBtn>
      <VDivider class="ml-2" vertical></VDivider>

      <VSpacer></VSpacer>
      <UserAvatar></UserAvatar>
    </VAppBar>

    <VNavigationDrawer permanent>
      <VList density="compact">
        <ProfileListItem
          v-for="profile in profiles"
          :key="profile.id"
          :name="profile.name"
          :version="profile.version"
          :modded="profile.modded"
        ></ProfileListItem>
      </VList>
    </VNavigationDrawer>

    <VMain>
      <VContainer>
        <VRow>
          <VCol>
            <div class="d-flex align-center">
              <div class="mr-4">
                <VBtn size="x-large" icon flat>
                  <VIcon :icon="mdiPlayCircle" color="primary"></VIcon>
                </VBtn>
              </div>
              <div>
                <h2 class="text-h5">Item 2</h2>
                <h3 class="text-subtitle-2">
                  1.16.5, Modded with Fabric (0.22.12)
                </h3>
              </div>
            </div>
          </VCol>
        </VRow>
      </VContainer>
    </VMain>
  </VLayout>
</template>
