import Vue from 'vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import {init as InitHttp} from './http';
InitHttp();

import VueX from 'vuex';
Vue.use(VueX);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {init as InitRouter} from './router';
InitRouter(VueRouter);
