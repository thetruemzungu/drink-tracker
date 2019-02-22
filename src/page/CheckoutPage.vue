<template>
  <div class="CustomerSelect" id="app">
    <MasterHeader msg="Does this look right?"></MasterHeader>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6 receipt">
        
        <div>Customer: {{order.customer.name}}</div>
        <div>Current Drink Tab: x{{order.customer.quantity}}</div>
        <hr>
        <div>Item Picked: {{order.choice.name}}</div>
        <div>Price: {{order.choice.price | money}}</div>
      </div>
      <div class="col-sm-3"></div>
    </div>
    <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
      <button class="addButton" v-on:click="submitOrder(customer)">Submit</button>
    </div>
    <div class="col-sm-3"></div>
  </div>
</div>
</template>

<script>
import MasterHeader from '../components/MasterHeader.vue'

export default {
  name: 'CustomerSelect',
  created() {
    this.getOrder() 
  },
  components: {
    MasterHeader
  },
  // eslint-disable-next-line
  data: {
    return: {
      order: {}
    }
  },
  methods:{
    getOrder: function() {
      this.order = {
      customer: this.$session.get('customer'),
        choice: this.$session.get('drink')
      }
    },
    submitOrder: function() {
      //sends order to api
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
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
.receipt {
  font-size: 1.25em;
  font-weight: bold;
  text-align: left;
  background-color:#f0f0f0;
  border-style: solid;
  padding: 1em .5em 1em .5em;
  border-radius: 15px;
}
.addButton{
    border-radius: 10px;
    font-size: 1.5em;
    color: #E1F2FE;
    margin: 0 auto .5em;
    background-color: #2B4162;
    padding: .75em;
    text-align: center;
    width: 50%;
  }
</style>
