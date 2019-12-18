import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    allPosts: state => state.posts
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
    }
  },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts)
    // addPost: (posts) => ()
  },
  modules: {}
});
