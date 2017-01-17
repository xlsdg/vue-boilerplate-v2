import Vue from 'vue';

import VueX from 'vuex';
Vue.use(VueX);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {initRouter} from './router';
initRouter(VueRouter);
