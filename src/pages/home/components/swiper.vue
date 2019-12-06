<template>
	<swiper :options="swiperOption" v-if="list.length">
        <swiper-slide v-for="item in list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    props:['list'],
    data(){
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: 3000,
                autoplayDisableOnInteraction: false
            }
        }
    }
};
</script>

<style lang="less">
.swiper-img{
    width: 100%;
}
.swiper-pagination-bullet-active{
    background: #fff
}
</style>