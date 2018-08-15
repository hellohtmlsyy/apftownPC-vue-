<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
			<img src="../../../static/img/train/train_banner3.jpg">
		</div>
		<div class="train_tit">
			<div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/siteReservation'}">场地预定</router-link></div>	        			
	        		<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/financialTraining'}">金融培训</router-link></div>
	        		<div class="tabBox dib tabBox_active"><router-link class="tab_active" :to="{ path : '/financialConference'}">金融会议</router-link></div>
	        	</div>        	
	        </div>
		</div>
		<div class="financem">
			<div class="w">
				<div class="financem_con">
					<div class="ieda clearfix">
						<div class="iedal fl" align="right">
							<img src="../../../static/img/train/idea.png" />
						</div>
						<div class="iedar fl">
							<span class="fw-7 fs-36 dib mt-15">团队活动，你准备好了么？</span><br />
							<span class="fs-16 mt-20 dib lh-33">
							论坛的头脑风暴等着你，十项全能精英赛挑战你<br />
							拿起背包，向着阳光、沙滩，和你的金融团队一起出发吧！<br />
							金融小镇各种论坛欢迎你来<br />
							上午出席研讨会，下午参加亚太金融精英十项全能挑战赛<br />
							夜晚加入各类金融主题沙龙<br />
							贡献智慧和热情，收获价值和健康
						</span>
						</div>
					</div>
					<div class="m_forum">
						<div class="m_forumTit">
							<span class="fs-36 col-bt c dib">会议论坛</span>
							<span class="line col-bt dib"></span>
						</div>
						<div class="m_forumCon">

							<div class="crc_conBox mb-40 clearfix">
								<div class="crcr dib fl mr-38 tar" style="padding:7.5% 0">
									<div class="crcr_tit">
										<div class="mb-35 ">
											<span class="fs-24 fw-7">户外露天广场</span><br />
											<span class="fs-16">（可容纳300人）</span>
										</div>
										<div class="fs-16 lh-30 col-666">户外会议室可以在冬季举办<br />天气正好，阳光正好<br />户外的遮阳棚正好<br />在小镇三月三的广场上<br />聆听专家的演讲<br />享受大自然的馈赠</div>
									</div>
								</div>
								<div class="crcl dib fl">
									<img src="../../../static/img/train/forums2.jpg" />
								</div>
							</div>

							<div class="crc_conBox mb-40 clearfix">
								<div class="crcl dib fl mr-38">
									<img src="../../../static/img/train/forums3.jpg" />
								</div>
								<div class="crcr dib fl" style="padding:12% 0">
									<div class="crcr_tit">
										<div class="mb-35 ">
											<span class="fs-24 fw-7">户外酒会</span>
										</div>
										<div class="fs-16 lh-30 col-666">高贵雅致的享受<br />无与伦比的品味<br />聆听金融大咖的分享<br />结交真知真挚的友谊</div>
									</div>
								</div>
							</div>

							<div class="crc_conBox mb-40 clearfix">
								<div class="crcr dib fl mr-38 tar" style="padding:8.5% 0">
									<div class="crcr_tit">
										<div class="mb-35 ">
											<span class="fs-24 fw-7">BBQ晚宴</span>
										</div>
										<div class="fs-16 lh-30 col-666">热情的篝火<br />美丽的沙滩歌手<br />顶级的大厨创意丰富多样的食材<br />坐享美食/小酌美酒<br />和朋友们谈笑风生<br />度过美好的夜晚</div>
									</div>
								</div>
								<div class="crcl dib fl">
									<img src="../../../static/img/train/forums4.jpg" />
								</div>
							</div>

							<div class="crc_conBox clearfix">
								<div class="crcl dib fl mr-38">
									<img src="../../../static/img/train/forums5.jpg" />
								</div>
								<div class="crcr dib fl" style="padding:2% 0">
									<div class="crcr_tit">
										<div class="mb-35 ">
											<span class="fs-24 fw-7">10项全能</span>
										</div>
										<div class="fs-16 lh-30 col-666">全新的10项全能赛<br />游泳/爬山/赛跑/自行车<br />学习成果考试<br />以团队形式比赛，促进团队凝聚力<br />提高学习效率<br />同时给你一个健康的体魄</div>
										<div class="clearfix col-a0 mt-10">
											<span class="fl dib">短跑（100米）<br />中跑（400米）<br />划桨（500米器械）<br />自行车（5公里器械）<br />沙球5公斤（投掷距离）</span>
											<span class="fr dib">双杠下撑（个）<br />引体向上（个）<br />俯卧撑（个）<br />仰卧起坐（个）<br />卧推30公斤（个）</span>
										</div>
									</div>
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
	export default {
		data() {
			return {
				index: 4,
			}
		},
	}
</script>

<style scoped>
.col-a0 {
	color: #a0a0a0;
}
.col-bt {
	color: #eb6100;
}
.mt-20 {
	margin-top: 20px;
}
.mb-35 {
	margin-bottom: 35px;
}
.mt-10 {
	margin-top: 10px;
}
.mr-38 {
	margin-right: 38px;
}
.lh-30 {
	line-height: 30px;
}
.lh-33 {
	line-height: 33px;
}
.financem_con {
	padding-top: 70px;
	margin: 0 12.7%;
	width: 75.4%;
}
.financem_con .iedal {
	width: 36.5%;
}
.financem_con .iedar {
	width: 50%;
	margin-left: 30px;
}
.m_forum {
	padding-top: 45px;
}
.m_forum .m_forumTit {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 22px 0 25px 0;
	margin-bottom: 15px;
}
.m_forum .m_forumTit .c {
	width: 20%;
}
.m_forum .m_forumTit .line {
	width: 80%;
	height: 1px;
	background: #eb6100;
}
.m_forum .crc_conBox .crcl {
	width: 68%;
}
.m_forum .crc_conBox .crcr {
	width: 27%;
}
.top_banner {
	width: 100%;
	position: relative;
	overflow: hidden;
}
.top_banner img {
	width: auto;
	margin: 0 50%;
	transform: translateX(-50%);
}
</style>