<template>
    <div id="welcomePage" class="jumbotron vertical-center fill">
      <div class="container text-center halfSize fill">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "welcome"
    }
</script>

<style scoped>
  #welcomePage {
    background-image: url("https://static.zerochan.net/Kirisame.Marisa.full.1129147.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    margin-bottom: 0px;
  }

  .halfSize {
    width: 50%;
  }
</style>
