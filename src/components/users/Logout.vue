<template>
  <div class="logout"></div>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator";
  import axios from "axios";

  @Component({
    name: "logout",
    created: function() {
      delete axios.defaults.headers.common["Authorizations"];
      localStorage.removeItem("jwt");
      localStorage.removeItem("user_id");
      alert("Logged out succesfully!");
      this.$router.push("/login");
    }
  })
  export default class Logout extends Vue {}
</script>
