<template>
<div class="container">
  {{drinkData}}
  <div v-for="drink in drinkData">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm">
        <div class="button">
          drink.name
        </div>
      </div>
      <div class="col-sm price">
        drink.price
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DrinkList',
  props: {
    drinkData: Object
  }
}
</script>
<style scoped>
  .price{
    font-size: 2em;
    text-align: center;
    margin:auto;
  }
  .structure{
    border-radius: 25px;
    margin: .5em;
  }
  .button{
    border-radius: 25px;
    font-size: 1.5em;
    color: #E1F2FE;
    margin: 0 auto;
    width: 50%;
    background-color: #2B4162;
    padding: .75em;
  }
</style>
