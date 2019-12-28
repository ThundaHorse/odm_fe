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
}
/* .container {
  display: flex;
  position: absolute;
  z-index: 2;
  top: 120px;
  right: -50px;
  perspective: 66px;
  transform: rotate(-36deg) skew(0deg, 20deg);
} */
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
