import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Vuezapp from "../views/Vuezapp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/user",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/User.vue")
  },
  {
    path: "/vuezapp",
    name: "Vuezapp",
    component: Vuezapp
  }
];

const router = new VueRouter({
  routes
});

export default router;
