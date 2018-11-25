import Vue from 'vue'
import App from './App.vue'
import './assets/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.filter('money', (value) => {
  return '$'+value.toFixed(2)
})

new Vue({
  render: h => h(App),
}).$mount('#app')
