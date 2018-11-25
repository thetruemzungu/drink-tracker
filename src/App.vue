<template>
  <div id="app">
    <img alt="CFBR Logo" src="./assets/images/cfbr_logo.jpg">
    <WelcomePage msg="Wanna get a drink?"/>
  </div>
</template>

<script>
import WelcomePage from './page/WelcomePage.vue'

export default {
  name: 'app',
  components: {
    WelcomePage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
