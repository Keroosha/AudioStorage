<template>
    <div class="welcomeParams rounded border container-fluid fill">
      <h1>Welcome to AudioStorage</h1>
      <div class="buttonPos d-flex align-items-end">
        <div class="buttonBlock d-flex justify-content-center">
          <button @click="go('Register')" class="btnPadding p-2 btn btn-dark">Register</button>
          <button @click="go('Login')" class="btnPadding p-2 btn btn-dark">Login</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "welcome-default",
      methods: {
        go(path) {
          this.$router.push({path});
        }
      }
    }
</script>

<style scoped>
  .welcomeParams {
    background-color: rgba(220, 220, 220, .7);
  }

  .buttonPos {
    height: 50%;
  }

  .buttonBlock {
    width: 100%;
  }
  .btnPadding {
    margin: 3em;
    margin-bottom: 0;
    margin-top: 0;
  }
</style>
