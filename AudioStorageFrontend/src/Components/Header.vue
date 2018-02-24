<template>
  <header class="navbar navbar-dark sticky-top flex-md-nowrap p-0 navcolor">
    <a class="navbar-brand title">AudioStorage</a>
    <user-dropbox></user-dropbox>
  </header>
</template>

<script>
  import UserDropbox from "./UserDropbox"

  export default {
    name: "AppHeader",
    components: {
      UserDropbox
    }
  }
</script>

<style scoped>
  .navcolor {
    background-color: #563d7c;
  }
  .title {
    color: white !important;
    padding: 5px;
  }
</style>
