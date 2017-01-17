<template>
  <div class="hello">
    <img src="../assets/logo.png" alt="">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'hello',
    components: {
    },
    props: {
    },
    data() {
      return {
        msg: 'Hello World!'
      };
    },
    computed: {
    },
    methods: {
    },
    watch: {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello {
    text-align: center;
  }
  h1 {
    color: #42b983;
    text-align: center;
    margin: 0;
  }
</style>
