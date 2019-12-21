<template>
  <div class="login">
    <br />
    <h1>Log In</h1>
    <div class="container">
      <ul v-for="(err, idx) in errors" :key="idx">
        <li>{{ err }}</li>
      </ul>
      <form v-on:submit.prevent="signIn()">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="email" class="bmd-label-placeholder"></label>
            <p>Email</p>
            <input
              v-model="email"
              type="text"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="password" class="bmd-label-placeholder"></label>
            <p>Password</p>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <a href="/signup">Need an account?</a>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <button class="btn btn-round btn-md btn-info">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    signIn() {
      let params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;

          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);

          this.$router.push("/");
        })
        .catch(err => {
          this.errors = err;
          this.email = "";
          this.password = "";
        });
      console.log(params);
    }
  }
};
</script>
