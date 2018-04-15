import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import AutoStorage from "./VuexStorage/VuexGenerator";
import router from "./Router";

import AudioLibrary from "./VuexStorage/audioLibrary";

Vue.use(Vuex);

new Vue({
  el: "#app",
  render: h => h(App),
  store: AutoStorage([
    new AudioLibrary()
  ]),
  router
});
