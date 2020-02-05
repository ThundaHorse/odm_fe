<template>
  <div class="home">
    <div class="container">
      <PostIndex />
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator";
  import PostIndex from "../components/posts/PostIndex";

  @Component({
    components: {
      PostIndex
    }
  })
  export default class Home extends Vue {}
</script>

<style>
  .home {
    min-height: 85vh;
  }
</style>
