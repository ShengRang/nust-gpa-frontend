import Vue from 'vue'
import App from './App.vue'

if (process.env.NODE_ENV === 'production') {
  Vue.config.silent = true
  Vue.config.devtools = false
}

require('./css/page.css')

new Vue({
  el: '#main',
  render: h => h(App)
})

require('./js/page.js')
if (process.env.NODE_ENV === 'production'){
  // 生产环境引入百度统计
  require('./js/hm.js')
}

