import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path:"/destination/:id/:slug",
    name:"destination.show",
   component: () => 
   import(/*webpackChunkName:destinationShow*/ "@/views/DestinationShowView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass:"vue-school-router-active",
});

export default router;
// why we need to split code: ( lazy-load )  
/**
 * It will improve performance of app because it only load file when it need. 
 *  
 * ### And how to split code by vueJs ####
 *  use dynamic import to import vue component
 * 
 * webpack provide a magic comment help you name the file you split....
 * 
 */