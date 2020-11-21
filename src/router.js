import { createRouter, createWebHistory } from 'vue-router';

import Home from './Home.vue';
import Overview from './components/Overview.vue';
import NotFound from './components/NotFound.vue';
import Project from './components/Project/Project.vue';

// Routes
let routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { name: 'overview', path: '/overview', component: Overview },
    { path: '/projects', redirect: '/overview' },
    { path: '/projects/:id', component: Project },
    { path: '/:notFound(.*)', component: NotFound },
];

// Router
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
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
router.beforeEach(function (to, from, next) {
    return next();
});

export default router;
