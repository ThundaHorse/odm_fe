<template>
  <div class="signup">
    <div v-if="!loading" class="jumbotron" style="background-color: inherit;">
      <form class="card text-white bg-dark" v-on:submit.prevent="createUser()">
        <div class="card-header"><h1>Sign Up</h1></div>
        <div class="card-body">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>
                <p class="label-txt">First Name</p>
                <input
                  v-model="newUserParams.first_name"
                  type="text"
                  class="input"
                />
                <div class="line-box">
                  <div class="line"></div>
                </div>
              </label>
            </div>
            <div class="form-group col-md-6">
              <label>
                <p class="label-txt">Last Name</p>
                <input
                  v-model="newUserParams.last_name"
                  type="text"
                  class="input"
                />
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
                <input
                  v-model="newUserParams.email"
                  type="text"
                  class="input"
                />
                <div class="line-box">
                  <div class="line"></div>
                </div>
              </label>
            </div>
            <div class="form-group col-md-4">
              <label>
                <p class="label-txt">Phone Number</p>
                <input
                  v-model="newUserParams.phone_number"
                  type="text"
                  class="input"
                />
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
                  v-model="newUserParams.password_confirmation"
                  type="password"
                  class="input"
                />
                <div class="line-box">
                  <div class="line"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="form-row">
            <div class="form-group col-md-12">
              <button class="btn btn-round btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <Loading v-if="loading" />
  </div>
</template>

<script>
  import axios from "axios";
  import Loading from "../loaders/Loading";
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    name: "signup",
    components: {
      Loading
    },
    created() {
      this.onLoad();
    }
  })
  export default class Signup extends Vue {
    newUserParams = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      password_confirmation: ""
    };
    errors = [];
    loading = false;

    createUser() {
      axios
        .post("/api/users", this.newUserParams)
        .then(() => {
          alert("Signed up successfully!");
          this.loading = true;
          this.$router.push("/login");
        })
        .catch(errors => {
          this.errors = errors;
        });
    }
    onLoad() {
      this.loading = false;
      setTimeout(() => {
        if (
          this.newUserParams.first_name.length > 0 &&
          this.newUserParams.last_name.length > 0 &&
          this.newUserParams.email.length > 0 &&
          this.newUserParams.phone_number.length > 0
        ) {
          if (
            this.newUserParams.password ===
            this.newUserParams.password_confirmation
          ) {
            this.createUser();
          } else {
            alert("Please fill out all fields");
            this.newUserParams.first_name = "";
            this.newUserParams.last_name = "";
            this.newUserParams.email = "";
            this.newUserParams.phone_number = "";
            this.newUserParams.password = "";
            this.newUserParams.password_confirmation = "";
          }
        }
        this.loading = false;
      }, 1000);
    }
  }
</script>

<style scoped>
  .signup {
    min-height: 85vh;
  }
  form {
    margin: 50px auto;
    background: #52525296;
    opacity: 0.7;
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
