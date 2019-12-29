<template>
  <div class="loading">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="loading-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="loading-ring-2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.loading-ring {
  margin-top: 50%;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loading-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(73, 248, 196) transparent transparent transparent;
}
.loading-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.loading-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.loading-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loading-ring {
  0% {
    transform: rotate(0deg);
  }
  20% {
    border-color: rgb(28, 136, 104) transparent transparent transparent;
  }
  40% {
    border-color: rgb(50, 191, 226) transparent transparent transparent;
  }
  100% {
    border-color: rgb(169, 245, 222) transparent transparent transparent;
    transform: rotate(360deg);
  }
}
.loading-ring-2 {
  margin-top: 50%;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loading-ring-2 div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: loading-ring-2 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(166, 58, 238) transparent transparent transparent;
}
.loading-ring-2 div:nth-child(1) {
  animation-delay: -0.45s;
}
.loading-ring-2 div:nth-child(2) {
  animation-delay: -0.3s;
}
.loading-ring-2 div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loading-ring-2 {
  0% {
    transform: rotate(360deg);
  }
  20% {
    border-color: rgb(46, 125, 228) transparent transparent transparent;
  }
  40% {
    border-color: rgb(50, 191, 226) transparent transparent transparent;
  }
  100% {
    border-color: rgb(243, 240, 60) transparent transparent transparent;
    transform: rotate(0deg);
  }
}
</style>

<script>
export default {
  name: "loading",
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>
