import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import 'es6-promise/auto'

Vue.use(VueRouter); 

import {store} from "./store"

import Home from "./components/Home.vue";
import Portfolio from "./components/Portfolio.vue";
import Stocks from "./components/Stocks.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio },
    { path: "/stocks", component: Stocks }
  ]
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
