import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import MoviesView from "../views/MoviesView.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Movies from "../components/Movies.vue"

Vue.use(VueRouter);

// const routes: Array<RouteConfig> = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//   },
//   {
//     path: "/movies",
//     name: "Movies",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: Movies
//   }
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorld
    },
    {
      path: "/movies",
      name: "Movies",
      component: Movies
    },
    {
      path: '/a',
      beforeEnter() {location.href = "http://localhost:3000"
          // Put the full page url including the protocol http(s) below
          
      }
  }

  ]
});

export default router;
