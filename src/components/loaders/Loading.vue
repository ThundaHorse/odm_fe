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

<script>
import { FingerprintSpinner, SemipolarSpinner } from "epic-spinners";

export default {
  name: "load",
  data: function() {
    return {};
  },
  components: {
    FingerprintSpinner,
    SemipolarSpinner
  },
  created: function() {},
  methods: {}
};
</script>
