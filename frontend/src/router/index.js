import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registration',
    name: 'registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/RegistrationView.vue')
  },
  {
    path: '/students',
    name: 'students',
    component: () => import( /* webpackChunkName: "about" */ '../views/StudentsView.vue')
  },
  {
    path: '/studentInfo',
    name: 'studentInfo',
    component: () => import( /* webpackChunkName: "about" */ '../views/StudentInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router