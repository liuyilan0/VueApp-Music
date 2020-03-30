import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

fastclick.attach(document.body)
Vue.use(VueLazyload, {
  loading: require('assets/images/logo@2x.png')
})

Vue.config.productionTip = false

import 'assets/stylus/index.styl'

new Vue({
  render: h => h(App),
  router: Router,
  store
}).$mount('#app')
