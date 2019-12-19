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
                <a class="dropdown-item text-white" href="#">Sign Up</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-white" href="#">Log In</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-white" href="#">Log Out</a>
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
  color: #2c3e50;
}
</style>

<script>
import MainFooter from "./layout/MainFooter";

export default {
  components: {
    MainFooter
  },
  data() {
    return {};
  }
};
</script>
