<template>
  <div class="userPage">
    <br />
    <h1>{{ getUser.first_name }}'s Memes</h1>
    <hr />
    <div v-for="(post, idx) in userPosts" :key="idx">
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "userPage",
  data: function() {
    return {};
  },
  computed: mapGetters(["getUser", "userPosts"]),
  methods: {
    ...mapActions(["fetchUser", "fetchUserPosts"])
  },
  created() {
    this.fetchUser();
    this.fetchUserPosts();
  }
};
</script>
