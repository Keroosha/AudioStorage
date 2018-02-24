import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import AutoStorage from "./VuexStorage/VuexGenerator";
import router from "./Router";

Vue.use(Vuex);

new Vue({
  el: "#app",
  render: h => h(App),
  store: AutoStorage([]),
  router
});
