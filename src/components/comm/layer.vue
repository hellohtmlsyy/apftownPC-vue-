<template>
	<div class="layer1">
		<!--弹窗-->
    	<div id="test" >
            <div class="lay_con col-70">
                <div class="fs-16 mb-9">
                	姓　　名<input type="text" v-model.trim="userinfo.name" /><br>
                	<small class="col-red pl-80 fs-12" v-show="nameError">{{writeName}}</small>
                	<!--<span class="fs-12 col-red err" v-show="nameError">请正确填写姓名</span>-->
                </div>                
                <div class="fs-16 mb-9">
                	单　　位<input type="text" v-model.trim="userinfo.company" /><br>
                	<small class="col-red pl-80 fs-12" v-show="companyError">{{writeCompany}}</small>
                	<!--<span class="fs-12 col-red err" v-show="companyError">请填写单位</span>-->
                </div>
                <div class="fs-16 mb-9">
                	联系方式<input type="text" v-model.trim="userinfo.contact" /><br>
                	<small class="col-red pl-80 fs-12" v-show="contactError">{{writeContact}}</small>
                	<!--<span class="fs-12 col-red err" v-show="contactError">请填写手机或邮箱</span>-->
                </div>
                <div class="fs-16 mb-25">
                	<span style="vertical-align: top;">预定需求</span>
                	<textarea name="" cols="30" rows="3" v-model.trim="userinfo.demand"></textarea><br>
                	<small class="col-red pl-80 fs-12" v-show="demandError">{{writeDemand}}</small>
                	<!--<span class="fs-12 col-red err" v-show="demandError">请填写预定需求</span>-->
                </div>                 
                <div class="tac">
                	<button type="button" class="lay_btn fs-16" @click="sub()" :disabled="disable">提交</button>
                </div>                
            </div>
        </div>
	</div>
</template>

<script>
	import book2 from '@/components/comm/layer2';
	import qs from 'qs';
	export default {
		components: {
			book2
		},
		data(){
			return {
				disable:false,
				writeName: '请填写正确姓名',
				writeCompany: '请填写单位，单位名称不得大于20个字',
				writeContact: '请填写手机或邮箱',
				writeDemand: '请填写预定需求，预定需求不得大于800个字',
				nameError: false,
				companyError: false,
				contactError: false,
				demandError: false,
				userinfo: {
					name: '',
					company: '',
					contact: '',
					demand: '',
				},
				success: false,
			}
		},
		watch: {
			['userinfo.name']() {
				var fullName = /^[\u4E00-\u9FA5A-Za-z]+$/;
				this.nameError = this.userinfo.name.length > 0 && fullName.test(this.userinfo.name) ? false : true;
			},
			['userinfo.company']() {
				var companyName = /^[\u4e00-\u9fa5A-Za-z]{1,20}$/;
				this.companyError = this.userinfo.company.length > 0 && companyName.test(this.userinfo.company) ? false : true;
			},
			['userinfo.contact']() {
				var connection = /^1[345678]\d{9}|(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
				this.contactError = this.userinfo.contact.length > 0 && connection.test(this.userinfo.contact) ? false : true;
			},
			['userinfo.demand']() {
				this.demandError = this.userinfo.demand.length > 0 && this.userinfo.demand.length < 800 ? false : true;
			},
		},
		methods: {
			sub(){
				this.demandError = this.userinfo.demand.length > 0 && this.userinfo.demand.length < 800 ? false : true;
				this.contactError = this.userinfo.contact.length > 0 && /^1[345678]\d{9}|(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userinfo.contact) ? false : true;
				this.companyError = this.userinfo.company.length > 0 && /^[\u4e00-\u9fa5A-Za-z]{1,20}$/.test(this.userinfo.company) ? false : true;
				this.nameError = this.userinfo.name.length > 0 && /^[\u4E00-\u9FA5A-Za-z]+$/.test(this.userinfo.name) ? false : true;
				
				if(!this.nameError && !this.companyError && !this.contactError && !this.demandError ){
					this.disable = true;
					const params = {
						name: this.userinfo.name,
						company: this.userinfo.company,
						contact: this.userinfo.contact,
						requirement: this.userinfo.demand,
					};
					this.$axios.post(this.$root.urlPath.NEW + '/pc/siteReservation/submit',
						qs.stringify(params),
						{
							headers: {
				          	  'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			            	}
						}
					)
					.then(res=>{
						this.disable = false;
						this.success = res.data.success
						if( this.success == true ){
							this.$layer.closeAll();
//							this.$layer.msg('提交成功<br />我们会在提交后第一时间联系您');
							
							this.$layer.iframe({
							  	content: {
								    content: book2, //传递的组件对象
								    parent: this,//当前的vue对象
								    data:[]//props
								},
									title: '提示',
									area:['260px', 'auto']
							});
							
						}
					})
					.catch(err=>{
						this.$layer.msg('网络异常<br />请稍后重试');
					})
				}
			}
		},
	}
</script>

<style>
	.pl-80{
		padding-left: 80px;
	}
	.mb-25{
		margin-bottom: 25px;
	}
	.mb-9{
		margin-bottom: 9px;
	}	
	.layui-layer-title {		   
	    font-size: 18px !important;
	}
	.vl-notify.vl-notify-alert h2.vl-notice-title{
		height: 47px;
		background-color: rgb(242,242,242);
		border-radius: 5px;
		font-size: 18px;
		font-weight: 600;
		color: #333;
		line-height: 47px;
	}
	.vl-notify.vl-notify-alert h2.vl-notice-title .icon-remove{
		right:30px;
		font-size: 18px;
	}
	#test .lay_con{
	    padding: 5px 10px;
	}
	#test .lay_con input{
		width:75%;
		border:1px solid #ccc;
		border-radius:4px;
		padding:8px 15px;
		margin-left: 20px;			
	}
	#test .lay_con textarea{
		width:75%;
		border:1px solid #ccc;
		border-radius:4px;
		padding:6px 15px;
		margin-left: 17px;
		vetical-align:top;
	}
	#test .lay_con .lay_btn,#test2 .lay_con .lay_btn{
		width:90px;
		height:35px;
		font-size: 16px;
		margin-top: 0;
		color:#fff;
		text-align: center;
		background: #22ac38;
		border-radius: 3px;
		border:none
	}
	#test .lay_con .err{
		padding-left: 25%;
	}
</style>