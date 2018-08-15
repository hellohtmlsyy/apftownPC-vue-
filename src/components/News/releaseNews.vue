<template>
	<div>
		<div class="releaseNews" v-show="publish">
			<div class="w">
				<div class="relBox">
					<div class="bigTit">发布新闻</div>
					<div class="relCon">
						<div class="clearfix relImg">
							<div class="fl" style="width: 515px;">
								<span class="tit">上传主图</span>
								<cropper @transferUser="getUrl" :headImg="ruleForm.logo"></cropper>
							</div>
							<div class="fl">
								<span class="tit">分类</span>
								<div class="class">
									<span class="fs-16 col-a0 cp tac mr-17" :class="{ category: relClass == 0 }" @click="valTown()">小镇动态</span>
									<span class="fs-16 col-a0 cp tac mr-17" :class="{ category: relClass == 1 }" @click="valFin()">特区金融</span>
									<span class="fs-16 col-a0 cp tac" :class="{ category: relClass == 2 }" @click="valTra()">自由贸易港</span>
								</div>
							</div>
						</div>
						<div class="box mt-5">
							<div class="tit">标题</div>
							<input type="text" v-model.trim="info.title" />
						</div>
						<div class="box">
							<div class="tit">副标题</div>
							<input type="text" v-model.trim="info.subtitle" />
						</div>
						<div class="clearfix box">
							<div class="fl source">
								<div class="tit">来源</div>
								<input type="text" v-model.trim="info.source" />
							</div>
							<div class="fl author">
								<div class="tit">作者</div>
								<input type="text" v-model.trim="info.author" />
							</div>
						</div>
						<div class="box">
							<div class="tit">导语</div>
							<textarea name="" rows="" cols="" v-model.trim="info.introduction"></textarea>
						</div>
						<div class="box mt-14">
							<div class="tit mb-5">正文</div>
							<div id="editor" name="content"></div>
						</div>
					</div>
					<div class="tac cp"><button type="button" class="relBtn fs-20 col-ff" @click="sub()" :disabled="disable">发布</button></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import cropper from '@/components/comm/upload-img.vue';
	import { setCookie,getCookie } from '@/assets/commonjs/util.js';
	import qs from 'qs';
	export default {
		components: {
			cropper
		},
		data() {
			return {
				publish: false,
				category: 10,
				relClass: 0,
				disable: false,
				info: {
					title: '',
					subtitle: '',
					source: '',
					author: '',
					introduction: '',
				},
				titleError: false,
				subtitleError: false,
				sourceError: false,
				authorError: false,
				intError: false,
				textError: false,
				editorError: false,
				pictureError: false,
				editor: null,//富文本
				//upload-img
				imgurlObj: '',
				ruleForm:{
					logo:''
				},
			}
		},
		methods: {
			valTown() {
				this.relClass = 0;
				this.category = 10;
			},
			valFin() {
				this.relClass = 1;
				this.category = 20;
			},
			valTra() {
				this.relClass = 2;
				this.category = 30;
			},
			sub() {
				//正文
				this.editorError = this.editor.hasContents()?false: true;
				if(this.editorError){
					this.$layer.msg('请输入正文');
				}
				//导语
				this.intError = this.info.introduction.length >0? false: true;
				if(this.intError) {
					this.$layer.msg('请输入导语');
				}
				//作者
				this.authorError = this.info.author.length > 0?false: true;
				if(this.authorError) {
					this.$layer.msg('请输入作者');
				}
				//来源
				this.sourceError = this.info.source.length > 0?false: true;
				if(this.sourceError) {
					this.$layer.msg('请输入来源');
				}
				//副标题
				this.subtitleError = this.info.subtitle.length >0?false: true;
				if(this.subtitleError) {
					this.$layer.msg('请输入副标题');
				}
				//标题
				this.titleError = this.info.title.length > 0?false: true;
				if(this.titleError) {
					this.$layer.msg('请输入标题');
				}
				//主图
				this.pictureError = this.ruleForm.logo ?false: true;
				if(this.pictureError){
					this.$layer.msg('请上传主图');
				}
				
				if( !this.editorError && !this.intError && !this.authorError && !this.sourceError && !this.subtitleError && !this.titleError && !this.pictureError ) {
					this.disable = true;
					const params = {
						title: this.info.title,
						subTitle: this.info.subtitle,
						source: this.info.source,
						author: this.info.author,
						introduction: this.info.introduction,
						category: this.category,
						body: this.editor.getContent(),//内容
						img: this.ruleForm.logo,
					}
					this.$axios.post(this.$root.urlPath.NEW + '/pc/news/publish', 
						qs.stringify(params),
						{
							headers: {
				          		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				          		'APF_UID': getCookie('APF_UID')
			            	}
						}
					)
					.then(res=>{
						if(res.data.success){
							this.$layer.msg('发布成功');		
						}else{
							this.$layer.msg(res.data.errMsg);
						}
					})
					.catch(err=>{console.log(err)})
					console.log(params)
					alert('发布成功')
				}
			},
			getUrl(msg) {
		      	this.imgurlObj = msg;
		      	this.ruleForm.logo = JSON.parse(this.imgurlObj).path;
		    },
		    gettext() {
	　　　　　　// 获取editor中的文本
	             console.log(this.editor.getContent())
	            //判断编辑器是否有内容this.editor.hasContents()
	           　　 }
		},
		mounted() {
			this.editor = UE.getEditor('editor',{
		        BaseUrl: '',
		        UEDITOR_HOME_URL: 'static/ueditor/',
				toolbars: [
				    [ 
				    	'undo', 'redo', '|', 'bold', 'italic', 'underline', 'fontborder', 'strikethrough',
				    	'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor',
				    	'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|', 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|', 'customstyle',
				    	'paragraph', 'fontfamily', 'fontsize', '|', 'directionalityltr', 'directionalityrtl', 'indent', '|', 'justifyleft', 'justifycenter',
				    	'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|', 'link', 'unlink',
				    	'fullscreen',
				    ]
				],
				initialFrameHeight: 400,				
		    })
		},
		destroyed() {
　　		// 将editor进行销毁
　　			this.editor.destroy();
  　　 		},
  		created(){
  			this.$axios.get( this.$root.urlPath.NEW + '/user/getUserInfo' )
			.then(res=>{
				if(res.data.success){
					var userId = res.data.data.userId;
					if( userId == '959218986199814144' || userId == '959586282323841024' || userId == '959586284441964544' || userId == '959586368927830016' ){
						this.publish = true;
					}else{
						this.publish = false;
					}
				}else{
					this.publish = false;
				}
			})
			.catch(err=>{console.log(err)});
  		},
	}
</script>

<style>
	img[src=""] {
	    opacity: 0;
	}
	.mt-5{
		margin-top: 5px !important;
	}
	.mt-14{
		margin-top: 14px !important;
	}
	.mr-17 {
		margin-right: 17px;
	}
	
	.releaseNews .edui-default .edui-editor-breadcrumb span {
	    text-decoration: none; 
	    color: #333; 
	}
	
	.releaseNews .relBox {
		margin: 0 12.7%;
		width: 74.6%;
		padding: 0 10px;
		padding-bottom: 100px;
	}
	
	.relBox .bigTit {
		font-size: 36px;
		color: #333;
		margin-top: 20px;
	}
	
	.relCon {
		margin-top: 65px;
	}
	
	.relCon .tit {
		font-size: 20px;
		font-weight: 600;
		color: #333;
	    vertical-align: top;
	}
	
	.relCon .relImg .class {
		margin-top: 7px;
	}
	
	.relCon .relImg .class span {
		width: 100px;
		height: 32px;
		line-height: 29px;
		background-color: #ffffff;
		border-radius: 15px;
		border: solid 1px #b5b5b5;
	}
	
	.relCon .relImg .class .category {
		color: #00a0e9;
		border: solid 2px #00a0e9;
	}
	
	.relCon .box {
		margin-top: 19px;
	}
	
	.relCon .box input {
		width: 860px;
		height: 40px;
		background-color: #ffffff;
		border-radius: 2px;
		border: solid 1px #b5b5b5;
		margin-top: 8px;
		font-size: 16px;
		padding: 5px 15px;
	}
	
	.relCon .box textarea {
		width: 860px;
		height: 88px;
		font-size: 16px;
		padding: 5px 15px;
		background-color: #ffffff;
		border-radius: 2px;
		border: solid 1px #b5b5b5;
		margin-top: 8px;
	}
	
	.relCon .box .source,
	.box .author {
		width: 400px;
	}
	
	.relCon .box .source input,
	.box .author input {
		width: 100%;
	}
	
	.relCon .box .source {
		margin-right: 60px;
	}
	
	.relBox .relBtn {
		width: 220px;
		height: 50px;
		background-color: #22ac38;
		border-radius: 5px;
		line-height: 50px;
		margin-top: 50px;
		border: none;
	}
</style>