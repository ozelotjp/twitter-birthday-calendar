import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'home', component: () => import('pages/Calendar.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Error404.vue') }],
  },
];

export default routes;
