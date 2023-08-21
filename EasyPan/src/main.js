import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";
//引入cookies
import VueCookies from "vue-cookies";
//引入element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//图标 图标在附件中
import "@/assets/icon/iconfont.css";
import "@/assets/base.scss";

import Request from "@/utils/Request";
import Message from "@/utils/Message";
import Verify from "@/utils/Verify";
import Utils from "@/utils/Utils";

//自定义组件
import Dialog from "@/components/Dialog.vue";
import Avatar from "@/components/Avatar.vue";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);

app.component("Dialog", Dialog);
app.component("Avatar", Avatar);

//配置全局变量
app.config.globalProperties.Request = Request;
app.config.globalProperties.Message = Message;
app.config.globalProperties.Verify = Verify;
app.config.globalProperties.Utils = Utils;

app.config.globalProperties.VueCookies = VueCookies;
app.config.globalProperties.globalInfo = {
  avatarUrl: "/api/getAvatar/",
  imageUrl: "/api/file/getImage/",
};
app.mount("#app");
