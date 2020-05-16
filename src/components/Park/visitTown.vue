<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/park/park_banner3.jpg">
	    </div>
	    <div class="train_tit">    	
	        <div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/townLodging'}">企业服务</router-link></div>	        			
	        		<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/offProperty'}">入驻申请</router-link></div>
	        		<div class="tabBox dib tabBox_active"><router-link class="tab_active" :to="{ path : '/visitTown'}">参观小镇</router-link></div>
	        	</div>        	
	        </div>
	    </div>
	    <div class="visit_town">
	    	<img src="../../../static/img/Park/townInfo.jpg" alt="" style="width:100%"/>
    			<!--<div class="visit_townCon">
    				<div class="topText tac fs-18 col-ff lh-32">小镇拥有金融博物馆、金融图书馆、金融教室、金融实验室<br />金融联合办公室、金融精品酒店等设施</div>
    				<div class="topText tac fs-20 col-ff">小镇实际场地考察请拨打  400-670-2139</div>
    			</div>-->
	    </div>
    	<m-footer></m-footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				index:6,
			}
		},
	}
</script>

<style scoped>
	/*.lh-32{
		line-height: 32px;
	}	*/
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
	/*.visit_town{
		background: url(../../../static/img/Park/townInfo.png) no-repeat;
		width: 1920px;
		height: 979px;
	}
	.visit_townCon{
		height: 979px;
		padding: 61px 0;
	}*/
</style>