<template>
  <div class="load">
    <div class="container">
      <fingerprint-spinner
        class="finger-spinner"
        :animation-duration="2000"
        :size="200"
        :color="'#a8f3e5'"
      />
      <semipolar-spinner
        class="semipolar-spinner"
        :animation-duration="1500"
        :size="200"
        :color="'#b1f4e8'"
      />
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator";
  import { FingerprintSpinner, SemipolarSpinner } from "epic-spinners";

  @Component({
    name: "load",
    components: {
      FingerprintSpinner,
      SemipolarSpinner
    }
  })
  export default class Loading extends Vue {}
</script>

<style scoped>
  .container {
    width: 200px;
    height: 60%;
    position: absolute;
    top: 20%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .finger-spinner {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
  }
  .semipolar-spinner {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
  }
</style>
