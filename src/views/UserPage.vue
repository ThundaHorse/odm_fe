<template>
  <div class="userPage">
    <br />
    <h1>{{ getUser.first_name }}'s Memes</h1>
    <hr />
    <div v-for="(post, idx) in userPosts" :key="idx">
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator";
  import { mapGetters, mapActions } from "vuex";

  @Component({
    name: "userPage",
    computed: mapGetters(["getUser", "userPosts"]),
    created() {
      this.fetchUser();
      this.fetchUserPosts();
    },
    methods: {
      ...mapActions(["fetchUser", "fetchUserPosts"])
    }
  })
  export default class UserPage extends Vue {}
</script>
