import { createRouter, createWebHistory, createWebHashHistory  } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory('/hala'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/hala.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('../views/AboutView.vue')
    }
  ]
})

export default router
