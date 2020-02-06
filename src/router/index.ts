import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // Posts
  {
    path: "/",
    name: "posts",
    component: () =>
      import(/* webpackChunkName: "NewPost" */ "../views/posts/Posts.vue")
  },
  {
    path: "/post/:id",
    name: "viewPost",
    component: () =>
      import(/* webpackChunkName: "ViewPost" */ "../views/posts/ViewPost.vue")
  },
  {
    path: "/newPost",
    name: "newPost",
    component: () =>
      import(/* webpackChunkName: "ViewPost" */ "../views/posts/NewPost.vue")
  },
  {
    path: "/user",
    name: "userPage",
    component: () =>
      import(/* webpackChunkName: "UserPage" */ "../views/UserPage.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../components/users/Login.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "Signup" */ "../components/users/Signup.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
