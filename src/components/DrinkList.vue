<template>
<div class="container">
  <div v-for="drink in drinksData" :key="drink.name">
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-3">
        <div class="button">
          {{drink.name}}
        </div>
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
  }
</style>
