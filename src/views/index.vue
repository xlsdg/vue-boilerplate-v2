<template>
  <div class="index">
    <Hello></Hello>
    <p>This is Index!</p>
    <router-link to="/view01">Go to View01</router-link>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'index',
    components: {
      Hello: require('../components/hello')
    },
    props: {
    },
    data: () => {
      return {
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

<style lang="less" scoped>
  .index {
    text-align: center;
  }
</style>
