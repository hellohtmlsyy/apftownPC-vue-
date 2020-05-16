<template>
	<div>
		<div class="footer">
			<div class="foot_t">
				<div class="w">
					<p>CONTACT US</p>
					<p> </p>
				</div>
			</div>
			<div class="w">
				<div class="foot_c">
					<ul class="foot_info">
						<li>
							<span>联系电话</span>
							<p>24小时服务热线&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
							<p class="fw-6">400-670-2139&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
						</li>
						<li>
							<span>服务平台</span>
							<div class="ewm">
								<img src="../../../static/img/subscribe.jpg" alt="">
								<img src="../../../static/img/service.jpg" alt="">
							</div>
						</li>
						<li>
							<span>邮箱地址</span>
							<p>邮箱：info@apftown.com</p>
							<p>地址：海南省三亚市海棠区亚太金融小镇</p>
						</li>
					</ul>
					<!--<div class="link">
						<h5 class="dib">友情链接</h5>
						<ul class="foot_link">
							<li><a href="http://www.eeg-bg.com/">武汉无抵押贷款</a></li>
							<li><a href="http://xiaorandai.com/">北京房产贷款</a></li>
							<li><a href="http://www.jdj4.com/">鼎汇私募股权基金</a></li>
							<li><a href="http://www.lvmaquekeji.com/">点买A股系统</a></li>
							<li><a href="http://xd.hongfund.com/">上海房产抵押贷款</a></li>
							<li><a href="http://snagl-zhshy.com/index.html">区块链资讯</a></li>
							<li><a href="http://www.z6666.com.cn/">中金国际</a></li>
							<li><a href="http://www.hdxjkl.cn/">农村拆迁律师网</a></li>
						</ul>
					</div>-->
				</div>
			</div>
			<div class="foot_b">
				<div class="p">©2014 亚太金融（基金）小镇 All rights reserved |<a href="http://www.beian.miit.gov.cn" target="_blank">琼ICP备17000007号-1</a><br />投资有风险，理财需谨慎
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'm-footer',
	}
</script>

<style scoped>
/* footer */
.footer {
    color: #333;
    margin-top: 100px;
    border-top: 1px solid #d2d2d2;
}
.foot_t {
    height: 150px;
    line-height: 150px;
    text-align: center;
    border-bottom: 1px solid rgb(219, 219, 219);
}

.foot_t p {
    color: #626262;
    font-size: 30px;
}

.foot_t p:last-child {
    width: 100px;
    background: #626262;
    border-top: 1px solid #ccc;
    margin: -4% 0 0 46%;
}

.foot_info {
    padding-top: 20px;
    height: 210px;
    border-bottom: 1px solid rgb(210, 210, 210);
}

.foot_info li {
    position: relative;
    float: left;
    width: 348px;
    height: 140px;
    margin-right: 50px;
    border: 1px solid rgb(210, 210, 210);
    border-radius: 10px;
    margin: 20px;
}

.foot_info li:last-child {
    padding-right: 0;
}

.foot_info li span {
    width: 53px;
    background: #fff;
    font-size: 18px;
    color: #707070;
    position: absolute;
    top: -20px;
    left: -25px;
    padding: 8px;
}

.foot_info li p:nth-child(2) {
    margin-top: 35px;
}

.foot_info li p {
    font-size: 14px;
    padding-left: 50px;
    line-height: 25px;
}

.foot_info li .ewm {
    text-align: center;
    margin-top: 10px;
}

.foot_info li .ewm img:first-child {
    padding-right: 35px;
}

/* footer 友情链接 */
.foot_link {
    height: 60px;
    z-index: 1000;
}

.link h5 {
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 25px;
    padding-top: 5px;
}

.foot_link li {
    float: left;
    font-size: 12px;
    padding-right: 38px;
    line-height: 23px;
}

.foot_link li:nth-child(11) {
    padding-right: 0;
}

.foot_link li>a {
    color: #333;
    font-weight: 400;
}

.foot_b {
    height: 80px;
    background: rgb(149, 149, 149);
    text-align: center;
   	display: flex;
    align-items:center;
    justify-content:center;
}

.foot_b .p, .foot_b a {
    font-size: 12px;
    color: #fff;
    line-height: 20px;
}
</style>