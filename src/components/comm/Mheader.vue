<template>
	<div>
		<div class="top_head" id="index">
			<div class="w clearfix">
				 <div class="fl">
		            <span>24小时热线 400-670-2139</span>
		        </div>
		        <ul class="fr">
		        	<li><router-link :to="{ path: '/home' }">首页</router-link></li>
		            <li class="top_line"></li>
		            <li v-show="logToggle"><router-link :to="{ path: '/login'}" class="active2">登录</router-link></li>
		            <li v-show="!logToggle"><a href="javascript:;" class="active2">{{ info.userName && info.userName.length <11 ? info.userName :info.mobile }}</a></li>
		            <li class="top_line"></li>
		            <li v-show="regToggle"><router-link :to="{ path: '/reg' }" class="active2">注册</router-link></li>
		            <li v-show="!regToggle" @click="signOut()"><a href="javascript:;" class="active2">退出</a></li>
		            <li class="top_line"></li>
		            <li><router-link :to="{ path: '/aboutus' }" target="_blank">关于我们</router-link></li>
		        </ul>
			</div>
		</div>
		<div class="top_nav">
			<div class="w">
				<div class="logo clearfix">
					<div class="logoImg fl">
						<img src="../../../static/img/b_logo.png" alt=""  style="width:180px;height:48px">
					</div>
					<div class="welLogin fl fs-24">{{title}}</div>
					<div class="phone fr" v-show="conrs">
						<span class="fs-18 tel">0898-31002721</span>
						<span class="fs-14 col-89">24小时固定电话</span>
					</div>
					<div class="phone2 fr" v-show="conr">						
						<span class="fs-16">我已有账户，<router-link :to="{ path: '/login' }">登录</router-link></span>
					</div>
					
					 <ul class="fr clearfix" v-show="indexShow">
		                <li><a href="#">首页</a></li>
		                <li><a href="#">新闻</a></li>
		                <li><a href="#">金融</a></li>
		                <li><a href="#">培训</a></li>
		                <li><a href="#">研究</a></li>
		                <li><a href="#">海丝投</a></li>
		            </ul>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	import { delCookie,getCookie } from '@/assets/commonjs/util.js'
	export default {
		name: 'm-header',
		props: ['title', 'conr','conrs','indexShow'],		
		data(){
			return {
				regToggle: true,
				logToggle: true,
				info: [],
			}
		},
		created(){
			this.$axios.get( this.$root.urlPath.NEW + '/user/getUserInfo' )
			.then(res=>{
				if(res.data.success){
					this.regToggle = false;
					this.logToggle = false;
					this.info = res.data.data;
				}
			})
			.catch(err=>{console.log(err)});
		},
		methods: {
			signOut(){
				if(getCookie("APF_UID")){
					delCookie("APF_UID");
					location.reload();
				}
			}
		}
	}
</script>

<style scoped>
	.top_nav,
	.logo .welLogin,
	.logoImg {
		height: 80px;
	}	
	.top_nav {
		z-index: 1;
		background: #fff;
	}	
	.top_nav .logo .welLogin {
		font-weight: 500;
		line-height: 80px;
		padding-left: 90px;
	}	
	.top_nav .logo .logoImg {
		line-height: 80px;
	}	
	.top_nav .logo .phone {
		padding: 17.5px 0;
		width:135px;
		text-align: right;
	}
	.top_nav .logo .phone .tel{
		white-space: nowrap;
	}
	.top_nav .logo .phone2 {
		line-height: 80px;
	}
	.top_nav .logo .phone2 a{
		color:#2cadec;
	}
</style>