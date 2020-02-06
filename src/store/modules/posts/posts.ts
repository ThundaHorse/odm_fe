import { PostMutations } from "./postMutations";
import * as getter from "./postGetters";
import { State } from "./postState";
import { PostActions } from "./postActions";

const postings = {
  state: State,
  getters: getter,
  actions: PostActions,
  mutations: PostMutations
};

export default {
  namespaced: true,
  getters: postings.getters,
  state: postings.state,
  actions: postings.actions,
  mutations: postings.mutations
};
