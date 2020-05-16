<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/Industry/industry_banner1.jpg">
	    </div>
	    <div class="train_tit">
	        <div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_active tabBox_mr"><router-link class="tab_active" :to="{ path : '/enterPark'}">优惠政策</router-link></div>
	        		<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/financialSupport'}">服务体系</router-link></div>
	        		<div class="tabBox dib"><router-link :to="{ path : '/hayCast'}">自贸政策</router-link></div>
	        	</div>
	        </div>
	    </div>
	    <div class="enter_parkCon">
	    	<div class="w">
	    		<div class="enter_parkCon">
		    		<div class="advBox clearfix">
		    			<div class="advBoxl fl">
		    				<img src="../../../static/img/Industry/adv.jpg"/>
		    			</div>
		    			<div class="advBoxr fl">
		    				<div class="adv fs-36 fw-6">优势<span class="fs-18 regCompany" @click="regCompanyProcess">点击了解注册公司流程与条件</span></div>
		    				<span class="fs-16 mb-6">海南的第一个金融小镇，享受三亚优惠税收政策</span><br />
							<span class="fs-16 mb-6">地处海棠湾卓越自然环境</span><br />
							<span class="fs-16">拥有<span class="fw-6">天时、地利、人和</span>三大优势</span>
		    			</div>
		    		</div>

		    		<div class="advInfo clearfix">
		    			<div class="inf weather mr-35">
		    				<div class="title fs-16 col-ff">天时 - 绿色通道</div>
		    				<div class="text fs-14 lh-24">2016年4月，国务院了印发金融专项整治工作实施文件，全国大部分省份停止了基金和投资类金融公司的工商注册。<br />17年4月，海南省三亚市设立“亚太金融小镇”金融类公司注册绿色通道，并以“当天核名，次日颁发执照”的效率，为入驻企业提供全方位服务。</div>
		    			</div>
		    			<div class="inf ground_int mr-35">
		    				<div class="title fs-16 col-ff">地利 - 卓越环境</div>
		    				<div class="text fs-14 lh-24">第一期2.8万平方米已经建成。<br />小镇地处海棠湾核心区，背靠青龙山、头枕青田河、面向铁炉港、眺望海棠湾。拥有国际高端酒店群、301医院养生圈、人大附中教育带、CDF离岛免税店等配套设施。从居住、医疗、教育等方面，形成卓越的品质生活服务体系。</div>
		    			</div>
		    			<div class="inf people_and">
		    				<div class="title fs-16 col-ff">人和 - 优惠政策</div>
		    				<div class="text fs-14 lh-24"><span class="fw-6">为入驻企业提供税收优惠及办公免租</span><br /><span class="col-0068b7">税收优惠：</span>2019年12月5日，三亚市政府出台《三亚市高标准，高质量，推进金融业发展扶持奖励暂行办法--基石计划》，对企业部分部分增值税和所得税，企业部分：三亚留存部分三年内给予100%奖励，年度纳税达到50万后，次月奖励。个人部分所得税：三亚留存部分，3年内100%奖励<br /><span class="col-0068b7">办公免租：</span>对入驻客户提供5年办公室免租优惠，同时企业也可以选择异地办公。</div>
		    			</div>
		    		</div>

		    		<div class="favBox clearfix">
		    			<div class="favBoxl fl">
		    				<img src="../../../static/img/Industry/policy.jpg"/>
		    			</div>
		    			<div class="favBoxr fl">
		    				<div class="fav fs-36 fw-6">优惠政策</div>
		    				<span class="fs-16 mb-6">2019年12月5日三亚市人民政府制定</span><br />
							<span class="fs-16 mb-6">《三亚市高标准高质量推进金融业发展扶持奖励暂行办法--基石计划》</span><br />
							<span class="fs-16">为三亚金融企业入驻小镇的基金企业提供如下优惠政策</span>
		    			</div>
		    		</div>

		    		<div class="favInfo clearfix">
		    			<div class="inf weather mr-35">
		    				<div class="title fs-16 col-ff">公司税收</div>
		    				<div class="text fs-14 lh-24">各类投资基金及管理类企业增值税三亚市地方分享的部分，自认定之日起，三年内三亚留存部分100%奖励，当月税收，次月奖励。</div>
		    			</div>
		    			<div class="inf ground_int mr-35">
		    				<div class="title fs-16 col-ff">个人税收</div>
		    				<div class="text fs-14 lh-24">各类投资基金管理企业，企业高管和合伙人个人所得税，自认定当日起，三年内个人所得税三亚留存部分100%给予奖励。</div>
		    			</div>
		    			<div class="inf people_and">
		    				<div class="title fs-16 col-ff">人才服务</div>
		    				<div class="text fs-14 lh-24 ls-1-">各类投资基金及管理企业引进金融稀缺人才，工作满一年，一次性给予10万元奖励，另外对于引进人才购房，购车等，享受专门人才优惠，对于落户，医疗，子女教育，事档案管理、职称评定、社会保障等，市政务中心及各办事大厅实行“一站式”服务。</div>
		    			</div>
		    		</div>
	    		</div>

	    		<div class="company">
	    			<div class="companyTit tac">
	    				<img src="../../../static/img/Industry/admTit.png"/>
	    			</div>
	    			<div class="companys tac">
	    				<img src="../../../static/img/Industry/company.png"/>
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
				index:3,
			}
		},
		methods: {
			regCompanyProcess(){
				window.location.href = this.$root.urlPath.APF + '/regCompanyProcess';
			},
		},
	}
</script>

<style scoped>
	.ls-1-{
		letter-spacing: -1px;
	}
	.mb-6{
		margin-bottom: 6px;
	}
	.mr-35{
		margin-right: 35px;
	}
	.lh-24{
		line-height: 24px;
	}
  .col-0068b7{
    color: #0068b7;
  }
	.top_banner{
		width: 100%;
	    position: relative;
	    overflow: hidden;
	}
	.top_banner img{
		width:auto;
		margin: 0 50%;
		transform: translateX(-50%);
	}

	.enter_parkCon{
		margin:0 12.7%;
		width:74.6%;
	}
	/*优势/优惠政策*/
	.enter_parkCon .advBox{
		margin-top: 60px;
	}
	.enter_parkCon .advBoxl,.enter_parkCon .favBoxl{
		margin-right: 43px;
	}
	.advBox .advBoxr .adv,.favBox .favBoxr .fav{
		margin-bottom:18px;
		margin-top: -10px;
	}
	.advBox .advBoxr .adv .regCompany{
		font-weight: normal;
		color: #eb6100;
		border-radius: 5px;
	    padding: 4.5px 12px;
		border: 1px solid #eb6100;
		cursor: pointer;
		margin-left: 20px;
	    vertical-align: top;
	    margin-top: 10px;
	}

	/*优惠政策*/
	.enter_parkCon .favBox{
		margin-top: 73px;
	}
	/*三大优势/政策*/
	.advInfo,.favInfo{
		margin-top: 53px;
	}
	.advInfo .inf,.favInfo .inf{
		width: 270px;
		background-color: #ffffff;
		border-radius: 10px;
		float: left;
		position: relative;
		padding: 39px 22px 45px 22px;
	}
	.advInfo .inf{
		height: 380px;
	}
	.advInfo .weather,.favInfo .weather{
		box-shadow: 2px 4px 1px 0px #f4e1d6;
		border: solid 1px #ffafb5
	}
	.advInfo .ground_int,.favInfo .ground_int{
		box-shadow: 2px 4px 1px 0px #dbf4d6;
		border: solid 1px #b8eb7a
	}
	.advInfo .people_and,.favInfo .people_and{
		box-shadow: 2px 4px 1px 0px #d6e6f4;
		border: solid 1px #8ec0ed
	}
	.advInfo .inf .title,.favInfo .inf .title{
		width: 160px;
		height: 35px;
		border-radius: 10px;
		line-height: 35px;
		text-align: center;
		position: absolute;
		left:50%;
		top:-16px;
		margin-left: -80px;
	}
	.advInfo .weather .title,.favInfo .weather .title{
		background-color: #ff515e;
	}
	.advInfo .ground_int .title,.favInfo .ground_int .title{
		background-color: #009944;
	}
	.advInfo .people_and .title,.favInfo .people_and .title{
		background-color: #0068b7;
	}
	/*优惠政策*/
	.favInfo .inf{
		height:240px;
	}
	/*已入驻基金公司*/
	.enter_parkCon .company{
		margin-top: 64px;
	}
	.enter_parkCon .company .companys{
		margin-top: 58px;
	}
</style>
