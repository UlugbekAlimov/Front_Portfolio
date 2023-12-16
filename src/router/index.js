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
        },
        {
          path : '/Aboutme',
          name : 'Aboutme',
          component: ()=>import ('../pages/AboutMe.vue')  
        },
        {
          path : '/service',
          name : 'service',
          component: ()=>import ('../pages/TheServices.vue')  
        },
        {
          path : '/resume',
          name : 'resume',
          component: ()=>import ('../pages/TheResume.vue')  
        },
        {
          path : '/contact',
          name : 'contact',
          component: ()=>import ('../pages/TheContact.vue')  
        },
        {
          path : '/footer',
          name : 'footer',
          component: ()=>import ('../pages/TheFooter.vue')  
        },
    ]
})

export default router