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
  export default {
    name: "noPosts",
    data: function() {
      return {};
    },
    created: function() {},
    methods: {}
  };
</script>

<style>
  .jumbotron {
    height: 50vh;
  }
</style>
