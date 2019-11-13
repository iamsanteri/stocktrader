<template>
    <div>
        <p class="lead" :style="{ display: conditionalVisibility}">You haven't bought, or do not own any stocks yet...</p>
        <div class="panel panel-success stock-panel" v-for="stock in getUserStocks" v-bind:key="stock">
            <div class="panel-heading"><h4>{{ stock.name }}</h4> (Price: {{ stock.price }})</div>
            <div class="panel-body">
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Quantity">
                    </div>
                    <button type="submit" class="btn btn-success">Buy</button>
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
                console.log("What the hell!");
            }
            return a; 
        }
    }
}
</script>
<style>
</style>