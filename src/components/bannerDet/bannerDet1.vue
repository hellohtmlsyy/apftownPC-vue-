<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner por">
			<img src="../../../static/img/banner_detail/banner1_detail.jpg" />
		</div>
		<div class="strategy">
			<div class="container">
				<div class="content">
					<div class="spe clearfix">
						<div class="int mr-29">
							<div class="tit fs-28 col-ff tit1">金融业放宽行业外资股比限制</div>
							<div class="text fs-16 lh-34 text-ind">4月10日，在博鳌亚洲论坛2018年年会上，就人类命运共同体、中国扩大改革开放等问题，特别强调在扩大开放方面，中国将采取四大举措，第一条就提出“大幅度放宽市场准入。今年，我们将推出几项有标志意义的举措。在服务业特别是金融业方面，去年年底宣布的放宽银行、证券、保险行业外资股比限制的重大措施要确保落地，同时要加快保险行业开放进程，放宽外资金融机构设立限制，扩大外资金融机构在华业务范围，拓宽中外金融市场合作领域。”</div>
						</div>
						<div class="int">
							<div class="tit fs-28 col-ff tit2">海南全岛建设自由贸易试验区</div>
							<div class="text fs-16 lh-34 text-ind">4月13日下午，在庆祝海南建省办经济特区30周年大会上，党中央决定支持海南全岛建设自由贸易试验区，支持海南逐步探索、稳步推进中国特色自由贸易港建设，分步骤、分阶段建立自由贸易港政策和制度体系。在发言中具体提出要强化改革举措系统集成，科学配置各方面资源，加快推进城乡融合发展体制机制、人才体制、财税金融体制、收入分配制度、国有企业等方面的改革，支持海南设立国际能源、航运、大宗商品、产权、股权、碳排放权等交易场所，形成更加成熟更加定型的制度体系。</div>
						</div>
					</div>
					
					<div class="talkImg clearfix">
						<div class="row">
							<div class="title col-md-12 fs-34 col-ff tac">国家主席习近平4月海南两次重要讲话</div>
						</div>
						<div class="talkInt mr-60">
							<div class="intl dib mr-15">
								<img src="../../../static/img/banner_detail/talk1.jpg" alt="" />
							</div>
							<div class="intr dib tac vam">
								<span class="ann fs-20 mb-30">博鳌亚洲论坛改革开放40周年</span>
								<div class="fin_open fs-36">金融开放</div>
							</div>								
						</div>
						<div class="talkInt">
							<div class="intl dib mr-15">
								<img src="../../../static/img/banner_detail/talk2.jpg" alt="" />
							</div>
							<div class="intr dib vam tac">
								<span class="ann fs-20 mb-30">海南建省30周年</span>
								<div class="fin_open fs-36">海南自由贸易港</div>
							</div>
						</div>
					</div>
					
					<div class="spe spe2 clearfix">
						<div class="int mr-29">
							<div class="tit fs-28 col-ff tit1">小镇有机结合规划战略发展政策</div>
							<div class="text fs-16 lh-34 text-ind">就上述两个重要发言，三亚亚太金融小镇就“人类命运共同体”、“一带一路战略”、“海南自贸区建设”、“金融改革开放”、“交易所等实践”的因果层次关系进行了有机的组合，战略以构建“人类命运共同体”为己任，构建“一带一路”新型全球产业结构，共建各国人民的共同福祉；策略通过“海南自贸区建设”实施，推动中国“金融改革开放”，以打造新型国际要素交易平台及运营模式，进行面向未来的试验区建设。</div>
						</div>
						<div class="int">
							<div class="tit fs-28 col-ff tit2">重点发展金融服务业</div>
							<div class="text fs-16 lh-34 text-ind">对于海南目前各行业的发展来说，需要首先重点发展金融服务业，这是因为“海南自贸区建设”和“金融改革开放”两者互为因果关系，自贸区的建设离不开金融行业的发展支持，金融的开放离不开自贸区整体业态的打造，本次开放将进入改革深水区，从政策突破、体系创新、运营管理等层面重构新型的国际产业金融业态，以海南作为实验田进行面向未来的产融体系。”</div>
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
		}
	}
</script>

<style scoped>
	.top_banner {
		width: 100%;
		overflow: hidden;
	}
	.top_banner img {
		width: auto;
		margin: 0 50%;
		transform: translateX(-50%);
	}
	.strategy .content {
		padding: 0 30px;
	}
	.strategy .spe {
		margin-top: 48px;
	}
	.strategy .spe .int {
		width: 48.5%;
		float: left;
		background-color: #ffffff;
		box-shadow: 4px 6px 0px 0px #f4e1d6;
		border-radius: 10px;
		border: solid 1px #f8b551;
		padding: 50px 25px 25px 25px;
		position: relative;
		margin-bottom: 30px;
		min-height: 350px;
	}
	.strategy .spe2 .int{
		min-height: 315px;
	}
	.strategy .spe .int .tit {
		width: 82%;
		position: absolute;
		left: 50%;
		top: -25px;
		margin-left: -41%;
		border-radius: 25px;
		border: none;
		text-align: center;
		height: 50px;
		line-height: 50px;
	}
	@media only screen and (max-width: 560px) {
		.strategy .spe .int .tit {
			font-size: 18px;
		}
	}
	@media only screen and (min-width: 991px) and (max-width: 1199px) {
		.strategy .spe .int {
			min-height: 417px;
			width: 47%;
		}
		.strategy .spe2 .int{
			min-height: 383px;
		}
		.strategy .spe .int .tit {
			font-size: 22px;
		}
	}
	@media only screen and (min-width: 374px) and (max-width: 992px) {
		.strategy .spe .int {
			width: 100%;
			margin-bottom: 60px;
			min-height: auto;
		}
	}
	.spe .int .tit1 {
		background-color: #f39800;
	}
	.spe .int .tit2 {
		background-color: #eb6100;
	}
	.lh-34 {
		line-height: 34px;
	}
	.mr-29 {
		margin-right: 29px;
	}
	.mr-60{
		margin-right: 60px;
	}
	/*谈话图片*/
	.strategy .talkImg {
		width:100%;
		background-image: linear-gradient(0deg, #f39800 0%, #eb6100 100%), linear-gradient(#eb6100, #eb6100);
		background-blend-mode: normal, normal;
		border-radius: 10px;
		border: solid 1px #f8b551;
		padding: 0 35px 38px;
	}
	.strategy .talkImg .title{
		letter-spacing: 1px;
		margin: 11px 0;
	}
	.strategy .talkImg .talkInt{
		width:47%;
		float: left;
		background: #fff;
		padding: 20px;
		border-radius: 10px;	
		margin-top: 10px;	
	}
	@media only screen and (min-width: 374px) and (max-width: 991px) {
		.strategy .talkImg .talkInt{
			width:100%;
		}
	}
	@media only screen and (min-width: 991px) and (max-width: 1199px) {
		.strategy .talkImg .talkInt{
		    width:46.2%;
		}
		.talkImg .talkInt .intl{
			width:30%;
		}
		.talkImg .talkInt .intr{
			width:64%;
		}
		.talkImg .talkInt .intr .fin_open{
			font-size: 24px;
		}
		.talkImg .talkInt .intr .ann{
			font-size: 18px;
		}
	}
	.talkImg .talkInt .intl{
		width:35%;
	}
	@media only screen and (max-width:540px ) {
		.talkImg .talkInt .intl{
			width:30%;
		}
		.talkImg .talkInt .intr{
			width:64%;
		}
		.talkImg .talkInt .intr .fin_open{
			font-size: 18px;
		}
		.talkImg .talkInt .intr .ann{
			font-size: 16px;
		}
	}
	.talkImg .talkInt .intl img{
		width:100%;
	}
	.talkImg .talkInt .intr{
		width:59%;
	}
	.strategy .spe2 {
		margin-top: 55px;
	}
</style>