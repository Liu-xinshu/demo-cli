import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use (VueRouter);

const routes = [
  {
    name:'home',
    path:'/',
    component:()=>import('../views/Home/index.vue')
  },
  {
    path: process.env.VUE_APP_BASEURL,
    redirect: '/',
  },
];
const router = new VueRouter ({
  mode: 'hash',
  routes,
});

export default router;
