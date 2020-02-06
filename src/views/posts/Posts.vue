<template>
  <div class="posts">
    <PostIndex />
  </div>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator";
  import PostIndex from "../../components/posts/PostIndex";

  @Component({
    components: {
      PostIndex
    }
  })
  export default class Posts extends Vue {}
</script>
