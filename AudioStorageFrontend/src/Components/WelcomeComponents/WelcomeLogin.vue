<template>
  <div>
    <button @click="go('/App')" class="btn btn-default">Procced</button>
  </div>
</template>

<script>
  export default {
    name: "welcome-login",
    methods: {
      go(path) {
        this.$router.push({path});
      }
    }
  }
</script>

<style scoped>

</style>
