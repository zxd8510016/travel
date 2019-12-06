<template>
	<div class="city-list" ref="list">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrap">
						<div class="button">{{city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrap" 
						v-for="item in hot" 
						:key="item.id"
						@click="handleCityClick(item.name)"
					>
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<ul class="item-list">
					<li 
						class="item border-bottom" 
						v-for="option in item" 
						:key="option.id"
						@click="handleCityClick(option.name)"
					>{{option.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll";
import {mapState} from 'vuex';
export default {
	props:['hot','cities','letter'],
	computed:{
		...mapState(['city'])
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.list);
    },
    watch:{
        letter(){
            var element=this.$refs[this.letter][0];
            this.scroll.scrollToElement(element);
        }
	},
	methods:{
		handleCityClick(city){
			this.$store.commit('changeCity', city)
			this.$router.push('/')
		}
	}
};
</script>

<style scoped lang="less">
.border-topbottom {
	&:before {
		border-color: #ccc;
	}
	&:after {
		border-color: #ccc;
	}
}
.border-bottom {
	&:before {
		border-color: #ccc;
	}
}
.city-list {
	position: absolute;
	left: 0;
	top: 1.58rem;
	right: 0;
	bottom: 0;
	overflow: hidden;
}
.title {
	line-height: 0.54rem;
	background: #eee;
	padding-left: 0.2rem;
	color: #666;
	font-size: 0.26rem;
}
.button-list {
	padding: 0.1rem 0.6rem 0.1rem 0.1rem;
	overflow: hidden;
	.button-wrap {
		width: 33.33%;
		float: left;
		.button {
			text-align: center;
			margin: 0.1rem;
			border: 0.02rem solid #ccc;
			padding: 0.1rem 0;
			border-radius: 0.06rem;
		}
	}
}
.item-list {
	.item {
		line-height: 0.76rem;
		padding-left: 0.2rem;
	}
}
</style>