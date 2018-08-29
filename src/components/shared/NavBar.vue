<template lang="pug">
  nav.navbar.navbar-light.bg-white.navbar-expand-sm
    ul.navbar-nav
      router-link(tag="li", to="/").nav-item
        a.navbar-brand todoMatrix
      router-link(tag="li", to="/dashboard").nav-item
        a.nav-link Dashboard
      router-link(tag="li", to="/completed").nav-item
        a.nav-link Completed
      router-link(tag="li", to="/login").nav-item
        a.nav-link(href="#") Login
      router-link(tag="li", to="/sign-up").nav-item
        a.nav-link(href="#") Sign up
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss">
// TODO: add transition in and out
</style>


