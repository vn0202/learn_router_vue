import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BrazilView from "../views/BrazilView.vue";
import HawaiiView from "@/views/HawaiiView.vue";
import JamaikaView from "@/views/JamaikaView.vue";
import ParamaView from "@/views/ParamaView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: BrazilView,
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: HawaiiView,
  },
  {
    path: "/jamaika",
    name: "jamaika",
    component: JamaikaView,
  },
  {
    path: "/parama",
    name: "parama",
    component: ParamaView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
