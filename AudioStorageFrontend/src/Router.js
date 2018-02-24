import VueRouter from "vue-router";
import AppHeader from "./Components/Header";
import Sidemenu from "./Components/Sidemenu";

// Welcome related components
import Welcome from "./Components/WelcomeComponents/Welcome";
import WelcomeDefault from "./Components/WelcomeComponents/WelcomeDefault";
import WelcomeLogin from "./Components/WelcomeComponents/WelcomeLogin";

import Vue from "vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Welcome",
      components: {
        default: Welcome,
        "header": {},
        "sideMenu": {}
      },
      children: [
        {
          path: "/",
          component: WelcomeDefault
        },
        {
          path: "login",
          component: WelcomeLogin
        }
      ]
    },
    {
      path: "/App",
      name: "MainApp",
      components: {
        default: {},
        "header": AppHeader,
        "sideMenu": Sidemenu
      }
    }
  ]
});
