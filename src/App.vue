<template>
  <div id="app">
    <MainHeader />
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
  width: 100vw;
  height: 500vh;
}
</style>

<script>
import axios from "axios";
import MainFooter from "./layout/MainFooter";
import MainHeader from "./layout/MainHeader";

export default {
  components: {
    MainFooter,
    MainHeader
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
