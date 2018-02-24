<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="sideMenu"></router-view>
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
      }
    },
    components: {
      AppHeader,
      Sidemenu
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
