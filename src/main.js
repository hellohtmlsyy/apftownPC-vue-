// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import "babel-polyfill";
import $ from 'jquery';
import layer from 'vue-layer';
Vue.prototype.$layer = layer(Vue);

import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.js'

Vue.config.productionTip = false;


//全局组件
import Mheader from '@/components/comm/Mheader';
Vue.component(Mheader.name,Mheader);
import Iheader from '@/components/comm/Iheader';
Vue.component(Iheader.name,Iheader);
import Footer from '@/components/comm/Footer';
Vue.component(Footer.name,Footer);
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

Vue.filter('subStr', function(titleStr, num) {
        if (titleStr.length <= num) return titleStr;
        else
            return titleStr.substr(0, num) + '...';
})
  
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if(to.meta.content){
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});

import Axios from 'axios';
import qs from 'qs'
Vue.prototype.API = '/api'

//挂载
Object.defineProperty(Vue.prototype,'$axios',{
	get(){
		return Axios;
	}
});
Axios.defaults.withCredentials = true; //让ajax携带cookie
import rootPath from './assets/config/api.js'//接口路径

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    data: {
    	urlPath : rootPath.pathUrl()//通过api.js 控制 开发 和线上环境
  	}
})