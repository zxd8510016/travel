<template>
    <div>
        <div class="search">
            <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
        </div>
        <div class="search-content" v-show="keyword" ref="search">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
    props:['cities'],
    data(){
        return {
            keyword:'',
            list:[]
        }
    },
    methods:{
        handleCityClick(city){
            this.$store.commit('changeCity', city)
            this.$router.push('/')
		}
    },
    watch:{
        keyword(){
            const result=[];
            for(var key in this.cities){
                this.cities[key].forEach(value => {
                    if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
                        result.push(value);
                    }
                })
            }
            this.list=result;
        }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.search);
    }
}
</script>

<style scoped lang="less">
@import '~styles/varibles.less';
.search{
    height: .72rem;
    padding: 0 .1rem;
    background: @bgColor;

    .search-input{
        width: 100%;
        height: .62rem;
        line-height: .62rem;
        text-align: center;
        border-radius: .06rem;
        color: #666;
        padding: 0 .1rem;
        box-sizing: border-box;
    }
}
.search-content{
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    z-index: 1;
    overflow: hidden;
    .search-item{
        line-height: .62rem;
        padding-left: .2rem;
        color: #666;
        background: #fff;
    }
}
</style>