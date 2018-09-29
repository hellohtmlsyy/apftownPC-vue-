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
		            <li><router-link :to="{ path: '/aboutus' }">关于我们</router-link></li>
		        </ul>
			</div>
		</div>
		<div class="top_nav">
		    <div class="w">
	        	<div class="logo">
		            <img src="../../../static/img/b_logo.png" alt="" style="width:180px;height:48px">
		            <ul class="fr clearfix">
		                <li :class="{fw6:index == 1}"><a href="/home">首页</a></li>
		                <li :class="{fw6:index == 2}"><a href="/news">特区新闻</a></li>
		                <li :class="{fw6:index == 3}"><a href="/enterPark">产业服务</a></li>
		                <li :class="{fw6:index == 4}"><a href="/siteReservation">学习服务</a></li>
		                <li :class="{fw6:index == 5}"><a href="/cooperationAgency">研究服务</a></li>
		                <li :class="{fw6:index == 6}"><a href="/townLodging">园区到访</a></li>
		                <li :class="{fw6:index == 7}"><a href="/hayCast">海丝投</a></li>
		                <li :class="{fw6:index == 8}"><a href="/contactUs">联系我们</a></li>
		            </ul>
		        </div>
		    </div>
		</div>
		
		<!--<div class="top_nav">
				<div class="logo ">
					<nav class="navbar navbar-default apf_nav affix-top" role="navigation">
					    <div class="container">
					    	<div class="navbar-header" style="width:100%">
					    		<div class="row">
						            <div class="logoImg col-xs-5 visible-xs-* hidden-sm hidden-md hidden-lg" href="#">
										<img src="../../../static/img/b_logo.png" alt="">
									</div>
									<div class="col-xs-2 col-xs-offset-5">
							            <button type="button" class="navbar-toggle " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
							                <span class="icon-bar"></span>
							                <span class="icon-bar"></span>
							                <span class="icon-bar"></span>
							            </button>
									</div>
					    		</div>
				            <div class="row">
				            	<a class="logoImg col-md-3 hidden-xs" href="#">
									<img src="../../../static/img/b_logo.png" alt="">
								</a>
					        <div class="navbar-collapse collapse clearfix col-md-9" id="bs-example-navbar-collapse-1" aria-expanded="false" style="">
					            <ul class="nav navbar-nav navbar-right fr">
					                <li :class="{fw6:index == 1}"><a href="#" >首页</a></li>
					                <li :class="{fw6:index == 2}"><router-link :to="{ path : '/news' }">特区新闻</router-link></li>
					                <li :class="{fw6:index == 3}"><a href="#">产业服务</a></li>
					                <li :class="{fw6:index == 4}"><router-link :to="{ path : '/siteReservation' }">培训服务</router-link></li>
					                <li :class="{fw6:index == 5}"><a href="#">研究服务</a></li>
					                <li :class="{fw6:index == 6}"><a href="#">园区到访</a></li>
					                <li :class="{fw6:index == 7}"><a href="http://www.miningcircle.com/yi/index.do" target="_blank">海丝投</a></li>
					                <li :class="{fw6:index == 7}"><a href="#">联系我们</a></li>
					            </ul>
					        </div>
					        	</div>
					        </div>
					    </div>
					</nav>
				</div>
		</div>		-->
	</div>
</template>

<script>
	import { delCookie,getCookie } from '@/assets/commonjs/util.js'
	export default {
		name: 'i-header',
		props:['index'],
		data() {
			return {
				regToggle: true,
				logToggle: true,
				info: [],
			}
		},
		created(){
			this.$axios.get( this.$root.urlPath.NEW + '/user/getUserInfo' )
			.then(res=>{
//				if(res.data==null||res==null){
//					alert('userinfo=null')
//				}
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
	.top_nav {
    width: 100%;
    background: #fff;
}
.top_nav {
    height: 80px;
    line-height: 80px;
    top: 40px;
    z-index: 1;
}
	.top_nav .nav>li>a{
		padding: 0;
	}	
	.navbar-default .navbar-nav>li>a{
		color:currentcolor;
	}
	 .container-fluid>.navbar-collapse, .container-fluid>.navbar-header, .container>.navbar-collapse, .container>.navbar-header{
	 	margin:0;
	 }
	.navbar-nav {
	    margin: 7.5px 0;
	}	
	.navbar-collapse{
		padding:0;
	}
	@media (min-width: 768px){
		.top_nav .navbar-collapse {
		    width: 80%;
		}	
	}
	.top_nav .nav {
	    padding-left: 5px;
	}
	.top_head {
		height: 40px;
		line-height: 40px;
		top: 0;
		background: rgb(246, 246, 246);
		z-index: 10;
	}	
	.top_line {
		width: 1px;
		height: 10px;
		background: #fff;
		margin: 15px 9px 0px;
		background: #333;
	}	
	.top_nav {
		z-index: 1;
		background: #fff;
	}	
	.top_nav .logo .logoImg {
		line-height: 100px;
	}	
	.top_nav .logo .logoImg img{
		width:221px;
	}	
	@media only screen and (min-width:375px) and (max-width: 620px){
		.top_nav .logo .logoImg img{
			width:100%;
		}
	}
	.top_nav li {
	    float: left;
	    font-size: 18px;
	    padding-right: 40px;
	}
	@media only screen and (min-width: 375px) and (max-width: 768px) {
		.top_nav li{
			font-size: 16px;
		    padding-right:10px;
		}
	}	
	.top_nav li:last-child {
	    padding-right: 0;
	}
	.top_nav .row {
		display: flex;
	    align-items: center;
	}
	.top_nav .row ul {
		text-align: right;
	}
	.fw6{
		font-weight: 600;
		color:#eb6100;
	}
</style>