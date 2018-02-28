<template>
<div @click="closeMenu" class="override">
  <div class="menuBlock">
  </div>
</div>
</template>

<script>
    export default {
      name: "sidemenu",
      methods: {
        closeMenu() {
          this.$parent.openMenu();
        },
      }
    }
</script>

<style scoped>
  .override {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .menuBlock {
    background-color: white;
    width: 35%;
    height: 100%;
  }
</style>
