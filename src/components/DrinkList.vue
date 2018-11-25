<template>
<div class="container">
  <div v-for="drink in drinksData" :key="drink.name">
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-3">
        <button class="button" v-on:click="chooseDrink(drink)">
          {{drink.name}}
        </button>
      </div>
      <div class="col-sm-3 price">
        cost: {{drink.price | money }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DrinkList',
  props: {
    drinksData: Array
  },
  created() {
    this.$session.destroy()
    this.$session.start()
  },
  methods:{
    chooseDrink: function(drink) {
      this.$session.set("drink", drink)
      window.location.href = '/customerList'
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
