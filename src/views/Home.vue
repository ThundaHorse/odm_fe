<template>
  <div class="home">
    <div class="container">
      <PostIndex />
    </div>
  </div>
</template>

<style>
.home {
  margin-bottom: 110px;
  flex-grow: 1;
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
