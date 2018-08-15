<template>
	<div>
		<m-header :title=findPwd :conr=conr :conrs=conrs :indexShow=indexShow></m-header>
		<div class="pwd_retrieve" v-if="step == '1'">
			<form action="" class="retrieve_form">
				<p class="retrieve_tit">
					<span class="retrieve_zh fw-5 fs-36">找回密码 </span>
					<span class="retrieve_en fs-24">Retrieve Password</span>
				</p>
				<label class="retrieve_inp por">
                    <span class="icon_phone poa"></span>
                    <input type="text" placeholder="手机号" name="user" id="mobile2" class="fs-18" v-model.trim="findinfo.tel">
                    <small class="col-red pl-20" v-show="telError">请输入正确的手机号</small>
                    <small class="col-red pl-20" v-show="mobileIsEixt">该手机号未注册，请先注册</small>
		            </label>
				<label class="retrieve_inp por">
                    <span class="icon_graph poa"></span>
                    <input type="text" id="imgCode" placeholder="图形验证码" name="confirm_pwd" class="fs-18" v-model="findinfo.img_code">     
                    <img id="randCode" :src="this.code_url" alt="" class="code-img dib cp" @click="reset_code()">
                	<small class="col-red pl-20" v-show="img_codeError">请输入正确图形验证码</small>
				</label>
				<label class="retrieve_inp por">
		            <span class="icon_mescode poa"></span>
		            <input type="text" id="smsCode" placeholder="短信验证码" name="message" class="fs-18" v-model="findinfo.msg_code"> 
		            <button class="get_code fs-18 col-ff" v-show="show_time" type="button" @click="get_code()">获取验证码</button>   
		             <button class="get_code fs-18 col-ff" v-show="!show_time" type="button">{{count}}秒重新获取</button>   
		            <small class="col-red pl-20" v-show="msg_codeError">请输入正确短信验证码</small>
                </label>
				<div class="mt-15">
					<button class="retrieve-btn fs-30 col-ff" type="button" @click="sub()" :disabled="disable">提&nbsp;&nbsp;交</button>
				</div>
			</form>
		</div>
		<div class="pwd_reset" v-else>
			<form action="" class="reset_form form-horizontal">
				<div class="form-group">
					<p class="reset_tit">
						<span class="reset_zh fs-36 fw-5">密码重置 </span>
						<span class="reset_en fs-24">Password Reset</span>
					</p>
					<label class="reset_inp">
	                    <span class="icon_newpwd poa"></span>
	                    <input type="password" id="password" placeholder="新密码" name="password" v-model="setinfo.pwd">
	                    <small class="col-red pl-20" v-show="pwdError">密码长度为6~21个字符，包含数字字母，不能为纯数字、纯字母</small>
			            </label>
					<label class="reset_inp">
	                    <span class="icon_pwd poa"></span>
	                    <input type="password" id="retypePassword" placeholder="确认密码" name="confirm_pwd" v-model="setinfo.pwd2">                    
	                    <small class="col-red pl-20" v-show="pwd2Error">密码输入不一致</small>
		           </label>
					<div class="resetBtn">
						<button class="reset-btn fs-30 col-ff" type="button" :disabled="disable" @click="sub2()">重&nbsp;&nbsp;置</button>
					</div>
				</div>
			</form>
		</div>
		<m-footer></m-footer>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { setCookie,getCookie } from '@/assets/commonjs/util.js';
	import qs from 'qs';
	var time = null;
	export default {
		data() {
			return {
				findPwd: '找回密码',
				conrs: false,
				conr: true,
				indexShow: false,
				step: 1,
				count: 60,
				telError: false,		
				show_time: true,
				img_codeError: false,//图形验证码				
				msg_codeError: false, //短信验证码
				mobileIsEixt: false,
				findinfo:{
					tel: '',
					img_code: '',
					msg_code: '',
				},
				code_url: '',
				APF_CAPTCHA: '',
				disable: false,
				
				//重置
				pwdError:false,
				pwd2Error:false,
				setinfo:{
            		pwd: '',
	                pwd2: ''
            	},
			}
		},
		watch:{
			['findinfo.tel'](){
				this.mobileIsEixt = false;
				var mobile = /^1[34578]\d{9}$/;
				this.telError = this.findinfo.tel.length == 11 && mobile.test(this.findinfo.tel) ? false : true;
				if(!this.telError){
					this.$axios.get( this.$root.urlPath.NEW + '/pc/register/mobileIsExist', {
						params: {
							mobile: this.findinfo.tel
						}
					} )
					.then(res=>{
						if(res.data.data){
						}else{
							this.mobileIsEixt = true;
						}
					})
					.catch(err=>{console.log(err)})
				}
			},
			['findinfo.msg_code'](){
				this.msg_codeError = this.findinfo.msg_code.length > 0 ? false : true;
			},
			['findinfo.img_code'](){
				this.img_codeError = this.findinfo.img_code.length > 0 ? false : true;
			},
			['setinfo.pwd'](){
				var pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
        		this.pwdError = this.setinfo.pwd.length >0 && pwd.test(this.setinfo.pwd)? false : true;
			},
			['setinfo.pwd2'](){
				this.pwd2Error= (this.setinfo.pwd2 === this.setinfo.pwd)? false : true;
			},
		},
		methods:{
			sub(){
				this.telError = this.findinfo.tel.length == 11 && /^1[34578]\d{9}$/.test(this.findinfo.tel) ? false : true;
				this.img_codeError = this.findinfo.img_code.length > 0? false : true;
				this.msg_codeError = this.findinfo.msg_code.length > 0? false :true;
				if( !this.telError && !this.img_codeError && !this.msg_codeError && !this.mobileIsEixt ){
					this.disable = true;
					const params = {
						mobile: this.findinfo.tel,
						msgCode: this.findinfo.msg_code,
						captcha: this.findinfo.img_code,
						APF_CAPTCHA: this.APF_CAPTCHA
					}
					this.$axios.post( this.$root.urlPath.NEW + '/user/account/findBackPwdByMobile',
						qs.stringify(params),
						{
							headers: {
				          		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				          		'APF_SMS': getCookie('APF_SMS')
			            	}
						}
					)
					.then(res=>{
						this.disable = false;
						if(res.data.success){
							this.findPwd = '密码重置';
							this.step = "2";
						}else{
							this.$layer.msg(res.data.errMsg);
							return false;
						}
					})
					.catch(err=>{console.log(err)})
				}
			},
			sub2(){
				this.pwdError = this.setinfo.pwd.length >0 && /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/.test(this.setinfo.pwd)? false : true;
				this.pwd2Error = this.setinfo.pwd2 === this.setinfo.pwd ? false : true; 
				if( !this.pwdError && !this.pwd2Error ){
					this.disable = true;
					const params = {
						account: this.findinfo.tel,
						pwd: this.setinfo.pwd,
					};
					this.$axios.post( this.$root.urlPath.NEW + '/user/account/resetPwd',
						qs.stringify(params),
						{
							headers: {
				          		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			            	}
						}
					)
					.then(res=>{
						if(res.data.success){
							this.$layer.msg('设置密码成功');
							var self = this;
							window.setTimeout(function(){
								location.href = self.$root.urlPath.APF + '/login';
							},800)
						}else{
							this.$layer.msg(res.data.errMsg);
							return;
						}
					})
					.catch(err=>{console.log(err)})
				}
			},
			get_code(){//短信验证码
				if( !this.findinfo.tel || this.telError ){
					this.$layer.msg('请输入手机号')
					return false;
				}else if( this.mobileIsEixt ){
					return false;
				}
				var self = this;
				if(time){
					window.clearInterval(time);
					this.count = 60;
				}
				var count = this.count;
				this.show_time = false;
				this.$axios.get( this.$root.urlPath.NEW + '/sms/getSmsPre?type=2&terminal=0' )
				.then(res=>{
					if(res.data.success){
						setCookie('APF_SMS', res.data.data);
						const params = {
							mobile: this.findinfo.tel,
						};
						this.$axios.post( this.$root.urlPath.NEW + '/sms/sms?type=2&terminal=0',
							qs.stringify(params),
							{
								headers: {
					          	  'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
					          	  'APF_SMS':getCookie('APF_SMS')
				            	}
							}
						)
						.then(res=>{
//							console.log(res.data.success)
						})
					}else{
						this.$layer.msg('您输入的账户或者验证码不正确');
					}
				})
				.catch(err=>{this.disable = false;})
				
				time = setInterval(function(){
					self.time = count;
					Vue.set([self.time],'time',count)
					count--
					if(count<1){
						count = 5;
						self.show_time = true;
						clearInterval(time);
					}
					self.count = count;
				},1000)
			},
			getCaptcha(){
				this.$axios.get( this.$root.urlPath.NEW + '/captcha/getCaptchaPre?type=2' )
				.then(res=>{
					this.APF_CAPTCHA = res.data.data;
					this.$axios.get( this.$root.urlPath.NEW + '/captcha/captcha?type=2', {
						params: {
							APF_CAPTCHA: this.APF_CAPTCHA,
						}
					})
					.then(res=>{
						this.code_url = this.$root.urlPath.NEW + '/captcha/captcha?type=2&APF_CAPTCHA=' + this.APF_CAPTCHA;
					})
					.catch(err=>{console.log(err)})
				})
				.catch(err=>{console.log(err)})
			},
			reset_code: function() { //刷新验证码
				this.getCaptcha()
			},
		},
		created(){
			if(getCookie('APF_UID')){
				window.location.href = this.$root.urlPath.APF;
			}
			this.getCaptcha();
		}
	}
</script>
<style scoped>
	.pwd_retrieve {
		padding-top: 80px;
		width: 100%;
		height: 800px;
		background: url(../../../static/img/user/pwd_bg.jpg)no-repeat;
	}
	/* 找回密码 */
	
	.retrieve_form {
		width: 29.5%;
		padding: 60px 90px;
		background: rgba(255, 255, 255, 0.5);
		margin: 0 auto;
	}
	
	@media only screen and (min-width: 375px) and (max-width:768px) {
		.retrieve_form {
			width: 99%;
			padding: 0;
			background: none;
		}
	}
	
	@media only screen and (min-width: 768px) and (max-width:1200px) {
		.retrieve_form {
			width: 65%;
			padding: 60px 90px;
		}
	}
	
	@media only screen and (min-width: 1200px) and (max-width:1500px) {
		.retrieve_form {
			width: 45%;
			padding: 60px 90px;
		}
	}
	
	@media only screen and (min-width: 1500px) and (max-width:1750px) {
		.retrieve_form {
			width: 37%;
		}
	}
	
	.retrieve_tit {
		margin-bottom: 43px;
		text-align: center;
	}
	
	.retrieve_inp {
		margin-bottom: 12px;
	}
	
	.retrieve_inp input {
		width: 100%;
		border-radius: 30px;
		border: 1px solid rgb(183, 195, 206);
		padding: 16.5px 10px 16.5px 65px;
	}
	
	.retrieve_form .retrieve_inp:nth-child(3) input,
	.retrieve_form .retrieve_inp:nth-child(4) input {
		width: 55%;
		margin-right: 15px;
	}
	
	.retrieve_form .icon_phone {
		top: 12px;
		left: 25px;
		width: 26px;
		height: 31px;
		background: url(../../../static/img/user/phone.png)no-repeat;
	}
	
	.retrieve_form .icon_graph,
	.retrieve_form .icon_mescode {
		top: 12px;
		left: 25px;
		width: 26px;
		height: 31px;
		background: url(../../../static/img/user/icon_code.png)no-repeat;
	}
	
	.retrieve_form .icon_mescode {
		top: 12px;
		left: 25px;
	}
	
	.retrieve_inp .get_code {
		height: 60px;
		width: 40%;
		background: rgb(243, 153, 0);
		border-radius: 30px;
		border: none;
	}
	
	.retrieve_inp .code-img {
		width: 40%;
		height: 58px;
		overflow: hidden;
		border-radius: 30px;
		border: 1px solid #ccc;
		vertical-align: top;
	}
	
	.retrieve_form .retrieve-btn {
		width: 100%;
		height: 60px;
		background: #22ac38;
		border: none;
		border-radius: 30px;
	}
	
	
	/*重置*/
	.pwd_reset {
		padding-top: 80px;
		width: 100%;
		height: 720px;
		background: url(../../../static/img/user/pwd_bg.jpg)no-repeat;
	}
	
	.reset_form {
		width: 29.5%;
		padding: 60px 90px;
		background: rgba(255, 255, 255, 0.5);
		text-align: center;
		margin: 0 auto;
	}
	
	@media only screen and (min-width: 375px) and (max-width:768px) {
		.reset_form {
			width: 99%;
			padding: 0;
			background: none;
		}
	}
	
	@media only screen and (min-width: 768px) and (max-width:1200px) {
		.reset_form {
			width: 65%;
			padding: 60px 90px;
		}
	}
	
	@media only screen and (min-width: 1200px) and (max-width:1500px) {
		.reset_form {
			width: 45%;
			padding: 60px 90px;
		}
	}
	
	@media only screen and (min-width: 1500px) and (max-width:1750px) {
		.reset_form {
			width: 37%;
		}
	}
	
	.reset_tit {
		margin-bottom: 43px;
	}
	
	.reset_inp input {
		width: 100%;
		border-radius: 30px;
		border: 1px solid rgb(183, 195, 206);
		padding: 16.5px 10px 16.5px 65px;
		font-size: 18px;
	}
	.reset_inp {
		position: relative;
		margin-bottom: 17px;
		text-align: left;
	}
	
	.reset_form .icon_newpwd {
		top: 12px;
		left: 25px;
		width: 26px;
		height: 31px;
		background: url(../../../static/img/user/pwd.png)no-repeat;
	}
	
	.reset_form .icon_pwd {
		top: 12px;
		left: 25px;
		width: 26px;
		height: 31px;
		background: url(../../../static/img/user/pwd.png)no-repeat;
	}
	
	.reset_form .mt-15 {
		margin-top: 15px;
	}
	
	.reset_form .reset-btn {
		width: 100%;
		height: 58px;
		background: #22ac38;
		border: none;
		border-radius: 30px;
		vertical-align: top;
		margin-top: -3px;
	}
</style>