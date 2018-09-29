<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/Industry/industry_banner3.jpg">
	    </div>
	    <div class="train_tit">    	
	        <div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/enterPark'}">入驻园区</router-link></div>	        			
	        		<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/financialSupport'}">金融支持</router-link></div>
	        		<div class="tabBox tabBox_active dib"><router-link class="tab_active" :to="{ path : '/hayCast'}">海丝投</router-link></div>
	        	</div>        	
	        </div>
	    </div>
	    <div class="hay_cast">
	    	<div class="w">
	    		<div class="hay_castCon">
	    			<div class="summary">
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
				index:7,
			}
		},
	}
</script>

<style scoped>
	.lh-24{
		line-height: 24px;
	}
	.lh-34{
		line-height: 34px;
	}
	.mt-6{
		margin-top: 6px;
	}
	.mt-26{
		margin-top: 26px;
	}
	.mb-23{
		margin-bottom: 23px;
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
	.hay_castCon{
		margin:0 12.7%;
		width:74.6%;
	}
	/*概述*/
	.hay_castCon .summary .summaryInfo,.hay_castCon .deal .dealInfo,.hay_castCon .data_base .data_baseInfo,.hay_castCon .hay_cast_adv .hay_cast_advInfo{
	    padding: 0 10px;
	}
	.hay_castCon .summary{
		margin-top: 51px;
	}
	.hay_castCon .summaryInfo .finl,.hay_castCon .summaryInfo .invl{
		width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background-color: #eb6100;
		border-radius: 10px;
		margin-right: 27px;
		margin-bottom: 54px;
	}
	.hay_castCon .summaryInfo .finr,.hay_castCon .summaryInfo .invr{
		width:733px;
	}
	/*交易服务*/
	.hay_castCon .deal{
		margin-top: 39px;
	}
	.hay_castCon .deal .dealInfo,.hay_castCon .data_base .data_baseInfo,.hay_castCon .hay_cast_adv .hay_cast_advInfo{
		margin-top: 26px;
	}
	.hay_castCon .deal .circle{
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: #eb6100;
		margin: 0 13px 0 4px;
	}
	/*全球数据库/海丝投优势*/
	.hay_castCon .data_base,.hay_castCon .hay_cast_adv{
		margin-top: 45px;
	}
	.hay_cast_adv .hay_cast_advInfo .advantagel{
		color:#eb6100;
		float: left;
		margin-right: 10px;
		font-weight: 600;
	}
	.hay_cast_adv .hay_cast_advInfo .advantager{
		float: left;
		width:786px;
	}
</style>