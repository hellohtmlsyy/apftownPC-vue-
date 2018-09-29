<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner por">
			<img src="../../static/img/new_ban1.jpg" />
		</div>
		<div class="new_list">
			<div class="w">
				<div class="titBox clearfix">
					<div class="fl fs-20 tac" :class="town_link == 1? 'new_town' : 'new_trade' " @click="gonewTown()">小镇动态</div>
					<div class="new_trade fl fs-20 tac" :class="{new_tradeLink : trade_link == 1}" @click="gonewTrade()">特区金融</div>
					<div class="new_trade fl fs-20 tac" :class="{free_traLink : tradeLink == 1}" @click="goTrade()">自由贸易港</div>
				</div>
			</div>
			<div class="news clearfix" id="new">
				<div class="w">
					<div class="news_con clearfix">
						<div class="news_box clearfix" v-for="(item,index) in newsList" :key="index">
							<div class="news_conL div cp" @click="goNewsDetail(item.id)">
								<img :src="item.img" alt="">
							</div>
							<div class="news_conR div cp" @click="goNewsDetail(item.id)">
								<a href="javascript:;">
									<div class="dataBox">
										<span class="fs-24 fw-6" :class="news_color == 2? 'news_color2': ( news_color == 3? 'news_color3' : 'news_color5' )">{{item.createdTime[0]}}</span>
										<span class="fs-18" :class="news_color == 2? 'news_color2': ( news_color == 3? 'news_color3' : 'news_color5' )">/{{item.createdTime[1]}}</span>
										<span class="news_color4 fs-14">/{{item.createdTime[2]}}</span>		
									</div>
									<h3 class="col-33 fs-18 mb-8 fw-6 text-line-2 break">{{item.title}}</h3>
									<span class="col-62 new_text text-line-3 break span">{{item.subTitle}}</span>
								</a>
							</div>
						</div>
					</div>
					<!--暂无数据-->
					<!--<paginate
					    v-model="page"
					    :page-count="20"
					    :page-range="3"
					    :margin-pages="2"
					    :click-handler="clickCallback"
					    :prev-text="'Prev'"
					    :next-text="'Next'"
					    :container-class="'pagination'"
					    :page-class="'page-item'">
				  	</paginate>-->
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
				new_trade: false,//行业新闻
				new_town: true,//小镇动态
				index: 2,
				trade_link: 0,
				tradeLink: 0,
				town_link: 1,
				news_color: 2,
				newsList: [],
				pageNum: 1,
				numPerPage: 20,
				category: 10,
				page: 10,
			}
		},
		methods: {
			gonewTown(){//小镇动态
				this.trade_link = 0;
				this.tradeLink = 0;
				this.town_link = 1;
				this.news_color = 2;
				this.category = 10;
				this.getNewsData();
			},
			gonewTrade(){//特区金融
				this.trade_link = 1;
				this.tradeLink = 0;
				this.town_link = 0;
				this.news_color = 3;
				this.category = 20;
				this.getNewsData();
			},
			goTrade(){//自由贸易港
				this.trade_link = 0;
				this.tradeLink = 1;
				this.town_link = 0;
				this.news_color = 1;
				this.category = 30;
				this.getNewsData();
			},
			getNewsData(){
				this.$axios.get(this.$root.urlPath.NEW + '/pc/news/newsList',{
					params: {
						pageNum: this.pageNum,
						numPerPage: this.numPerPage,
						category: this.category,
					}
				})
				.then(res=>{
					let data = res.data.data.newsVOS;
					this.newsList = data;
					for(var i in this.newsList) {
						this.newsList[i].createdTime = getTime1( this.newsList[i].createdTime );
						this.newsList[i].createdTime = this.newsList[i].createdTime.split('-')
					}
					if(res.data.data == '暂无数据'){
						this.$layer.msg('暂无数据');
					}
				})
				.catch(err=>{console.log(err)})
			},
			goNewsDetail(id){
				location.href= this.$root.urlPath.APF + '/newsDetail?id=' + id;
			}
		},
		mounted(){
			this.getNewsData();
		},
	}
</script>
<style scoped>
	.mb-8{
		margin-bottom: 8px;
	}
	.news .w{
		width:1200px;
	}
	.top_banner {
		width: 100%;
		overflow: hidden;
	}
	.top_banner img {
		width: auto;
		margin: 0 50%;
		transform: translateX(-50%);
	}
	.new_list .titBox {
		padding: 40px 0;
	}
	.new_list .new_town,
	.new_list .new_trade {
	    width: 128px;
    	padding: 8px 0;
		border-radius: 5px;
		margin-right: 28px;
		cursor: pointer;
	}
	.new_list .new_town {
		border: 1px solid #7d4698;
		color: #7d4698;
	}
	.new_list .new_trade {
		border: 1px solid #333;
		color: #333;
	}
	.new_list .new_tradeLink{
	    border: 1px solid #e5004f;
	    color: #e5004f;
	}
	.new_list .free_traLink{
	    border: 1px solid #52a3ed;
	    color: #52a3ed;
	}
	
	.news_con .div {
		float: left;		
		height: 158px;
	}
	.news_con .div:nth-child(odd){
		width: 240px;
	}
	.news_con .div:nth-child(even){
		width: 335px;
		padding-left: 20px;		
	}
	.news_con .news_box{
		display: inline-block;
	}
	.news_con .news_box:nth-child(odd){
		margin-right: 40px;
	}
	
	@media only screen and (min-width: 991px) and (max-width: 1199px) {
		.news_con .div {
			width:24.1%;
		}
	}
	.news_con .news_conR h3 {
		line-height: 23px;
	}
	.news_con .news_conR .span{
		line-height: 17px;
	}
	.news_con .news_conL img {
		width: 100%;
	}
	.news_con .div {
		color: #626262;
		font-size: 14px;
		line-height: 22px;
		font-weight: 400;
	}
	.news_color2 {
		color: #7d4698;
	}	
	.news_color3 {
		color: #e5004f;
	}	
	.news_color4 {
		color: #898989;
	}
	.news_color5{
		color: #52a3ed;
	}
</style>