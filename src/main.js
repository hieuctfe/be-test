import Vue from "vue";
import App from "./App.vue";
import SvgIcon from "./common/SvgIcon";

import "./style/_style.scss";
Vue.component("SvgIcon", SvgIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
