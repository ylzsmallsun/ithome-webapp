<template>
  <div class="quanziPage">
    <x-header :left-options="{showBack: false}" :right-options="{showMore: true}">圈子</x-header>
    <div class="topicListContainer">
      <tie-item v-for="topic in topic_list" :key="topic.id" :topic="topic">
      </tie-item>
    </div>
    <tabbar>
      <tabbar-item show-dot @on-item-click="goToHomePage(0)">
        <img slot="icon" src="../../assets/news-active.png">
        <span slot="label">资讯</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../assets/quanzi-active.png">
        <span slot="label">圈子</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import TieItem from './TieItem'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      topic: {
        headerImg: 'https://avatar.ithome.com/avatars/001/51/03/22_60.jpg',
        tieOwner: '长沙地铁',
        category: '畅谈',
        commentCount: 666
      }
    }
  },
  computed: {
    ...mapGetters([
      'topic_list'
    ])
  },
  components: {
    TieItem
  },
  mounted () {
    console.log('getting topic list...')
    this.$store.dispatch('getTopicList')
  },
  methods: {
    goToHomePage (tabbarIndex) {
      this.$store.dispatch('updateTabbarIndex', {tabbarIndex: tabbarIndex})
    }
  }
}
</script>

<style lang="less" scoped>
.topicListContainer {
  padding: 0 1rem;
}
</style>
