<template>
  <div class="home">
    <div class="container">
      <h1>Message</h1>
    </div>
    <hr />
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
  name: "home",
  data: function() {
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
