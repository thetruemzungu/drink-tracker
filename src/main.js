import Vue from 'vue'
import VueSession from 'vue-session'

import Home from './App.vue'
import CustomerList from './page/CustomerSelect.vue'
import './assets/css/bootstrap.min.css'

Vue.use(VueSession)

const NotFound = { template: '<p>NOT FOUND</p>' }

//filters
Vue.filter('money', (value) => {
  return '$'+value.toFixed(2)
})

const routes = {
  '/': Home,
  '/customerList': CustomerList
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
