<template>
  <router-view></router-view>
</template>

<script type="text/babel">
  import 'flex.css';

  export default {
    name: 'app',
    components: {
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

<style lang="less">
  .fn-clear {
    *zoom: 1;
  }

  .fn-clear:before,
  .fn-clear:after {
    content: '';
    display: table;
  }

  .fn-clear:after {
    clear: both;
  }

  .fn-left {
    float: left;
  }

  .fn-right {
    float: right;
  }

  .fn-hide {
    display: none;
  }

  .fn-show {
    display: block;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }


  .text-right {
    text-align: right;
  }

  *, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
    -ms-tap-highlight-color: transparent;
    -o-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
  }

  .disabled-select {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .no-appear {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
  }

  body, html, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
  }
</style>
