<template>
  <div class="home">
    <div class="container">
      <div class="container">
        <div v-for="(post, idx) in posts" :key="idx">
          <p>{{ post.description }}</p>
          <img
            class="postImage"
            :src="post.image_url"
            :alt="post.description"
          />
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<style>
.postImage {
  max-width: 50%;
  height: auto;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      posts: []
    };
  },
  computed: mapGetters(["allPosts"]),
  methods: {
    ...mapActions(["fetchPosts"])
  },
  created() {
    this.fetchPosts();
    axios.get("/api/posts").then(response => {
      this.posts = response.data;
    });
  }
};
</script>
