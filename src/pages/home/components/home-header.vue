<template>
    <div class="header">
        <div class="header-left iconfont">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['city'])
    }
}
</script>

<style scoped lang="less">
@import '~styles/varibles.less';
.header{
    height: 0.86rem;
    display: flex;
    background: @bgColor;
    line-height: 0.86rem;
    color: #fff;
    .header-left{
        width: 0.64rem;
        float: left;

        .back-icon{
            font-size: 0.4rem;
            text-align: center;
            display: block;
        }
    }
    .header-input{
        flex: 1;
        background: #fff;
        height: 0.64rem;
        margin-top: 0.12rem;
        margin-left: 0.2rem;
        border-radius: .1rem;
        color: #ccc;
        line-height: 0.64rem;
        padding-left: 0.2rem;
    }
    .header-right{
        min-width: 1.04rem;
        padding: 0 .1rem;
        float: right;
        text-align: center;
        color: #fff;
        .arrow-icon{
            font-size: 0.24rem;
        }
    }
}
</style>