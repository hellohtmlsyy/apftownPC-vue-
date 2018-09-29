<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/Industry/industry_banner4.jpg">
	    </div>
	    <div class="regCom_Process">
	    	<div class="w">
	    		<div class="regCom_ProcessCon">
	    			<div class="process">
	    				<div class="tac fs-36 fw-6 col-33">注册公司流程</div>
	    				<div class="tac processCon">
	    					<img src="../../../static/img/Industry/process.png"/>
	    				</div>
	    			</div>
	    			
	    			<div class="condition">
	    				<div class="tac fs-36 fw-6 col-33">注册公司条件</div>
	    				<div class="col-requirement fs-24 fw-6 mt-58">股权投资基金企业和股权投资基金管理企业注册条件</div>
	    				<div class="fs-16 fw-6 col-666 mt-12 lh-30">亚太金融小镇严格按照《海南省工商行政管理局关于股权投资基金企业和股权投资基金管理企业注册登记的指导意见》，对入驻小镇的股权投资基金企业和股权投资基金管理企业注册要求如下：</div>
	    				<div class="conditionInfo">
	    					<div class="fs-16 col-666 lh-34 mb-14 clearfix">
    							<div class="circle"></div>
    							<div class="conditionInfoR">股权投资基金企业和股权投资基金管理企业的组织形式为有限公司制或者有限合伙制。</div>
    						</div>
    						<div class="fs-16 col-666 lh-34 mb-14 clearfix">
    							<div class="circle"></div>
    							<div class="conditionInfoR">股权投资基金企业和股权投资基金管理企业，以有限公司形式设立的，股东人数建议不得超过50人；以有限合伙企业形式设立的，合伙人人数应当有2人以上50人以下。</div>
    						</div>
    						<div class="fs-16 col-666 lh-34 mb-14 clearfix">
    							<div class="circle"></div>
    							<div class="conditionInfoR">有限公司制股权投资基金企业名称核准为：<br />行政区划+字号+股权投资基金+有限公司;有限合伙制股权投资基金企业名称核定为：行政区划+字号+股权投资基金+合伙企业+（有限合伙）。有限公司制股权投资基金管理企业名称核准为：行政区划+字号+股权投资基金管理+有限公司；有限合伙制股权投资基金管理企业名称核定为：行政区划+字号+股权投资基金管理+合伙企业+（有限合伙）。</div>
    						</div>
    						<div class="fs-16 col-666 lh-34 mb-14 clearfix">
    							<div class="circle"></div>
    							<div class="conditionInfoR">股权投资基金企业和股权投资基金管理企业的出资方式限于货币出资。股权投资基金企业注册资本(认缴出资额)最低限额建议为人民币1亿元，其中，股权投资基金企业每个法人股东(合伙人)的认缴注册资本(出资)建议不低于人民币800万元，每个自然人股东(合伙人)的认缴注册资本(出资)建议不低于人民币100万元。有限公司制股权投资基金管理企业的注册资本建议不少于200万元人民币，有限合伙制股权投资基金管理企业的注册资本建议不少于100万元人民币。</div>  
    						</div>
    						<div class="fs-16 col-666 lh-34 mb-14 clearfix">
    							<div class="circle"></div>
    							<div class="conditionInfoR">股权投资基金企业自登记注册之日起30日内，须向海南省政府金融工作办公室备案，并到备案认可的托管银行开设账户。备案及银行开户均由小镇工作人员代办，公司人员无需到场。</div>
    						</div>
    						<div class="fs-16 col-666 lh-34 mb-14 clearfix">
    							<div class="circle"></div>
    							<div class="conditionInfoR">股权投资基金企业和股权投资基金管理企业登记注册须按照有限责任公司、有限合伙企业等有关法律、法规规定的要求提交文件材料。</div>
    						</div>
	    				</div>
	    				<div class="col-requirement fs-24 fw-6 pt-20">对申请登记注册的股权投资基金管理企业管理人员的要求</div>
	    				<div class="conditionInfo">
	    					<div class="fs-16 col-666 lh-34 clearfix">
    							<div class="circle"></div>
    							<div class="conditionInfoR">所有高级管理人员都应是具有完全民事行为能力的自然人。</div>
    						</div>
    						<div class="fs-16 col-666 lh-34 clearfix">
    							<div class="circle"></div>
    							<div class="conditionInfoR">所有高级管理人员在最近5年内没有自己应负责任的违法记录或尚未审结的重大民事经济纠纷诉讼案件。</div>
    						</div>
    						<div class="fs-16 col-666 lh-34 clearfix">
    							<div class="circle"></div>
    							<div class="conditionInfoR">建议至少51%的高级管理人员具备3年以上股权投资基金管理或相关业务经验。</div>
    						</div>
    						<div class="fs-16 col-666 lh-34 clearfix">
    							<div class="circle"></div>
    							<div class="conditionInfoR">建议至少有证券、金融、财务、法律专业人员各1名。</div>  
    						</div>
	    				</div>
						<div class="fs-16 col-requirement fw-6" style="margin: 40px 0 0 30px">注：具体注册条件，注册费用请与小镇工作人员沟通确定</div>
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
	.col-requirement{
		color: #e8641b;
	}
	.lh-24{
		line-height: 24px;
	}
	.lh-30{
		line-height: 30px;
	}
	.lh-34{
		line-height: 34px;
	}
	.mt-6{
		margin-top: 6px;
	}
	.mt-12{
		margin-top: 12px;
	}
	.mt-26{
		margin-top: 26px;
	}
	.mt-58{
		margin-top: 58px;
	}
	.mb-14{
		margin-bottom: 14px;
	}
	.mb-23{
		margin-bottom: 23px;
	}
	.pt-20{
		padding-top: 20px;
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
	.regCom_ProcessCon{
		margin:0 12.7%;
		width:74.6%;
	}
	/*流程*/
	.regCom_ProcessCon .process .processInfo,.regCom_ProcessCon .condition .conditionInfo{
	    padding-left: 4px;
	}
	.regCom_ProcessCon .process{
		margin-top: 41px;
	}
	.regCom_ProcessCon .process .processCon{
		margin: 28px 0 0 -15px;
	}
	/*条件*/
	.regCom_ProcessCon .condition{
		margin-top: 70px;
	}
	.regCom_ProcessCon .condition .conditionInfo{
		margin-top: 21px;
	}
	.regCom_ProcessCon .condition .circle{
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: #eb6100;
		margin: 12px 13px 0 4px;
		float: left;
	}
	.regCom_ProcessCon .condition .conditionInfoR{
		width: 96.8%;
		float: left;
	}
</style>