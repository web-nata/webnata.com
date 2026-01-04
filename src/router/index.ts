import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/home/Home.vue'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../pages/portfolio/Porfolio.vue'),
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../pages/team/Team.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/contact/Contact.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
