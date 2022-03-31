import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Content from '@/views/Crafted/Content/Content.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
        // Тест с двумя Child
      {
        path: '',
        component: Content,
        props: true,
      },
      {
        path: '/about',
        name: 'About',
        props: true,
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next)=> {
  next();
})


export default router
