<template>
  <div class="home">
    <div class="container">
      <PostIndex />
    </div>
  </div>
</template>

<script>
  import PostIndex from "../components/posts/PostIndex";

  export default {
    name: "home",
    components: {
      PostIndex
    },
    data() {
      return {};
    },
    methods: {},
    created() {}
  };
</script>

<style>
  .home {
    min-height: 85vh;
  }
</style>
