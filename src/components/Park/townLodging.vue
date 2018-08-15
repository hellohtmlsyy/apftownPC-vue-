<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/park/park_banner1.jpg">
	    </div>
	    <div class="train_tit">    	
	        <div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_active tabBox_mr"><router-link class="tab_active" :to="{ path : '/townLodging'}">小镇住宿</router-link></div>	        			
	        		<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/offProperty'}">办公物业</router-link></div>
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
			}
		}
	}
</script>

<style scoped>
	.mt-33{
		margin-top: 33px;
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
</style>