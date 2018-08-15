<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/park/park_banner2.jpg">
	    </div>
	    <div class="train_tit">    	
	        <div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/townLodging'}">小镇住宿</router-link></div>	        			
	        		<div class="tabBox dib tabBox_active tabBox_mr"><router-link class="tab_active" :to="{ path : '/offProperty'}">办公物业</router-link></div>
	        		<div class="tabBox dib"><router-link :to="{ path : '/visitTown'}">参观小镇</router-link></div>
	        	</div>        	
	        </div>
	    </div>
	    <div class="off_property">
	    	<div class="w">
	    		<div class="off_propertyCon">
	    			<div class="sup_services">
	    				<div class="serviceTit col-33 fs-30 tac">小镇办公物业服务目前支持</div>
	    			</div>
	    			<div class="serviceCon clearfix">
	    				<div class="serviceBox fl">
	    					<img src="../../../static/img/Park/icon1.png"/>
	    					<span class="col-33 fs-20 text">办公室预定</span>
	    				</div>
	    				<div class="serviceBox fl">
	    					<img src="../../../static/img/Park/icon2.png"/>
	    					<span class="col-33 fs-20 text">会议室预定</span>
	    				</div>
	    				<div class="serviceBox fl">
	    					<img src="../../../static/img/Park/icon3.png"/>
	    					<span class="col-33 fs-20 text">物业费缴纳</span>
	    				</div>
	    				<div class="serviceBox fl ml-10">
	    					<img src="../../../static/img/Park/icon4.png" class="mr-15"/>
	    					<span class="col-33 fs-20">问题报修</span>
	    				</div>
	    			</div>
	    			
	    			<div class="see tac">
	    				<div class="seeCon">
	    					<div class="tac">
	    						<a :href="lookClassroom" class="seeBtn fs-20 fw-6 col-094 cp">查看办公室/会议室</a>
	    					</div>
	    					<div class="tac mt-40">
	    						<a href="javascript:;" @click="goConsult('/contactUs')" class="seeBtn fs-20 col-094 cp">立即咨询服务详情</a>
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
				index:6,
				lookClassroom: this.$root.urlPath.APF + '/siteReservation#classroom',
			}
		},
		methods:{
			goConsult(path){
				window.location.href = this.$root.urlPath.APF + path;
			}
		}
	}
</script>

<style scoped>
	.ml-10{
		margin-left: 10px;
	}
	.mt-40{
		margin-top: 40px;
	}
	.col-094{
		color: #009944;
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
	.off_propertyCon{
		margin:0 12.7%;
		width:74.6%;
	}
	.off_propertyCon .sup_services{
		margin-top: 28px;
	}
	.off_propertyCon .serviceCon{
		padding: 0 7px;
    	margin-top: 61px;
	}
	.off_propertyCon .serviceCon .serviceBox{
		display: flex;
		align-items: center;
	}
	.off_propertyCon .serviceCon .serviceBox .text{
		margin: 0 66px 0 20px;
	}
	
	/*查看*/
	.off_propertyCon .see{
		margin-top: 50px;
	}
	.off_propertyCon .see .seeCon{
		background: url(../../../static/img/Park/office.png) no-repeat;
		width: 882px;
		height: 265px;
		background-size: 100% 100%;
		padding: 52px 0;
	}
    .see .seeCon .seeBtn{
		width: 260px;
		height: 60px;
		background-color: #ffffff;
		box-shadow: 3px 3px 27px 0px rgba(49, 49, 49, 0.5);
		border-radius: 5px;
		line-height: 60px;
	}
</style>