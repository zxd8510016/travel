<template>
    <div class="container" @click="galleryClickHandle">
        <div class="wrap">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallery-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        imgs:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observer: true,
                observeParents: true
            }
        }
    },
    methods:{
        galleryClickHandle(){
            this.$emit('close');
        }
    }
}
</script>

<style scoped lang="less">
.swiper-container{
    overflow: inherit
}
.container{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    .wrap{
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        .gallery-img{
            width: 100%;
        }
        .swiper-pagination{
            color: #fff;
            bottom: -1rem;
        }
    }
}
</style>