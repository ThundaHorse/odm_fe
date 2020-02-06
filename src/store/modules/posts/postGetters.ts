import { State } from "./postState";

const _GETTERS = {
  allPosts: (state: State) => {
    return state.posts;
  },
  getPost: (state: State) => {
    return state.post;
  }
};
