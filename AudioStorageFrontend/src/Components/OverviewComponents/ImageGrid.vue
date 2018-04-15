<template>
    <div class="container-fluid">
      <div class="row">
        <image-grid-item></image-grid-item>
        <image-grid-item></image-grid-item>
        <image-grid-item></image-grid-item>
        <image-grid-item></image-grid-item>
        <image-grid-item></image-grid-item>
      </div>
    </div>
</template>

<script>
  import ImageGridItem from "./ImageGridItem";

  export default {
    name: "image-grid",
    components: {
      ImageGridItem
    }
  }
</script>

<style scoped>

</style>
