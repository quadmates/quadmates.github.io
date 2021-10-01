import { createRouter, createWebHashHistory } from 'vue-router'

import GetStarted from '../pages/GetStarted.vue'
import SignUp from '../pages/SignUp.vue'
import SignUpPosition from '../pages/SignUpPosition.vue'
import SignUpGender from '../pages/SignUpGender.vue'
import SignUpCampus from '../pages/SignUpCampus.vue'
import SignIn from '../pages/SignIn.vue'
import Tos from '../pages/Tos.vue'
import Privacy from '../pages/Privacy.vue'
import UserBase from '../pages/UserBase.vue'
import Dashboard from '../pages/Dashboard.vue'
import Campus from '../pages/Campus.vue'
import Feed from '../pages/Feed.vue'
const routes = [
  { path: '/', component: GetStarted },
  { path: '/sign-up', component: SignUp },
  { path: '/sign-up/position', component: SignUpPosition },
  { path: '/sign-up/gender', component: SignUpGender },
  { path: '/sign-up/campus', component: SignUpCampus },
  { path: '/sign-in', component: SignIn },
  { path: '/tos', component: Tos },
  { path: '/privacy', component: Privacy },
  {
    path: '/dashboard',
    component: UserBase,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: '/home',
        component: Dashboard
      },
      {
        path: '/calendar',
        component: Dashboard
      },
      {
        path: '/inbox',
        component: Dashboard
      },
      {
        path: '/profile',
        component: Dashboard
      },
      {
        path: '/campus',
        component: Campus,
        children: [
          {
            path: '',
            component: Feed
          }, {
            path: 'focus',
            component: Feed
          }, {
            path: 'discuss',
            component: Feed
          }, {
            path: 'play',
            component: Feed
          }, {
            path: 'peers',
            component: Feed
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
