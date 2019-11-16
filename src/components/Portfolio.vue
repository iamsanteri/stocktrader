<template>
    <div>
        <p class="lead" :style="{ display: conditionalVisibility }">You haven't bought, or do not own any stocks yet...</p>
        <template v-for="(stock, index) in getUserStocks">
            <div class="panel panel-danger stock-panel" v-bind:key="index" v-if="stock.ownedQuantity > 0">
                <div class="panel-heading"><h4>{{ stock.name }}</h4> (Price: {{ stock.price }} | Quantity: {{ stock.ownedQuantity }})</div>
                <div class="panel-body">
                    <form class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model.number="quantity[index]" @focus="buttonQue[index] = false" @blur="buttonQue[index] = true" :key="index" placeholder="Quantity">
                        </div>
                        <button type="submit" v-on:click.prevent="sellStockAmount(quantity)" :class="{disabled: buttonQue[index]}" :key="index" class="btn btn-danger">Sell</button>
                    </form>
                </div>
            </div>
        </template> 
    </div> 
</template>
<script>
export default {
    data: function() {
        return {
            // If the user owns stocks, this property is set to "none"
            conditionalVisibility: "",
            quantity: [],
            buttonQue: [true, true, true, true]
        }
    },
    computed: {
        getUserStocks: function() {
            var a = this.$store.getters.getUserStocks;
            if (this.$store.state.doesUserOwnStocks == true) {
                this.conditionalVisibility = "none";
            }
            return a;

        }
    },
    methods: {
        sellStockAmount: function(sellingQuantity) {
            this.$store.commit("sale", sellingQuantity);
            this.quantity = [];
            this.buttonQue = [true, true, true, true];
        }
    }
}
</script>
<style>
</style>