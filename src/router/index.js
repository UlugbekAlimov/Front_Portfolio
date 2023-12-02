import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history:createWebHistory(),
    routes : [
        {
          path : '/',
          name : 'main',
          component: ()=>import ('../views/main.vue')  
        },
        {
          path : '/home',
          name : 'home',
          component: ()=>import ('../pages/AppHome.vue')  
        }
    ]
})

export default router