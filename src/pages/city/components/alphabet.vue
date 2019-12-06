<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="item in letters" 
            :key="item" 
            @click="handleClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            :ref="item"
        >{{item}}</li>
    </ul>
</template>

<script>
export default {
    props:['cities'],
    data(){
        return {
            touchStatus:false
        }
    },
    updated(){
        this.startY=this.$refs['A'][0].offsetTop;
    },
    computed:{
        letters(){
            let letters=[];
            for(var key in this.cities){
                letters.push(key);
            }
            return letters;
        }
    },
    methods:{
        handleClick(e){
            let letter=e.target.innerText;
            this.$emit('change',letter);
        },
        handleTouchStart(){
            this.touchStatus=true;
        },
        handleTouchMove(e){
            if(this.touchStatus){
                let touchY=e.changedTouches[0].clientY-79;
                let index=Math.floor((touchY-this.startY)/20);
                if(index >=0 && index<this.letters.length){
                    this.$emit('change',this.letters[index]);
                }
            }
        },
        handleTouchEnd(){
            this.touchStatus=false;
        }
    }
}
</script>

<style scoped lang="less">
@import '~styles/varibles.less';
.list{
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .item{
        line-height: .4rem;
        text-align: center;
        color: @bgColor
    }
}
</style>