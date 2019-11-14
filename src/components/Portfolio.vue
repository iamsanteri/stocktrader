<template>
    <div>
        <p class="lead" :style="{ display: conditionalVisibility}">You haven't bought, or do not own any stocks yet...</p>
        <div class="panel panel-danger stock-panel" v-for="(stock, index) in getUserStocks" v-bind:key="index">
            <div class="panel-heading"><h4>{{ stock.name }}</h4> (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</div>
            <div class="panel-body">
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Quantity">
                    </div>
                    <button type="submit" class="btn btn-danger">Buy</button>
                 </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            conditionalVisibility: ""
        }
    },
    computed: {
        getUserStocks: function() {
            var a = this.$store.getters.getUserStocks;
            if (a.length > 0) {
                this.conditionalVisibility = "none"; 
            }
            return a; 
        }
    }
}
</script>
<style>
</style>