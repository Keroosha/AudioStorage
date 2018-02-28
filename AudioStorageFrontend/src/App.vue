<template>
  <div id="app">
    <router-view v-on:openMenu="openMenu" name="header"></router-view>
    <router-view v-if="slideMenu" name="sideMenu"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from "./Components/Header";
  import Sidemenu from "./Components/Sidemenu";

  export default {
    name: 'app',
    data () {
      return {
        slideMenu: true
      }
    },
    components: {
      AppHeader,
      Sidemenu
    },
    methods: {
      openMenu() {
        this.slideMenu = !this.slideMenu;
      }
    }
  }
</script>

<style>
  @import "~bootstrap/dist/css/bootstrap.css";
  html, body, #app{
    height: 100%;
  }
  .fill {
    height: 100%;
  }
</style>
