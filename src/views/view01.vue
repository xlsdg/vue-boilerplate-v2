<template>
  <LytMain class="view">
    <p>This is View 01!</p>
    <router-link to="/view02">Go to View02</router-link>
  </LytMain>
</template>

<script type="text/babel">
  export default {
    name: 'view01',
    components: {
      LytMain: require('../components/layout/main')
    },
    props: {
    },
    data() {
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
  .view {
    text-align: center;
  }
</style>
