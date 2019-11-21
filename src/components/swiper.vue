<template>
	<swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-img" :src="item.url" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
    data(){
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList:[
                {
                    id:'0001',
                    url:'http://img1.qunarzz.com/piao/fusion/1809/3e/52e1824f1ace7202.jpg_750x200_ac90db3f.jpg'
                },
                {
                    id:'0002',
                    url:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/14c86b17f55e4b639776b497178f8ef7.jpg_750x200_0d6b121a.jpg'
                }
            ]
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