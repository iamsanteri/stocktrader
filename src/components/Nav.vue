<template>
    <nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="this.ariaExpanded">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <li><router-link to="/portfolio">Portfolio</router-link></li>
            <li><router-link to="/stocks">Stocks</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#" @click="endDayCall">End Day</a></li>
            <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li><a href="#" @click="startSavingData">Save</a></li>
                <li><a href="#" @click="startLoadingData">Load</a></li>
            </ul>
            </li>
            <li><p class="navbar-text"><b>Funds: {{ CurrentFunds }}</b></p></li>
        </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    </nav>
</template>

<script>

export default {
    data: function() {
        return {
        }
    },
    computed: {
        CurrentFunds() {
            return this.$store.getters.getCurrentFunds;
        }
    },
    methods: {
        endDayCall: function() {
            this.$store.commit("stockPriceRandomization");
        },
        startSavingData: function() {
            this.$store.dispatch("saveData");
        },
        startLoadingData: function() {
            this.$store.dispatch("loadData");
        }
    },
    beforeCreate() {
        this.$store.commit("stockPriceRandomization");
    }
}

</script>

<style>
.navbar {
    margin-top: 3%;
}
</style>