import Vue from 'vue'
import App from './App.vue'
import router from './router'




// 警告提示
// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
