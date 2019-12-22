import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp,
  faThumbsDown,
  faCommentDots
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faThumbsUp, faThumbsDown, faCommentDots);
Vue.component("font-awesome-icon", FontAwesomeIcon);

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://damp-temple-17173.herokuapp.com/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
