<template>
	<div>
		<m-header :title=login :conr=conr :conrs=conrs :indexShow=indexShow></m-header>
		<div class="login">
			<div class="w clearfix">
				<div class="sign_in fl" v-show="sign_in">
					<form action="" class="login_form">
						<div class="login_switch">
							<span class="mob_tip dib fs-14">手机验证码快速登录</span>
							<span class="mibile dib" @click="mobtag()"></span>
						</div>
						<div class="log_text">
							<span class="log_zh">登录</span>
							<span class="log_en fs-24">Sign In</span>
						</div>
						<div class="per">
							<span class="icon_name poa"></span>
							<input type="text" placeholder="手机号" name="user" id="mobile1" class="first_inp" v-model.trim="userinfo.tel">
							<small class="col-red pl-20" v-show="telError">请输入正确的手机号</small>
							<small class="col-red pl-20" v-show="mobileIsEixt2">该手机号尚未注册，请先去注册</small>
						</div>
						<div class="per">
							<span class="icon_pwd"></span>
							<input type="password" placeholder="密码" name="password" id="password" class="nth2_inp" v-model="userinfo.password">
							<small class="col-red pl-20" v-show="passError">请输入正确密码</small>
						</div>
						<div class="checkboxs mt-11-">
							<input type="checkbox" name="rememberPwd" v-model ="rememberUser">
							<span class="remember fs-14">记住用户名</span>
							<router-link :to="{path:'/findpwd'}" class="for_pwd fs-14">忘记密码?</router-link>
						</div>
						<div class="mt-15">
							<button class="login-btn fs-30" type="button" @click="sub()" :disabled="disable">登&nbsp;录</button>
						</div>
					</form>
				</div>
				<!-- 隐藏部分 -->
				<div class="sign_in_mob fl" v-show="sign_in_mob">
					<form action="" class="login_form">
						<div class="login_switch">
							<span class="mob_tip dib fs-14">切换手机密码登录</span>
							<span class="mibile mobile dib" @click="pctag()"></span>
						</div>
						<p class="log_text">
							<span class="log_zh">登录</span>
							<span class="log_en fs-24">Sign In</span>
						</p>
						<div class="per">
							<span class="icon_name poa"></span>
							<input type="text" placeholder="手机号" name="user" id="mobile2" v-model.trim="mobinfo.tel">
							<small class="col-red pl-20" v-show="telError2">请输入正确的手机号</small>
							<small class="col-red pl-20" v-show="mobileIsEixt">该手机号尚未注册，请先去注册</small>
						</div>
						<div class="per_code per">
							<span class="icon_code poa"></span>
							<input type="text" id="smsCode" placeholder="短信验证码" name="message" class="mr-10" v-model.trim="mobinfo.msg_code">
							<button class="get_code fs-18" type="button" @click="get_code()" v-show="show_time">获取验证码</button>
							<button class="get_code fs-18" type="button" v-show="!show_time" >{{count}}秒重新获取</button>
							<small class="col-red pl-20" v-show="msg_codeError">请输入正确短信验证码</small>
						</div>
						<div class="checkboxs mt-11-">
							<input type="checkbox" name="rememberPwd" v-model="rememberUser">
							<span class="fs-14">记住用户名</span>
							<router-link :to="{path:'/findpwd'}" class="for_pwd fs-14">忘记密码?</router-link>
						</div>
						<div class="mt-15">
							<button class="login-btn fs-30" type="button" :disabled="disable" @click="sub2()">登&nbsp;录</button>
						</div>
					</form>
				</div>
				<!--注册-->
				<div class="sign_up">
					<p class="reg_text">
						<span class="log_zh">注册</span>
						<span class="log_en fs-24">Sign Up</span>
					</p>
					<div class="reg_con">
						<p align="left">健壮的IT系统和强大的数据库结构</p>
						<p align="left">确保每位用户的信息保密性与安全性</p>
					</div>
					<button class="reg_btn" type="button" @click="goReg()">注&nbsp;册</button>
				</div>
			</div>
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
				sign_in_mob: false,
				sign_in: true,
				login: '欢迎登录',
				conrs: true,
				conr: false,
				telError: false, //手机号错误
				telError2: false,
				passError: false, //密码错误
				indexShow: false,
				msg_codeError: false,
				mobileIsEixt: false,
				mobileIsEixt2: false,
				userinfo: {
					tel: '',
					password: '',
				},
				mobinfo: {
					tel: '',
					msg_code: '',
				},
				disable: false,
				disabled2: false,
				rememberUser: false,
				toUrl: this.$route.query.redirectTo,//登录页回跳
				count : 60,
				show_time: true,
			}
		},
		watch: {
			['userinfo.tel']() {
				this.mobileIsEixt2 = false;
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
							
						}else{
							this.mobileIsEixt2 = true;
						}
					})
					.catch(err=>{console.log(err)})
				}
			},
			['userinfo.password']() {
				this.passError = this.userinfo.password.length > 6 && this.userinfo.password.length < 20 ? false : true;
			},
			['mobinfo.tel']() {
				this.mobileIsEixt = false;
				var mobile = /^1[34578]\d{9}$/;
				this.telError2 = this.mobinfo.tel.length == 11 && mobile.test(this.mobinfo.tel) ? false : true;
				if(!this.telError2){
					this.$axios.get( this.$root.urlPath.NEW + '/pc/register/mobileIsExist', {
						params: {
							mobile: this.mobinfo.tel
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
			['mobinfo.msg_code']() {
				this.msg_codeError = this.mobinfo.msg_code.length > 0 ? false : true;
			},
		},
		methods: {
			mobtag() {
				this.sign_in_mob = true;
				this.sign_in = false;
			},
			pctag() {
				this.sign_in_mob = false;
				this.sign_in = true;
			},
			goReg(){
				this.$router.push({
					path:'/reg'
				});
			},
			sub(){
				this.telError = this.userinfo.tel ? false : true;
				this.passError = this.userinfo.password ? false : true;
        		if( !this.telError && !this.passError ){
        			this.disable = true;
        			const params = {
						account: this.userinfo.tel,
						pwd: this.userinfo.password,
					};
        			this.$axios.post( this.$root.urlPath.NEW + '/pc/login/login',
        				qs.stringify(params),
						{
							headers: {
				          	  'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			            	}
						}
        			)
					.then(res=>{
						this.disable = false;
						if(res.data.success){
							setCookie('APF_UID', res.data.data)
							if(this.rememberUser){//记住用户名
								setCookie("user",this.userinfo.tel,7);
							}
							if(this.toUrl){
								window.location.href = this.toUrl;
							}else{
								window.location.href = this.$root.urlPath.APF;
							}
						}else{
							this.$layer.msg(res.data.errMsg);
						}
					})
					.catch(err=>{console.log(err)})
        		}
			},
			sub2(){
				this.telError2 = this.mobinfo.tel.length == 11 && /^1[34578]\d{9}$/.test(this.mobinfo.tel)? false : true;
				this.msg_codeError = this.mobinfo.msg_code.length> 0 ? false : true;		   		
				if( !this.telError2 && !this.msg_codeError && !this.mobileIsEixt ){
					this.disable = true;
					const params = {
						account: this.mobinfo.tel,
						msgCode: this.mobinfo.msg_code,
					};
					this.$axios.post( this.$root.urlPath.NEW + '/pc/login/quickLogin', 
						qs.stringify(params),
						{
							headers: {
				          	  'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
				          	  'APF_SMS':getCookie('APF_SMS')
			            	}
						}
					)
					.then(res=>{
						this.disable = false;
						if(res.data.success){
							setCookie('APF_UID', res.data.data)
							if(this.rememberUser){//记住用户名
								setCookie("user",this.mobinfo.tel,7);
							}
							if(this.toUrl){
								window.location.href = this.toUrl;
							}else{
								window.location.href = this.$root.urlPath.APF;
							}
						}else{
							this.$layer.msg(res.data.errMsg);
						}
					})
					.catch(err=>{this.disable = false;})
				}
			},
			get_code(){//短信验证码
				if( !this.mobinfo.tel || this.telError2 ){
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
				this.$axios.get( this.$root.urlPath.NEW + '/sms/getSmsPre?type=1&terminal=0' )
				.then(res=>{
					if(res.data.success){
						setCookie('APF_SMS', res.data.data);
						const params = {
							mobile: this.mobinfo.tel,
						};
						this.$axios.post( this.$root.urlPath.NEW + '/sms/sms?type=1&terminal=0',
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
			}
		},
		created() {
			if(getCookie('APF_UID')){
				window.location.href = this.$root.urlPath.APF;
			}
			if(getCookie('user')){
				this.userinfo.tel = getCookie('user');
				this.mobinfo.tel = getCookie('user');
			}
			console.log(this.toUrl)
		}
	}
</script>

<style scoped>
	.mt-11- {
		margin-top: -11px;
	}
	
	.login {
		width: 100%;
		height: 800px;
		background: url(../../../static/img/user/login_bg.jpg) no-repeat;
		/*padding: 20px 0;*/
	}
	
	.sign_in,
	.sign_in_mob {
		width: 500px;
		height: 500px;
		background: rgba(255, 255, 255, 0.5);
		margin: 80px 0 0 150px;
	}
	
	.login_form {
		display: block;
		position: relative;
		padding: 28px 60px;
		z-index: 1;
	}
	
	.mob_tip {
		margin-right: 15px;
		color: #002e73;
		padding: 2px 25px 2px 20px;
		background: url(../../../static/img/user/tog_con.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 20px;
		right: 70px;
	}
	
	.mibile {
		width: 100px;
		height: 100px;
		background: url(../../../static/img/user/tog_vip.png) no-repeat;
		vertical-align: top;
		position: absolute;
		right: 0;
		top: 0;
	}
	
	.log_text {
		padding: 42px 0 38px 27px;
	}
	
	.log_text .log_zh {
		font-size: 36px;
	}
	
	.log_text .log_en {
		font-size: 24px;
	}
	
	.login_form input[type=text],
	.login_form input[type=password] {
		font-size: 18px;
		border-radius: 30px;
		border: 1px solid rgb(183, 195, 206);
		padding: 16.5px 10px 16.5px 80px;
		width: 100%;
	}
	
	.login_form .per {
		position: relative;
		margin-bottom: 18px;
	}
	
	.login_form .icon_name {
		top: 14px;
		left: 35px;
		width: 26px;
		height: 31px;
		background: url(../../../static/img/user/phone.png)no-repeat;
	}
	
	.login_form .icon_pwd {
		position: absolute;
		top: 14px;
		left: 35px;
		width: 26px;
		height: 31px;
		background: url(../../../static/img/user/pwd.png)no-repeat;
	}
	
	.login_form .red {
		font-size: 12px;
		color: red;
		padding-top: 5px;
		visibility: hidden
	}
	
	.login_form input[type=checkbox] {
		vertical-align: middle;
		margin: 0;
		margin-left: 18px;
		zoom: 1.5;
	}
	
	.login_form .checkboxs a {
		font-weight: 400;
		float: right;
		padding-right: 27px;
	}
	
	.login_form .mt-15 {
		margin-top: 15px;
	}
	
	.login_form .login-btn {
		width: 100%;
		padding: 9px 0;
		background: #00a0e9;
		font-size: 30px;
		color: #fff;
		border: none;
		border-radius: 30px;
		margin-top: 20px;
	}
	
	button {
		outline: none;
	}
	/* sign up */
	
	.sign_up {
		width: 400px;
		display: inline-block;
		background: rgba(255, 255, 255, 0.5);
		margin-left: -20px;
		margin-top: 253px;
		padding: 72px 65px 80px 65px;
		text-align: center;
	}
	
	.reg_text .log_zh {
		font-size: 30px;
	}
	
	.reg_text .log_en {
		font-size: 18px;
	}
	
	.sign_up .reg_con {
		margin-top: 56px;
	}
	
	.sign_up .reg_con p {
		font-size: 16px;
	}
	
	.sign_up .reg_btn {
		margin-top: 55px;
		padding: 4.5px;
		width: 180px;
		background: rgba(255, 255, 255, 0);
		border-radius: 30px;
		border: 2px solid #333;
		font-size: 26px;
	}
	/* 切换隐藏部分 */
	
	.sign_in_mob .login_form {
		position: relative;
		margin: 0 auto;
		padding: 28px 60px;
	}
	
	.sign_in_mob .login_form .mob_tip {
		margin-right: 15px;
		color: #002e73;
		padding: 2px 25px 2px 20px;
		background: url(../../../static/img/user/tog_con.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 20px;
		right: 70px;
	}
	
	.sign_in_mob .login_form .mibile {
		width: 100px;
		height: 100px;
		background: url(../../../static/img/user/tog_phone.png) no-repeat;
		vertical-align: top;
		position: absolute;
		right: 0;
		top: 0;
	}
	
	.sign_in_mob .login_form .log_text {
		padding: 42px 0 38px 27px;
	}
	
	.sign_in_mob .login_form .log_text .log_zh {
		font-size: 36px;
	}
	
	.sign_in_mob .login_form input[type=text] {
		padding: 16.5px 10px 16.5px 80px;
		font-size: 18px;
		width: 100%;
		border-radius: 30px;
		border: 1px solid rgb(183, 195, 206);
	}
	
	.sign_in_mob .login_form .per {
		position: relative;
		margin-bottom: 18px;
	}
	
	.sign_in_mob .login_form .per_code button {
		background: #f17c00;
		border: none;
		border-radius: 30px;
		color: #fff;
		height: 60px;
		width: 158px;
	}
	
	.sign_in_mob .login_form .per_code input {
		width: 207px;
	}
	
	.sign_in_mob .login_form .icon_name {
		top: 14px;
		left: 35px;
		width: 26px;
		height: 31px;
		background: url(../../../static/img/user/phone.png)no-repeat;
	}
	
	.sign_in_mob .login_form .icon_code {
		top: 15px;
		left: 35px;
		width: 26px;
		height: 31px;
		background: url(../../../static/img/user/icon_code.png)no-repeat;
	}
	
	.sign_in_mob .login_form .red {
		font-size: 12px;
		display: hidden;
		color: red;
		padding-top: 5px;
		visibility: hidden
	}
	
	.sign_in_mob .login_form input[type=checkbox] {
		vertical-align: middle;
	}
	
	.sign_in_mob .login_form .checkbox a {
		font-weight: 400;
		float: right;
	}
	
	.sign_in_mob .login_form .mt-15 {
		margin-top: 15px;
	}
	
	.sign_in_mob .login_form .login-btn {
		width: 100%;
		background: #00a0e9;
		color: #fff;
		border: none;
		border-radius: 40px;
	}
</style>