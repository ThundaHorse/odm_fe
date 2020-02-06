<template>
  <div class="newPost">
    <PostForm />
  </div>
</template>

<script>
  import PostForm from "../../components/posts/PostForm.vue";
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    name: "newPost",
    components: {
      PostForm
    }
  })
  export default class NewPost extends Vue {}
</script>
