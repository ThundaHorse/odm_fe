<template>
  <div class="comments">
    <div class="container">
      <div
        v-for="(comment, index) in getPost.comments"
        :key="index"
        :class="alternatingCards(index)"
      >
        <div class="card-header">
          <div class="form-row">
            <p>
              <strong>{{ comment.user }}</strong> says:
            </p>
          </div>
        </div>
        <div class="card-body">
          <div class="form-row">
            <p>{{ comment.body }}</p>
          </div>
        </div>
      </div>
      <br />
      <form @submit.prevent="addComment(newComment)">
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="newComment">New Comment:</label>
            <textarea
              v-model="newComment.body"
              id="newComment"
              type="text"
              class="form-control"
              rows="3"
            />
          </div>
        </div>
        <button class="btn btn-round btn-sm btn-info" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.card {
  opacity: 0.7;
}
.card:hover {
  opacity: 1;
}
textarea {
  background: transparent;
}
textarea:focus {
  background: transparent;
  color: white;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "comments",
  data: function() {
    return {
      newComment: {
        post_id: this.$route.params.id,
        body: ""
      }
    };
  },
  created: function() {
    this.fetchPost(this.$route.params.id);
  },
  computed: mapGetters(["getPost"]),
  methods: {
    ...mapActions(["fetchPost", "addComment"]),
    alternatingCards(i) {
      if (i % 2 !== 0) {
        return "card text-white bg-dark border-info mb-1 mt-2";
      } else {
        return "card text-white bg-secondary border-info mb-1 mt-2";
      }
    }
  }
};
</script>
