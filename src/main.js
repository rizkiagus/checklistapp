import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import cookie from "./plugins/cookie";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  cookie,
  render: (h) => h(App),
}).$mount("#app");
