<template>
    <div class="container">
        <Nav></Nav>
        <transition name="fade" mode="out-in" appear>
            <router-view></router-view>
        </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.4s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
