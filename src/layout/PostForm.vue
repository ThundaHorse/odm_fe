<template>
  <div class="postForm">
    <div class="container">
      <form class="card text-white bg-dark mt-5" v-on:submit.prevent="update()">
        <div class="card-header">
          <h1>Upload a Meme</h1>
        </div>
        <div class="card-body">
          <br />
          <div class="wrapper">
            <div class="file-upload">
              <label for="imageUpload">¯\_(ツ)_/¯ </label>
              <input
                class="form-control-file"
                id="imageUpload"
                type="file"
                v-on:change="setFile($event)"
                ref="fileInput"
              />
            </div>
          </div>
          <br />
          <h4>{{ getFileName }}</h4>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="description" class="bmd-label-placeholder"></label>
              <textarea
                v-model="newMeme.description"
                type="text"
                class="form-control"
                id="fistName"
                rows="3"
                placeholder="Description"
                style="background: transparent; color:white;"
              />
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-md btn-info" type="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.file-upload {
  height: 200px;
  width: 200px;
  border-radius: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #ffffff;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #b1f4e8 50%, black 50%);
  background-size: 100% 200%;
  transition: all 1s;
  color: black;
  font-size: 30px;
}
.file-upload:hover {
  background-position: 0 -100%;
  color: #b1f4e8;
}
input[type="file"] {
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
</style>

<script>
import { mapActions } from "vuex";

export default {
  name: "postForm",
  data: function() {
    return {
      newMeme: {
        description: "",
        image: "",
        user_id: parseInt(localStorage.getItem("user_id"))
      },
      fileName: "",
      selectedFile: "",
      loading: false,
      errors: []
    };
  },
  computed: {
    getFileName: function() {
      return this.fileName;
    }
  },
  created: function() {
    if (!localStorage.getItem("jwt")) {
      alert("Sign in to post!");
      this.$router.push("/login");
    }
  },
  methods: {
    ...mapActions(["addPost"]),
    setFile: function() {
      if (event.target.files.length > 0) {
        this.newMeme.image = event.target.files[0];
        this.fileName = event.target.files[0].name;
      }
    },
    update() {
      var params = new FormData();
      params.append("image", this.newMeme.image);
      params.append("description", this.newMeme.description);
      params.append("user_id", this.newMeme.user_id);
      this.addPost(params);
      this.loading = true;
      this.$router.push("/");
    }
  }
};
</script>
