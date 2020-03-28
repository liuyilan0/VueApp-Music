import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import fastclick from 'fastclick'

fastclick.attach(document.body)

Vue.config.productionTip = false

import 'assets/stylus/index.styl'

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
