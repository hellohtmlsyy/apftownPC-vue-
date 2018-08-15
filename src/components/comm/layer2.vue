<template>
	<div>
		<div id="test2" >
            <div class="lay_con col-33">
				<div class="test fs-14 mb-10">
               	提交成功<br>
               	我们会在提交后第一时间联系您
				</div>                 
                <div align="right">
                	<button class="lay_btn fs-16" @click="confirm()">确认</button>
                </div>                
            </div>
        </div>
	</div>
</template>

<script>
	export default{
		methods: {
			confirm(){
				this.$layer.closeAll();
				location.reload()
//				location.href="http://szj.apftown.com:8888/siteReservation"
			}
		}
	}
</script>

<style>
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
	#test2 .lay_con{
		/*padding: 10px 19px;*/
		text-align: left !important;
	}
	#test2 .lay_con .lay_btn{
		width:60px;
		height:30px;
	}
	#test2 .lay_con .lay_btn{
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
</style>