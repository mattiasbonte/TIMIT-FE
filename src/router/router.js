import { createRouter, createWebHistory } from 'vue-router';

import Overview from '../components/Overview.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Overview },
    { path: '/overview', component: Overview },
  ],
});

export default router;
