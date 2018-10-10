<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html, body {
    height: 100%;
    max-width: 414px;
    margin: 0 auto;
    /* background-color:*/
  }
  #app {
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .vux-header {
    background-color: #d22222 !important;
    .vux-header-more,
    .vux-header-back,
    .vux-header-left,
    .vux-header-right {
      color: #fff !important;
    }

    .left-arrow:after,
    .left-arrow:before {
      color: #fff !important;
      border-color: #fff !important;
    }
  }
</style>
