import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ECharts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts // echarts加入原型

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
