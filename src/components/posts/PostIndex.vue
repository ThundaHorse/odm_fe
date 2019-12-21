<template>
  <div class="posts">
    <div class="container">
      <hr />
      <h1>Le Memes</h1>
      <div class="wrapper">
        <div class="container">
          <div v-for="(post, idx) in allPosts" :key="idx">
            <br />
            <p>{{ post.description }}</p>
            <img :src="post.image_url" :alt="post.description" />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  height: auto;
  width: 50%;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostIndex",
  data() {
    return {};
  },
  created: function() {
    this.fetchPosts();
  },
  computed: mapGetters(["allPosts"]),
  methods: {
    ...mapActions(["fetchPosts"])
  }
};
</script>
