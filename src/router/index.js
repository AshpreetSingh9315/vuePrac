import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Jobsview from '@/views/Jobsview.vue'
import NotFound from '@/views/NotFound.vue'
import SingleJobView from '@/views/SingleJobView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobsview,
    },
    {
      path: '/jobs/:id',
      name: 'Jobs-Page',
      component: SingleJobView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: ' Not-Found',
      component: NotFound,
    },
  ],
})

export default router
