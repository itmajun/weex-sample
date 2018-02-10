<template>
    <div>
        <wxc-minibar
            :title="title"
            :backgroud-color="backgroundColor"
            v-if="!share"
        ></wxc-minibar>
        <wxc-minibar
                :title="title"
                :backgroud-color="backgroundColor"
                v-if="share"
                :right-text="rightText"
        ></wxc-minibar>
    </div>
</template>

<script>
    import {WxcMinibar} from 'weex-ui'

    export default {
        props: {
            share: {
                type: Boolean,
                required: true
            }
        },
        data: function(){
            return {
                height: '450px',
                title: '我是个导航',
                backgroundColor: '#fff',
                rightText: '分享'
            }
        },
        components: {
            WxcMinibar
        }
    }
</script>

<style>
    .wrap {
        height: 350px;
        width: 750px;
    }
</style>