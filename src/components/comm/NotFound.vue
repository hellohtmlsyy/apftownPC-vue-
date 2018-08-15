<template>
	<div>
    <div class="box">
      <span>您要查找的页面不存在&nbsp;&nbsp;</span>
      <a href="javascript:;" @click="home">点我去首页</a>
    </div>
	</div>
</template>
<script>
	export default{
		methods:{
			home(){
				location.href=this.$root.urlPath.APF+"/home"
			}
		}
	}
</script>
<style scoped>
  .box{
    text-align:center;
    margin:20px;
  }
  .box span{
    font-size:22px;
  }
  a{
    font-size:26px;
    color:#00a0e9;
  }
</style>
