import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    drinks:  [{name: 'Kill Cliff', price: 2.00},{name: 'O2', price: 2.25},{name: 'StarBucks', price: 2.50},{name: 'Red Bull', price: 2.75},{name: 'Coke Zero', price: 3.00}],
    customers: [{firstName: 'ethan', middleName: 'thomas', lastName: 'latimer', initials: 'etl'}],
    order:{selectedDrink:'', selectedCustomer:''}
  },
  mutations:{
    addNewDrink(state, drink) {
      state.drinks.push(drink)
    },
    addCustomer(state, customer) {
      state.customers.push(customer)
    },
    updateOrder(state, order){
      state.order = order
    }
  },
})