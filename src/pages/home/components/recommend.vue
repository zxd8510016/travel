<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <router-link 
                tag="li" 
                class="item border-bottom" 
                v-for="item in list" 
                :key="item.id"
                :to="'/detail/'+item.id"
            >
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props:['list']
}
</script>

<style scoped lang="less">
@import "~styles/mixins.less";
.recommend-title{
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    margin-top: .2rem;
}
.item{
    display: flex;
    height: 1.9rem;
    .item-img{
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
    }
    .item-info{
        flex: 1;
        padding: .1rem;
        overflow: hidden;
        .item-title{
            line-height: .54rem;
            font-size: .32rem;
            .ellipsis();
        }
        .item-desc{
            line-height: .4rem;
            color: #ccc;
            .ellipsis();
        }
        .item-btn{
            background: #ff9300;
            padding: 0 .2rem;
            border-radius: .06rem;
            margin-top: .16rem;
            color: #fff;
            line-height: .44rem;
        }
    }
}
</style>