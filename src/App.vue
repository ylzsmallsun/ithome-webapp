<template>
  <div id="app">
    <x-header :left-options="{showBack: false}" :right-options="{showMore: true}">
      {{pageHeaderTitle}}
    </x-header>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'pageHeaderTitle'
    ])
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @themeColor1:  #d22222;

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
    background-color: @themeColor1 !important;
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
  .weui-media-box__hd {
    width: 118px !important;
    height: 90px !important;
  }

  .homePage, .quanziPage{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .newsList, .topicListContainer {
    flex: 1;
    margin-bottom: 100px;
    overflow: scroll !important;
  }
  .weui-tabbar__item.weui-bar__item_on {
    .weui-tabbar__label {
      color: @themeColor1 !important;
    }
  }

</style>
