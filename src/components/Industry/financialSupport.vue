<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/Industry/industry_banner2.jpg">
	    </div>
	    <div class="train_tit">    	
	        <div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/enterPark'}">入驻园区</router-link></div>	        			
	        		<div class="tabBox dib tabBox_active tabBox_mr"><router-link class="tab_active" :to="{ path : '/financialSupport'}">金融支持</router-link></div>
	        		<div class="tabBox dib"><router-link :to="{ path : '/hayCast'}">海丝投</router-link></div>
	        	</div>        	
	        </div>
	    </div>
	    <div class="fin_sup">
	    	<div class="w">
	    		<div class="fin_supCon">
		    		<div class="support clearfix">
		    			<div class="supportl fl mr-30">
		    				<img src="../../../static/img/Industry/fin_support1.jpg" alt="" />
		    			</div>
		    			<div class="supportr fl col-666">
		    				<div class="fs-14 lh-25 mb-22">近年来，中国投资管理行业高速发展，公募、私募、资管产品都有了很大增长，中国资本市场多层次、多元化的发展初见端倪，当前中国证券投资基金业协会自律管理的备案基金达8000家以上，资产管理总规模约42.81万亿元，从业人员超过百万人，已经成为中国资本市场不可或缺的组成部分。</div>
		    				<div class="fs-14 lh-25 mb-22">与此同时，基金的注册、备案、运营、募集、投资过程中，需要大量的行政、工商、税务、银行、托管、证券、会计、律师、份额登记、估值核算、信息技术等工作，消耗了基金公司有限的宝贵资源，由此产生相应的PB（PREFERRED BANKING）外包服务需求，本月1日，中国证券投资基金业协会正式发布了《私募投资基金服务业务管理办法（试行）》，规范了基金外包服务市场，促进了私募基金行业健康发展，小镇正积极申请备案，合规后提供一体化PB服务。</div>
		    				<div class="fs-14 lh-25">亚太金融小镇依据团队多年国内外基金的经验积累，联合国内外知名银行、证券公司、保险机构、会计师事务所、律师事务所，不仅建立起了后台研究风控、中台行政运营、前台募集投资三个层次的基金支持体系，而且从流程上为入驻基金提供注册、备案、托管、募集、运营五个步骤共计20项服务，打造了一个全方位基金PB服务中心。</div>
		    			</div>
		    		</div>
		    		<div class="system">
		    			<div class="systemTit tac">
		    				<img src="../../../static/img/Industry/systemTit.png"/>
		    			</div>
		    			<div class="fs-14 col-666 tac mt-12">构建&nbsp;&nbsp;前台&nbsp;&nbsp;中台&nbsp;&nbsp;后台&nbsp;&nbsp;三个层次的全方位PB服务</div>
		    			<div class="tac mt-41">
		    				<img src="../../../static/img/Industry/fin_support2.png" alt="" />
		    			</div>
		    		</div>
		    		<div class="service_flow">
		    			<div class="service_flowTit tac">
		    				<img src="../../../static/img/Industry/ser_flowTit.png"/>
		    			</div>
		    			<div class="tac mt-35">
		    				<img src="../../../static/img/Industry/fin_support3.jpg" alt="" />
		    			</div>
		    		</div>
		    		<div class="bank">
		    			<div class="bankBox clearfix mb-20">
		    				<div class="bankl fl fs-16 col-ff tac">支持银行</div>
		    				<div class="bankr fl col-666 fs-16">
		    					<span>中国银行</span>
		    					<span>工商银行</span>
		    					<span>农业银行</span>
		    					<span>建设银行</span>
		    					<span>交通银行</span>
		    					<span>光大银行</span>
		    					<span>兴业银行</span>
		    					<span>招商银行</span>
		    					<span>三亚农商银行</span>
		    				</div>
		    			</div>
		    			
		    			<div class="bankBox clearfix mb-20">
		    				<div class="bankl fl fs-16 col-ff tac">支持证券</div>
		    				<div class="bankr fl col-666 fs-16">
		    					<span>广发证券</span>
		    					<span>广州证券</span>
		    					<span>中信期货</span>
		    				</div>
		    			</div>
		    			
		    			<div class="bankBox clearfix mb-20">
		    				<div class="bankl fl fs-16 col-ff tac">会计师事务所</div>
		    				<div class="bankr fl col-666 fs-16">
		    					<span>德勤会计师事务所</span>
		    				</div>
		    			</div>
		    			
		    			<div class="bankBox clearfix">
		    				<div class="bankl fl fs-16 col-ff tac">律师事务所</div>
		    				<div class="bankr fl col-666 fs-16">
		    					<span>大成律师事务所</span>
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
				index:3,
			}
		},
	}
</script>

<style scoped>
	.lh-25{
		line-height: 25px;
	}
	.mb-22{
		margin-bottom: 22px;
	}
	.mt-41{
		margin-top: 41px;
	}
	.mt-35{
		margin-top: 35px;
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
	
	.fin_supCon{
		margin:0 12.7%;
		width:74.6%;
	}
	/*support*/
	.fin_supCon .support{
		border: solid 1px #facd89;
		margin-top: 38px;
		width: 860px;
		margin: 38px 10px 0 10px;
		padding: 18px 21px;
		display: flex;
    	align-items: center;
	}
	.fin_supCon .support .supportr{
		width:500px;
	}
	/*支持体系*/
	.fin_supCon .system{
		margin-top: 44px;
	}
	/*服务流程*/
	.fin_supCon .service_flow{
		margin-top: 57px;
	}
	/*银行*/
	.fin_supCon .bank{
		border: solid 1px #facd89;
		width: 860px;
		margin: 60px 10px 0 10px;
		padding: 23px 19px;
	}
	.fin_supCon .bank .bankl{
		width: 120px;
		height: 30px;
		line-height: 30px;
		background-color: #eb6100;
		border-radius: 15px;
		margin-right: 20px;
	}
	.bank .bankr{
		width: 535px;
	}
	.bank .bankr span{
		margin-right: 35px;
		line-height: 25px;
	}
</style>