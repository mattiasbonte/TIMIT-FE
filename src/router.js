import { createRouter, createWebHistory } from 'vue-router';

import Overview from './components/Overview.vue';
import FeatureForm from './components/Project/Feature/FeatureForm.vue';

import user_data from './data.json';

// Dynamically project routes to router based on projects inside user_data
let routes = [
  { name: 'home', path: '/', component: Overview },
  { name: 'overview', path: '/overview', component: Overview },
];

user_data[0].projects.forEach((project) => {
  console.log(project.id);
  routes.push({
    path: `/projects/:${project.id}`,
    component: FeatureForm,
  });
});

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
