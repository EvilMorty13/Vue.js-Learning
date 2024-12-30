import { createRouter, createWebHistory } from 'vue-router'
import JobView from '@/views/JobView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'job',
      component: JobView,
    },
  ],
})

export default router
