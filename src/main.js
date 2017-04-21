import Vue from 'vue';
import VueX from 'vuex';
import VueRouter from 'vue-router';
import {initRouter} from './router';

Vue.use(VueX);
Vue.use(VueRouter);

initRouter(VueRouter);
