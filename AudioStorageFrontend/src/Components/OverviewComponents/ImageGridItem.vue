<template>
  <div class="col">
    <div class="IGItem">
      <div>
        <img class="imgResize" src="../../Images/UnknownArtistLogo.jpg"/>
      </div>
      <div class="Desc">
        <b>Artist</b>
        <p>Album</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "image-grid-item"
    }
</script>

<style scoped>
  .IGItem {
    text-align: center;
    width: 200px;
    height: 250px;
  }

  .imgResize {
    width: 150px;
    height: 150px;
  }

  .Desc {
    padding-top: 5px;
  }
</style>
