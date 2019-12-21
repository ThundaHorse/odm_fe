<template>
  <div class="posts">
    <div class="container">
      <div class="wrapper">
        <div class="container">
          <div v-for="(post, idx) in allPosts" :key="idx">
            <br />
            <div class="card text-white bg-secondary border-info mb-3 mt-3">
              <div class="card-header">
                <h2>
                  <strong>"{{ post.description }}"</strong>
                </h2>
              </div>
              <div class="card-body bg-dark">
                <blockquote class="blockquote mb-0">
                  <img :src="post.image_url" :alt="post.description" />
                  <footer class="blockquote-footer">
                    <p class="text-center text-white">by {{ post.poster }}</p>
                    <font-awesome-icon
                      :icon="['fas', 'thumbs-up']"
                      @click="upVote(post.post_state.id)"
                      style="margin-right: 5px; color: white;"
                    />
                    <font-awesome-icon
                      :icon="['fas', 'thumbs-down']"
                      @click="downVote(post.post_state.id)"
                      style="margin-left: 5px; color: white;"
                    />
                    <p class="text-white">
                      {{ post.likes }} Likes | {{ post.dislikes }} Dislikes
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
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
    ...mapActions(["fetchPosts", "upVote", "downVote"])
  }
};
</script>
