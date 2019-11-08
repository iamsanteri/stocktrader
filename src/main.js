import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

Vue.use(VueRouter); 

import Home from "./components/Home.vue";
import Portfolio from "./components/Portfolio.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
