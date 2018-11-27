<template>
<div class="container">
   <div v-for="customer in customersData" :key="customer.name">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <button class="button" v-on:click="chooseCustomer(customer)">
          {{customer.name}}
        </button>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
      <button class="addButton" v-on:click="addCustomer(customer)">- Add New Customer -</button>
    </div>
    <div class="col-sm-3"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DrinkList',
  props: {
    customersData: Array
  },
  methods:{
    chooseCustomer: () => {
      this.$session.set(customer, customer)
      window.location.href = '/checkout'
    },
    addCustomer: () => {
      window.alert("TBD: Add Customer");
    }
  }
}
</script>

<style scoped>
.price{
    font-size: 2em;
    text-align: left;
    padding: 1% 0;
  }
  .button{
    border-radius: 10px;
    font-size: 1.5em;
    color: #E1F2FE;
    margin: 0 auto .5em;
    background-color: #2B4162;
    padding: .75em;
    text-align: left;
    width: 100%;
  }
  .addButton{
    border-radius: 10px;
    font-size: 1.5em;
    color: #E1F2FE;
    margin: 0 auto .5em;
    background-color: #2B4162;
    padding: .75em;
    text-align: center;
    width: 100%;
  }
</style>
