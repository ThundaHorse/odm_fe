import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    user: [],
    post: []
  },
  getters: {
    allPosts: state => state.posts,
    getUser: state => state.user,
    getPost: state => state.post
  },
  actions: {
    async fetchPosts({ commit }) {
      let data = [];
      try {
        axios.get("/api/posts").then(response => {
          data = response.data;
          commit("setPosts", data);
        });
      } catch (e) {
        // console.log(e);
        return;
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
        // console.log(e);
        return;
      }
    },
    async upVote({ dispatch }, id) {
      try {
        axios.patch("/api/post/upvote/" + id).then(() => {
          dispatch("fetchPosts");
        });
      } catch (e) {
        // console.log(e);
        return;
      }
    },
    async downVote({ dispatch }, id) {
      try {
        axios.patch("/api/post/downvote/" + id).then(() => {
          dispatch("fetchPosts");
        });
      } catch (e) {
        // console.log(e);
        return;
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
        // console.log(e);
        return;
      }
    },
    async fetchPost({ commit }, id) {
      let post = [];
      try {
        axios.get("/api/posts/" + id).then(response => {
          post = response.data;
          commit("setPost", post);
        });
      } catch (e) {
        // console.log(e);
        return;
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
        return;
      }
    }
  },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts),
    setUser: (state, user) => (state.user = user),
    setPost: (state, post) => (state.post = post)
  },
  modules: {}
});
