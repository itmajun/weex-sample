<template>
    <div class="wrapper">
        <image :src="logo" class="logo"></image>
        <text class="greeting">2222222</text>
        <text class="message">22222222222.</text>
        <text @click="jump">go to home</text>
    </div>
</template>

<script>
    import router from '../../router'
    export default {
        data () {
            return {
                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
            }
        },
        methods: {
            jump() {
                console.log(22222)
                router.push('/sample')
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
