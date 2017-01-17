<template>
  <div class="layout-main">
    <LytHeader></LytHeader>
    <div class="layout-content">
      <slot></slot>
    </div>
    <LytFooter></LytFooter>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'Layout',
    components: {
      LytHeader: require('./header'),
      LytFooter: require('./footer')
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .layout-main {
    min-height: 100%;
    position: relative;
  }

  .layout-content {
    width: 980px;
    margin: 0 auto;
    padding-bottom: 64px;
  }
</style>
