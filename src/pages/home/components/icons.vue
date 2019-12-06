<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) in pages" :key="index">
				<div class="icon" v-for="item in page" :key="item.id">
					<div class="icon-img">
						<img :src="item.imgUrl" alt />
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	props:['list'],
	data(){
		return {
			swiperOption:{
				autoplay:false
			}
		}
	},
    computed:{
        pages(){
            let pages=[];
            this.list.forEach((item,index) => {
                let page=Math.floor(index/8);
                if(!pages[page]){
                    pages[page]=[];
                }
                pages[page].push(item);
            })
            return pages;
        }
    }
};
</script>

<style scoped lang="less">
@import "~styles/varibles.less";
@import "~styles/mixins.less";
.swiper-container {
	height: 0;
	padding-bottom: 50%;
}
.icon {
	position: relative;
	width: 25%;
	float: left;
	padding-bottom: 25%;
	overflow: hidden;
	height: 0;
	.icon-img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0.44rem;
		box-sizing: border-box;
		padding: 0.1rem;
		img {
			height: 100%;
			margin: 0 auto;
			display: block;
		}
	}
	.icon-desc {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 0.44rem;
		line-height: 0.44rem;
		color: @textColor;
        text-align: center;
        overflow: hidden;
        .ellipsis();
	}
}
</style>