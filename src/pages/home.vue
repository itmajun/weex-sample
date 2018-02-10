<template>
    <div>
       <head-top :share="false" ></head-top>
        <slider class="slider size" auto-play="true">
            <div v-for="src in imageList">
                <image class="size" resize="cover" :src="src"></image>
            </div>
            <indicator class="indicator"></indicator>
        </slider>
    </div>
</template>

<script>
    import  headTop from '../components/header/headTop'
    export default {
        data (){
            return {

                imageList: [
                    'http://img1.imgtn.bdimg.com/it/u=873607890,2839552195&fm=27&gp=0.jpg',
                    'http://img5.imgtn.bdimg.com/it/u=4285939342,962680637&fm=27&gp=0.jpg',
                    'http://img4.imgtn.bdimg.com/it/u=3023556991,2754638329&fm=27&gp=0.jpg',
                    'http://img1.imgtn.bdimg.com/it/u=524494736,2134979249&fm=27&gp=0.jpg'

                ]
            }
        },
        components: {
            headTop
        }
    }
</script>

<style scoped>
    .size {
        width: 750px;
        height: 450px;
    }
    .slider {
        position: relative;
    }
    .indicator {
        justify-content:center;
        position: absolute;
        left: 0px;
        right: 0;
        bottom: 0;
        height: 60px;
        background-color: rgba(0, 0, 0, 0.3);

        itemColor: #DDDDDD;
        itemSelectedColor: rgb(0, 180, 255);
    }
</style>