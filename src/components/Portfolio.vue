<template>
    <div>
        <p class="lead" :style="{ display: conditionalVisibility }">You haven't bought, or do not own any stocks yet...</p>
        <template v-for="(stock, index) in getUserStocks">
            <div class="panel panel-danger stock-panel" v-bind:key="index" v-if="stock.ownedQuantity > 0">
                <div class="panel-heading"><h4>{{ stock.name }}</h4> (Price: {{ stock.price }} | Quantity: {{ stock.ownedQuantity }})</div>
                <div class="panel-body">
                    <form class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Quantity">
                        </div>
                        <button type="submit" class="btn btn-danger">Buy</button>
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
            conditionalVisibility: ""
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
    }
}
</script>
<style>
</style>