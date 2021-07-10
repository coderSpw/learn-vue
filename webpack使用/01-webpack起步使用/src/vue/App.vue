<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from './Cpn';

  export default {
    name: "App",
    data() {
      return {
        message: 'vue use webpack'
      }
    },
    components: {
      Cpn
    }
  }
</script>

<style scoped>
  .title {
    color: black;
  }
</style>