<template>
  <div class="home">
    <div class="container">
      <div v-for="(post, idx) in posts" :key="idx">
        <p>"{{ post.description }}" by {{ post.poster }}</p>
        <img class="postImage" :src="post.image_url" :alt="post.description" />
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
    if (localStorage.getItem("jwt")) {
      this.fetchPosts();
      axios.get("/api/posts").then(response => {
        this.posts = response.data;
      });
    } else {
      alert("Sign in to view posts");
      this.$router.push("/login");
    }
  }
};
</script>
