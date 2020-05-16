<template>
  <div>
    <i-header :index="index"></i-header>
    <div class="top_banner">
      <img src="../../../static/img/Industry/industry_banner3.jpg" />
    </div>
    <div class="train_tit">
      <div class="w">
        <div class="train_tab">
          <div class="tabBox dib tabBox_mr">
            <router-link :to="{ path : '/enterPark'}">优惠政策</router-link>
          </div>
          <div class="tabBox dib tabBox_mr">
            <router-link :to="{ path : '/financialSupport'}">服务体系</router-link>
          </div>
          <div class="tabBox tabBox_active dib">
            <router-link class="tab_active" :to="{ path : '/hayCast'}">自贸政策</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="hay_cast">
      <div class="w">
        <div class="hay_castCon">
          <!-- <div class="summary">
	    				<div class="summaryTit tac">
	    					<img src="../../../static/img/Industry/summaryTit.png"/>
	    				</div>
	    				<div class="summaryInfo mt-26">
	    					<div class="fs-16 col-666 lh-34 mb-23">海上丝绸之路投融资信息发布平台（简称：海丝投）基于亚太金融小镇母公司清蓝金融集团多年全球投资业务基础，通过本网站构建投资资金方和融资项目方的信息发布与对接平台，不仅形成海上丝绸之路项目数据库，并通过国际产业和金融专家，帮助投资者发掘价值洼地，致力于构建一带一路专业的投融资信息交易平台。</div>
	    					<div class="fin clearfix">
	    						<div class="finl fl fs-16 col-ff">融资项目方</div>
	    						<div class="finr fl fs-14 col-666 lh-24">可发布项目信息，经过审核后在平台上发布，针对海上丝绸之路非上市公司的股权提供交易信息服务平台，通过独具特色的信息披露系统，形成较强的市场定价能力，寻找最合适的合作伙伴，快速促进项目的发展</div>
	    					</div>
	    					<div class="inv clearfix">
	    						<div class="invl fl fs-16 col-ff">投资资金方</div>
	    						<div class="invr fl fs-14 col-666 lh-24">分为机构投资者和自然投资者，提供多个维度的项目筛选平台，可以通过国家地区、行业分类、投资额度、项目阶段等维度进行筛选，并且不需要对每个项目都去现场实地考察，通过平台就可以方便、直观地浏览海上丝绸之路诸多项目的文字、图像和视频资料，大大节约了时间成本和资金成本。</div>
	    					</div>
	    				</div>
	    			</div>
	    			
	    			<div class="deal">
	    				<div class="dealTit tac">
	    					<img src="../../../static/img/Industry/transactionTit.png" alt="" />
	    				</div>
	    				<div class="dealInfo">
	    					<div class="fs-16 col-666 lh-34"><span class="circle"></span>设计“海丝投”各项制度，如融资项目的信息披露标准及格式、信息披露规则等，建立行业诚信中介体系。</div>
	    					<div class="fs-16 col-666 lh-34"><span class="circle"></span>开发融资企业，受理企业项目披露申请，并对企业资格进行审核。</div>
	    					<div class="fs-16 col-666 lh-34"><span class="circle"></span>发展投资群体，包含机构投资人和自然投资人，提供优质的项目。</div>
	    					<div class="fs-16 col-666 lh-34"><span class="circle"></span>积极推进项目的投融资，举办各种路演活动，促进融资企业和投资人的沟通。</div>
	    					<div class="fs-16 col-666 lh-34"><span class="circle"></span>对海丝投日常的监管、管理提供支持，收集、发布行业与板块市场信息。</div>
	    				</div>
	    			</div>
	    			
	    			<div class="data_base">
	    				<div class="data_baseTit tac">
	    					<img src="../../../static/img/Industry/data_baseTit.png" alt="" />
	    				</div>
	    				<div class="data_baseInfo">
	    					<div class="fs-16 col-666 lh-34">全球数据库为海丝投提供大数据支持，基于清蓝十年海外投资积累整理，通过立体化多层级的数据采集，以确保数据准确性、表达的专业性、操作的友好性，为交易提供可信依据。目前我们已经囊括全球七大交易所（美国、英国、加拿大、澳大利亚、南非约翰内斯堡等）的 2500多家公司，覆盖七大类230多个小类。</div>
	    				</div>
	    			</div>
	    			
	    			<div class="hay_cast_adv">
	    				<div class="hay_cast_advTit tac">
	    					<img src="../../../static/img/Industry/hayCast_advTit.png"/>
	    				</div>
	    				<div class="hay_cast_advInfo">
	    					<div class="fs-16 col-666 lh-34">和传统的交易所及项目交易平台相比，海丝投具有如下优势：</div>
	    					<div class="advantage mt-6">
	    						<div class="advantageBox clearfix">
	    							<div class="advantagel fs-16 lh-34">效率效果</div>
	    							<div class="advantager fs-16 col-666 lh-34">快速发布企业的融资需求，高效对接行业潜在投资者，7Ｘ24小时的全天候服务，前所未有的投资效率</div>
	    						</div>
	    						<div class="advantageBox clearfix">
	    							<div class="advantagel fs-16 lh-34">成本低廉</div>
	    							<div class="advantager fs-16 col-666 lh-34">和产权交易所及证券交易所相比，海丝投提供的是交易信息服务，仅收取很低的发布费用或交易成功佣金，投资方不收取其他费用，融资成本极低</div>
	    						</div>
	    						<div class="advantageBox clearfix">
	    							<div class="advantagel fs-16 lh-34">权威公正</div>
	    							<div class="advantager fs-16 col-666 lh-34">拥有金融和产业专家支持，提供发布企业的信息完善及风控审核服务，经过尽调和审核，确保披露信息公正</div>
	    						</div>
	    						<div class="advantageBox clearfix">
	    							<div class="advantagel fs-16 lh-34">安全保障</div>
	    							<div class="advantager fs-16 col-666 lh-34">采用业界先进的加密技术，对交易双方的注册信息、账户信息进行加密处理，交易过程安全可靠 </div>  
	    						</div>
	    					</div>
	    				</div>
          </div>-->
          <div class="policyItem country">
			  <div class="l_title"><img src="../../../static/img/Industry/icon_g.png" alt="">国部级政策</div>
			  <ul>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">《中共中央国务院关于支持海南全面深化改革开放的指导意见》</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">《国务院关于印发中国(海南)自由贸易试验区总体方案的通知》</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;"><i class="fw-4">中共中央办公厅国务院办公厅印发</i>《国家生态文明试验区（海南）实施方案》</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">习近平：在庆祝海南建省办经济特区30周年大会上的讲话</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">中共海南省委七届四次全会的《决定》</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;"><i class="fw-4">《交通运输部印发贯彻落实</i><中共中央国务院关于支持海南全面深化改革开放的指导意见><i class="fw-4">实施方案的通知》</i></a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;"><i class="fw-4">《人力资源和社会保障部关于印发</i><支持海南人力资源和社会保障事业全面深化改革开放的实施意见><i class="fw-4">的通知》</i></a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href=""><i class="fw-4">《教育部 海南省人民政府印发</i><关于支持海南教育改革开放实施方案><i class="fw-4">的通知》</i></a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;"><i class="fw-4">《国家市场监督管理总局、国家药品监督管理局、国家知识产权局联合印发</i><关于支持中国海南自由贸易试验区建设的若干意见><i class="fw-4">的通知》</i></a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;"><i class="fw-4">《农业农村部印发</i><贯彻落实中共中央国务院关于支持海南全面深化改革开放的指导意见实施方案><i class="fw-4">的通知》</i></a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">《最高人民法院关于为海南全面深化改革开放提供司法服务和保障的意见》</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">国家发展改革委关于印发《海南省建设国际旅游消费中心的实施方案》的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">《交通运输部关于推进海南三亚等邮轮港口海上游航线试点的意见》</a>
				  </li>
			  </ul>
		  </div>
          <div class="policyItem province">
			<div class="l_title"><img src="../../../static/img/Industry/icon_s.png" alt="">省级政策</div>
			  <ul>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">海南省优化营商环境行动计划(2019- 2020 年)</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">中国(海南）自由贸易试验区商事登记管理条例</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">海南省人民政府关于印发海南省健康产业发展规划（2019-2025年）的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">海南省人民政府办公厅关于促进总部经济发展的工作意见</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">海南省商务厅关于印发<i class="fw-7">《海南省总部企业认定管理办法》</i> 的函</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">百万人才进海南行动计划（2018-2025年）</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">海南省公安厅海南省旅游发展委员会关于59 国人员入境旅游免签政策注意事项的通告</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">海南省人民政府办公厅关于印发海南邮轮港口海上游航线试点实施方案的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">海南省人民政府印发<i class="fw-7">《关于支持博鳌乐城国际医疗旅游先行区发展的措施(试行)》</i>等四个“一园一策”的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">海南省人民政府关于将部分省级行政审批事项调整由海口市、三亚市、洋浦经济开发区实施的决定</a>
				  </li>
			  </ul>
		  </div>
          <div class="policyItem city">
			  <div class="l_title"><img src="../../../static/img/Industry/icon_city.png" alt="">市级政策</div>
			  <ul>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市人民政府关于印发三亚市促进总部经济发展暂行办法的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">中共三亚市委关于印发<i class="fw-7">《三亚市落实“百万人才进海南行动计划”实施方案（2018—2025年）》</i>的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市人民政府办公室关于印发三亚市人才住房租赁补贴和购房补贴申请发放规程（试行）的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市人民政府关于印发三亚市鼓励拓展境外航线财政补贴实施办法的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市鼓励邮轮旅游产业发展财政奖励实施办法（2019年修订）</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市人民政府关于印发三亚市旅游产业发展专项资金管理暂行办法的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市人民政府关于印发三亚市促进金融业发展扶持奖励办法的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市人民政府关于印发三亚市高标准高质量推进金融业发展扶持奖励暂行办法的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市人民政府关于印发三亚市会展业扶持专项资金管理办法的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市会展业扶持专项资金发放实施细则</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市人民政府关于印发三亚市农村电商服务体系建设扶持办法的通知文化产业发展专项资金管理暂行办法的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市人民政府关于印发《三亚市扶持互联网产业发展实施意见》的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市人民政府关于印发《三亚市互联网产业发展专项资金管理办法》的通知</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市促进金融业发展扶持奖励办法（2019年修订）</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市基金小镇私募股权投资机构管理办法（2019年修订）</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市重点项目管理办法</a>
				  </li>
				  <li>
					  <span><img src="../../../static/img/Industry/icon_book.png" alt=""></span>
					  <a href="javascript:;">三亚市人民政府关于印发《三亚市市级高新技术企业认定管理及扶持办法》的通知</a>
				  </li>
			  </ul>
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
      index: 3
    };
  }
};
</script>

<style scoped>
.lh-24 {
  line-height: 24px;
}
.lh-34 {
  line-height: 34px;
}
.mt-6 {
  margin-top: 6px;
}
.mt-26 {
  margin-top: 26px;
}
.mb-23 {
  margin-bottom: 23px;
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
.hay_castCon {
  margin: 0 12.7%;
  width: 74.6%;
}
/*概述*/
.hay_castCon .summary .summaryInfo,
.hay_castCon .deal .dealInfo,
.hay_castCon .data_base .data_baseInfo,
.hay_castCon .hay_cast_adv .hay_cast_advInfo {
  padding: 0 10px;
}
.hay_castCon .summary {
  margin-top: 51px;
}
.hay_castCon .summaryInfo .finl,
.hay_castCon .summaryInfo .invl {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #eb6100;
  border-radius: 10px;
  margin-right: 27px;
  margin-bottom: 54px;
}
.hay_castCon .summaryInfo .finr,
.hay_castCon .summaryInfo .invr {
  width: 733px;
}
/*交易服务*/
.hay_castCon .deal {
  margin-top: 39px;
}
.hay_castCon .deal .dealInfo,
.hay_castCon .data_base .data_baseInfo,
.hay_castCon .hay_cast_adv .hay_cast_advInfo {
  margin-top: 26px;
}
.hay_castCon .deal .circle {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #eb6100;
  margin: 0 13px 0 4px;
}
/*全球数据库/海丝投优势*/
.hay_castCon .data_base,
.hay_castCon .hay_cast_adv {
  margin-top: 45px;
}
.hay_cast_adv .hay_cast_advInfo .advantagel {
  color: #eb6100;
  float: left;
  margin-right: 10px;
  font-weight: 600;
}
.hay_cast_adv .hay_cast_advInfo .advantager {
  float: left;
  width: 786px;
}

/* 自贸政策content  2020.5.18 */
.hay_castCon .policyItem {
  border-radius: 0px 50px 0px 50px;
  padding: 146px 60px 34px;
  color: #fff;
  position: relative;
  margin-top: 40px;
}
.hay_castCon .policyItem i{
	font-style: inherit;
	display: inline;
}
.hay_castCon .country {
  background: url("../../../static/img/Industry/bg_country.png")no-repeat;
  background-size:cover;
  box-shadow: 6px 8px 0px 0px 
		rgba(126, 35, 35, 0.3);
  font-weight: 600;
}
.hay_castCon .province {
  background: url("../../../static/img/Industry/bg_province.png")no-repeat;
  background-size:cover;
  box-shadow: 6px 8px 0px 0px 
		rgba(82, 73, 137, 0.3);
}
.hay_castCon .city {
  background: url("../../../static/img/Industry/bg_city.png")no-repeat;
  background-size:cover;
  box-shadow: 6px 8px 0px 0px 
		rgba(107, 89, 128, 0.3);
}
.hay_castCon .policyItem .l_title {
	position: absolute;
	left: 0;
	top: 28px;
	width: 360px;
	background-color: rgba(0,0,0,0);
	border-radius: 0px 0px 35px 0px;
	border: solid 1px #db5947;
	text-align: center;
	padding: 15px 0;
	font-size: 34px;
	letter-spacing: 5px;
	    font-weight: 600;
}
.hay_castCon .province .l_title {
	border: solid 1px #00b7ee;
}
.hay_castCon .city .l_title {
	border: solid 1px #bd76df;
}
.hay_castCon .policyItem .l_title img{
	width: 46px;
	height: 38px;
	margin-right: 14px;
}

.hay_castCon .policyItem li {
	padding: 16px 30px;
	font-size: 20px;
	color: #333;
	background-color: #ffffff;
	border-radius: 40px;
	margin-bottom: 20px;
	display: flex;
    align-items: center;
}
.hay_castCon .country li:hover {
	color: #a40000;
}
.hay_castCon .province li:hover {
	color: #283891;
}
.hay_castCon .city li:hover {
	color: #583492;
}
.hay_castCon .policyItem li span {
	display: inline-block;
	width: 28px;
	height: 28px;
	background-color: #a40000;
	border-radius: 50%;
	text-align: center;
	line-height: 27px;
	margin-right: 8px;
	flex: none;
}
.hay_castCon .province li span {
	background-color: #283891;
}
.hay_castCon .city li span {
	background-color: #593593;
}

.hay_castCon .policyItem li span img {
	vertical-align: inherit;
	width: 16px;
	height: 14px;
}
</style>