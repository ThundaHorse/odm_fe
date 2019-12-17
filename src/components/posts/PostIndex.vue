<template>
  <div class="posts">
    <div class="container">
      <div v-for="(post, idx) in allPosts" :key="idx">
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "posts",
  data() {
    return {};
  },
  computed: mapGetters(["allPosts"]),
  methods: {
    ...mapActions(["fetchPosts"])
  },
  created() {
    this.fetchPosts();
  }
};
</script>
