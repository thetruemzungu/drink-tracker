<template>
  <div class="CustomerSelect" id="app">
    <img alt="Vue logo" src="../assets/images/cfbr_logo.jpg">
    
    <hr>
    <h1>Who are you?</h1>
    <CustomerList :customersData=customers()></CustomerList>
  </div>
</template>

<script>
import CustomerList from '../components/CustomerList.vue'

export default {
  name: 'CustomerSelect',
  props: {
    msg: String
  },
  components: {
    CustomerList
  },
  methods:{
    customers: () => {
      return [{name: 'John Snow', quantity: 2},{name: 'Ethan Latimer', quantity: 4},{name: 'Kirito', quantity: 5},{name: 'Mega Man', quantity: 1},{name: 'Laila', quantity: 3}]
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
