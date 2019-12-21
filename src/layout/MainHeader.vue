<template>
  <div class="header">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
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
          <ul class="navbar-nav mr-auto">
            <!-- <li class="nav-item active"> -->
            <!-- <router-link class="nav-link" to="/newPost"
                >New Post<span class="sr-only">(current)</span></router-link
              > -->
            <!-- </li> -->
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
          <span class="navbar-text">
            <button class="btn btn-sm btn-info btn-round">
              <router-link class="nav-link" to="/newPost"
                >New Post +<span class="sr-only">(current)</span></router-link
              >
            </button>
          </span>
        </div>
      </div>
    </nav>
    <br />
  </div>
</template>

<style>
nav {
  padding: 1rem;
  border-bottom: #a8f3e5 1px solid;
}
</style>

<script>
import axios from "axios";

export default {
  name: "MainHeader",
  data: function() {
    return {};
  },
  created: function() {},
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
