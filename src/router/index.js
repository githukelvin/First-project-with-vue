import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/testing',
      name:'/testing',
      component:()=>import("../views/testing.vue"),
    }
  ]
})

export default router
