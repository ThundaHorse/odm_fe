<template>
  <div class="newPost">
    <PostForm />
  </div>
</template>

<script>
  import PostForm from "../../layout/PostForm";
  import "../../assets/styles/posts/postIndex.scss";

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
