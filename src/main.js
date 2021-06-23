import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes/index.js";
import SvgSprite from "vue-svg-sprite";
import './registerServiceWorker'

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.use(VueRouter);
Vue.use(SvgSprite, {
  url: require("@/assets/sprite.svg"),
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
