require('!style-loader!css-loader!sass-loader!font-awesome/scss/font-awesome.scss');  // get font-awesome

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './config/routes'
import api from './config/api'
import store from './config/store'

Vue.use(VueRouter)
Vue.prototype.$api = api

const router = new VueRouter({ routes })

new Vue({
    el: '#wechat',
    router,
    store,
    render: h => h(App)
})
