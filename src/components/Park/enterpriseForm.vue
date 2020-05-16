<template>
  <div class="enterpriseFrom">
    <!--弹窗-->
    <div id="test">
      <div class="form">
        <div class="clearfix">
          <div class="dis-fl">
            <span>入驻类型</span>
            <div class="fles-1">
              <span :class="{ radio_active: type == 0 }" class="radio_item" @click="tabType(0)">新设</span>
              <span :class="{ radio_active: type == 1 }" class="radio_item" @click="tabType(1)">迁址</span>
            </div>
          </div>
          <div class="dis-fl">
            <span>基金种类</span>
            <div class="fles-1">
              <span
                :class="{ radio_active: fund_type == 0 }"
                class="radio_item"
                @click="tabFund_type(0)"
              >私募创业</span>
              <span
                :class="{ radio_active: fund_type == 1 }"
                class="radio_item"
                @click="tabFund_type(1)"
              >私募证券</span>
              <span
                :class="{ radio_active: fund_type == 2 }"
                class="radio_item"
                @click="tabFund_type(2)"
              >股权投资</span>
              <span
                :class="{ radio_active: fund_type == 3 }"
                class="radio_item"
                @click="tabFund_type(3)"
              >其他种类</span>
            </div>
          </div>
          <div class="dis-fl">
            <span>企业名称</span>
            <input type="text" placeholder="请输入公司名称" class v-model.trim="userinfo.company" />
          </div>
          <div class="dis-fl">
            <span>联系姓名</span>
            <input type="text" placeholder="请输入联系人姓名" class v-model.trim="userinfo.name" />
          </div>
          <div class="dis-fl">
            <span>手机号码</span>
            <input type="text" placeholder="请添加手机号码" class v-model.trim="userinfo.mobile" />
          </div>
          <div class="dis-fl">
            <span>回执邮箱</span>
            <input type="text" placeholder="请添加回执邮箱" class v-model.trim="userinfo.email" />
          </div>
        </div>
        <div class="tac">
          <button type="button" class="lay_btn" @click="signUp()" :disabled="disable">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import { getCookie } from "@/assets/commonjs/util.js";
export default {
  data() {
    return {
      disable: false,
      writeName: "请填写正确姓名",
      writeCompany: "请填写单位，单位名称不得大于20个字",
      writeContact: "请填写手机或邮箱",
      writeDemand: "请填写预定需求，预定需求不得大于800个字",
      success: false,

      url: window.location.href,
      userinfo: {
        //用户信息
        company: "",
        name: "",
        mobile: "",
        email: ""
      },
      companyError: false, //企业名称错误
      nameError: false, //姓名错误
      emailError: false, //邮箱错误
      telError: false, //手机号错误
      disable: false,
      type: 0,
      fund_type: 0
    };
  },
  methods: {
    tabType(num) {
      //入驻类型单选
      this.type = num;
    },
    tabFund_type(num) {
      //基金种类单选
      this.fund_type = num;
    },
    signUp() {
      this.emailError =
        this.userinfo.email.length > 0 ||
        /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userinfo.email)
          ? false
          : true;
      if (this.emailError) {
        this.$layer.msg("请输入正确的邮箱");
      }
      this.telError =
        this.userinfo.mobile.length == 11 &&
        /^1[34578]\d{9}$/.test(this.userinfo.mobile)
          ? false
          : true;
      if (this.telError) {
        this.$layer.msg("请输入正确的电话");
      }
      this.nameError =
        this.userinfo.name.length > 0 &&
        /^[\u4E00-\u9FA5A-Za-z]{1,10}$/.test(this.userinfo.name)
          ? false
          : true;
      if (this.nameError) {
        this.$layer.msg("请输入正确的姓名");
      }
      this.companyError =
        this.userinfo.company.length > 0 &&
        /^[\u4e00-\u9fa5A-Za-z]{1,20}$/.test(this.userinfo.company)
          ? false
          : true;
      if (this.companyError) {
        this.$layer.msg("请输入正确的公司名称，公司名称不得大于20字");
      }
      if (!this.emailError && !this.telError && !this.nameError) {
        this.disable = true;
        const params = {
		  APF_UID: getCookie('APF_UID'),
          typeOfEntity: this.type,
          fundType: this.fund_type,
          company: this.userinfo.company,
          contactPerson: this.userinfo.name,
          mobile: this.userinfo.mobile,
          email: this.userinfo.email
        };
        this.$axios
          .post(
            this.$root.urlPath.NEW + "/wap/company/settledIn/application",
            qs.stringify(params),
            {
              headers: {
                "Content-Type":
				  "application/x-www-form-urlencoded; charset=UTF-8",
		  		APF_UID: getCookie('APF_UID')
              }
            }
          )
          .then(res => {
            if (res.data.success) {
			  this.$layer.msg("恭喜您提交成功！")
			  this.$layer.closeAll();
			  var self = this;
			  window.setTimeout(function() {
				self.$layer.closeAll();
			  }, 2000)
            } else {
			  this.$layer.msg(res.data.errMsg);
			  var self = this;
			  window.setTimeout(function() {
				self.$layer.closeAll();
			  }, 2000)
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style>
.layui-layer-title {
  font-size: 18px !important;
}
.vl-notify.vl-notify-main {
  border-radius: 20px;
  border: 0;
}
.vl-notify.vl-notify-alert h2.vl-notice-title {
  height: 80px;
  background-image: linear-gradient(-90deg, #00c0d1 0%, #1e27e5 100%),
    linear-gradient(#292933, #292933);
  font-size: 24px;
  color: #fff;
  line-height: 80px;
  border-radius: 20px 20px 0 0;
}
.vl-notify.vl-notify-alert h2.vl-notice-title .icon-remove {
  right: 30px;
  font-size: 24px;
  color: #fff;
}

.enterpriseFrom .form input {
  width: 75%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 15px;
  margin-left: 20px;
  border: none;
}

.vl-notify .vl-notify-content {
  padding: 0 25px;
}
/* form */
.enterpriseFrom .form .active {
  color: #fff;
  background-color: #00a0e9;
  border: solid 1px #00a0e9;
}

.enterpriseFrom .img-w20 {
  width: 0.2rem;
  margin-right: 0.07rem;
  margin-top: -0.01rem;
}

.enterpriseFrom {
  background-color: #fff;
}

.enterpriseFrom .content {
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px #b5b5b5;
  border-radius: 0.1rem;
  padding-bottom: 0.72rem;
}

.enterpriseFrom .content .title {
  width: 100%;
  background-image: linear-gradient(-90deg, #00c0d1 0%, #1e27e5 100%),
    linear-gradient(#292933, #292933);
  font-size: 0.16rem;
  color: #fff;
  padding: 0.087rem 0.13rem;
  border-radius: 0.1rem 0.1rem 0 0;
}

.enterpriseFrom .content .form {
  padding: 0 0.22rem;
  margin-bottom: 0.48rem;
}

.enterpriseFrom .form .dis-fl {
  display: flex;
  padding: 15px 0;
  font-size: 24px;
  color: #333;
  border-bottom: 1px solid #c1c1c1;
}

.enterpriseFrom .form .fles-1 {
  margin-left: 24px;
  flex: 1;
}

.enterpriseFrom .form .radio_item {
  padding: 0 10px;
  border-radius: 5px;
  border: solid 1px #a0a0a0;
  color: #a0a0a0;
  font-size: 20px;
  margin-right: 6px;
  cursor: pointer;
}

.enterpriseFrom .form .radio_active {
  border: solid 1px #00a0e9;
  color: #09a2e9;
}

.enterpriseFrom .form .dis-fl input[type="text"] {
  flex: 1;
  margin-left: 23px;
  border: none;
  font-size: 18px;
  color: #aaa;
}

.enterpriseFrom .form .dis-fl input::-webkit-input-placeholder {
  color: #aaa;
}

.enterpriseFrom .form .dis-fl input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #aaa;
}

.enterpriseFrom .form .dis-fl input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #aaa;
}

.enterpriseFrom .form .dis-fl input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #aaa;
}
.enterpriseFrom .form .lay_btn {
  width: 300px;
  height: 46px;
  background-image: linear-gradient(90deg, #00c6ff 0%, #00a0e9 100%),
    linear-gradient(#f39800, #f39800);
  border-radius: 5px;
  font-size: 24px;
  color: #fff;
  border: none;
  margin: 40px 0;
}
.enterpriseFrom .form .err {
  padding-left: 25%;
}
</style>