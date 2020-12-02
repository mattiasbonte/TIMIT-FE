import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Overview from '../components/Overview/Overview.vue';
import Project from '../components/Project/Project.vue';

const routes = [
  { path: '/', name: 'Landing', redirect: 'Overview' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/overview', name: 'Overview', component: Overview },
  { path: '/projects', redirect: '/overview' },
  {
    path: '/projects/:id',
    component: Project,
    meta: { transition: 'slide_down' },
  },
  { path: '/:notFound(.*)', name: '404', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
});

// beforeEach Hook
router.beforeEach(function(to, from, next) {
  return next();
});

export default router;
