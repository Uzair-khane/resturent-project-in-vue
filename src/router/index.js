import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import signup from '@/components/signup.vue'
import login from '@/components/login.vue'
import About from '@/components/About.vue'
import Vanue from '@/components/Vanue.vue'
import Manue from '@/components/Manue.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: signup,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/Vanue',
      name: 'Vanue',
      component: Vanue,
    },
    {
      path: '/Manue',
      name: 'Manue',
      component: Manue,
    },
  ],
})

export default router
