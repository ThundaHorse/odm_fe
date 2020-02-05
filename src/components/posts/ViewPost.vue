<template>
  <div class="viewPost">
    <div class="container" style="padding-top:30px;">
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
                <span style="color:white;">{{ this.commentCount() }}</span>
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
    <br />
    <div class="container">
      <Comments />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import { Component, Vue } from "vue-property-decorator";
  import Comments from "../../layout/Comments";

  @Component({
    name: "viewPost",
    components: {
      Comments
    },
    created: function() {
      this.fetchPost(this.$route.params.id);
    },
    computed: mapGetters(["getPost"]),
    methods: {
      ...mapActions(["fetchPost", "upVote", "downVote"])
    }
  })
  export default class ViewPost extends Vue {
    postComments = 0;

    commentCount() {
      try {
        if (this.getPost.comments.length > 0) {
          this.postComments = this.getPost.comments.length;
        }
        return this.postComments;
      } catch (e) {
        return;
      }
    }
  }
</script>

<style>
  .userPosts {
    padding-top: 100px;
  }
  li {
    list-style: none;
  }
  img {
    height: auto;
    width: 60%;
  }
</style>
