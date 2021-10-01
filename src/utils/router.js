import { createRouter, createWebHistory } from 'vue-router'

import GetStarted from '../pages/GetStarted.vue'
import SignUp from '../pages/SignUp.vue'
import Tos from '../pages/Tos.vue'
import Privacy from '../pages/Privacy.vue'

const routes = [
  { path: '/', component: GetStarted },
  { path: '/sign-up', component: SignUp },
  { path: '/tos', component: Tos },
  { path: '/privacy', component: Privacy }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
