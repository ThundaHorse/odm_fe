<template>
  <div class="signup">
    <div class="container">
      <h1>Sign Up</h1>
      <hr />
      <form v-on:submit.prevent="createUser()">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>
              <p class="label-txt">First Name</p>
              <input v-model="newUserParams.first" type="text" class="input" />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>
          </div>
          <div class="form-group col-md-6">
            <label>
              <p class="label-txt">Last Name</p>
              <input v-model="newUserParams.last" type="text" class="input" />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-8">
            <label>
              <p class="label-txt">Email</p>
              <input v-model="newUserParams.email" type="text" class="input" />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>
          </div>
          <div class="form-group col-md-4">
            <label>
              <p class="label-txt">Phone Number</p>
              <input v-model="newUserParams.phone" type="text" class="input" />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>
              <p class="label-txt">Password</p>
              <input
                v-model="newUserParams.password"
                type="password"
                class="input"
              />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>
          </div>
          <div class="form-group col-md-6">
            <label>
              <p class="label-txt">Password Confirmation</p>
              <input
                v-model="newUserParams.passwordConfirmation"
                type="password"
                class="input"
              />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <button class="btn btn-round btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
form {
  border-radius: 3%;
  width: 60%;
  margin: 60px auto;
  background: #52525296;
  padding: 60px 120px 80px 120px;
  opacity: 0.5;
  text-align: center;
  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
}
form:hover {
  opacity: 0.9;
}
.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
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
</style>

<script>
import axios from "axios";

export default {
  name: "signup",
  data: function() {
    return {
      newUserParams: {
        first: "",
        last: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirmation: ""
      },
      errors: []
    };
  },
  created() {},
  methods: {
    createUser() {
      if (
        this.newUserParams.first.length > 0 &&
        this.newUserParams.last.length > 0 &&
        this.newUserParams.email.length > 0 &&
        this.newUserParams.phone.length > 0
      ) {
        if (
          this.newUserParams.password ===
          this.newUserParams.passwordConfirmation
        ) {
          axios
            .post("/api/users", this.newUserParams)
            .then(response => {
              console.log(response.data);
              alert("Signed up successfully!");
              this.$router.push("/");
            })
            .catch(errors => {
              this.errors = errors;
              console.log(this.errors);
            });
        }
      } else {
        alert("Please fill out all fields");
        this.newUserParams.first = "";
        this.newUserParams.last = "";
        this.newUserParams.email = "";
        this.newUserParams.phone = "";
        this.newUserParams.password = "";
        this.newUserParams.passwordConfirmation = "";
      }
    }
  }
};
</script>
