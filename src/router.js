import Vue from 'vue';

import App from './app.vue';

let app = null;
let router = null;

function initRouter(VueRouter) {
  const Index = r => require.ensure([],
    () => r(require('./views/index.vue')), 'index');
  const View01 = r => require.ensure([],
    () => r(require('./views/view01.vue')), 'view01');
  const View02 = r => require.ensure([],
    () => r(require('./views/view02.vue')), 'view02');

  const routes = [{
    name: 'index',
    path: '/',
    component: Index,
    meta: {}
  }, {
    name: 'view01',
    path: '/view01',
    component: View01,
    meta: {}
  }, {
    name: 'view02',
    path: '/view02',
    component: View02,
    meta: {}
  }];

  router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes,
    scrollBehavior(to, from, savedPosition) {
      return savedPosition || {
        x: 0,
        y: 0
      };
    }
  });

  app = new Vue({
    router,
    ...App
  }).$mount('#app');

  return {
    app,
    router
  };
}

export {
  app,
  router,
  initRouter
};
