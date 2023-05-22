import { RouteRecordRaw } from 'vue-router';
import { RouteNames } from './routeNames';

const routes: RouteRecordRaw[] = [
  {
    name: RouteNames.ROOT,
    path: '/',
    redirect: {
      name: RouteNames.PROFILES,
    },
  },
  {
    name: RouteNames.PROFILES,
    path: '/profiles/::profileId(\\d+)?',
    component: () => import('../screens/profiles/ProfilesScreen.vue'),
  },
  {
    name: RouteNames.SETTINGS,
    path: '/settings',
    component: () => import('../screens/settings/SettingsScreen.vue'),
    redirect: {
      name: RouteNames.GENERAL_SETTING,
    },
    children: [
      {
        name: RouteNames.GENERAL_SETTING,
        path: 'general',
        component: () =>
          import('../screens/settings/general/GeneralSettingScreen.vue'),
      },
    ],
  },
];

export { routes };
