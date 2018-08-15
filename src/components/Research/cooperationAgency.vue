<template>
	<div>
		<i-header :index="index"></i-header>
		<div class="top_banner">
	        <img src="../../../static/img/Research/research_banner1.jpg">
	    </div>
	    <div class="train_tit">    	
	        <div class="w">
	        	<div class="train_tab">
        			<div class="tabBox dib tabBox_active tabBox_mr"><router-link class="tab_active" :to="{ path : '/cooperationAgency'}">合作机构</router-link></div>	        			
	        		<div class="tabBox dib tabBox_mr"><router-link :to="{ path : '/financialExpert'}">金融专家</router-link></div>
	        		<div class="tabBox dib"><router-link :to="{ path : '/researchFindings'}">研究结果</router-link></div>
	        	</div>        	
	        </div>
	    </div>
	    <div class="coop_agency">
	    	<div class="w">
	    		<div class="coop_agencyCon">
		    		<div class="agency clearfix">
		    			<div class="agencyl fl mr-30">
		    				<img src="../../../static/img/Research/agency1.jpg" alt="" />
		    			</div>
		    			<div class="agencyr fl col-33">
		    				<span class="fs-16 lh-28 mb-28">
		    					建设海南自由贸易港与促进中国金融开放<br />
		    					创办海上丝绸之路金融总部基地<br />
		    					离不开扎实的金融研究
		    				</span>
		    				<span class="fs-16 lh-28 mb-28">
		    					小镇欢迎全球各产业与金融研究机构入驻<br />
		    					根据金融五项修炼模型<br />
		    					开展海上丝绸之路<br />
		    					海南自由贸易港<br />
		    					中国金融开放<br />
		    					交易所与基金创新实践四个层面的研究
		    				</span>
		    				<span class="fs-16 lh-28">
		    					对于入驻的研究机构<br />
		    					<span class="col-agenay fw-6 mt-6">小镇提供免费办公室5年</span><br />
		    					<span class="col-agenay fw-6 mt-6">每年提供3个人不少于1个月的免费住宿</span><br />
		    					<span class="col-agenay fw-6 mt-6 mb-6">并享有金融实验室/大数据/图书馆等设施免费使用权利</span><br />
		    					共同开展相应的课题研究
		    				</span>
		    			</div>
		    		</div>	
		    		<div class="four_levels">
		    			<div class="levels_tit tac">
		    				<img src="../../../static/img/Research/arrTit.png"/>
		    			</div>
		    			<div class="levelCon fs-16 col-666">
		    				<div class="levelsBox clearfix mb-46">
		    					<div class="levelsl fl"></div>
		    					<div class="levelsr fl lh-34 ">首先积极开展与海上丝绸之路（东南亚、印度、巴基斯坦、土耳其、坦桑尼亚等）及亚太各国（美国、俄罗斯、加拿大、澳大利亚等）金融及学术机构的交流与合作，致力于成为创新国际金融研究基地</div>
		    				</div>
		    				<div class="levelsBox clearfix mb-46">
		    					<div class="levelsl fl"></div>
		    					<div class="levelsr fl lh-34">其次聚焦海南自由贸易港产业与金融发展研究，就自由贸易港与金融发展一对互为因果的要素进行分析，就金融发展模型、金融支持结构、金融政策体系进行全面规划</div>
		    				</div>
		    				<div class="levelsBox clearfix  mb-46">
		    					<div class="levelsl fl"></div>
		    					<div class="levelsr fl lh-34">再次积极开展中国金融开放系列研究，对中国金融“走出去”与“引进来”进行双向分析，走出去以海上丝绸之路为目标进行金融海外创新研究，引进来以亚太发达国家金融体系为目标进行国内金融运营落地研究</div>
		    				</div>
		    				<div class="levelsBox clearfix">
		    					<div class="levelsl fl"></div>
		    					<div class="levelsr fl lh-34">最后聚焦小镇交易所和基金等方面的具体业务，对入驻小镇的企业进行全方位金融支持规划，并联合银行、证券公司、保险机构、会计师事务所、律师事务所开展金融创新实践研究</div>
		    				</div>
		    			</div>
		    			<div class="tac mt-17">
		    				<img src="../../../static/img/Research/map.jpg"/>
		    			</div>		    			
		    		</div>
	    		</div>
	    	</div>
	    </div>
    	<m-footer></m-footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				index:5,
			}
		},
	}
</script>

<style scoped>
	.col-agenay{
		color:#0068b7;
	}
	.lh-28{
		line-height: 28px;
	}
	.lh-34{
		line-height: 34px;
	}
	.mt-6{
		margin-top: 6px;
	}
	.mb-6{
	    margin-bottom: 6px;
	}
	.mb-28{
		margin-bottom: 28px;
	}
	.mb-46{
		margin-bottom: 46px;
	}
	.top_banner{
		width: 100%;
	    position: relative;
	    overflow: hidden;
	}
	.top_banner img{
		width:auto;
		margin: 0 50%;
		transform: translateX(-50%);
	}
	.coop_agencyCon{
		margin:0 12.7%;
		width:74.6%;
	}
	/*agency*/
	.coop_agencyCon .agency{
		border: solid 1px #bbd4ea;
		margin-top: 38px;
		width: 860px;
		margin: 38px 10px 0 10px;
		padding: 23px 38px 28px 38px;
		display: flex;
    	align-items: center;
	}
	/*四个层次*/
	.coop_agencyCon .four_levels{
		margin-top: 34px;
	}
	.four_levels .levelCon{
		padding: 0 175px;
		margin-top: 53px;
	}
	.four_levels .levelCon .levelsl{
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: #eb6100;
		margin-right: 17px;
	}
	.four_levels .levelCon .levelsr{
		width: 500px;
		margin-top: -12px;		
	}
</style>