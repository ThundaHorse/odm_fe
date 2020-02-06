export default class PostModel {
  post: {
    id: number;
    user_id: number;
    description: string;
    image?: string;
  };

  constructor() {
    this.post = {
      id: 0,
      description: "",
      user_id: 0,
      image: ""
    };
  }
}
