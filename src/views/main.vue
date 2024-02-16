<template>
    <!-- <navbar-vue></navbar-vue> -->
    <app-home></app-home>
    <forgot-password></forgot-password>
    <the-verification></the-verification>
    <!-- <the-resume></the-resume> -->
    <!-- <the-contact></the-contact> -->
    <!-- <the-footer></the-footer> -->
    
</template>

<script>
// import navbarVue from '../components/navbar.vue'
import AppHome from '../pages/AppHome.vue'
import ForgotPassword from '../pages/ForgotPassword.vue'
import TheVerification from '../pages/TheVerification.vue'
// import TheResume from '../pages/TheResume.vue'
// import TheContact from '../pages/TheContact.vue'
// import TheFooter from '../pages/TheFooter.vue'


export default {
components : {
    // navbarVue,
    AppHome,
    ForgotPassword,
    TheVerification,
    // TheResume,
    // TheContact,
    // TheFooter
}
}
</script>

<style>

</style>