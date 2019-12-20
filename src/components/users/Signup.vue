<template>
  <div class="signup">
    <div class="container">
      <h1>Sign Up</h1>
      <hr />
      <form v-on:submit.prevent="createUser()">
        <div class="form-row">
          <div class="form-group col-md-6">
            <p>First Name</p>
            <label for="first" class="bmd-label-placeholder"></label>
            <input
              v-model="newUserParams.first"
              type="text"
              class="form-control"
              placeholder="First Name"
            />
          </div>
          <div class="form-group col-md-6">
            <p>Last Name</p>
            <label for="last" class="bmd-label-placeholder"></label>
            <input
              v-model="newUserParams.last"
              type="text"
              class="form-control"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-8">
            <p>Email Address</p>
            <label for="email" class="bmd-label-placeholder"></label>
            <input
              v-model="newUserParams.email"
              type="text"
              class="form-control"
              placeholder="Email Address"
            />
          </div>
          <div class="form-group col-md-4">
            <p>Phone Number</p>
            <label for="phone" class="bmd-label-placeholder"></label>
            <input
              v-model="newUserParams.phone"
              type="text"
              class="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <p>Password</p>
            <label for="password" class="bmd-label-placeholder"></label>
            <input
              v-model="newUserParams.password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div class="form-group col-md-6">
            <p>Confirm Password</p>
            <label
              for="passwordConfirmation"
              class="bmd-label-placeholder"
            ></label>
            <input
              v-model="newUserParams.passwordConfirmation"
              type="password"
              class="form-control"
              placeholder="Confirm Password"
            />
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

<style></style>

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
    // validatePhone(input) {},
    // validateEmail(input) {}
  }
};
</script>
