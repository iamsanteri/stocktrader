<template>
    <div>
        <div class="panel panel-success stock-panel" v-for="(stock, index) in getMarketStocks" v-bind:key="index">
            <div class="panel-heading"><h4>{{ stock.name }}</h4> (Price: {{ stock.price }})</div>
            <div class="panel-body">
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="quantity[index]" :key="index" placeholder="Quantity">
                    </div>
                    <button type="button" v-on:click="addNewStocks" class="btn btn-success">Buy</button>
                 </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            // Is an array in order of which list of stocks appear and position in an array matches the quantity ordered for a particular stock. 
            quantity: []
        }
    },
    computed: {
        getMarketStocks: function() {
            return this.$store.getters.getMarketStocks;
        }
    },
    methods: {
        addNewStocks: function() {
            this.$store.commit("purchase", {
                stocks: this.quantity
            }) 
            this.quantity = [];
            console.log("Method triggered!");
        }
    }
}
</script>

<style>

h4 {
    display: inline; 
}
.stock-panel {
    margin-left: 2%;
    margin-right: 2%;
    float: left;
    width: 46%;
}

</style>