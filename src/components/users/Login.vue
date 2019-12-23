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

<style scoped>
form {
  margin: 60px auto;
  text-align: center;
  background: #52525296;
  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
}
.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
  color: white;
}
label {
  display: block;
  position: relative;
  margin: 40px 0px;
}

.label-txt {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-family: sans-serif;
  font-size: 0.8em;
  letter-spacing: 1px;
  color: rgb(120, 120, 120);
  transition: ease 0.3s;
}

.line-box {
  position: relative;
  width: 100%;
  height: 2px;
  background: #bcbcbc;
}
.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: #b1f4e8;
  transition: ease 0.6s;
}
.input:focus + .line-box .line {
  width: 100%;
}
.label-active {
  top: -3em;
}
p.label-txt {
  color: white;
}
</style>

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
    }
  }
};
</script>
