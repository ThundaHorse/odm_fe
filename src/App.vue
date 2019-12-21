<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand">ODM</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/newPost"
                >New Post<span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </a>
              <div
                class="dropdown-menu bg-dark"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item text-white" href="/signup">Sign Up</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-white" href="/login">Log In</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-white" @click="logOut()"
                  >Log Out</a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <MainFooter />
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>

<script>
import axios from "axios";
import MainFooter from "./layout/MainFooter";

export default {
  components: {
    MainFooter
  },
  data() {
    return {};
  },
  methods: {
    logOut() {
      delete axios.defaults.headers.common["Authorizations"];
      localStorage.removeItem("jwt");
      localStorage.removeItem("user_id");
      alert("Logged out successfully");
      this.$router.push("/login");
    }
  }
};
</script>
