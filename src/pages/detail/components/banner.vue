<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <p class="banner-title">{{sightName}}</p>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    {{gallaryImgs.length}}
                </div>
            </div>
        </div>
        <transition name="fade">
            <Gallery :imgs="gallaryImgs" v-show="isBannerShow" @close="closeHandle"/>
        </transition>
    </div>
</template>

<script>
import Gallery from '@/common/gallery'
export default {
    props:['sightName','bannerImg','gallaryImgs'],
    data(){
        return {
            isBannerShow:false
        }
    },
    methods:{
        handleBannerClick(){
            this.isBannerShow=true;
        },
        closeHandle(){
            this.isBannerShow=false;
        }
    },
    components:{
        Gallery
    }
}
</script>

<style scoped lang="less">
.banner{
    height: 0;
    overflow: hidden;
    padding-bottom: 55%;
    position: relative;
    .banner-img{
        width: 100%;
    }
    .banner-info{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: .6rem;
        color: #fff;
        display: flex;
        background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        .banner-title{
            flex: 1;
            font-size: .32rem;
            padding: 0 .2rem;
        }
        .banner-number{
            padding: 0 .4rem;
            line-height: .32rem;
            height: .32rem;
            border-radius: .2rem;
            margin-top: .14rem;
            background: rgba(0,0,0,.8);
            font-size: .24rem;
            .banner-icon{
                font-size: .24rem;
            }
        }
    }
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
.fade-enter-active, .fade-leave-active{
    transition: .5s opacity;
}
</style>