import { State } from "./postState";
import { Store, Dispatch, Commit } from "vuex";
import axios from "axios";
import PostModel from "@/models/PostModel";

export class PostActions {
  async fetchPosts({ commit }: { commit: Commit }) {
    let data = [];
    try {
      await axios.get("/api/posts").then(response => {
        data = response.data;
        commit("setPosts", data);
      });
    } catch (e) {
      commit("setErrors", e);
    }
  }
  async addPost(
    { commit }: { commit: Commit },
    newPost: PostModel,
    store: Store<State>
  ) {
    let newP: any = store.state.posts.map((e: PostModel) => {
      return e;
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
      commit("setErrors", e);
    }
  }
  async fetchPost(
    { dispatch, commit }: { commit: Commit; dispatch: Dispatch },
    id: number
  ) {
    let post = [];
    try {
      await axios.get("/api/posts/" + id).then(response => {
        post = response.data;
        commit("setPost", post);
        dispatch("fetchComments", post.id);
      });
    } catch (e) {
      commit("setErrors", e);
    }
  }
}
