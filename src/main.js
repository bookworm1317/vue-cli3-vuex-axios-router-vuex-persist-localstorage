import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入vant组件库
import '@/plugins/vant.js'

//引入适配js
import './utils/rem.js'

//验证是否登录
import './utils/common/permission.js'

Vue.config.productionTip = false

//引入vant样式
import 'vant/lib/index.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
