import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import News from '@/components/news';
import releaseNews from '@/components/News/releaseNews';
import newsDetail from '@/components/NewsDetail/newsDetail';

//用户中心
import Login from '@/components/user/Login';
import Reg from '@/components/user/Reg';
import Findpwd from '@/components/user/Findpwd';
import aboutus from '@/components/user/aboutus'

//banner详情
import bannerDet1 from '@/components/bannerDet/bannerDet1';
import bannerDet2 from '@/components/bannerDet/bannerDet2';
import bannerDet3 from '@/components/bannerDet/bannerDet3';

//产业
import enterPark from '@/components/Industry/enterPark';
import financialSupport from '@/components/Industry/financialSupport';
import hayCast from '@/components/Industry/hayCast';
import regCompanyProcess from '@/components/Industry/regCompanyProcess';

//培训
import financialConference from '@/components/train/financialConference';
import financialTraining from '@/components/train/financialTraining';
import siteReservation from '@/components/train/siteReservation';

//研究
import cooperationAgency from '@/components/Research/cooperationAgency';
import financialExpert from '@/components/Research/financialExpert';
import researchFindings from '@/components/Research/researchFindings';

//园区
import townLodging from '@/components/Park/townLodging';
import offProperty from '@/components/Park/offProperty';
import visitTown from '@/components/Park/visitTown';

//联系我们
import contactUs from '@/components/contactUs';

import NotFound from '@/components/comm/NotFound';

Vue.use(Router)

export default new Router({
	mode:'history',
    routes: [{
            path: '/',
            redirect: {
                name: 'home'
            }
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
		    	title: '亚太金融(基金)小镇_基金注册_注册基金_基金小镇_金融小镇',
		    }
        },
        {
            path: '/news',
            name: 'news',
            component: News,
            meta: {
//		    	title: '新闻',
		    }
        },
        {
            path: '/releaseNews',
            name: 'releasenews',
            component: releaseNews
        },
        {
            path: '/newsDetail',
            name: 'newsdetail',
            component: newsDetail
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/reg',
            name: 'reg',
            component: Reg
        },
        {
            path: '/findpwd',
            name: 'findpwd',
            component: Findpwd
        },
        {
            path: '/aboutus',
            name: 'aboutus',
            component: aboutus
        }, 
        {
            path: '/bannerDet1',
            name: 'bannerdet1',
            component: bannerDet1
        },
        {
            path: '/bannerDet2',
            name: 'bannerdet2',
            component: bannerDet2
        },
        {
            path: '/bannerDet3',
            name: 'bannerdet3',
            component: bannerDet3
        },
        {
            path: '/enterPark',
            name: 'enterpark',
            component: enterPark
        },
        {
            path: '/financialSupport',
            name: 'financialsupport',
            component: financialSupport
        },
        {
            path: '/hayCast',
            name: 'haycast',
            component: hayCast
        },
        {
        	path: '/regCompanyProcess',
        	name: 'regcompanyprocess',
        	component: regCompanyProcess
        },
        {
            path: '/siteReservation',
            name: 'sitereservation',
            component: siteReservation
        },
        {
            path: '/financialConference',
            name: 'financialconference',
            component: financialConference
        },
        {
            path: '/financialTraining',
            name: 'financialtraining',
            component: financialTraining
        },
        {
            path: '/cooperationAgency',
            name: 'cooperationagency',
            component: cooperationAgency
        },
        {
            path: '/financialExpert',
            name: 'financialexpert',
            component: financialExpert
        },
        {
            path: '/researchFindings',
            name: 'researchfindings',
            component: researchFindings
        },
         {
            path: '/townLodging',
            name: 'townlodging',
            component: townLodging
        },
        {
            path: '/offProperty',
            name: 'offproperty',
            component: offProperty
        },
        {
            path: '/visitTown',
            name: 'visittown',
            component: visitTown
        },
         {
            path: '/contactUs',
            name: 'contactus',
            component: contactUs
        },
        {
            path: '*',
            component: NotFound
        },
    ]
})
