import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from '../components/HomeComponent.vue';
import FormComponent from '../components/FormComponent.vue';
import ViewComponent from '../components/ViewComponent.vue';
import NotFoundComponent from '../components/NotFoundComponent.vue';
const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: HomeComponent,
    },
    {
      path: '/addNew',
      // name: '/editDetail/:id/:userId',
      component: FormComponent,
    },
    {
      path: '/editDetail/:id/:userId',
      component: FormComponent,
    },
    {
      path: '/viewDetail/:id/:userId',
      component: ViewComponent,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFoundComponent,
    },
  ],
});

export default router;
