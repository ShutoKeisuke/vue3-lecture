import { createRouter, createWebHistory } from 'vue-router'
import ReserveUserInfo from '../components/pages/reserveUserInfo'
import ClientInfo from '../components/pages/clientInfo'
import TestPage from '../components/pages/testPage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/reserveUserInfo',
      name: 'reserveUserInfo',
      component: ReserveUserInfo
    },
    {
      path: '/clientInfo',
      name: 'ClientInfo',
      component: ClientInfo
    },
    {
      path: '/test',
      name: 'testPage',
      component: TestPage
    }
  ]
})

export default router
