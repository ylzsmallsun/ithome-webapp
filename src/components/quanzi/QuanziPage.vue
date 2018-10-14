<template>
  <div class="quanziPage">
    <div class="topicListContainer">
      <tie-item v-for="topic in topic_list" :key="topic.id" :topic="topic">
      </tie-item>
    </div>
    <my-tabbar></my-tabbar>
  </div>
</template>
<script>
import TieItem from './TieItem'
import MyTabbar from '../MyTabbar'
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
    TieItem,
    MyTabbar
  },
  mounted () {
    console.log('getting topic list...')
    this.$store.dispatch('getTopicList')
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.topicListContainer {
  padding: 0 1rem;
}
</style>
