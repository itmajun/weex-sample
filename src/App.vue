<template>
    <transition name="router-fade" mode="out-in">
        <router-view style="flex:1"></router-view>
    </transition>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        justify-content: center;
        align-items: center;
    }
    .logo {
        width: 424px;
        height: 200px;
    }
    .greeting {
        margin-top: 70px;
        font-size: 50px;
        color: #41B883;
    }
    .message {
        margin: 30px;
        font-size: 32px;
        color: #727272;
    }
</style>
