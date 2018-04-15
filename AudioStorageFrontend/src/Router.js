import VueRouter from "vue-router";
import AppHeader from "./Components/Header";
import Sidemenu from "./Components/Sidemenu";

// MainApp related components
import Overview from "./Components/Overview";
import ImageGrid from "./Components/OverviewComponents/ImageGrid";

// Welcome related components
import Welcome from "./Components/WelcomeComponents/Welcome";
import WelcomeDefault from "./Components/WelcomeComponents/WelcomeDefault";
import WelcomeLogin from "./Components/WelcomeComponents/WelcomeLogin";

import Vue from "vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    // Страница входа
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
    // Главная страница
    {
      path: "/App",
      name: "MainApp",
      components: {
        default: Overview,
        "header": AppHeader,
        "sideMenu": Sidemenu
      },
      children: [
        {
          path: "/",
          components: {
            "ViewType": ImageGrid
          }
        }
      ]
    }
  ]
});
