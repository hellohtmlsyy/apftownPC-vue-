<template>
  <div>
    <i-header :index="index"></i-header>
    <div class="top_banner">
      <img src="../../../static/img/park/park_banner2.jpg" />
    </div>
    <div class="train_tit">
      <div class="w">
        <div class="train_tab">
          <div class="tabBox dib tabBox_mr">
            <router-link :to="{ path : '/townLodging'}">企业服务</router-link>
          </div>
          <div class="tabBox dib tabBox_active tabBox_mr">
            <router-link class="tab_active" :to="{ path : '/offProperty'}">入驻申请</router-link>
          </div>
          <div class="tabBox dib">
            <router-link :to="{ path : '/visitTown'}">参观小镇</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="off_property">
      <div class="w">
        <div class="off_propertyCon">
          <div class="application">
            <a href="javascript:;" @click="fillIn()">
              <img src="../../../static/img/park/edit.png" />填写入驻申请书
            </a>
          </div>
          <div class="download">
            <a href="javascript:;">
              <img src="../../../static/img/park/download.png" />下载优惠政策
            </a>
          </div>
          <div class="policy">
            <div class="gs">
              <img src="../../../static/img/park/policy_gs.png" alt />
              <p>E登记工商注册</p>
            </div>
            <div class="sw">
              <img src="../../../static/img/park/policy_sw.png" alt />
              <p>税务登记</p>
            </div>
            <div class="zjx">
              <img src="../../../static/img/park/policy_zjx.png" alt />
              <p>中基协备案</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import enterpriseForm from "@/components/Park/enterpriseForm";
import { getCookie } from "@/assets/commonjs/util.js";

export default {
  data() {
    return {
      index: 6,
      lookClassroom: this.$root.urlPath.APF + "/siteReservation#classroom"
    };
  },
  methods: {
    goConsult(path) {
      window.location.href = this.$root.urlPath.APF + path;
    },
    fillIn() {
		console.log(getCookie('APF_UID'))
      if (getCookie("APF_UID")) {
        this.$layer.iframe({
          content: {
            content: enterpriseForm, //传递的组件对象
            parent: this, //当前的vue对象
            data: [] //props
          },
          title: "填写企业入驻申请",
          area: ["640px", "auto"]
        });
      }else {
		  this.$router.push({
			  path:'/login',
			  query: {
				  redirectTo: '/offProperty'
			  }
		  })
	  }
    }
  }
};
</script>

<style scoped>
.ml-10 {
  margin-left: 10px;
}
.mt-40 {
  margin-top: 40px;
}
.col-094 {
  color: #009944;
}
.top_banner {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.top_banner img {
  width: auto;
  margin: 0 50%;
  transform: translateX(-50%);
}
.off_propertyCon {
  margin: 0 12.7%;
  width: 74.6%;
}
.off_propertyCon .application,
.off_propertyCon .download,
.off_propertyCon .policy,
.off_propertyCon .policy div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.off_propertyCon .application {
  background-image: linear-gradient(-90deg, #00c0d1 0%, #1e27e5 100%),
    linear-gradient(#eb6100, #eb6100);
  margin-top: 60px;

  font-size: 40px;
  font-weight: normal;
  color: #fff;
  height: 160px;
}
.off_propertyCon .application img {
  width: 40px;
  height: 40px;
  margin-right: 12px;
}
.off_propertyCon .download {
  margin-top: 36px;
  background-image: linear-gradient(#ffffff, #ffffff),
    linear-gradient(#eb6100, #eb6100);
  border: solid 1px #1e27e5;
  font-size: 30px;
  color: #1d28e5;
  height: 80px;
}
.off_propertyCon .download img {
  width: 26px;
  height: 27px;
  margin-right: 8px;
}
.off_propertyCon .policy {
  height: 160px;
  margin-top: 32px;
}
.off_propertyCon .policy div {
  border-radius: 10px;
  font-size: 30px;
  color: #fff;
  flex: 1;
  height: 160px;
  margin-right: 20px;
  flex-direction: column;
}
.off_propertyCon .policy div img {
  width: 52px;
  margin-bottom: 14px;
}
.off_propertyCon .policy .gs {
  background-color: #458af3;
}
.off_propertyCon .policy .sw {
  background-color: #516feb;
}
.off_propertyCon .policy .zjx {
  background-color: #1e50d1;
  margin-right: 0;
}
</style>
