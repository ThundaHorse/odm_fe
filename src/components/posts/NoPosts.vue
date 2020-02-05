<template>
  <div class="noPosts">
    <div class="jumbotron" style="background: inherit;">
      <div class="container">
        <div class="justify-content-md-center">
          <h1 style="margin-top: 30%;">There are no posts yet... :[</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    name: "noPosts"
  })
  export default class NoPosts extends Vue {}
</script>

<style>
  .jumbotron {
    height: 50vh;
  }
</style>
