<template>
    <div class="container">
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import Nav from "./components/Nav.vue";
    import Home from "./components/Home.vue";
    import Portfolio from "./components/Portfolio.vue";

    export default {
        components: {
            Nav,
            Home,
            Portfolio
        }
    }
</script>

<style>

</style>
