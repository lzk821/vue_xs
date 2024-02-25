import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import home from '@/views/Layout/home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path:'/',
    component:Layout,
    children:[
      {path:'',
      component:home}
    ]
  },
  {
    path:'/login',
    component:Login
  }
]
})

export default router
