<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="newsDetail">
			<div class="w">
				<div class="crumbs">
					<ul class="clearfix">
						<li class="fl">
							<router-link class="pr-5 col-33 fs-14" :to="{ path : '/home' }">首页&nbsp;＞</router-link>
						</li>
						<li class="fl">
							<router-link class="pr-5 pl-5 col-33 fs-14" :to="{ path : '/news' }">新闻&nbsp;＞</router-link>
						</li>
						<li class="fl">
							<a class="pr-5 pl-5 col-pri fs-14" href="javascript:;">正文</a>
						</li>
					</ul>
				</div>
				<div class="clearfix">
					<!--left-->
					<div class="pd-0 fl detail">
						<div class="bg-white new-page">
							<h3 class="fs-36 fw-6 let-spa-2 col-33 pb-15 mt-10">{{list.title}}</h3>
							<p class="fs-12 col-666 line-h-20">{{list.subTitle}}</p>
							<div class="fs-12 line-h-20 clearfix pt-10 bor-b-l pb-10">
								<p class="fl">
									<span class="col-999">来源&nbsp;:&nbsp;</span>
									<span class="col-999 pd-10 mr-10">{{list.source}}</span>
									<span class="col-999">浏览&nbsp;:&nbsp;</span>
									<span class="col-999 pd-10">{{list.viewTimes}}</span>
									<span class="col-999">作者&nbsp;:&nbsp;</span>
									<span class="col-999">{{list.author}}</span>
								</p>
								<span class="fr col-999 pd-10">发布 ：{{list.updateTime}}</span>
							</div>
							<!-- 放这里 -->
							<p class="line-h-20 col-666 pd-10 text-ind news-tit">{{list.introduction}}</p>
							<!--  -->
							<div class="line-h-25 pd-10 edit" v-html="list.body">
							</div>
							<div class="clearfix pr-0">
							</div>
						</div>
					</div>
					<!--right-->
					<div class="mt-20 fl ml-15 concern">
						<div class="pt-15 pl-20 pb-20 pr-20 bg-fff bor-ccc ">
							<div class="full-w por pb-30 pt-9 ">
								<div class="line "></div>
								<div class="fs-18 poa relevant pl-10 pr-10 bg-fff ">相关</div>
							</div>
							
							<div class="full-w por cp aaa">
								<div class=" pro-img-2">
									<a href="javascript:void(0);" @click="goDetail( list2.id )">
										<img :src="list2.img" class="full-w full-h ">
									</a>
								</div>
								<a href="javascript:void(0);" @click="goDetail( list2.id )">
									<p class="tac poa full-w pos-l-0 pos-b-0 rgba-50 fs-14 line-h-20 pt-5 pb-5 col-ff text-overflow ">{{list2.title}}</p>
								</a>
							</div>
							
							<!--循环除去第一条其他-->
										 <!--v-for="(item,index) in list2" :key="index"-->
							<div class=" full-w clearfix pt-20 cp" v-for="(item,index) in list3" :key="index">
								<a href="javascript:void(0);" @click="goDetail( item.id )">
									<div class="pd-0 fl relevantL">
										<img :src="item.img">
									</div>
								</a>
								<div class="pr-0 fr relevantR">
									<a href="javascript:void(0);" @click="goDetail( item.id )">
										<p class="line-h-20 text-line-3 col-555 fs-14 word_brak ">{{item.title}}</p>
									</a>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>

		</div>
		<m-footer></m-footer>
	</div>
</template>

<script>
	import { getTime1 } from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				index: 2,
				list: [],
				list2: [],
				list3: [],
				edit: 0,	
				id: this.$route.query.id,
			}
		},
		methods: {
			getData(){
				this.$axios.get(this.$root.urlPath.NEW + '/pc/news/newsInfo',{
					params:{
						id: this.id,
					},
				})
				.then(res=>{
					let data = res.data.data;
					this.list = data;
					this.list.updateTime = getTime1( this.list.updateTime )
					this.list2 = data.newsVOS[0];
					this.list3 = data.newsVOS.slice(1,data.newsVOS.length);
				}).catch(err=>{console.log(err)})
			},
			goDetail(id){
				location.href = this.$root.urlPath.APF + '/newsDetail?id=' + id;
			}
		},
		mounted(){
			this.getData();
		},
	}
</script>

<style scoped>
	img {
	    max-width: 100%;
	}
	.pr-0 {
	    padding-right: 0;
	}
	.pr-5 {
		padding-right: 5px;
	}
	.pl-5 {
		padding-left: 5px;
	}
	.pb-5 {
	    padding-bottom: 5px;
	}
	.pb-15 {
	    padding-bottom: 15px;
	}
	.pb-10 {
	    padding-bottom: 10px;
	}
	.pt-10 {
	    padding-top: 10px;
	}
	.pd-10 {
	    padding: 10px;
	}
	.line-h-20 {
	    line-height: 20px;
	}
	.line-h-25 {
	    line-height: 25px;
	}
	.bor-b-l {
	    border-bottom: 1px solid #EBEBEB;
	}
	.ml-15{
		margin-left: 15px;
	}
	.mt-10 {
	    margin-top: 10px;
	}
	.let-spa-2 {
	    letter-spacing: 2px;
	}
	.col-pri,
	.col-pri a {
		color: #8b3c8c;
	}
	.col-999, .col-999 a, a.col-999 {
	    color: #999;
	}
	.bg-white {
	    background: #fff;
	}
	.news-tit {
	    background: #f7f2e0;
	}
	.newsDetail {
		border-top: 1px solid #c3c3c3;
	}
	.newsDetail .crumbs {
		padding: 20px;
	}
	.newsDetail .detail{
		width: 877px;
	}
	.newsDetail .concern{
		width: 287.5px;
	}
	.newsDetail .concern .relevantL{
		width: 105px;
		height: 60px;
	}
	.newsDetail .concern .relevantL img{
		width: 100%;
		height: 60px;
	}
	.newsDetail .concern .relevantR{
		width: 128px;
	}
	.new-page {
	    padding: 80px 80px 40px 80px;
	    position: relative;
	    border: 1px solid #ccc;
	}
		
	/*右*/
	.bg-fff {
	    background: #fff;
	}
	.bor-ccc {
	    border: 1px solid #ccc;
	}
	.pb-20 {
	    padding-bottom: 20px;
	}
	.pr-20 {
	    padding-right: 20px;
	}
	.pt-15 {
	    padding-top: 15px;
	}
	.pt-9 {
	    padding-top: 7px;
	}
	.pb-30 {
	    padding-bottom: 30px;
	}
	.pr-10 {
	    padding-right: 10px;
	}
	.pd-0 {
	    padding: 0;
	}
	.full-w {
	    width: 100% !important;
	}
	.line {
	    width: 100%;
	    height: 1px;
	    background: #d2d2d2;
	}
	.relevant {
	    left: 87px;
	    top: -5px;
	}
	.rgba-50 {
	    background: rgba(0, 0, 0, 0.5);
	}
	.pos-b-0 {
	    bottom: 0px;
	}
	.pos-l-0 {
	    left: 0px;
	}
	.text-overflow {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
</style>