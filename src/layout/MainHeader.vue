<template>
  <div class="header">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a href="/" class="navbar-brand">Our Daily Memes</a>
        <button class="btn btn-round btn-sm btn-info">
          <a href="/newpost" class="navbar-text">New Post</a>
        </button>
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
          <ul class="navbar-nav ml-auto">
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
                <a class="dropdown-item text-white bg-dark" href="/signup"
                  >Sign Up</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-white bg-dark" href="/login">
                  Log In
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-white bg-dark" @click="logOut()"
                  >Log Out</a
                >
                <!-- <div class="dropdown-divider"></div>
                <a class="dropdown-item text-white bg-dark" href="/userPosts/"
                  >Your Posts</a
                > -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br />
  </div>
</template>

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

<style>
  nav {
    padding: 1rem;
    border-bottom: #a8f3e5 1px solid;
  }
</style>
