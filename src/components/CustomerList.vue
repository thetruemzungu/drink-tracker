<template>
<div class="container">
   <div v-for="customer in customers" :key="customer.name">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <button class="button" v-on:click="chooseCustomer(customer)">
          {{customer.firstName}} {{customer.lastName}}
        </button>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
       <button
      type="button"
      class="addButton"
      @click="showModal"
    >
     -- Add Customer --
    </button>

    <addCustomerModal
      v-show="isModalVisible"
      @close="closeModal"
    />
    </div>
    <div class="col-sm-3"></div>
  </div>
</div>
</template>

<script>
import addCustomerModal from '../modal/AddCustomerModal.vue'

export default {
  name: 'DrinkList',
  components: {
    addCustomerModal
  },
  data() {
    return {
      isModalVisible: false,
    }
  },
  computed: {
    customers() {
      return this.$store.state.customers
    }
  },
  methods:{
    chooseCustomer: function(customer) {
      this.$session.set("customer", customer)
      this.$router.push('/checkout')
    },
    
    showModal() {
        this.isModalVisible = true;
      },
    closeModal() {
      this.isModalVisible = false;
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
    text-transform: capitalize;
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
