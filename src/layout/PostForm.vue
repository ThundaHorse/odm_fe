<template>
  <div class="postForm">
    <h1>Placeholder</h1>
    <div class="container">
      <form v-on:submit.prevent="update()">
        <div>
          <label for="imageUpload"></label>
          <input
            class="form-control-file"
            id="imageUpload"
            type="file"
            v-on:change="setFile($event)"
            ref="fileInput"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <p style="text-align: left; color: black;">First Name</p>
            <label for="description" class="bmd-label-placeholder"></label>
            <input
              v-model="newMeme.description"
              type="text"
              class="form-control"
              id="fistName"
              placeholder="Description"
            />
          </div>
        </div>
        <button class="btn btn-raised btn-primary" type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style></style>

<script>
import { mapActions } from "vuex";

export default {
  name: "postForm",
  data: function() {
    return {
      newMeme: {
        description: "",
        image: "",
        user_id: 1
      },
      errors: []
    };
  },
  created: function() {},
  methods: {
    setFile: function() {
      if (event.target.files.length > 0) {
        this.newMeme.image = event.target.files[0];
      }
    },
    update() {
      var params = new FormData();
      params.append("image", this.newMeme.image);
      params.append("description", this.newMeme.description);
      params.append("user_id", this.newMeme.user_id);
      this.addPost(params);
    },
    ...mapActions(["addPost"])
  }
};
</script>
