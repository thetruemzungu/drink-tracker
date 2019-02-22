<template>
  <div class="WelcomePage">
    <MasterHeader msg="Want to get a drink?"></MasterHeader>
    <DrinkList :drinksData=drinks()></DrinkList>
  </div>
</template>

<script>
import DrinkList from '../components/DrinkList.vue'
import MasterHeader from '../components/MasterHeader.vue'

export default {
  name: 'WelcomePage',
  props: {
    msg: String
  },
  components: {
    DrinkList,
    MasterHeader
  },
  methods:{
    drinks: () => {
      return [{name: 'Kill Cliff', price: 2.00},{name: 'O2', price: 2.25},{name: 'StarBucks', price: 2.50},{name: 'Red Bull', price: 2.75},{name: 'Coke Zero', price: 3.00}]
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
