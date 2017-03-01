import Vue from 'vue'
import App from './App.vue'
Vue.use(require('vue-resource'))

if (process.env.NODE_ENV === 'production') {
  Vue.config.silent = true
  Vue.config.devtools = false
  Vue.http.options.root = require('./config').APIRoot
} else {
  Vue.http.options.root = 'http://localhost:8888'
}

require('./css/page.css')

import router from './router'
import store from './store'
store.commit('syncRouter', router)  // 把router同步到vuex中

Vue.filter('converter', function (value, before, after) {
  if(value == before)
    return after
  return value
})

new Vue({
  router,
  store,
  el: '#main',
  render: h => h(App)
})

require('./js/page.js')
if (process.env.NODE_ENV === 'production'){
  // 生产环境引入百度统计
  require('./js/hm.js')
}

