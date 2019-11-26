<template>
    <div class="home">
        <HomeHeader/>
        <HomeSwiper/>
        <HomeIcons/>
    </div>
    
</template>

<script>
import HomeHeader from '../components/home-header'
import HomeSwiper from '../components/swiper'
import HomeIcons from '../components/icons'
export default {
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>

<style scoped>

</style>