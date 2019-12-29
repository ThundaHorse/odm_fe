<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <MainHeader class="page-header" />
    </transition>
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view />
    </transition>
    <MainFooter class="page-footer" />
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100%;
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.page-header,
.page-footer {
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

<script>
import MainFooter from "./layout/MainFooter";
import MainHeader from "./layout/MainHeader";

export default {
  components: {
    MainFooter,
    MainHeader
  },
  data() {
    return {
      prevHeight: 0
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
};
</script>
