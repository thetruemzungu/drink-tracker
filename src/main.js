import Vue from 'vue'
import VueSession from 'vue-session'
import Vuex from 'vuex'
import store from './store'

import router from './router'
import App from './App.vue'
import './assets/css/bootstrap.min.css'

Vue.use(VueSession, Vuex)

//filters
Vue.filter('money', (value) => {
  return '$'+value.toFixed(2)
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
