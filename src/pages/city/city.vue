<template>
    <div>
        <CityHeader/>
        <CitySearch :cities="cities"/>
        <CityList :cities="cities" :hot="hotCities" :letter="letter"/>
        <CityAlphabet :cities="cities" @change="changeHandle"/>
    </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
export default {
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    created(){
        this.$axios.get('/api/city.json').then(res => {
            const data=res.data.data;
            this.cities=data.cities;
            this.hotCities=data.hotCities;
        })
    },
    methods:{
        changeHandle(letter){
            this.letter=letter;
        }
    }
}
</script>

<style scoped>
</style>