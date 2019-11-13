
import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      funds: 10000,
      marketStocks: [
        { name : "BMW", price : 10 },
        { name : "Google", price : 20 },
        { name : "Apple", price : 30 },
        { name : "Twitter", price : 40 }
      ],
      userStocks: [
        { name: "Mocked", price: 999}
      ]
    },
    getters: {
      getCurrentFunds: state => {
        return state.funds + " $";
      },
      getMarketStocks: state => {
        return state.marketStocks;
      },
      getUserStocks: state => {
        return state.userStocks;
      }
    },
    mutations: {
  
    }
  })