<template>
  <div>
    <tabbar v-model="tabbarIndex">
      <tabbar-item @on-item-click="switchTabbarItem(0)">
        <img slot="icon" src="../assets/news.png">
        <img slot="icon-active" src="../assets/news-active.png">
        <span slot="label">资讯</span>
      </tabbar-item>
      <tabbar-item  @on-item-click="switchTabbarItem(1)">
        <img slot="icon" src="../assets/quanzi.png">
        <img slot="icon-active" src="../assets/quanzi-active.png">
        <span slot="label">圈子</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabbarIndex: this.$store.state.Common.tabbarIndex
    }
  },
  methods: {
    switchTabbarItem (tabbarIndex) {
      this.$store.dispatch('updateTabbarIndex', {tabbarIndex: tabbarIndex})
      let pageTitle
      if (tabbarIndex === 1) {
        pageTitle = '圈子'
      } else {
        pageTitle = 'IT之家' 
      }
      this.$store.dispatch('updatePageHeaderTitle', {pageTitle: pageTitle})
    }
  }
}
</script>
<style lang="less" scoped>
.weui-tabbar {
  background: #ffffff;
}
</style>
