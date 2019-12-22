<template>
  <div class="posts">
    <div v-if="allPosts.length === 0">
      <div class="jumbotron" style="background: inherit;">
        <div class="container">
          <div class="justify-content-md-center">
            <h1 style="margin-top: 30%;">There are no posts yet... :[</h1>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container justify-content-center mt-4">
      <br />
      <div
        class="card text-white bg-secondary border-info mb-1 mt-4"
        style="max-width: 1000px;"
        v-for="(post, idx) in allPosts"
        :key="idx"
      >
        <div class="card-header">
          <h2>
            <strong>{{ post.description }}</strong>
          </h2>
        </div>
        <div class="card-body bg-dark">
          <blockquote class="blockquote mb-0">
            <img :src="post.image_url" :alt="post.description" />
            <footer class="blockquote-footer">
              <p class="text-center text-white">by {{ post.poster }}</p>
              <div class="d-flex justify-content-center">
                <ul class="btn-vote left">
                  <span style="color:white;">{{ post.likes }}</span>
                  <li>
                    <font-awesome-icon
                      class="ico"
                      :icon="['fas', 'thumbs-up']"
                      @click="upVote(post.post_state.id)"
                      style="margin-right: 5px; color: b1f4e8; cursor: pointer;"
                      size="lg"
                    />
                  </li>
                </ul>
                <ul class="btn-vote left">
                  <span style="color:white;">{{ post.dislikes }}</span>
                  <li>
                    <font-awesome-icon
                      class="ico"
                      :icon="['fas', 'thumbs-down']"
                      @click="downVote(post.post_state.id)"
                      style="margin-right: 5px; color: ff8657; cursor: pointer;"
                      size="lg"
                    />
                  </li>
                </ul>
                <ul class="btn-vote left">
                  <span style="color:white;">0</span>
                  <li>
                    <font-awesome-icon
                      class="ico"
                      :icon="['fas', 'comment-dots']"
                      style="margin-right: 5px; color: white; cursor: pointer;"
                      size="lg"
                    />
                  </li>
                </ul>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.jumbotron {
  height: 50vh;
}
img {
  height: auto;
  width: 60%;
}
.left {
  box-sizing: border-box;
  float: left !important;
}
.btn-vote li {
  margin: 0 8px 0 0;
  float: left;
  list-style: none;
}
li {
  display: list-item;
  text-align: center;
  list-style: none;
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
