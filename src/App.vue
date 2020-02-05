<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <MainHeader class="page-header" />
    </transition>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import MainHeader from "./layout/MainHeader";

  export default {
    components: {
      MainHeader
    },
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style>
  #app {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    min-height: 85vh;
  }
  .page-header {
    flex-shrink: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-property: height, opacity;
    overflow: hidden;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
