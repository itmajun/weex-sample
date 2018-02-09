<template>
    <div class="wrapper">
        <image :src="logo" class="logo"></image>
        <text class="greeting">1111111</text>
        <text class="message">1111111111111111.</text>
        <text @click="jump">go to home {{version}}</text>
    </div>
</template>

<script>
    import router from '../../router'
    import {mapState, mapActions} from 'vuex'
    export default {
        data () {
            return {
                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
            }
        },
        mounted(){
            this.changeVersion('2.0')
        },
        computed: {
            ...mapState([
                'version'
            ])
        },
        methods: {
            ...mapActions([
                'changeVersion'
            ]),
            jump() {
                console.log(this.$store)
                // router.push('/sample2')
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
