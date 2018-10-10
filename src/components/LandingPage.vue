<template>
  <div class="homePage">
    <x-header :left-options="{showBack: false}" :right-options="{showMore: true}">IT之家</x-header>
    <swiper :list="swiper_list" auto height="180px"></swiper>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/news-active.png">
        <span slot="label">资讯</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/quanzi-active.png">
        <span slot="label">圈子</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Swiper, Tabbar, TabbarItem } from 'vux'
import { mapGetters } from 'vuex'

export default {
  name: 'LandingPage',
  data () {
    return {
      msg: 'Welcome to IT home App'
      // swiper_list: []
    }
  },
  computed: {
    ...mapGetters([
      'swiper_list'
    ])
  },
  components: {
    Tabbar,
    TabbarItem,
    Swiper
  },
  mounted () {
    console.log('getting list...')
    // send request
    this.$store.dispatch('getUserList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.weui-tabbar {
  background: #ffffff;
}
</style>
