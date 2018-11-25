<template>
<div class="container">
  {{this.$session.get('drink')}}
</div>
</template>

<script>
export default {
  name: 'DrinkList',
  props: {
    customersData: Array
  },
  methods:{
  }
}
</script>
<style scoped>
</style>
