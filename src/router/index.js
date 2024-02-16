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
          path : '/ForgotPassword',
          name : 'ForgotPassword',
          component: ()=>import ('../pages/ForgotPassword.vue')  
        },
        {
          path : '/TheVerification',
          name : 'TheVerification',
          component: ()=>import ('../pages/TheVerification.vue')  
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