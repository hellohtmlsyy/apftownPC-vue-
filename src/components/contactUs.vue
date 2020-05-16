<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
			<img src="../../static/img/contact_banner.jpg"/>
	    </div>
	    <div class="contact_us">
	    	<div class="w">
		    	<div class="contact_usCon">
		    		<div class="info">
		    			<div class="fs-30 fw-6 col-33">联系方式</div>
		    			<div class="col-62 fs-14 mt-4">亚太金融小镇竭诚为您全方位服务</div>
		    			<div class="contact">
		    				<div class="iphone">
		    					<i class="iconfont icon-web-icon-"></i>
		    					<span class="mr-16">联系电话</span>
		    					<span class="fw-6 mr-16">400-670-2139</span>
		    				</div>
		    				<div class="email">
		    					<i class="iconfont icon-youxiang"></i>
		    					<span class="mr-16">联系邮箱</span>
		    					<span class="fw-6">info@apftown.com</span>
		    				</div>
		    				<div class="address">
		    					<i class="iconfont icon-dizhi1"></i>
		    					<span class="mr-16">联系地址</span>
		    					<span class="fw-6">海南省三亚市海棠区亚太金融小镇</span>
		    				</div>
		    			</div>
		    			<div class="mt-20 tac">
		    				<a href="http://f.amap.com/pYfR_0605gGE" target="_blank">
		    					<img src="../../static/img/contact_map.jpg"/>
		    				</a>
		    			</div>
		    		</div>
		    		
		    		<div class="customerInfo">
		    			<div class="fs-30 fw-6 col-33">客户服务</div>
		    			<div class="col-62 fs-14 mt-4">提交资料后，我们会在第一时间联系您</div>
		    			<div class="mes fs-16 col-70 clearfix">
		    				<!--<form>-->
								<div class="per mr-35">
									<span class="w64">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>
									<input type="text" v-model.trim="userinfo.name" /><br />
									<!--<small class="col-red pl-20">请输入正确的手机号</small>-->
								</div>
								<div class="per">
									<span class="w64">公司名称</span>
									<input type="text" v-model.trim="userinfo.corName" />
								</div>
								<div class="per mr-35">
									<span class="w64">手机号码</span>
									<input type="text" v-model.trim="userinfo.tel"/>
								</div>
								<div class="per">
									<span class="w64">电子邮箱</span>
									<input type="text" v-model.trim="userinfo.email"/>
								</div>
								<div class="pers">
									<span class="w64 vat">留&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;言</span>
									<textarea name="" rows="" cols="" v-model.trim="userinfo.leaveMsg"></textarea>
								</div>
							<!--</form>-->
		    			</div>
		    			<div class="subBtnBox tac">
		    				<button class="subBtn col-ff fs-20" @click="sub()" :disabled="disable">提交信息</button>
		    			</div>
		    		</div>
		    		
		    	</div>
	    	</div>
	    </div>
    	<m-footer></m-footer>
	</div>
</template>

<script>
	import qs from 'qs';
	import book2 from '@/components/comm/layer2';
	export default {
		components: {
			book2
		},
		data() {
			return {
				index:8,
				disable:false,
				userinfo:{
					name:'',
					corName:'',
					tel:'',
					email:'',
					leaveMsg:'',
				},
				nameError:false,
				corNameError:false,
				telError:false,
				emailError:false,
				leaveMsgError:false,
			}
		},
		methods:{
			sub(){	
				//留言
				this.leaveMsgError = this.userinfo.leaveMsg.length > 0 && this.userinfo.leaveMsg.length < 400? false : true;
				if(this.leaveMsgError){
					this.$layer.msg('请输入留言内容,留言内容不得大于400字!');
				}
				//邮箱
				var email = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/; 
				this.emailError = this.userinfo.email.length > 0 && email.test(this.userinfo.email)? false : true;
				if(this.emailError){
					this.$layer.msg('请输入正确的邮箱');
				}
				//手机号
				var mobile = /^1[34578]\d{9}$/;
				this.telError = this.userinfo.tel.length == 11 && mobile.test(this.userinfo.tel)? false : true;
				if(this.telError){
					this.$layer.msg('请输入正确的手机号');
				}  
				//公司名称
				var corporateName = /^[\u4e00-\u9fa5A-Za-z]{1,20}$/;
				this.corNameError = this.userinfo.corName.length >0 && corporateName.test(this.userinfo.corName)? false : true;
				if(this.corNameError){
					this.$layer.msg('请输入公司名称,公司名称不得大于20字');
				}
				//姓名
				var fullName = /^[\u4E00-\u9FA5A-Za-z]+$/;
				this.nameError = this.userinfo.name.length > 0 && fullName.test(this.userinfo.name)? false : true;
				if(this.nameError){
					this.$layer.msg('请输入正确的姓名');
				}
				
				if(!this.nameError && !this.corNameError && !this.telError && !this.emailError && !this.leaveMsgError){
					this.disable = true;
					const params = {
						name: this.userinfo.name,
						company: this.userinfo.corName,
						mobile: this.userinfo.tel,
						email: this.userinfo.email,
						msg: this.userinfo.leaveMsg,
					}
					this.$axios.post( this.$root.urlPath.NEW + '/pc/contact/message',
						qs.stringify(params),
						{
							headers: {
				          	  'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			            	}
						}
					)
					.then(res=>{
						this.disable = false;
						if( res.data.success ){
							this.$layer.iframe({
							  	content: {
								    content: book2, //传递的组件对象
								    parent: this,//当前的vue对象
								    data:[]//props
								},
									title: '提示',
									area:['260px', 'auto'],
									cancel : function(){
										var self = this;
										window.setTimeout(function(){
											window.location.href = self.$root.urlPath.APF + '/contactUs';
										},800)
									}
							});
//							this.$layer.msg(this.res.data.errMsg)
							return;
						}else{
							this.$layer.msg(this.res.data.errMsg);
							location.reload()
						}
					})
					.catch(err=>{
						this.$layer.msg('网络异常<br />请稍后重试');
						return;
					})
				}
			}
		}
	}
</script>

<style scoped>
	.w64{
		width: 64px;
		 text-align: justify;
	}
	.mr-16{
		margin-right: 16px;
	}
	.mr-35{
	    margin-right: 35px;
	}
	.mt-4{
		margin-top: 4px;
	}
	.mt-20{
		margin-top: 20px;
	}
	.lh-32{
		line-height: 32px;
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
	
	.contact_usCon{
		margin:0 12.7%;
		width:74.6%;
	}
	/*联系方式*/
	.contact_usCon .info{
		margin-top: 32px;
		
	}
	.contact_usCon .info .contact{
		margin-top: 30px;
	    padding: 0 29px;
	}
	.contact_usCon .info .contact span{
		font-size: 16px;
		color: #333;
	    line-height: 30px;
	}
	.contact .iconfont{
		color: #009944;
		font-size: 20px;
		margin-right: 5px;
	}
	.contact_usCon .customerInfo{
		margin-top: 32px;
	}
	.contact_usCon .customerInfo .mes{
		width: 860px;
		height: 285px;
		background-color: #ffffff;
		box-shadow: 3px 3px 0px 0px #c5f0b7;
		border: solid 1px #bfbfbf;
		padding: 34px 49px;
		margin-top: 18px;
	}
	.contact_usCon .customerInfo .subBtn{
		width: 220px;
		height: 50px;
		background-color: #22ac38;
		border-radius: 5px;
		border: none;
	}
	.contact_usCon .customerInfo .subBtnBox{
		margin-top: 25px;
	}
    .customerInfo .mes .per{
		width: 360px;
		height: 40px;
		/*float: left;*/
		display: inline-block;
		margin-bottom: 19px;
	}
	.contact_usCon input,textarea{
		border-radius: 5px;
		border: solid 1px #bfbfbf;
		margin-left: 15px;
	    padding: 5px 10px;
	}
	.customerInfo .mes .per input{
		width: 275px;
		height: 40px;
	}
	.customerInfo .mes .pers {
		width: 759px;
		height: 96px;
	}
	.customerInfo .mes .pers textarea{
		width: 675px;
		height: 96px;
	}
	
	.vl-notify.vl-notify-alert h2.vl-notice-title{
		height: 47px;
		background-color: rgb(242,242,242);
		border-radius: 5px;
		font-size: 18px;
		font-weight: 600;
		color: #333;
		line-height: 47px;
		padding-left: 30px;
	}
</style>