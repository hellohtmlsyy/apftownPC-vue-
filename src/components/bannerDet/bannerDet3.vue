<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner por">
			<img src="../../../static/img/banner_detail/banner3_detail.jpg" />
		</div>
		<div class="trade">
			<div class="container">
				<div class="conBox">
					<div class="con">
						<div class="row col-33">
							<div class="col-md-12 text-ind fs-16 text">
								面向未来，海南将打造什么样的自由贸易岛，中国金融将如何对外开放，需要以三亚作为桥头堡，构建中国特色的海南国际金融交易机制。就国内外的金融发展历史来看，一个地区的金融腾飞离不开一批特色国际交易所创建。2018年4月11日中共中央国务院关于支持海南全面深化改革开放的指导意见“建设现代化经济体系章节”中提出：支持依法合规在海南设立国际能源、航运、大宗商品、产权、股权、碳排放权等交易场所。
							</div>
							<div class="col-md-12 text-ind fs-16 text">
								因此小镇创建了“亚太金融小镇交易所总部基地”，汇集各类要素交易平台，提供交易所运营所需的发起设立、运营支持、要素对接、资金清算等一站式服务。总部基地办公地址位于海南省三亚市海棠湾亚太金融小镇9号楼，既是三亚市打造海上丝绸之路金融总部基地的重要举措，也是亚太金融小镇作为海南首个金融创新平台的重要功能，交易中心致力于成为国际资源产业金融要素聚集区，打造万亿交易平台。
							</div>
							<div class="col-md-12 text-ind fs-16 text">
								三亚市地处中国海南岛最南端，是一座年轻而充满生机活力的热带海洋及旅游休闲城市，是全国经济增长最快、最具城市综合竞争力的城市之一，是我国海上丝绸之路的桥头堡，与东南亚各国隔海相望。当前，三亚市正适应经济发展新常态，抢抓国家 “一带一路”、“亚太自由贸易区”和“人民币国际化”等战略机遇，以旅游产业、房地产产业等为主要节点，重点谋划热带海洋产业、金融产业等业态；形成一带一路联动、金融聚集的发展结构。
							</div>
						</div>						
					</div>
					<div class="base">
						<div class="row" align="center">
							<div class="col-md-12 ">
								<img src="../../../static/img/banner_detail/base.png"/>
							</div>
							<div class="col-md-12 fs-36 explain">交易所总部基地服务模式</div>
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
	.top_banner {
		width: 100%;
		overflow: hidden;
	}
	.top_banner img {
		width: auto;
		margin: 0 50%;
		transform: translateX(-50%);
	}
	.trade .conBox {
		width: 84%;
		margin: 0 8%;
		padding-top: 35px;
	}
	.trade .conBox .con {
		background-image: linear-gradient( #ffffff, #ffffff), linear-gradient( #1d2088, #1d2088);
		background-blend-mode: normal, normal;
		box-shadow: 7px 6px 1px 0px #d8daff;
		border-radius: 10px;
		border: solid 1px #001683;
		padding: 16px 33px;		
	}
	.trade .con .text {
		line-height: 34px;
		margin-bottom: 34px;
	}
	@media only screen and (min-width: 374px) and (max-width: 640px) {
		.trade .conBox .base img{
			width: 100%;
		}
	}	
	.trade .conBox .base{
		padding: 40px 0;
	}
	.trade .conBox .base .explain{
		padding-top:34px;
	}
</style>