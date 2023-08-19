import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
//图标 图标在附件中
import "@/assets/icon/iconfont.css";
// import "@/assets/base.scss";

const app = createApp(App);
app.use(ElementPlus);

app.use(router);

app.mount("#app");
