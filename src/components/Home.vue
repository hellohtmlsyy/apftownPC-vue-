<template>
	<div class="home">
		<i-header :index="index"></i-header>
		<div class="top_banner">
			<!--<img src="../../static/img/banner_detail/banner3_detail.jpg" />-->
			<!--渐变-->
			<!--<div class="swiper-container">
	            <div class="swiper-wrapper">
	                <div class="swiper-slide" style="background-image:url(../../static/img/banner_detail/banner1_detail.jpg);background-size: 100 100;" @click="goDetail1()"></div>
	                <div class="swiper-slide" style="background-image:url(../../static/img/banner_detail/banner2_detail.jpg)" @click="goDetail2()"></div>       
	                <div class="swiper-slide" style="background-image:url(../../static/img/banner_detail/banner3_detail.jpg)" @click="goDetail3()"></div>              
	            </div>
	            <div class="swiper-pagination swiper-pagination-white"></div>
	        </div>-->
	        <!--轮播-->
	        <div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide cp">
						<a href="javascript:;"><img src="../../static/img/home/banner_00.jpg"/></a>
					</div>
					<div class="swiper-slide cp">
						<a href="/bannerDet1" target="_blank"><img src="../../static/img/home/banner_01.jpg"/></a>
					</div>
					<div class="swiper-slide cp">
						<a href="/bannerDet2" target="_blank"><img src="../../static/img/home/banner_02.jpg"/></a>
					</div>
					<div class="swiper-slide cp">
						<a href="/bannerDet3" target="_blank"><img src="../../static/img/home/banner_03.jpg"/></a>
					</div>
				</div>
				<div class="swiper-button-prev"></div>
    			<div class="swiper-button-next"></div>
    			<div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="homeCon">
			<div class="w">
				<div class="news">
					<div class="tit clearfix">
						<span class="line1 vam"></span>
						<span class="line2 vam"></span>
						<span class="text vam fs-24 pl-10">新闻动态</span>
						<a href="javascript:;" class="more fr vab fs-14" @click="goMore('/news')">MORE></a>
					</div>
					<div class="con clearfix">
						<div class="dynamic" v-for="(item,index) in newsList" :key="index">
							<div class="dynamicl cp" @click="goNewsDetail(item.id)">
								<img :src="item.img" />
							</div>
							<div class="dynamicr por cp" @click="goNewsDetail(item.id)">
								<span class="fs-12 col-ff townDyn tac" :class="item.category == 10? 'bg-town': ( item.category == 20? 'bg-fin': 'bg-tra' ) ">{{ item.category == 10? '小镇动态': ( item.category == 20? '特区金融': '自由贸易港' ) }}</span>
								<div class="fs-18 lh-24 text-line-3">{{item.title}}</div>
								<div class="fs-12 col-89 poa data">{{item.createdTime}}</div>
							</div>
						</div>
					</div>
				</div>

				<div class="industry">
					<div class="tit clearfix">
						<span class="line1 vam"></span>
						<span class="line2 vam"></span>
						<span class="text vam fs-24 pl-10">产业服务</span>
						<a href="javascript:;" class="more fr vab fs-14" @click="goMore('/enterPark')">MORE></a>
					</div>
					<div class="con clearfix">
						<div class="indl clearfix">
							<div class="indlImg fl">
								<img src="../../static/img/home/industry.png" alt="" />
							</div>
							<div class="indText">
								<div class="text mb-34 por">
									<span class="fs-18 col-33 fw-6 mb-8">绿色注册通道</span><br />
									<span class="fs-16 col-70 mb-5">为海南省金融基金类公司</span><br />
									<span class="fs-16 col-70">提供快速绿色注册通道</span>
								</div>
								<div class="text mb-34 por">
									<span class="fs-18 col-33 fw-6 mb-8">一站式综合PB服务 </span><br />
									<span class="fs-16 col-70 mb-5">联合银行、证券等机构提供</span><br />
									<span class="fs-16 col-70">工商注册、银行开户、税务登记系列服务</span>
								</div>
								<div class="text por">
									<span class="fs-18 col-33 fw-6 mb-8">助力基金投融资 </span><br />
									<span class="fs-16 col-70 mb-5">小镇互联网平台促进入驻企业</span><br />
									<span class="fs-16 col-70">基金开展投融资活动</span>
								</div>
							</div>
						</div>
						<div class="indr cp">
							<a href="/enterPark" class="indrBtn col-70 fs-20 mb-40">入驻园区</a>
							<a href="/financialSupport" class="indrBtn col-70 fs-20 mb-40">金融支持</a>
							<a href="/hayCast" class="indrBtn col-70 fs-20">海丝投</a>
						</div>

					</div>
				</div>

				<div class="train">
					<div class="tit clearfix">
						<span class="line1 vam"></span>
						<span class="line2 vam"></span>
						<span class="text vam fs-24 pl-10">学习服务</span>
						<a href="javascript:;" class="more fr vab fs-14" @click="goMore('/siteReservation')">MORE></a>
					</div>
					<div class="con clearfix">
						<div class="indl clearfix">
							<div class="indlImg fl">
								<img src="../../static/img/home/train.png" alt="" />
							</div>
							<div class="indText">
								<div class="text mb-34 por">
									<span class="fs-18 col-33 fw-6 mb-8">十个装备齐全的金融教室</span><br />
									<span class="fs-16 col-70 mb-5">为海南省金融基金类公司</span><br />
									<span class="fs-16 col-70">提供快速绿色注册通道</span>
								</div>
								<div class="text mb-34 por">
									<span class="fs-18 col-33 fw-6 mb-8">百间国际化公寓培训住宿 </span><br />
									<span class="fs-16 col-70 mb-5">联合银行、证券等机构提供</span><br />
									<span class="fs-16 col-70">工商注册、银行开户、税务登记系列服务</span>
								</div>
								<div class="text por">
									<span class="fs-18 col-33 fw-6 mb-8">举办培训论坛更便捷</span><br />
									<span class="fs-16 col-70 mb-5">一个班主任搞定所有培训事宜</span><br />
									<span class="fs-16 col-70">两个负责人搞定所有会议细节</span>
								</div>
							</div>
						</div>
						<div class="indr cp">
							<a href="/siteReservation" class="indrBtn col-70 fs-20 mb-40">场地预定</a>
							<a href="/financialTraining" class="indrBtn col-70 fs-20 mb-40">金融培训</a>
							<a href="/financialConference" class="indrBtn col-70 fs-20">金融会议</a>
						</div>
					</div>
				</div>

				<div class="research">
					<div class="tit clearfix">
						<span class="line1 vam"></span>
						<span class="line2 vam"></span>
						<span class="text vam fs-24 pl-10">研究服务</span>
						<a href="javascript:;" class="more fr vab fs-14" @click="goMore('/cooperationAgency')">MORE></a>
					</div>
					<div class="con clearfix">
						<div class="indl clearfix">
							<div class="indlImg fl">
								<img src="../../static/img/home/research.png" alt="" />
							</div>
							<div class="indText">
								<div class="text mb-34 por">
									<span class="fs-18 col-33 fw-6 mb-8">发布《亚太金融蓝皮书》</span><br />
									<span class="fs-16 col-70 mb-5">根据金融行业发展趋势，小镇与相关金融</span><br />
									<span class="fs-16 col-70 mb-5">科研院所合作，针对基金行业开展研究，</span><br />
									<span class="fs-16 col-70 mb-5">并与清华大学、北京大学两校年度共同发</span><br />
									<span class="fs-16 col-70">布《亚太金融蓝皮书》</span>
								</div>
								<div class="text por">
									<span class="fs-18 col-33 fw-6 mb-8">亚太金融C＆C嘉年华</span><br />
									<span class="fs-16 col-70 mb-5">小镇每年1月举办亚太金融C&C嘉年华，</span><br />
									<span class="fs-16 col-70 mb-5">两日思维激荡高端论坛，铁人十项全能赛</span><br />
									<span class="fs-16 col-70">及公司高尔夫对抗赛，精英年度派对</span>
								</div>
							</div>
						</div>
						<div class="indr cp">
							<a href="/cooperationAgency" class="indrBtn col-70 fs-20 mb-40">合作机构</a>
							<a href="/financialExpert" class="indrBtn col-70 fs-20 mb-40">金融专家</a>
							<a href="/researchFindings" class="indrBtn col-70 fs-20">研究成果</a>
						</div>
					</div>
				</div>

				<div class="park">
					<div class="tit clearfix">
						<span class="line1 vam"></span>
						<span class="line2 vam"></span>
						<span class="text vam fs-24 pl-10">园区到访</span>
						<a href="javascript:;" class="more fr vab fs-14" @click="goMore('/townLodging')">MORE></a>
					</div>
					<div class="con clearfix">
						<div class="indl clearfix">
							<div class="indlImg fl">
								<img src="../../static/img/home/park.png" alt="" />
							</div>
							<div class="indText">
								<div class="text mb-34 por">
									<span class="fs-18 col-33 fw-6 mb-8">上风上水上海棠</span><br />
									<span class="fs-16 col-70 mb-5">海南第一个金融小镇</span><br />
									<span class="fs-16 col-70">享受三亚优惠税收政策</span>
								</div>
								<div class="text mb-34 por">
									<span class="fs-18 col-33 fw-6 mb-8">融资融商融亚太 </span><br />
									<span class="fs-16 col-70 mb-5">地处海棠湾优越环境</span><br />
									<span class="fs-16 col-70">拥有天时地利人和三大优势</span>
								</div>
								<div class="text por">
									<span class="fs-18 col-33 fw-6 mb-8">欢迎到访小镇</span><br />
									<span class="fs-16 col-70 mb-5">用最卓越用心的服务</span><br />
									<span class="fs-16 col-70">为您带来一个全新舒适体验</span>
								</div>
							</div>
						</div>
						<div class="indr cp">
							<a href="/townLodging" class="indrBtn col-70 fs-20 mb-40">小镇住宿</a>
							<a href="/offProperty" class="indrBtn col-70 fs-20 mb-40">办公物业</a>
							<a href="/visitTown" class="indrBtn col-70 fs-20">参观小镇</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<m-footer></m-footer>
	</div>
</template>

<script>
	import Swiper1 from '../../static/js/swiper.min.js';
	import { getTime1 } from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				index: 1,
				newsList: [],
			}
		},
		mounted(){
			var mySwiper = new Swiper1('.swiper-container', {
				autoplay: 5000,
				loop: true,
				prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next',
				pagination : '.swiper-pagination',
			})
			//getNewsData
			this.$axios.get(this.$root.urlPath.NEW + '/pc/home/news')
				.then(res=>{
					if(res.data.success){
						let data = res.data.data.newsVOS;
						this.newsList = data;
						for(var i in this.newsList) {
							this.newsList[i].createdTime = getTime1( this.newsList[i].createdTime );
						}
					}else{
						this.$layer.msg(res.data.errMsg)
					}
				})
				.catch(err=>{console.log(err)})
		},
		methods: {
			goDetail1(){
				this.$router.push({	path: '/bannerDet1'	});
			},
			goDetail2(){
				this.$router.push({	path: '/bannerDet2'	});
			},
			goDetail3(){
				this.$router.push({	path: '/bannerDet3'	});
			},
			goNewsDetail(id){
				location.href= this.$root.urlPath.APF + '/newsDetail?id=' + id;
			},
			goMore(path){
				location.href = this.$root.urlPath.APF + path;
			}
		}
	}
</script>

<style>
	@import url("../../static/css/swiper.min.css");
	/*-----Swiper-------*/
	.home .swiper-pagination-bullet-active {
		background: #FF0000 !important;
	}
	.home .swiper-container {
		width: 100%;
		height: auto;
	}
	.home .swiper-pagination-bullet {
		width: 13px;
		height: 13px;
		opacity: 1;
		background-color: #fff;
	}
	.home .swiper-button-prev{
		background-image: url(../../static/img/swiper-prev.png)
	}
	.home .swiper-button-next{
		background-image: url(../../static/img/swiper-next.png)
	}
	.home .top_banner{
		height: auto;
	}
	/*------Swiper end-------*/
	
	.home .bg-town {
		background-color: #8957a1;
	}
	.home .bg-fin {
		background-color: #eb6877;
	}
	.home .bg-tra {
		background-color: #52a3ed;
	}
	.home .lh-24 {
		line-height: 24px;
	}
	
	.home .top_banner,.home .top_banner .swiper-slide {
		width: 100%;
		overflow: hidden;
	}
	.home .top_banner img {
		width: 100%;
		margin: 0 50%;
		transform: translateX(-50%);
	}
	
	.home .tit .line1 {
		width: 5px;
		height: 17px;
		border-radius: 2px;
	}
	.home .tit .line2 {
		width: 5px;
		height: 20px;
		border-radius: 2px;
	}
	
	/*新闻*/
	.home .news .tit {
		padding: 25px 0 16px 7px;
	}
	.home .news .tit .line1 {
		background-color: #c490bf;
	}
	.home .news .tit .line2 {
		background-color: #7d4698;
	}
	.home .news .tit .text {
		color: #7d4698;
	}
	.home .tit .more {
		padding-top: 12px;
		color: #a0a0a0;
	}
	.home .news .con {
		padding-top: 20px;
		border-top: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc;
	}
	.home .news .con .dynamic {
		width: 50%;
		float: left;
		margin-bottom: 20px;
	}
	.home .news .con .dynamicl {
		width: 27%;
		float: left;
		margin-right: 21px;
	}
	.home .news .con .dynamicl img {
		width: 100%;
		height: 100px;
	}
	.home .news .con .dynamicr {
		width: 66%;
		float: left;
		height: 100px;
	}
	.home .news .con .dynamicr .data {
		left:0;
		bottom: 0;
	}
	.home .news .con .dynamicr .townDyn {
		padding: 0 6px;
		height: 20px;
		border-radius: 5px;
		margin-bottom: 4px;
	}
	
	/*common*/
	.home .industry .con,
	.home .train .con,
	.home .research .con,
	.home .park .con {
		border-radius: 10px;
		padding: 22px 29px 22px 83px;
	}
	.home .industry .con .indl,
	.home .train .con .indl,
	.home .research .con .indl,
	.home .park .con .indl {
		float: left;
		background: #fff;
		width: 69%;
		margin-right: 60px;
		display: flex;
		align-items: center;
		height: 355px;
	}
	.home .industry .con .indl .indlImg,
	.home .train .con .indl .indlImg,
	.home .research .con .indl .indlImg,
	.home .park .con .indl .indlImg {
		margin-left: -52px;
		margin-right: 43px;
	}
	.home .industry .con .indr,
	.home .train .con .indr,
	.home .research .con .indr,
	.home .park .con .indr {
		float: left;
		width: 22%;
		padding: 47.5px 0;
	}
	.home .industry .con .indr .indrBtn,
	.home .train .con .indr .indrBtn,
	.home .research .con .indr .indrBtn,
	.home .park .con .indr .indrBtn  {
		background-color: #ffffff;
		border-radius: 5px;
		width: 240px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		display: block;
	}
	.home .con .indr .indrBtn:hover {		
		font-weight: 700;
	}
	/*产业服务*/
	
	.home .industry .tit,
	.home .train .tit,
	.home .research .tit,
	.home .park .tit {
		padding: 25px 8px;
	}
	.home .industry .tit .line1 {
		background-color: #f19149;
	}
	.home .industry .tit .line2 {
		background-color: #ec6941;
	}
	.home .industry .tit .text {
		color: #eb6100;
	}
	.home .industry .con {
		background-color: #f39800;
	}
	.home .industry .con .indl {
		box-shadow: 3px 4px 0px 0px rgba(235, 97, 0, 0.5);
	}
	/*.home .indl .indText .text_line {
		height: 5px;
		border-radius: 2px;
		left: 0;
		top: 15px;
	}
	.home .industry .indl .indText .text_line {
		background-color: rgba(243, 153, 0, 0.3);
	}*/
	.home .industry .con .indr .indrBtn:hover {
		color: #eb6100;
		box-shadow: 3px 3px 27px 0px rgba(154, 65, 16, 0.5);
	}
	
	/*培训*/
	.home .train .tit .line1 {
		background-color: #89c997;
	}
	.home .train .tit .line2 {
		background-color: #22ac38;
	}
	.home .train .tit .text {
		color: #22ac38;
	}
	.home .train .con {
		background-color: #22ac38;
	}
	/*.home .train .indl .indText .text_line {
		background-color: rgba(33, 174, 55, 0.3);
	}*/
	.home .train .con .indl {
		box-shadow: 3px 3px 0px 0px #097c25;
	}
	.home .train .con .indr .indrBtn:hover {
		color: #22ac38;
		box-shadow: 3px 3px 27px 0px rgba(0, 86, 31, 0.5);
	}
	
	/*研究服务*/
	.home .research .tit .line1 {
		background-color: #7ecef4;
	}
	.home .research .tit .line2 {
		background-color: #00a0e9;
	}
	.home .research .tit .text {
		color: #00a0e9;
	}
	.home .research .con {
		background-color: #00a0e9;
	}
	/*.home .research .indl .indText .text_line {
		background-color: rgba(0,162,232,0.3);
	}*/
	.home .research .con .indl {
		box-shadow: 3px 3px 0px 0px #0068b7;
	}
	.home .research .con .indr .indrBtn:hover {
		color: #00a0e9;
		box-shadow: 3px 3px 27px 0px rgba(0, 71, 157, 0.5);
	}
	
	/*园区到访*/
	.home .park .tit .line1 {
		background-color: #959595;
	}
	.home .park .tit .line2 {
		background-color: #626262;
	}
	.home .park .tit .text {
		color: #333333;
	}
	.home .park .con {
		background-color: #626262;
	}
	/*.home .park .indl .indText .text_line {
		background-color: rgba(98,98,98,0.3);
	}*/
	.home .park .con .indl {
		box-shadow: 3px 3px 0px 0px #434343;
	}
	.home .park .con .indr .indrBtn:hover {
		color: #626262;
		box-shadow: 3px 3px 27px 0px rgba(49, 49, 49, 0.5);
	}
</style>