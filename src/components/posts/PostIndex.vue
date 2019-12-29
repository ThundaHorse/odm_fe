<template>
  <div class="posts">
    <Loading v-if="loading && allPosts" />
    <NoPosts v-if="!allPosts" />
    <div v-else class="container justify-content-center mt-4">
      <br />
      <transition-group name="slide-fade">
        <div
          v-for="post in allPosts"
          :key="post.id"
          class="card text-white bg-secondary border-info mb-1 mt-4"
          style="max-width: 1000px;"
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
                    <span style="color:white;">{{ commentCount(post) }}</span>
                    <li>
                      <font-awesome-icon
                        class="ico"
                        :icon="['fas', 'comment-dots']"
                        style="margin-right: 5px; color: white; cursor: pointer;"
                        @click.prevent="postPage(post.id)"
                        size="lg"
                      />
                    </li>
                  </ul>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </transition-group>
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
.slide-fade-enter-active {
  transition: all 1.5s ease;
}
.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import NoPosts from "./NoPosts.vue";
import Loading from "./Loading.vue";

export default {
  name: "PostIndex",
  data() {
    return {
      loading: true
    };
  },
  components: {
    NoPosts,
    Loading
  },
  created: function() {
    this.onLoad();
  },
  computed: mapGetters(["allPosts"]),
  methods: {
    ...mapActions(["fetchPosts", "upVote", "downVote"]),
    postPage(input) {
      this.$router.push("/post/" + input);
    },
    commentCount(post) {
      let postComments = 0;
      try {
        if (post.comments.length > 0) {
          postComments = post.comments.length;
        }
        return postComments;
      } catch (e) {
        return;
      }
    },
    onLoad() {
      this.loading = true;
      setTimeout(() => {
        this.$store.dispatch("fetchPosts").then(() => {
          this.loading = false;
        });
      }, 1200);
    }
  }
};
</script>
