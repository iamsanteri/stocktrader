<template>
<div class="panel panel-default">
  <div class="panel-body">
    <div class="page-header">
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save & Load your Data</p>
        <p>Click on 'End Day' to begin a new Day!</p>
    </div>
    <h4>Your Funds: {{ CurrentFunds }}</h4>
  </div>
</div>
</template>
<script>

export default {
    computed: {
        CurrentFunds() {
            return this.$store.getters.getCurrentFunds;

        }
    }
}
</script>
<style>
</style>