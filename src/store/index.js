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
    fetchPosts({ commit }) {
      let data = [];
      axios.get("/api/posts").then(response => {
        data = response.data;
      });
      commit("setPosts", data);
    },
    addPost({ commit }, newPost) {
      let newP = this.state.posts.map(p => {
        return p;
      });
      newP.push(newPost);
      axios
        .post("/api/posts", newPost)
        .then(() => {
          commit("setPosts", newP);
        })
        .catch(e => {
          console.log(e);
        });
    },
    fetchUser({ commit }) {
      let user = [];
      axios
        .get("/api/users/" + parseInt(localStorage.getItem("user_id")))
        .then(response => {
          user = response.data;
          commit("setUser", user);
        });
    },
    fetchUserPosts({ commit }) {
      let userPosts = [];
      axios
        .get("/api/posts/user/" + parseInt(localStorage.getItem("user_id")))
        .then(response => {
          userPosts = response.data;
          commit("setUserPosts", userPosts);
        });
    }
  },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts),
    setUser: (state, user) => (state.user = user),
    setUserPosts: (state, userPosts) => (state.userPosts = userPosts)
  },
  modules: {}
});
