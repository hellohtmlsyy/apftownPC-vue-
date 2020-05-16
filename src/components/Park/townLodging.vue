<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/park/park_banner1.jpg">
	    </div>
	    <div class="train_tit">
	        <div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_active tabBox_mr"><router-link class="tab_active" :to="{ path : '/townLodging'}">企业服务</router-link></div>
	        		<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/offProperty'}">入驻申请</router-link></div>
	        		<div class="tabBox dib"><router-link :to="{ path : '/visitTown'}">参观小镇</router-link></div>
	        	</div>
	        </div>
	    </div>
	    <div class="town_lodging">
	    	<div class="w">
	    		<div class="town_lodgingCon">
	    			<div class="stay">
	    				<div class="tac">
	    					<img src="../../../static/img/Park/stay1.jpg" alt="" />
	    				</div>
	    				<div class="reserve tac mt-40"><span class="cp fs-24" @click="book()">立即预订</span></div>
	    			</div>
	    			<div class="introduce">
	    				<div class="text col-666 fs-14 lh-25">小镇拥有64间精品酒店、64间金融民宿、7个金融别墅，并享有金融图书馆、私人影院等配套，您可以申请认证成为小镇居民，即刻拥有一个专属ID，通过微信扫码或自主绑定门禁卡，即可自由出入相应的区域，开启你的三亚金融之旅。</div>
	    			</div>
	    			<div class="stay_infoImg">
	    				<div class="tac">
	    					<img src="../../../static/img/Park/stay2.jpg"/>
	    				</div>
	    				<div class="tac mt-17">
	    					<img src="../../../static/img/Park/stay3.jpg"/>
	    				</div>
	    				<div class="tac mt-33">
	    					<img src="../../../static/img/Park/stay4.jpg"/>
	    				</div>
	    			</div>
	    		</div>
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
	import book from '@/components/comm/layer';
	export default {
		data() {
			return {
				index:6,
        lookClassroom: this.$root.urlPath.APF + '/siteReservation#classroom',
			}
		},
		components: {
			book
		},
		methods:{
			book(){
				this.$layer.iframe({
				  content: {
				    content: book, //传递的组件对象
				    parent: this,//当前的vue对象
				    data:[]//props
				  },
				  title: '请输入预订信息',
				  area:['420px', 'auto']
				});
			},
      goConsult(path){
      	window.location.href = this.$root.urlPath.APF + path;
      }
		}
	}
</script>

<style scoped>
	.mt-33{
		margin-top: 33px;
	}
  .ml-10{
  	margin-left: 10px;
  }
	.mt-40{
		margin-top: 40px;
	}
	.lh-25{
		line-height: 25px;
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
	.town_lodgingCon{
		margin:0 12.7%;
		width:74.6%;
	}
	/*住宿*/
	.town_lodgingCon .stay{
		margin-top: 40px;
		width: 877px;
		height: 350px;
		border: solid 1px #a0a0a0;
		padding: 19px 20px 19px 17px;
	}
	.town_lodgingCon .stay .reserve span{
		width: 200px;
		height: 50px;
		background-image: linear-gradient(#ffffff, #ffffff), linear-gradient(#a0a0a0, #a0a0a0);
		border-radius: 5px;
		border: solid 1px #009944;
		color: #009944;
	    line-height: 46px;
	}
	/*简介*/
	.town_lodgingCon .introduce {
        margin: 23px 0 25px 0;
   		padding: 0 16px;
	}
/* 小镇办公物业服务目前支持 */
  .col-094{
		color: #009944;
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
