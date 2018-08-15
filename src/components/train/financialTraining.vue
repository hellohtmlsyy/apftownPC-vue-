<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/train/train_banner2.jpg">
	    </div>
	    <div class="train_tit">    	
	    	<div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/siteReservation'}">场地预定</router-link></div>	        			
	        		<div class="tabBox dib tabBox_mr tabBox_active"><router-link class="tab_active" :to="{ path : '/financialTraining'}">金融培训</router-link></div>
	        		<div class="tabBox dib"><router-link :to="{ path : '/financialConference'}">金融会议</router-link></div>
	        	</div>        	
	        </div>
	    </div>
	    <div class="finance">
	    	<div class="w">
	    		<div class="finance_con">
	    			<div class="bless clearfix">
	    				<div class="blessl fl" align="right">
	    					<img src="../../../static/img/train/bless.png">
	    				</div>
	    				<div class="blessr fl">
	    					<span class="fw-7 fs-36">春暖花开<br>从明天起，做一个幸福的人</span><br>
							<span class="fs-16 mt-30 dib">SCHEDULE<br>FACING THE SEA WITH SPRING BLOSSOMS</span>
	    				</div>
	    			</div>
	    			<div class="finance_conTime tac">
	    				<img src="../../../static/img/train/train_time.png" alt="">
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
				index:4,
			}
		},
	}
</script>

<style scoped>
		.mt-30{margin-top: 30px;}
		/*场地预定*/
		.finance_con{
			padding-top: 50px;
			margin:0 12.7%;
			width:74.6%;
		}
		.finance_con .blessl{
			width:31%;
		}
		.finance_con .blessr{
			width:55%;
			margin-left: 75px;
		}
		.finance_con .finance_conTime{
			padding-top: 50px;
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

</style>