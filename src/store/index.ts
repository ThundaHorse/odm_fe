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
    async addUser({ commit }, userParams) {
      try {
        axios.post("/api/users", userParams).then(response => {
          alert("Signed up successfully!");
          commit("createUser", response.data);
          router.push("/login");
        });
      } catch (e) {
        return;
      }
    },
    async fetchPosts({ commit }) {
      let data = [];
      try {
        await axios.get("/api/posts").then(response => {
          data = response.data;
          commit("setPosts", data);
        });
      } catch (e) {
        return;
      }
    },
    async addPost({ commit }, newPost) {
      let newP: any = this.state.posts.map(p => {
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
        return 1;
      } catch (e) {
        return 0;
      }
    },
    async upVote({ dispatch }, id) {
      try {
        axios.patch("/api/post/upvote/" + id).then(() => {
          dispatch("fetchPosts");
        });
      } catch (e) {
        return;
      }
    },
    async downVote({ dispatch }, id) {
      try {
        axios.patch("/api/post/downvote/" + id).then(() => {
          dispatch("fetchPosts");
        });
      } catch (e) {
        return;
      }
    },
    async upVoteComment({ dispatch }, id) {
      try {
        axios.patch("/api/comments/upvote/" + id).then(response => {
          dispatch("fetchPost", response.data.post_id);
        });
      } catch (e) {
        return;
      }
    },
    async downVoteComment({ dispatch }, id) {
      try {
        axios.patch("/api/comments/downvote/" + id).then(response => {
          dispatch("fetchPost", response.data.post_id);
        });
      } catch (e) {
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
        return;
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
        return;
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
    setComments: (state, comments) => (state.comments = comments),
    setPost: (state, post) => (state.post = post)
  },
  modules: {}
});
