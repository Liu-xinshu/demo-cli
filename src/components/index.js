import Vue from "vue";

// 组件白名单 名单内组件全局挂载
const COMPONENT_WHITE_LIST = [];

// 引入全部组件 并且筛选过滤 在白名单内的组件将 全局挂载
const files = require.context("./", true, /.vue$/);
const components = COMPONENT_WHITE_LIST.reduce((prev, cur) => {
  let path = null;
  if (
    files.keys().some((item) => {
      if (item.indexOf(cur) > -1) {
        path = item;
        return true;
      }
    })
  ) {
    return prev.concat(files(path).default);
  }
  return prev;
}, []);

components.forEach((item) => Vue.component(item.name, item));
