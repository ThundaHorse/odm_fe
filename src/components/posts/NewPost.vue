<template>
  <div class="newPost">
    <br />
    <br />
    <PostForm />
  </div>
</template>

<style>
.newPost {
  min-height: 100vh;
}
</style>

<script>
import PostForm from "../../layout/PostForm";

export default {
  name: "newPost",
  components: {
    PostForm
  },
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>
