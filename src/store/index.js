import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    user: [],
    userPosts: []
  },
  getters: {
    allPosts: state => state.posts,
    getUser: state => state.user,
    userPosts: state => state.userPosts
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
        console.log(e);
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
          });
        });
      } catch (e) {
        console.log(e);
      }
    },
    async upVote({ dispatch }, id) {
      try {
        axios.patch("/api/post/upvote/" + id).then(() => {
          dispatch("fetchPosts");
        });
      } catch (e) {
        console.log(e);
      }
    },
    async downVote({ dispatch }, id) {
      try {
        axios.patch("/api/post/downvote/" + id).then(() => {
          dispatch("fetchPosts");
        });
      } catch (e) {
        console.log(e);
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
        console.log(e);
      }
    },
    async fetchUserPosts({ commit }) {
      let userPosts = [];
      try {
        axios
          .get("/api/posts/user/" + parseInt(localStorage.getItem("user_id")))
          .then(response => {
            userPosts = response.data;
            commit("setUserPosts", userPosts);
          });
      } catch (e) {
        console.log(e);
      }
    }
  },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts),
    setUser: (state, user) => (state.user = user),
    setUserPosts: (state, userPosts) => (state.userPosts = userPosts)
  },
  modules: {}
});
