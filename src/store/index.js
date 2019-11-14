
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
      userStocks: []
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
      purchase (state, amounts) {
        
        var parsedNumbers = amounts.stocks.map(function (x) {
          return parseInt(x);
        });

        console.log(parsedNumbers);

        state.userStocks[0] = { name : "BMW", price : parsedNumbers[0] };
        state.userStocks[1] = { name : "Google", price : parsedNumbers[1] };
        state.userStocks[2] = { name : "Apple", price : parsedNumbers[2] };
        state.userStocks[3] = { name : "Twitter", price : parsedNumbers[3] };
      }
    }
  })