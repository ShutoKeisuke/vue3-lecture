import { createRouter, createWebHistory } from 'vue-router'
import ReserveUserInfo from '../components/pages/reserveUserInfo'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/reserveUserInfo',
      name: 'reserveUserInfo',
      component: ReserveUserInfo
    }
  ]
})

export default router
