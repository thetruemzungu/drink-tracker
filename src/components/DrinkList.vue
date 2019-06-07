<template>
<div class="container">
  <div v-for="drink in drinks" :key="drink.Name">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-4">
        <button class="button" v-on:click="chooseDrink(drink)">
          {{drink.Name}}
        </button>
      </div>
      <div class="col-sm-3 price">
        cost: {{parseInt(drink.Price) | money }}
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'DrinkList',
  computed:{
    drinks() {
      return this.$store.getters.drinks
    }
  },
  async created() {
    await this.$store.dispatch('retrieveDrinks')
    this.$session.destroy()
    this.$session.start()
  },
  methods: {
    chooseDrink: function(drink) {
      let order = this.$store.state.order
      order.selectedDrink = drink

      this.$store.commit('updateOrder', order)
      this.$router.push('/customer')
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
    border-radius: 25px;
    font-size: 1.5em;
    color: #E1F2FE;
    margin: 0 auto .5em;
    background-color: #2B4162;
    padding: .75em;
    width: 100%;
  }
</style>
