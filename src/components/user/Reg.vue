<template>
	<div>
		<m-header :title=reg :conr=conr :conrs=conrs></m-header>
		<div class="reg">
			<form action="" class="reg_form">
				<p class="reg_tit">
					<span class="reg_zh fs-36 fw-5">注册 </span>
					<span class="reg_en fs-24">Sign Up</span>
				</p>
				<label class="reg_inp">
		            <span class="icon_phone"></span>
		            <input type="text" placeholder="手机号" id="mobile1" name="user" v-model.trim="userinfo.tel">
		            <small class="col-red pl-20" v-show="telError">请输入正确的手机号</small>
		            <small class="col-red pl-20" v-show="mobileIsEixt">该手机号已注册</small>
	        	</label>
				<label class="reg_inp">
			        <span class="icon_mescode"></span>
			        <input type="text" placeholder="短信验证码" id="smsCode" name="message" v-model="userinfo.msg_code" maxlength="6">  
			        <button class="get_code fs-18 col-ff" type="button" @click="get_code()" v-show="show_time">获取验证码</button> 
			        <button class="get_code fs-18 col-ff" type="button" v-show="!show_time">{{count}}秒重新获取</button> 
			        <small class="col-red pl-20" v-show="msg_codeError">请输入正确短信验证码</small>
	        	</label>
				<label class="reg_inp">
		            <span class="icon_setpwd"></span>
		            <input type="password" placeholder="设置密码" id="password" name="new_pwd" v-model="userinfo.password">
		            <small class="col-red pl-20" v-show="passError">密码长度为6~21个字符，包含数字字母，不能为纯数字、纯字母</small>
	       		</label>
				<label class="reg_inp">
		            <span class="icon_pwd"></span>
		            <input type="password" placeholder="确认密码" id="retypePassword" name="confirm_pwd" v-model="userinfo.confirm_pass"> 
		            <small class="col-red pl-20" v-show="con_passError">密码输入不一致</small>
		        </label>
				<label class="reg_inp">
		            <span class="icon_graph"></span>
		            <input type="text" placeholder="图形验证码" id="imgCode" name="code" v-model="userinfo.code">                    
		            <img id="randCode" :src="this.code_url" class="code-img dib cp" @click="reset_code()">
		            <small class="col-red pl-20" v-show="codeError">请输入正确图形验证码</small>
		        </label>
				<div class="mt-15">
					<button class="reg-btn fs-30 col-ff" type="button" :disabled="disable" @click="sub()">注&nbsp;&nbsp;册</button>
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
				reg: '注册',
				conrs: false,
				conr: true,
				code_url: '',
				count: 60,
				show_time: true,
				telError: false, //手机号错误
				mobileIsEixt: false, //手机号重复
				msg_codeError: false, //短信验证码
				passError: false, //密码错误
				con_passError: false, //密码不一致
				codeError: false, //图形验证码
				userinfo: {
					tel: '',
					msg_code: '',
					password: '',
					confirm_pass: '',
					code: '',
				},
				mc_cap: '',
				disable: false,
				disable2:false,
				getCode:'获取验证码',
				APF_CAPTCHA: '',
			}
		},
		watch: {
			['userinfo.tel']() {
				this.mobileIsEixt = false;
				var mobile = /^1[34578]\d{9}$/;
				this.telError = this.userinfo.tel.length == 11 && mobile.test(this.userinfo.tel) ? false : true;
				if(!this.telError){
					this.$axios.get( this.$root.urlPath.NEW + '/pc/register/mobileIsExist', {
						params: {
							mobile: this.userinfo.tel
						}
					} )
					.then(res=>{
						if(res.data.data){
							this.mobileIsEixt = true;
						}
					})
					.catch(err=>{console.log(err)})
				}
			},
			['userinfo.msg_code']() {
				this.msg_codeError = this.userinfo.msg_code.length > 0 ? false : true;
			},
			['userinfo.password']() {
				var pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
				this.passError = this.userinfo.password.length > 0 && pwd.test(this.userinfo.password) ? false : true;
			},
			['userinfo.confirm_pass']() {
				this.con_passError = (this.userinfo.confirm_pass === this.userinfo.password) ? false : true;
			},
			['userinfo.code']() {
				this.codeError = this.userinfo.code.length > 0 ? false : true;
			}

		},
		methods: {
			getCaptcha(){
				this.$axios.get( this.$root.urlPath.NEW + '/captcha/getCaptchaPre?type=0' )
				.then(res=>{
					this.APF_CAPTCHA = res.data.data;
					this.$axios.get( this.$root.urlPath.NEW + '/captcha/captcha?type=0', {
						params: {
							APF_CAPTCHA: this.APF_CAPTCHA,
						}
					})
					.then(res=>{
						this.code_url = this.$root.urlPath.NEW + '/captcha/captcha?type=0&APF_CAPTCHA=' + this.APF_CAPTCHA;
					})
					.catch(err=>{console.log(err)})
				})
				.catch(err=>{console.log(err)})
			},
			get_code(){//短信验证码
				if( !this.userinfo.tel || this.telError ){
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
				this.$axios.get( this.$root.urlPath.NEW + '/sms/getSmsPre?type=0&terminal=0' )
				.then(res=>{
					if(res.data.success){
						setCookie('APF_SMS', res.data.data);
						const params = {
							mobile: this.userinfo.tel,
						};
						this.$axios.post( this.$root.urlPath.NEW + '/sms/sms?type=0&terminal=0',
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
			sub() {
				this.telError = this.userinfo.tel.length == 11 && /^1[34578]\d{9}$/.test(this.userinfo.tel) ? false : true;
				this.msg_codeError = this.userinfo.msg_code.length > 0 ? false : true;
				this.passError = this.userinfo.password.length > 0 ? false : true;
				this.con_passError = (this.userinfo.confirm_pass === this.userinfo.password) ? false : true;
				this.codeError = this.userinfo.code.length > 0 ? false : true;
				if(!this.telError && !this.msg_codeError && !this.passError && !this.con_passError && !this.codeError && !this.mobileIsEixt ) {
					this.disable = true;
					const params = {
						mobile: this.userinfo.tel,
						msgCode: this.userinfo.msg_code,
						pwd: this.userinfo.password,
						rePwd: this.userinfo.confirm_pass,
						captcha: this.userinfo.code,
						APF_CAPTCHA: this.APF_CAPTCHA
					}
					this.$axios.post(this.$root.urlPath.NEW + '/pc/register/register', 
						qs.stringify(params),
						{
							headers: {
				          		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				          		'APF_SMS': getCookie('APF_SMS')
			            	}
						}
					)
					.then(res=>{
						if(res.data.success){
							this.$layer.msg('注册成功');		
							var self = this;
							window.setTimeout(function(){
								window.location.href = self.$root.urlPath.APF + '/login';
							},500);
						}else{
							this.$layer.msg(res.data.errMsg);
						}
					})
					.catch(err=>{console.log(err)})
				}
			},
			reset_code: function() { //刷新验证码
				this.getCaptcha()
			},
		},
		created() {
			if(getCookie('APF_UID')){
				window.location.href = this.$root.urlPath.APF;
			}
			this.getCaptcha();
		}
	}
</script>

<style scoped>
	.reg {
		padding-top: 80px;
		width: 100%;
		height: 800px;
		background: url(../../../static/img/user/pwd_bg.jpg)no-repeat;
	}
	
	.reg_form {
		width: 29.5%;
		padding: 45px 90px 45px 90px;
		background: rgba(255, 255, 255, 0.5);
		margin: 0 auto;
	}
	
	@media only screen and (min-width: 375px) and (max-width:768px) {
		.reg_form {
			width: 99%;
			padding: 0;
			background: none;
		}
	}
	
	@media only screen and (min-width: 768px) and (max-width:1200px) {
		.reg_form {
			width: 65%;
			padding: 45px 90px 45px 90px;
		}
	}
	
	@media only screen and (min-width: 1200px) and (max-width:1500px) {
		.reg_form {
			width: 45%;
			padding: 45px 90px 45px 90px;
		}
	}
	
	@media only screen and (min-width: 1500px) and (max-width:1750px) {
		.reg_form {
			width: 37%;
		}
	}
	
	.reg_tit {
		margin-bottom: 40px;
		padding-left: 27px;
		width: 100%;
	}
	
	.reg_inp input {
		width: 100%;
		border-radius: 30px;
		font-size: 18px;
		border: 1px solid rgb(183, 195, 206);
		padding: 16.5px 10px 16.5px 65px;
	}
	
	.reg_form .reg_inp:nth-child(3) input,
	.reg_form .reg_inp:nth-child(6) input {
		width: 55%;
		margin-right: 14px;
	}
	
	.reg_inp {
		position: relative;
		margin-bottom: 13px;
	}
	
	.reg_form .icon_graph,
	.reg_form .icon_mescode,
	.reg_form .icon_phone,
	.reg_form .icon_pwd,
	.reg_form .icon_setpwd {
		position: absolute;
		width: 26px;
		height: 31px;
		top: 12px;
		left: 25px;
	}
	
	.reg_form .icon_phone {
		background: url(../../../static/img/user/phone.png)no-repeat;
	}
	
	.reg_form .icon_graph,
	.reg_form .icon_mescode {
		top: 12px;
		left: 25px;
		background: url(../../../static/img/user/icon_code.png)no-repeat;
	}
	
	.reg_form .icon_pwd,
	.reg_form .icon_setpwd {
		background: url(../../../static/img/user/pwd.png)no-repeat;
	}
	
	.reg_inp .get_code {
		width: 40%;
		background: rgb(243, 153, 0);
		border-radius: 30px;
		border: none;
		height: 60px;
	}
	
	.reg_inp .code-img {
		vertical-align: top;
		width: 40%;
		height: 60px;
		overflow: hidden;
		border-radius: 30px;
		border: 1px solid #ccc;
	}
	
	.reg_form .reg-btn {
		width: 100%;
		height: 58px;
		background: #22ac38;
		border: none;
		border-radius: 30px;
		margin-top: 5px;
		vertical-align: top;
	}
</style>