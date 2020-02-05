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
  import { Component, Vue } from "vue-property-decorator";
  import MainHeader from "./layout/MainHeader";
  import "./AppStyles.scss";

  @Component({
    components: {
      MainHeader
    }
  })
  export default class App extends Vue {}
</script>
