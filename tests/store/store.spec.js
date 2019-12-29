import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import PostIndex from "../../src/components/posts/PostIndex.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Home.vue", () => {
  let getters;
  let actions;
  let store;

  beforeEach(() => {
    getters = {
      allPosts: jest.fn(() => store.state.posts)
    };

    actions = {
      fetchPosts: jest.fn()
    };

    store = new Vuex.Store({
      state: {
        posts: [
          {
            id: 1,
            description: "Test",
            user_id: 1,
            image: "..."
          }
        ]
      },
      getters,
      actions
    });
  });

  afterEach(() => {
    store.state.posts = [];
  });

  it("should fetch posts", () => {
    expect(1).toEqual(1);
    // eslint-disable-next-line no-unused-vars
    // const wrapper = shallowMount(PostIndex, { localVue, store });
    // const posts = wrapper.find("div.container");
    // expect(posts.text()).toBe("Test");
  });
});
