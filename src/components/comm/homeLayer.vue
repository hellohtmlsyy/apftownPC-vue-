<template>
	<div>
		<div id="test3" >
            <div class="lay_con col-33">
				<img src="../../../static/img/home/hLayer.png" alt="" style="width:100%"/>    
				<div class="cloBtn" @click="close()">×</div>
            </div>
        </div>
	</div>
</template>

<script>
	export default{
		methods: {
			close(){
				this.$layer.closeAll();
			}
		}
	}
</script>

<style>
	/*.vl-notify-mask{
		background-color:transparentimportant!important;
	}
	.vl-notify-iframe h2 {
		display:none!important;
	}
	.vl-notify .vl-notify-content{
		padding: 0!important;
	}
	.vl-notify.vl-notify-main{
		background-color: transparent!important;
	    border: currentcolor!important;
	    box-shadow: none!important; 
	    border-radius: 0!important;
	    padding-bottom: 0!important;
	}*/
	#test3{
		position: relative;
	}
	#test3 .cloBtn{
		position: absolute;
		top: 23px;
		right: 46px;
		font-size: 45px;
		color: #eb6303;
		cursor: pointer;
		opacity: 0;
	}
</style>