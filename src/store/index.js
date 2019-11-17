
import Vue from 'vue'
import Vuex from "vuex"
import Axios from "axios"
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, Axios);


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
      },
      getAllData: state => {
        return state;
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
      },
      setAllData (state, newState) {
        state.funds = newState.data.funds;
        state.marketStocks = newState.data.marketStocks; 
        state.doesUserOwnStocks = newState.data.doesUserOwnStocks;  
      }
    },
    actions: {
      saveData() {
        Vue.axios.put("https://stocktrader-ca973.firebaseio.com/data.json",
          this.getters.getAllData 
        )
        .then(function(res) {
          alert("Your data has been saved successfully!");
        })
        .catch(function (err) {
          alert("Saving the data failed. See console for more details.");
          console.log(err);
        })
      },
      loadData( {commit} ) {
        Vue.axios.get("https://stocktrader-ca973.firebaseio.com/data.json")
          .then(function (res) {
            alert("Your data has been loaded successfully!");
            commit("setAllData", res);
          })
          .catch(function (err) {
            alert("Retrieving the data failed. See console for more details.");
            console.log(err);
          })
      }
    }
  })