<template>
  <div class="newPost">
    <PostForm />
  </div>
</template>

<style>
.newPost {
  min-height: 85;
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
