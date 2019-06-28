<template>
  <div class="CustomerSelect" id="app">
    <MasterHeader msg="Who are you?"></MasterHeader>
    <CustomerList></CustomerList>
  </div>
</template>

<script>
import CustomerList from '../components/CustomerList.vue'
import MasterHeader from '../components/MasterHeader.vue'

export default {
  name: 'CustomerSelect',
  components: {
    CustomerList,
    MasterHeader
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
