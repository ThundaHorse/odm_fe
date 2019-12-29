import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    user: [],
    post: [],
    comments: []
  },
  getters: {
    allPosts: state => state.posts,
    getUser: state => state.user,
    postComments: state => state.comments,
    getPost: state => state.post
  },
  actions: {
    async fetchPosts({ commit }) {
      let data = [];
      try {
        await axios.get("/api/posts").then(response => {
          data = response.data;
          commit("setPosts", data);
        });
      } catch (e) {
        alert(e);
      }
    },
    async addPost({ commit }, newPost) {
      let newP = this.state.posts.map(p => {
        return p;
      });
      newP.push(newPost);
      try {
        let temp = [];
        axios.post("/api/posts", newPost).then(response => {
          temp = response.data;
          axios.post("/api/post/state/" + temp.post_id).then(() => {
            alert("Created post!");
            commit("setPosts", newP);
            router.push("/");
          });
        });
      } catch (e) {
        alert(e);
      }
    },
    async upVote({ dispatch }, id) {
      try {
        axios.patch("/api/post/upvote/" + id).then(() => {
          dispatch("fetchPosts");
        });
      } catch (e) {
        alert(e);
      }
    },
    async downVote({ dispatch }, id) {
      try {
        axios.patch("/api/post/downvote/" + id).then(() => {
          dispatch("fetchPosts");
        });
      } catch (e) {
        alert(e);
      }
    },
    async upVoteComment({ dispatch }, id) {
      try {
        axios.patch("/api/comments/upvote/" + id).then(response => {
          dispatch("fetchPost", response.data.post_id);
        });
      } catch (e) {
        alert(e);
      }
    },
    async downVoteComment({ dispatch }, id) {
      try {
        axios.patch("/api/comments/downvote/" + id).then(response => {
          dispatch("fetchPost", response.data.post_id);
        });
      } catch (e) {
        alert(e);
      }
    },
    async fetchUser({ commit }) {
      let user = [];
      try {
        axios
          .get("/api/users/" + parseInt(localStorage.getItem("user_id")))
          .then(response => {
            user = response.data;
            commit("setUser", user);
          });
      } catch (e) {
        alert(e);
      }
    },
    async fetchPost({ dispatch, commit }, id) {
      let post = [];
      try {
        await axios.get("/api/posts/" + id).then(response => {
          post = response.data;
          commit("setPost", post);
          dispatch("fetchComments", post.id);
        });
      } catch (e) {
        alert(e);
      }
    },
    async fetchComments({ commit }, id) {
      let postComments = [];
      try {
        axios.get("/api/comments/post/" + id).then(response => {
          postComments = response.data;
          commit("setComments", postComments);
        });
      } catch (e) {
        alert(e);
      }
    },
    async addComment({ dispatch }, comment) {
      try {
        if (comment.body.length <= 0) {
          alert("Enter a comment before submitting");
        } else {
          axios.post("/api/comments", comment).then(() => {
            dispatch("fetchPost", comment.post_id);
            comment.body = "";
          });
        }
      } catch (e) {
        alert(e);
      }
    }
  },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts),
    setUser: (state, user) => (state.user = user),
    setComments: (state, comments) => (state.comments = comments),
    setPost: (state, post) => (state.post = post)
  },
  modules: {}
});
