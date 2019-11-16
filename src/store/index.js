
import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
      funds: 10000,
      marketStocks: [
        { name : "BMW", price : 10, ownedQuantity: 0},
        { name : "Google", price : 20, ownedQuantity: 0},
        { name : "Apple", price : 30, ownedQuantity: 0},
        { name : "Twitter", price : 40, ownedQuantity: 0}
      ],
      doesUserOwnStocks: false
    },
    getters: {
      getCurrentFunds: state => {
        return state.funds + " $";
      },
      getMarketStocks: state => {
        return state.marketStocks;
      },
      getUserStocks: state => {
        return state.marketStocks;
      }
    },
    mutations: {
      purchase (state, stocksToPurchase) {
        for (let i = 0; i < state.marketStocks.length; i++) {
          if (stocksToPurchase[i] === undefined) {
            stocksToPurchase[i] = 0;
          }
          state.marketStocks[i].ownedQuantity += stocksToPurchase[i];
          if (state.marketStocks[i].ownedQuantity > 0) {
            state.doesUserOwnStocks = true;
          }
        }
      }
    }
  })