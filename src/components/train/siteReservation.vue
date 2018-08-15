<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/train/train_banner1.jpg">
	    </div>
	    <div class="train_tit">    	
	        <div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_active tabBox_mr"><router-link class="tab_active" :to="{ path : '/siteReservation'}">场地预定</router-link></div>	        			
	        		<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/financialTraining'}">金融培训</router-link></div>
	        		<div class="tabBox dib"><router-link :to="{ path : '/financialConference'}">金融会议</router-link></div>
	        	</div>        	
	        </div>
	    </div>
	    <div class="field">
	    	<div class="w">
	    		<div class="field_con">
	    			<div class="reserve clearfix">
	    				<div class="reserveL fl">
	    					<img src="../../../static/img/train/reception.jpg"/>
	    				</div>
	    				<div class="reserveR col-33 fs-16 fl">
	    					<h2 class="reserveR_tit fs-36">全流程接待服务</h2>
	    					<div class="mb-8">欢迎各培训机构及论坛主办单位的入驻</div>
	    					<div>小镇拥有会议室、教室、博物馆、酒店、民宿、餐厅等各种设施</div>
	    					<div class="col-666">
		    					<div class="tname col-33 fs-24 mt-36 mb-12">-举办培训-</div>
								<div class="mb-8">您只需负责好课程、师资、学员</div>
								<div class="mb-8">教室、住宿、活动等工作交给我们</div>
								<div>派一个班主任就能完成高品质培训教学</div>
	    					</div>
	    					<div class="col-666">
		    					<div class="tname col-33 fs-24 mt-36 mb-12">-举办论坛-</div>
								<div class="mb-8">您只需要组织好日程、专家、参会代表</div>
								<div class="mb-8">接站、会场、住宿、晚宴交给我们</div>
								<div>只需要派两个会议负责人就可以举办一场顶级国际会议</div>
	    					</div>
	    					<span class="reserveR_btn dib fs-24 cp reserve_btn" @click="book()">立即预订</span>
	    				</div>
	    			</div>
	    			<div class="classroom" id="classroom">
	    				<div class="classroom_tit">
	    					<span class="fs-36 col-bt c dib">教室</span>
	    					<span class="line col-bt dib"></span>
	    				</div>
	    				<div class="classroom_con">
	    					<div class="crc_conBox mb-15">
		    					<div class="crcl dib">
		    						<img src="../../../static/img/train/classroom1.jpg"/>
		    					</div>
		    					<div class="crcr dib">
		    						<div class="crcr_tit">
		    							<div class="mb-10 ">
		    								<span class="fs-26 fw-7">会议厅</span><span class="fs-18">（一层150人）</span>
		    							</div>
		    							<div class="fs-16 lh-30 col-666 ls-1">位于大礼堂一层中间<br>可作为会议室、培训教室、宴会厅等多种用途<br>	具有完备的大屏幕、JBL音响及相关舞台灯光配套</div>
		    						</div>    						
	    						</div>
	    					</div>
	    					
	    					<div class="crc_conBox mb-15">
		    					<div class="crcl dib">
		    						<img src="../../../static/img/train/classroom2.jpg"/>
		    					</div>
		    					<div class="crcr dib">
		    						<div class="crcr_tit">
		    							<div class="mb-10">
		    								<span class="fs-26 fw-7">中教室</span><span class="fs-18">（二层64人）</span>	
		    							</div>
		    							<div class="fs-16 lh-30 col-666 ls-1">位于大礼堂二层北侧<br>配备现代简约课桌椅，配有86寸触屏教学电视及JBL音响<br>享有300平方米户外茶歇露台区</div>
		    						</div>    	    					 						
	    						</div>
	    					</div>
	    					
	    					<div class="crc_conBox mb-15">
		    					<div class="crcl dib">
		    						<img src="../../../static/img/train/classroom3.jpg"/>
		    					</div>
		    					<div class="crcr dib">
		    						<div class="crcr_tit">
		    							<div class="mb-10">
		    								<span class="fs-26 fw-7">小教室</span><span class="fs-18">（二层48人）</span>	    						
		    							</div>
		    							<div class="fs-16 lh-30 col-666 ls-1">位于大礼堂二层西侧<br>配备现代简约课桌椅，配有86寸触屏教学电视及JBL音响<br>并享有100平方米户外茶歇露台区</div>
		    						</div>     						
		    					</div>    						
	    					</div>
	    					
	    					<div class="crc_conBox mb-15">
		    					<div class="crcl dib">
		    						<img src="../../../static/img/train/classroom4.jpg"/>
		    					</div>
		    					<div class="crcr dib">
		    						<div class="crcr_tit">
		    							<div class="mb-10">
		    								<span class="fs-26 fw-7">案例研讨室</span><span class="fs-18">（二层3个，每个10人）</span>	    							    								
		    							</div>
		    							<div class="fs-16 lh-30 col-666 ls-1">位于大礼堂二层南侧<br>拥有3个10人的小型研讨室<br>可分组进行团队案例研讨</div>
		    						</div>
		    					</div>    						
	    					</div>
	    					
	    					<div class="crc_conBox mb-15">
		    					<div class="crcl dib">
		    						<img src="../../../static/img/train/classroom5.jpg" />
		    					</div>
		    					<div class="crcr dib" style="padding: 3.5% 0;">
		    						<div class="crcr_tit">
		    							<div class="mb-10">
		    								<span class="fs-26 fw-7">金融实验室</span><span class="fs-18">（36台计算机）</span>	    							    								
		    							</div>
		    							<div class="fs-16 lh-30 col-666 ls-1">位于大礼堂3层，后工业风设计风格<br>拥有8个全球交易所终端， 配有36台高性能计算机<br>用作基金、期货等投资实验<br>也可以进行现场金融建模培训。</div>
		    						</div>
		    					</div>  
	    					</div>
	    					
	    					<div class="crc_conBox mb-15">
		    					<div class="crcl dib">
		    						<img src="../../../static/img/train/classroom6.jpg"/>
		    					</div>
		    					<div class="crcr dib" style="padding: 3.5% 0;">
		    						<div class="crcr_tit">
		    							<div class="mb-10">
		    								<span class="fs-26 fw-7">金融展厅</span><span class="fs-18">（一层1000平方米）</span>	    							    								
		    							</div>
		    							<div class="fs-16 lh-30 col-666 ls-1">小镇拥有1000平方米规模展厅，分5大区域，包括主题形象展示区、私人影院区多媒体互动区、小型影音室室三个、留言合影区，还可以根据客户的需要，就金融、艺术、历史等题材，量身定制策展方案</div>
		    						</div>
		    					</div>    						
	    					</div>
					
	    					<div class="crc_conBox ">
		    					<div class="crcl dib">
		    						<img src="../../../static/img/train/classroom7.jpg"/>
		    					</div>
		    					<div class="crcr dib">
		    						<div class="crcr_tit">
		    							<div class="mb-10">
		    								<span class="fs-26 fw-7">户外广场</span><span class="fs-18">（1500平方米）</span>	    							    								
		    							</div>
		    							<div class="fs-16 lh-30 col-666 ls-1">户外拥有1500平方米的三月三广场<br>可以用于大型会展、黄昏酒会、夜晚BBQ</div>
		    						</div>
		    					</div>    	
	    					</div>
	    				</div>
	    			</div>
	    			<div class="stay">
	    				<div class="stay_tit">
	    					<span class="fs-36 col-bt c dib">住宿</span>
	    					<span class="line col-bt dib"></span>
	    				</div>
	    				<div class="stay_con">
	    					<div class="crc_conBox mb-15">
		    					<div class="crcl dib">
		    						<img src="../../../static/img/train/stay1.jpg"/>
		    					</div>
		    					<div class="crcr dib">
		    						<div class="crcr_tit">
		    							<div class="mb-10 ">
		    								<span class="fs-18 col-666 lh-30">小镇拥有</span><br>
		    								<span class="fs-26 fw-7">64间精品民宿/ 64间时尚酒店/ 7栋私家别墅</span>
		    							</div>
		    							<div class="fs-18 lh-30 col-666">背靠青龙山、头枕青田河<br>面朝海棠湾，谈笑有鸿儒</div>
		    						</div>    						
	    						</div>
	    					</div>
	    					<div class="crc_conBox mb-10">
		    					<img src="../../../static/img/train/stay2.jpg"/>	    					
	    					</div>
	    					<div class="crc_conBox mb-10">
	    						<img src="../../../static/img/train/stay3.jpg"/>	    					
	    					</div>
	    					<div class="crc_conBox mb-10">
	    						<img src="../../../static/img/train/stay4.jpg"/>	    					
	    					</div>
	    				</div>
	    			</div>
	    			<div class="destine">
	    				<div class="destine_tit">
	    					<span class="fs-36 col-bt c dib">预定</span>
	    					<span class="line col-bt dib"></span>
	    				</div>
	    				<div class="destine_con">
	    					<div class="crc_conBox mb-10 tac">
	    						<span class="reserve_btn fs-24 dib cp" @click="book()">立即预订</span>
		    					<img src="../../../static/img/train/reserve.png"/>	    					
	    					</div>
	    				</div>
	    			</div>
	    			<div class="service">
	    				<div class="service_tit">
	    					<span class="fs-36 col-bt c dib">服务</span>
	    					<span class="line col-bt dib"></span>
	    				</div>
	    				<div class="service_con">
	    					<div class="crc_conBox mb-10 tac">    					
		    					<img src="/../../../static/img/train/service.png"/>	    					
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
				index:4,
				
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
.lh-30{
	line-height: 30px;
}
.ls-1{
	letter-spacing:-1px;
}
.ls-32{
	letter-spacing: 32px;
}	

/*场地预定*/
.field_con{
	padding-top: 60px;
	margin:0 12.7%;
	width:74.6%;
}
@media only screen and (min-width: 374px) and (max-width: 1199px) {
	.field_con{
		padding: 60px 0;
		margin:0;
		width:100%;
	}
}
.field_con .reserveL{
	margin-right:45px;
}
.field_con .reserveR .reserveR_tit{			
	font-weight: 600;
	margin-bottom: 20px;
	margin-top: -8px;			
}
.field_con .reserveR .reserveR_btn{
	color:#009944;
	border-radius: 6px;
	border:1px solid #009944;
	margin-top: 20px;			
	padding:6px 21px;
}

/*场地培训-->教室*/
.classroom .classroom_tit, .stay .stay_tit,.destine .destine_tit,.service .service_tit{
	display:flex;
	justify-content:center;
	align-items:center;	
	padding: 22px 0 25px 0;		
}
.classroom .classroom_tit .c,.stay .stay_tit .c,.destine .destine_tit .c,.service .service_tit .c{
	width:13.5%;			
}
.classroom .classroom_tit .line,.stay .stay_tit .line,.destine .destine_tit .line,.service .service_tit .line{
	width: 86%;
	height:1px;				
	background: #eb6100;			
}
.classroom .crc_conBox .crcl{
	width:51%;
	margin-right: 38px;		
}
.classroom .crc_conBox .crcr{
	width:43%;	
	vertical-align: top;
	padding: 5% 0;							
}
.stay .crcl{
	width:39%;
}
.stay .crcr{
	width:59%;
	vertical-align: top;
	padding: 3% 0;	
}
.destine .destine_con .reserve_btn{
    color: #009944;
    border-radius: 6px;
    border: 1px solid #009944;
    padding: 6px 21px;
}


</style>