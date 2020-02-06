import PostModel from "@/models/PostModel";

export class State {
  posts: Array<PostModel> = [];
  post: PostModel[] = [new PostModel()];
}
