import Vue from 'vue';

import App from './app.vue';

function initRouter(VueRouter) {
  const Index = resolve => require(['./views/index.vue'], resolve);
  const View01 = resolve => require(['./views/view01.vue'], resolve);
  const View02 = resolve => require(['./views/view02.vue'], resolve);

  const routes = [{
    name: 'index',
    path: '/',
    component: Index
  }, {
    name: 'view01',
    path: '/view01',
    component: View01
  }, {
    name: 'view02',
    path: '/view02',
    component: View02
  }];

  const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
  });

  new Vue(Vue.util.extend({
    router
  }, App)).$mount('#app');

  return router;
}

export {
  initRouter as init
};

