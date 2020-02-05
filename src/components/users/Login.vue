<template>
  <div class="login">
    <div class="jumbotron" style="background-color: inherit;">
      <form class="card text-white bg-dark" v-on:submit.prevent="signIn()">
        <h1 class="card-header">Log In</h1>
        <ul v-for="(err, idx) in errors" :key="idx">
          <li>{{ err }}</li>
        </ul>
        <div class="card-body">
          <div class="form-row">
            <div class="col"></div>
            <div class="form-group col-md-6">
              <label>
                <p class="label-txt">Email</p>
              </label>
              <input v-model="email" type="text" class="input" />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </div>
            <div class="col"></div>
          </div>
          <div class="form-row">
            <div class="col"></div>
            <div class="form-group col-md-6">
              <label>
                <p class="label-txt">Password</p>
              </label>
              <input v-model="password" type="password" class="input" />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
        <div class="card-footer">
          <div class="form-row">
            <div class="form-group col-md-12">
              <a href="/signup">Need an account?</a>
            </div>
            <div class="form-group col-md-12">
              <button class="btn btn-round btn-md btn-info">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { Component, Vue } from "vue-property-decorator";
  import "../../assets/styles/users/LoginStyles.scss";

  @Component({
    name: "login"
  })
  export default class Login extends Vue {
    email = "";
    password = "";
    errors = [];

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
    }
  }
</script>
