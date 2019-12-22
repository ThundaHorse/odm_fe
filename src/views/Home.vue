<template>
  <div class="home">
    <!-- <hr /> -->
    <div class="container">
      <PostIndex />
    </div>
    <!-- <hr /> -->
  </div>
</template>

<style>
.home {
  margin-bottom: 110px;
}
</style>

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
