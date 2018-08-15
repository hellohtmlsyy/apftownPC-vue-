<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/Research/research_banner3.jpg">
	    </div>
	    <div class="train_tit">    	
	        <div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/cooperationAgency'}">合作机构</router-link></div>	        			
	        		<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/financialExpert'}">金融专家</router-link></div>
	        		<div class="tabBox dib tabBox_active"><router-link class="tab_active" :to="{ path : '/researchFindings'}">研究结果</router-link></div>
	        	</div>        	
	        </div>
	    </div>
	    <div class="research">
	    	<div class="w">
	    		<div class="researchCon">
	    			<div class="explain clearfix">
	    				<div class="explainl tac fl">
	    					<img src="../../../static/img/Research/explain.jpg"/>
	    				</div>
	    				<div class="explainr fs-16 col-333 fl">
	    					<div class="lh-28 mb-28">机构专家可以快速发布研究成果<br />需求者可以选择所需文献资料</div>
	    					<div class="lh-28 mb-28"><span class="fw-6">大数据建设</span><br />与中国经济信息社下属国家信息中心合作，建立数据终端</div>
	    					<div class="lh-28"><span class="fw-6">研究实验室</span><br />小镇建设完成亚太金融实验室<br />拥有一流的服务器和金融软件，可开展各种金融建模和运算</div>
	    				</div>
	    			</div>
	    			
	    			<div class="paper">
	    				<div class="tac">
	    					<img src="../../../static/img/Research/paperTit.png"/>
	    				</div>
	    				<div class="tac fs-16 col-666 mt-9">小镇与清华大学经济管理学院中国金融研究中心合作</div>
	    				<div class="book cp">
	    					<i class="iconfont icon-shu fs-50 mr-20"></i>
	    					<div>
	    						<span class="fs-36 mb-3">2017亚太金融蓝皮书</span>
	    						<span class="fs-14">Asia-Pacific Financial Blue Book, 2017</span>
	    					</div>
	    					<a href="../../../static/file/2017亚太金融蓝皮书.pdf" target="_blank" class="download col-ff" v-if="cookies">
	    						<i class="iconfont icon-xiazai fs-26 mr-10"></i>
	    						<span class="fs-16">点击下载</span>
    						</a>
    						<a href="javascript:;" target="_blank" class="download col-ff" @click="download" v-else>
	    						<i class="iconfont icon-xiazai fs-26 mr-10"></i>
	    						<span class="fs-16">点击下载</span>
    						</a>
	    				</div>
	    			</div>
	    			
	    			<div class="policy">
	    				<div class="tac">
	    					<img src="../../../static/img/Research/policyTit.png" alt="" />
	    				</div>
	    				<div class="tac fs-16 col-666 mt-12">海南自由贸易港相关政策汇编</div>
	    				<div class="download clearfix">
	    					<div class="inf strategy mr-73 tac cp">
	    						<div class="fs-30 col-70 tit">国家支持战略</div>
	    						<a href="../../../static/file/国家支持战略.pdf" target="_blank" class="dText col-ff" v-if="cookies">
	    							<i class="iconfont icon-xiazai fs-26 mr-10"></i>
	    							<span class="fs-16">点击下载</span>
	    						</a>
	    						<a href="javascript:;" class="dText col-ff" target="_blank" @click="download" v-else>
	    							<i class="iconfont icon-xiazai fs-26 mr-10"></i>
	    							<span class="fs-16">点击下载</span>
	    						</a>
	    					</div>
	    					<div class="inf reform mr-73 tac cp">
	    						<div class="fs-30 col-70 tit">海南深化改革</div>
	    						<a href="../../../static/file/海南深化改革.pdf" target="_blank" class="dText col-ff" v-if="cookies">
	    							<i class="iconfont icon-xiazai fs-26 mr-10"></i>
	    							<span class="fs-16">点击下载</span>
	    						</a>
	    						<a href="javascript:;" target="_blank"  class="dText col-ff" @click="download" v-else>
	    							<i class="iconfont icon-xiazai fs-26 mr-10"></i>
	    							<span class="fs-16">点击下载</span>
	    						</a>
	    					</div>
	    					<div class="inf discount tac cp">
	    						<div class="fs-30 col-70 tit">三亚金融优惠</div>
	    						<a href="../../../static/file/三亚金融优惠.pdf" target="_blank" class="dText col-ff" v-if="cookies">
	    							<i class="iconfont icon-xiazai fs-26 mr-10"></i>
	    							<span class="fs-16">点击下载</span>
	    						</a>
	    						<a href="javascript:;" target="_blank" class="dText col-ff" @click="download" v-else>
	    							<i class="iconfont icon-xiazai fs-26 mr-10"></i>
	    							<span class="fs-16">点击下载</span>
	    						</a>
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
	import { setCookie,getCookie } from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				index:5,
				cookies: getCookie('APF_UID')
			}
		},
		methods: {
			download(){
				this.$layer.msg('未登录，请先登录！');
				var self = this;
				var t1 = window.setTimeout(function(){
					window.location.href = self.$root.urlPath.APF + '/login?redirectTo=' + (self.$root.urlPath.APF + '/researchFindings');
				},800);
//				window.clearTimeout(t1);
			}
		}
		
	}
</script>

<style scoped>
	.fs-26{
		font-size: 26px !important;
	}
	.fs-50{
		font-size: 50px !important;
	}
	.lh-28{
		line-height: 28px;
	}
	.mt-9{
		margin-top: 9px;
	}
	.mb-3{
		margin-bottom: 3px;
	}
	.mb-28{
		margin-bottom: 28px;
	}
	.mr-73{
		margin-right: 73px;
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
	
	.researchCon{
		margin:0 12.7%;
		width:74.6%;
	}
	/*讲解*/
	.researchCon .explain{
    	padding: 23px 27px 23px 35px;
		border: solid 1px #bbd4ea;
		display: flex;
		align-items: center;
		margin: 40px 10px 0 10px;
	}
	.researchCon .explain .explainl{
	    margin-right: 85px;
	}
	/*论文报告*/
	.researchCon .paper{
		margin-top: 63px;
	}
	.researchCon .paper .book{
		width: 700px;
		height: 131px;
		border: 1px solid #0088d5;
		border-radius: 20px;
		display: flex;
		align-items: center;
		padding: 36px 39px 33px 45px;
		color: #0068b7;
		margin: 47px 90px 0 90px;
	}
	.researchCon .paper .book:hover{
		box-shadow: 5px 2px 10px 0px rgba(0, 151, 213, 0.5);
	}
	.paper .book .download{
		width: 214px;
		height: 40px;
		background-image: linear-gradient(90deg, #00b7ee 0%, #0082d2 100%), linear-gradient( #ffffff, #ffffff);
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/*政策汇编*/
	.researchCon .policy{
		margin-top: 50px;
	}
	.policy .download{
		padding: 0 10px;
		margin-top: 48px;
	}	
	.policy .download .inf{
		float: left;
		width: 238px;
		height: 180px;		
		border-radius: 20px;
		border: solid 1px #ec8989;
		padding: 36px 24px;
	}
	.policy .download .inf .tit{
		margin-bottom: 25px;
	}
	.policy .download .inf .dText{
		width: 145px;
		height: 40px;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	    margin: 0 22px;
	}
	/*战略*/
	.policy .download .strategy{
		border: 1px solid #ec8989;
	}
	.policy .download .strategy:hover{
		box-shadow: 3px 1px 10px 0px rgba(226, 10, 34, 0.5);
	}
	.policy .download .strategy:hover .tit{
		color: #e62d42;
	}
	.policy .download .strategy .dText{
		background-image: linear-gradient(90deg, #e73247 0%, #e10019 100%), linear-gradient( #ffffff, #ffffff);
	}
	/*改革*/
	.policy .download .reform{
		border: 1px solid #e86fb2;
	}
	.policy .download .reform:hover{
		box-shadow: 3px 1px 10px 0px rgba(230, 5, 130, 0.5);
	}
	.policy .download .reform:hover .tit{
		color: #e50280;
	}
	.policy .download .reform .dText{
		background-image: linear-gradient(90deg, #ff4caf 0%, #e4007f 100%), linear-gradient( #ffffff, #ffffff);
	}
	/*优惠*/
	.policy .download .discount{
		border: 1px solid #f19a80;
	}
	.policy .download .discount:hover{
		box-shadow: 3px 1px 10px 0px rgba(236, 105, 66, 0.5);
	}
	.policy .download .discount:hover .tit{
		color: #ec6941;
	}
	.policy .download .discount .dText{
		background-image: linear-gradient(90deg, #f19149 0%, #ec6941 100%), linear-gradient( #ffffff, #ffffff);
	}
</style>