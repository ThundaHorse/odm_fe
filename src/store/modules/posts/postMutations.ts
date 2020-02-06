import { State } from "./postState";
import PostModel from "@/models/PostModel";

export class PostMutations {
  setPosts({ state, posts }: { state: State; posts: Array<PostModel> }) {
    state.posts = posts;
  }
  setPost({ state, post }: { state: State; post: PostModel[] }) {
    state.post = post;
  }
}
