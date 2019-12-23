<template>
  <nav class="navbar fixed-bottom">
    <div class="col-sm">
      <p class="text-uppercase">
        Made with
        <img class="footer-img" src="../../public/vue.png" alt="Vue icon" />
      </p>
    </div>
    <div class="col-sm"></div>
    <div class="col-sm">
      <p>Our Daily Memes 🙏</p>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  border-top: #333a40 1px solid;
  margin-bottom: 0;
  position: absolute;
  opacity: 0.7;
  background-color: #9ae0d3;
}
.footer-img {
  width: 10%;
  height: auto;
}
p {
  color: black;
}
</style>

<script>
export default {
  name: "MainFooter",
  data() {
    return {};
  },
  methods: {}
};
</script>
