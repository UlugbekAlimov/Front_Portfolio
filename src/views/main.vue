<template>
    <navbar-vue></navbar-vue>
    <app-home></app-home>
</template>

<script>
import navbarVue from '../components/navbar.vue'
import AppHome from '../pages/AppHome.vue'

export default {
components : {
    navbarVue,
    AppHome
}
}
</script>

<style>

</style>