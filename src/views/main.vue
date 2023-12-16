<template>
    <navbar-vue></navbar-vue>
    <app-home></app-home>
    <about-me></about-me>
    <the-services></the-services>
    <the-resume></the-resume>
    <the-contact></the-contact>
    <the-footer></the-footer>
    
</template>

<script>
import navbarVue from '../components/navbar.vue'
import AppHome from '../pages/AppHome.vue'
import AboutMe from '../pages/AboutMe.vue'
import TheServices from '../pages/TheServices.vue'
import TheResume from '../pages/TheResume.vue'
import TheContact from '../pages/TheContact.vue'
import TheFooter from '../pages/TheFooter.vue'


export default {
components : {
    navbarVue,
    AppHome,
    AboutMe,
    TheServices,
    TheResume,
    TheContact,
    TheFooter
}
}
</script>

<style>

</style>