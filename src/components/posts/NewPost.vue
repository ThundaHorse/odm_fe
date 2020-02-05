<template>
  <div class="newPost">
    <PostForm />
  </div>
</template>

<script>
  import PostForm from "../../layout/PostForm";
  import { Component, Vue } from "vue-property-decorator";
  import "../../assets/styles/posts/postIndex.scss";

  @Component({
    name: "newPost",
    components: {
      PostForm
    }
  })
  export default class NewPost extends Vue {}
</script>
