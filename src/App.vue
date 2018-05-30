<template>
  <div id="app">
    <b-navbar class="navbar" toggleable="md" type="dark" variant="dark" :sticky=true>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">Home</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#/heroes">Heroes</b-nav-item>
          <b-nav-item href="#/artifacts">Artifacts</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <router-view class="router-view"></router-view>
    <my-footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    'my-footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.router-view {
  padding: 5%;
  padding-top: 1%;
  /*background-color: darkgray;*/
  margin: auto;
  width: 50%;
  min-height: calc(100vh - 25px - 56px);
}
body {
  background-image: url("../static/bg-tile.png");
  background-repeat: repeat;
  background-attachment: fixed;
}
</style>
