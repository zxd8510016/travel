<template>
	<div>
		<DetailBanner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"/>
		<DetailHeader />
		<div class="content">
			<DetailList :list="list"/>
		</div>
	</div>
</template>

<script>
import DetailBanner from "./components/banner";
import DetailHeader from "./components/header";
import DetailList from "./components/list";
export default {
    name:'Detail',
	data() {
		return {
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[]
		};
	},
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
    },
    created(){
        this.$axios.get('/api/detail.json', {
            params:{
                id:this.$route.params.id
            }
        }).then(res=>{
            const data=res.data.data;
            this.sightName=data.sightName;
            this.bannerImg=data.bannerImg;
            this.gallaryImgs=data.gallaryImgs;
            this.list=data.categoryList;
        })
    }
};
</script>

<style scoped>
.content {
	height: 50rem;
}
</style>