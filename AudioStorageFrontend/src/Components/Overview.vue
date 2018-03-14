<template>
  <div class="container-fluid appPosition">
    <router-view name="ViewType"></router-view>
  </div>
</template>

<script>
    export default {
      name: "overview",
      created() {
        this.$store.dispatch("loadAlbums");
      }
    }
</script>

<style scoped>
  .appPosition {
    margin-top: 10px;
  }
</style>
