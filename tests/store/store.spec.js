import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import PostIndex from "../../src/components/posts/PostIndex.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Home.vue", () => {
  let getters;
  let actions;
  let store;
  let state;

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
    store.state.posts = [
      {
        id: 1,
        description: "Test",
        user_id: 1,
        image: "..."
      }
    ];
  });

  it("should invoke fetchPosts as it loads", () => {
    // eslint-disable-next-line no-unused-vars
    const wrapper = shallowMount(PostIndex, { store, state, localVue });
    expect(actions.fetchPosts).toHaveBeenCalled();
  });

  it("should return posts", () => {
    // eslint-disable-next-line no-unused-vars
    const wrapper = shallowMount(PostIndex, {
      store,
      localVue
    });
    expect(store.state.posts.length).toBe(1);
  });
});
