<template>
  <div class="container-fluid appPosition">
    <router-view name="ViewType"></router-view>
  </div>
</template>

<script>
    export default {
        name: "overview"
    }
</script>

<style scoped>
  .appPosition {
    margin-top: 10px;
  }
</style>
