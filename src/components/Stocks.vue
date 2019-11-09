<template>
    <div>
        <div class="panel panel-success" v-for="stock in stocks" v-bind:key="stock">
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
            stocks: [
                { name : "BMW", price : 10 },
                { name : "Google", price : 20 },
                { name : "Apple", price : 30 },
                { name : "Twitter", price : 40 }
            ]
        }
    }
}
</script>

<style scoped>

h4 {
    display: inline; 
}
.panel {
    margin-left: 2%;
    margin-right: 2%;
    float: left;
    width: 46%;
}

</style>