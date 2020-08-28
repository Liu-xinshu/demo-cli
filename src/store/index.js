/*
 * @文件描述:项目公共状态管理 
 * @创建人: 刘新书
 * @创建时间: 2020-08-07 08:24:35
 */

import Vue from 'vue';
import Vuex from 'vuex';
import ModulesAll from './modules';
Vue.use (Vuex);
export default new Vuex.Store ({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ...ModulesAll,
  },
});
