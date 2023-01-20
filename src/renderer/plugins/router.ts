import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { Routes } from './router/routes';

const routes: RouteRecordRaw[] = [
  {
    name: Routes.ROOT,
    path: '/',
    redirect: {
      name: Routes.PROFILES,
    },
  },
  {
    name: Routes.PROFILES,
    path: '/profiles/::profileId(\\d+)?',
    component: () => import('../screens/profiles/ProfilesScreen.vue'),
  },
  {
    name: Routes.SETTINGS,
    path: '/settings',
    component: () => import('../screens/settings/SettingsScreen.vue'),
    redirect: {
      name: Routes.GENERAL_SETTING,
    },
    children: [
      {
        name: Routes.GENERAL_SETTING,
        path: 'general',
        component: () =>
          import('../screens/settings/general/GeneralSettingScreen.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router, routes };
