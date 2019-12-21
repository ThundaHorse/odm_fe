<template>
  <div class="footer">
    <footer class="page-footer font-small pt-4">
      <!-- Footer Text -->
      <div class="container-fluid text-center">
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col-sm-6">
            <p class="text-uppercase">
              Made with
              <img
                class="footer-img"
                src="../../public/vue.png"
                alt="Vue icon"
              />
            </p>
          </div>
          <div class="col-sm-6">
            <p>Our Daily Memes 🙏</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer {
  background-color: #a8f3e5;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 110px;
  width: 100%;
  overflow: hidden;
  opacity: 0.8;
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
  }
};
</script>
