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
    component: import('../screens/profiles/ProfilesScreen.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
