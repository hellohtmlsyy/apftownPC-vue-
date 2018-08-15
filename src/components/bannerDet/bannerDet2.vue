<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner por">
			<img src="../../../static/img/banner_detail/banner2_detail.jpg" />
		</div>
		<div class="pattern">
			<div class="container">
				<div class="conBox">
					<div class="int">
						<div class="row col-33">
							<div class="col-md-12 text-ind fs-16 text">
								亚太金融小镇金融自2017年1月3日揭牌成立以来，以打造“海丝金融总部基地，亚太基金合作平台”为使命，致力于构建一个全方位基金PB服务中心，创建三位一体（产学研）共生金融业态，为银行、证券、基金、保险、交易所五类客户服务，目前已经入住基金公司48家，致力于通过一三五模式，创建三亚金融投融资生态系，促进海南自由贸易港建设。
							</div>
						</div>
					</div>
					<div class="base">
						<div class="row" align="center">
							<div class="col-md-12 ">
								<img src="../../../static/img/banner_detail/pattern1.png" />
							</div>
						</div>
					</div>
					
					<div class="int2">
						<div class="row">
							<div class="col-md-12 text-ind fs-16 text">
								根据《中共中央国务院关于支持海南全面深化改革开放的指导意见》，三亚亚太金融小镇作为海南首个金融小镇，以建设海南自由贸易港，促进金融开放为目标，配合三亚自贸港的定位，创建“产学研”三位一体金融共生业态，致力于实施中国金融开放战略，打造海上丝绸之路金融总部基地。 
							</div>
						</div>
					</div>
					<div class="base2">
						<div class="row" align="center">
							<div class="col-md-12 ">
								<img src="../../../static/img/banner_detail/pattern2.png" />
							</div>
						</div>
					</div>
				</div>
				<div class="int3">
					<div class="rows col-33 fs-14 clearfix">
						<div class="industry fin text-ind" ref="industry">
							<div class="tit fs-30 col-ff">产业</div>
							<div class="text">
								小镇积极落地海南金融开放试验区，从银行、证券、保险方面进行金融开放创新实践，根据本次博鳌会议精神，不仅加强现有的基金集聚优势，而且在交易所、保险业开放进程中创新实践，致力于成为海南金融业发展和开放的主阵地和桥头堡。2017年三亚印发了《关于支持基金小镇发展优惠政策暂行办法的通知》，有效地促进了三亚亚太金融小镇基金产业的聚集，前已经入驻基金46家，小镇依据团队多年国内外基金的经验积累，不仅建立起了后台研究风控、中台行政运营、前台募集投资三个层次的基金支持体系，而且从流程上为入驻基金提供注册、备案、托管、募集、运营五个步骤共计20项服务，打造了一个全方位资管PB服务中心。并在此基础上，积极促进交易所设立、国际保险入驻、保险代理注册等金融开放措施。
							</div>
						</div>
						<div class="study fin text-ind" ref="study">
							<div class="tit fs-30 col-ff">学习</div>
							<div class="text">
								教育业态将培训一批国际化金融人才，已经与清华大学、北京大学建立培训意向，已装修3个金融培训教室，有10个金融高级研修班今年开展培训，今年完成金融高管培训人次达到500人以上，并小镇已经对海棠湾居民开展防范金融风险，打击非法集资培训1000人次以上。自贸区建设和金融开放离不开大批金融人才，海南金融人才严重不足，无论迎接改革发展的历史新机遇，还是开展一带一路金融新交易模式，都对人才提出了新的要求。小镇将从职业培养、基础教育、高级培训三个层面进行人才培养：职业培养需要培养一大批金融应用型高中专人才；基础教育需要大力提高本科高等院校的金融素质教育；高级培训培养一大批国际化视野的企业家和金融专业人士。
							</div>
						</div>
						<div class="research fin text-ind" ref="research">
							<div class="tit fs-30 col-ff">研究</div>
							<div class="text">
								加强海上丝绸之路经济研究，建立国际领先金融智库，着手实践全球化新金融交易机制，目前小镇已经和清华大学经济管理学院中国金融研究中心合作编写《2017亚太金融蓝皮书》并成功发布。海南省省长沈晓明在本次博鳌“21世纪海上丝绸之路岛屿经济”分论坛上提出：“继续为岛屿经济包容性发展提供智力支撑，海南将发挥智库联盟的作用，探索设立岛屿经济研究信息中心，创建全球岛屿经济研究基础数据库。”小镇在三亚民政局设立的三亚亚太金融研究中心将积极汇聚国内外金融交易专业人士，就海上丝绸之路金融研究、海洋经济、岛屿经济、金融开放、财政税收、离岸贸易、交易所设立开展研究并推动相关机制设立和运营。
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
	export default {
		data() {
			return {
				index: 1,
			}
		},
	}
</script>

<style scoped>
	.container {
	    padding-right:0;
	    padding-left: 0;
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
	.pattern .conBox {
		width: 84%;
		margin: 0 8%;
		padding-top: 35px;
	}
	.pattern .conBox .int,.pattern .conBox .int2 {
		background-image: linear-gradient( #ffffff, #ffffff), linear-gradient( #1d2088, #1d2088);
		background-blend-mode: normal, normal;
		box-shadow: 7px 6px 1px 0px #d8daff;
		border-radius: 10px;
		border: solid 1px #001683;
		padding: 18px 33px;
	}
	.pattern .int2 .text{
		color:#000865;
	}
	.pattern .int .text,.pattern .int2 .text{
		line-height: 34px;
	}
	@media only screen and (min-width: 374px) and (max-width: 640px) {
		.pattern .conBox .base img,.pattern .conBox .base2 img {
			width: 100%;
		}
	}
	.pattern .conBox .base {
		padding: 32px 0 47px 0;
	}
	.pattern .conBox .base2 {
		padding: 50px 0;
	}
	.pattern .conBox .base .explain {
		padding-top: 34px;
	}
	.pattern .int3{
		padding: 45px 0;
	}
	.pattern .int3 .fin{
		width:32%;
		float: left;
		border-radius: 10px;
		padding: 45px 27px 42px 30px;		
		position: relative;
		min-height: 450px;
	}
	@media only screen and (min-width: 374px) and (max-width: 991px) {
		.pattern .int3 .fin{
			width:100%;
			margin-bottom:45px ;
			min-height: 257px;
		}
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		.pattern .int3 .fin{
			width:31%;
			min-height: 569px;
		}
	}
	.pattern .int3 .industry{
		box-shadow: 5px 8px 1px 0px #f4e1d6;
		border: solid 1px #f8b551;
		margin-right: 23px;
	}
	.pattern .int3 .study{
		box-shadow: 5px 8px 1px 0px #dbf4d6;
		border: solid 1px #84c733;
		margin-right: 23px;
	}
	.pattern .int3 .research{
		box-shadow: 5px 8px 1px 0px #d6e6f4;
		border: solid 1px #0e88f8;
	}
	.int3 .industry .tit,.int3 .study .tit,.int3 .research .tit{
		border-radius: 25px;
		width:180px;
		height:50px;
		text-align: center;
		position: absolute;
		text-indent: initial;
	    left: 0;
	    right: 0;
	    margin-left: auto;
	    margin-right: auto;		
		top:-25px;
		line-height: 45px;
	}
	.int3 .industry .tit{
		background-color: #f39800;
	}
	.int3 .study .tit{
		background-color: #84c733;
	}
	.int3 .research .tit{
		background-color: #0e88f8;
	}
	.pattern .int3 .fin .text{
		line-height: 24px;
	}
</style>