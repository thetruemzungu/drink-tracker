<template>
  <div class="WelcomePage">
    <hr>
    <h1>{{ msg }}</h1>
    <DrinkList drinkList=drinks />
  </div>
</template>

<script>
import DrinkList from '../components/DrinkList.vue'

export default {
  name: 'WelcomePage',
  props: {
    msg: String
  },
  components: {
    DrinkList
  },
  methods:{
    drinks: () =>{
      return [{
        name: "Kill Cliff",
        price: 2.00
      },
      {
        name: "O2",
        price: 2.25
      }]
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
</style>
