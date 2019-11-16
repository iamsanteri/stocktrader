
import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
      funds: 10000,
      marketStocks: [
        { name : "BMW", price : 0, ownedQuantity: 0},
        { name : "Google", price : 0, ownedQuantity: 0},
        { name : "Apple", price : 0, ownedQuantity: 0},
        { name : "Twitter", price : 0, ownedQuantity: 0}
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
          var xy = state.marketStocks[i].price * stocksToPurchase[i];

          if (xy > state.funds) {
            alert("You don't have enough funds to purchase this stock amount, get your stuff together!");
          } else {
            state.funds -= xy;
            state.marketStocks[i].ownedQuantity += stocksToPurchase[i];
          } 

          if (state.marketStocks[i].ownedQuantity > 0) {
            state.doesUserOwnStocks = true;
          }
        }
      },
      sale (state, stocksToSell) {
        for (let i = 0; i < state.marketStocks.length; i++) {
          if (stocksToSell[i] === undefined) {
            stocksToSell[i] = 0;
          }
          if (state.marketStocks[i].ownedQuantity < stocksToSell[i]) {
            alert("You don't own enough stocks to sell this quantity. Sell no more than what you have!");
          } else {
            var xz = state.marketStocks[i].price * stocksToSell[i];
            state.marketStocks[i].ownedQuantity -= stocksToSell[i];

            state.funds += xz;
          }
        }
      },
      stockPriceRandomization (state) {
        for (let i = 0; i < state.marketStocks.length; i++) {
          state.marketStocks[i].price = Math.floor(Math.random() * 100)
        }
      }
    },
    actions: {
      
    }
  })