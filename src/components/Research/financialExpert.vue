<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/Research/research_banner2.jpg">
	    </div>
	    <div class="train_tit">    	
	        <div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/cooperationAgency'}">合作机构</router-link></div>	        			
	        		<div class="tabBox dib tabBox_active tabBox_mr"><router-link class="tab_active" :to="{ path : '/financialExpert'}">金融专家</router-link></div>
	        		<div class="tabBox dib"><router-link :to="{ path : '/researchFindings'}">研究结果</router-link></div>
	        	</div>        	
	        </div>
	    </div>
	    <div class="fin_expert">
	    	<div class="w">
	    		<div class="fin_expertCon">
    				<div class="expert clearfix">
		    			<div class="expertl fl">
		    				<img src="../../../static/img/Research/fin_expert.jpg" alt="" />
		    			</div>
		    			<div class="expertr col-33 fl">
		    				<div class="fs-36 fw-6 tit">金融专家</div>
		    				<span class="fs-16 lh-34">
		    					金融行业中人才灿如星辰，汇聚在一起才能释放出巨大的能量<br />
								因此我们建立了专家库，聚集行业人才<br />
								迸发出金融专业的火花<br />
								在这里，我们为每个金融专家提供多元化的价值实现通道<br />
								你可以发布服务资源，在线发布研究成果，在线回答专业问题<br />
								提供整体解决方案，实现自己的专业价值<br />
							</span>
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
				index:5,
			}
		},
	}
</script>

<style scoped>
	.lh-34{
		line-height: 34px;
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
	
	.fin_expertCon{
		margin:0 12.7%;
		width:74.6%;
	}
	.fin_expertCon .expert{
		margin-top: 40px;
	}
	.fin_expertCon .expert .expertl{
		margin-right: 46px;
	}
	.fin_expertCon .expert .expertr .tit{
		margin-top: -10px;
    	margin-bottom: 12px;
	}
</style>