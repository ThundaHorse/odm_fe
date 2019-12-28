import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
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
    path: "/newPost",
    name: "newPost",
    component: () =>
      import(
        /* webpackChunkName: "NewPost" */ "../components/posts/NewPost.vue"
      )
  },
  {
    path: "/post/:id",
    name: "viewPost",
    component: () =>
      import(
        /* webpackChunkName: "ViewPost" */ "../components/posts/ViewPost.vue"
      )
  },
  {
    path: "/signup",
    name: "signup",
    // generates separate chunk for this route which lazy-loads when route is visited
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
