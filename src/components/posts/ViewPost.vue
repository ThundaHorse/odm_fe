<template>
  <div class="viewPost">
    <div class="container" style="padding-top:100px;">
      <div class="card text-white bg-secondary border-info mb-1 mt-4">
        <div class="card-header">
          <h2>
            <strong>{{ getPost.description }}</strong>
          </h2>
        </div>
        <div class="card-body bg-dark">
          <blockquote class="blockquote mb-0">
            <img :src="getPost.image_url" :alt="getPost.description" />
          </blockquote>
          <footer class="blockquote-footer">
            <p class="text-center text-white">by {{ getPost.poster }}</p>
            <div class="d-flex justify-content-center">
              <ul class="btn-vote left">
                <span style="color:white;">{{ getPost.likes }}</span>
                <li>
                  <font-awesome-icon
                    class="ico"
                    :icon="['fas', 'thumbs-up']"
                    @click="upVote(getPost.post_state.id)"
                    style="margin-right: 5px; color: b1f4e8; cursor: pointer;"
                    size="lg"
                  />
                </li>
              </ul>
              <ul class="btn-vote left">
                <span style="color:white;">{{ getPost.dislikes }}</span>
                <li>
                  <font-awesome-icon
                    class="ico"
                    :icon="['fas', 'thumbs-down']"
                    @click="downVote(getPost.post_state.id)"
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
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.userPosts {
  padding-top: 100px;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "viewPost",
  data: function() {
    return {};
  },
  created: function() {
    this.fetchPost(this.$route.params.id);
  },
  computed: mapGetters(["getPost"]),
  methods: {
    ...mapActions(["fetchPost", "upVote", "downVote"])
  }
};
</script>
