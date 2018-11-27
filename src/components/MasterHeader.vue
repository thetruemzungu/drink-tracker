<template>
  <div class="MasterHeader" id="app">
    <img alt="Vue logo" src="../assets/images/cfbr_logo.jpg">
    
    <hr>
    <h1>{{ msg }}</h1>
    <br />
  </div>
</template>

<script>

export default {
  name: 'MasterHeader',
  props: {
    msg: String
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
