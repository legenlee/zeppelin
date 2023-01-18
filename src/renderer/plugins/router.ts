import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { Routes } from './router/routes';

const routes: RouteRecordRaw[] = [
  {
    name: Routes.ROOT,
    path: '/',
    redirect: {
      name: Routes.PROFILES,
    },
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        name: Routes.PROFILES,
        path: 'profiles',
        component: () => import('../screens/profiles/ProfilesScreen.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
