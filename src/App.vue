<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <MainHeader class="page-header" />
    </transition>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <transition name="fade" mode="out-in">
      <MainFooter :class="{ '--hidden': !showFooter }" />
    </transition>
  </div>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator";
  import MainHeader from "./layout/MainHeader";
  import MainFooter from "./layout/MainFooter";
  import "./AppStyles.scss";
  import "./assets/styles/layouts/FooterStyle.scss";

  @Component({
    components: {
      MainHeader,
      MainFooter
    },
    mounted() {
      window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.onScroll);
    }
  })
  export default class App extends Vue {
    showFooter = true;
    lastScrollPosition = 0;
    scrollValue = 0;

    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
        return;
      }
      this.showFooter = currentScrollPosition > this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  }
</script>
