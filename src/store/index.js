import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import DrinkService from '../service/api/drink.service'
import CustomerService from '../service/api/customer.service'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    drinks:  [],
    customers: [],
    order:{selectedDrink:'', selectedCustomer:''}
  },
  getters: {
    drinks(state) {
      return JSON.parse(JSON.stringify(state.drinks))
    },
    customers(state) {
      return JSON.parse(JSON.stringify(state.customers))
    }
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
    },
    SET_DRINKS(state, payload) {
      state.drinks = payload
    },
    SET_CUSTOMERS(state, payload) {
      state.customers = payload
    }
  },
  actions:{
    retrieveCustomers: async ({ commit }) => {
      let customers = []
      const customerService = new CustomerService()
      let response = await customerService.fetchCustomers()

      response.data.records.forEach(customer => {
        customers.push(customer.fields)
      })
      commit('SET_CUSTOMERS', customers)
    },
    retrieveDrinks: async ({ commit }) => {
      let drinks = []
      const drinkService = new DrinkService()
      let response = await drinkService.fetchDrinks()
      response.data.records.forEach(drink => {
        drinks.push(drink.fields)
      });
      commit('SET_DRINKS', drinks)
    }
  }
})