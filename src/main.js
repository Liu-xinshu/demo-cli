import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from "echarts";
import Highchart from "highcharts/highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import HighchartsVue from "highcharts-vue";
import stockInit from "highcharts/modules/stock";
import ElementUI from 'element-ui';
import api from "./api";
import Mixin from "./utils/mixin";
import "./utils/flexible";
import "./assets/css/index.scss";
import Container from "./components/Container/index";
window.$api = api;
window.$bus =  new Vue();
window.$getters = store.getters;
window.$commit = store.commit;
window.$dispatch = store.dispatch;
window.$navTo = (path) => {
  if (!path) throw new Error("path is required");
  if (path === router.currentRoute.path) return;
  router.push(path).catch((err) => {});
};
stockInit(Highchart);
highcharts3d(Highchart);
Vue.use(ElementUI);
Vue.use(HighchartsVue);
Vue.use(Mixin);
Vue.use(Container);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.directive("drag", {
  // 1.指令绑定到元素上回立刻执行bind函数，只执行一次
  // 2.每个函数中第一个参数永远是el，表示绑定指令的元素，el参数是原生js对象
  // 3.通过el.focus()是无法获取焦点的，因为只有插入DOM后才生效
  bind: function (el) {},
  // inserted表示一个元素，插入到DOM中会执行inserted函数，只触发一次
  inserted: function (el) {
    el.onmousedown = function (e) {
      if (el != e.target) {
        return;
      } else {
        if (e.target.nodeName === "IMG") return;
        e.target.style.cursor = "move";
        var disx = e.pageX - el.offsetLeft;
        var disy = e.pageY - el.offsetTop;
        document.onmousemove = function (e) {
          el.style.left = e.pageX - disx + "px";
          el.style.top = e.pageY - disy + "px";
        };
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
          e.target.style.cursor = "default";
        };
      }
    };
  },
  // 当VNode更新的时候会执行updated，可以触发多次
  updated: function (el) {},
});

router.beforeEach ((to, from, next) => {
  next ();
});
router.afterEach((to, from) => {
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
// Freedo.FdCamera.getCurrentCameraInfo(earth._viewer.camera)
