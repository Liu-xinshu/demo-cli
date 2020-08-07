<template>
    <div id="app">
        <Earth />
    </div>
</template>

<script>
import Earth from "./components/Earth.vue";
export default {
    name: "App",
    components: {
        Earth
    }

};
</script>
<style lang="scss">
div#app {
    width: 100%;
    height: 100%;
}
</style>