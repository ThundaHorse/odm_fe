<template>
  <div id="app">
    <MainHeader />
    <router-view />
    <MainFooter />
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  width: 100vw;
  height: 500vh;
}
</style>

<script>
import MainFooter from "./layout/MainFooter";
import MainHeader from "./layout/MainHeader";

export default {
  components: {
    MainFooter,
    MainHeader
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
