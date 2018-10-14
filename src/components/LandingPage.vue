<template>
  <div class="homePage">
    <swiper :list="swiper_list" auto height="180px"></swiper>
    <panel class="newsList" :list="news_list"></panel>
    <my-tabbar></my-tabbar>
  </div>
</template>

<script>
import { Swiper, Panel } from 'vux'
import MyTabbar from './MyTabbar'
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
      'swiper_list',
      'news_list'
    ])
  },
  components: {
    Swiper,
    Panel,
    MyTabbar
  },
  mounted () {
    console.log('getting list...')
    // send request
    this.$store.dispatch('getNewsList')
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
</style>
