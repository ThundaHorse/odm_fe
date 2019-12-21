<template>
  <div class="posts">
    <div class="container">
      <!-- <h1>Le Memes</h1> -->
      <div class="wrapper">
        <div class="container">
          <div v-for="(post, idx) in allPosts" :key="idx">
            <br />
            <h3 class="text-center">
              <strong>"{{ post.description }}"</strong>
            </h3>
            <p class="text-center">by {{ post.poster }}</p>
            <img :src="post.image_url" :alt="post.description" />
            <br />
            <p>{{ post.likes }} Likes | {{ post.dislikes }} Dislikes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  height: auto;
  width: 80%;
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
