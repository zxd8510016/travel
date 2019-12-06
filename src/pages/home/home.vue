<template>
    <div class="home">
        <HomeHeader/>
        <HomeSwiper :list="swiperList"/>
        <HomeIcons :list="iconList"/>
        <Recommend :list="recommendList"/>
        <Weekend :list="weekendList"/>
    </div>
    
</template>

<script>
import HomeHeader from './components/home-header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'
import {mapState} from 'vuex'
export default {
    data(){
        return {
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
            lastCity:''
        }
    },
    computed:{
        ...mapState(['city'])
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        Recommend,
        Weekend
    }, 
    methods:{
        getHomeInfo(){
            this.$axios.get('/api/home.json?city='+this.city).then(res=>{
                const data=res.data.data;
                this.swiperList=data.swiperList;
                this.iconList=data.iconList;
                this.recommendList=data.recommendList;
                this.weekendList=data.weekendList;
            })
        }
    },
    created(){
        this.getHomeInfo();
        this.lastCity=this.city;
    },
    activated(){
        if(this.lastCity!==this.city){
            this.lastCity=this.city
            this.getHomeInfo()
        }
    }
}
</script>

<style scoped>

</style>