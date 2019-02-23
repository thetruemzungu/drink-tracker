<template>
  <div class="WelcomePage">
    <MasterHeader msg="Want to get a drink?"></MasterHeader>
    <DrinkList></DrinkList>
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
