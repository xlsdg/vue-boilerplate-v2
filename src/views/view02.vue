<template>
  <LytMain class="view">
    <p>This is View 02!</p>
    <router-link to="/">Go to Index</router-link>
  </LytMain>
</template>

<script type="text/babel">
  export default {
    name: 'view02',
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
