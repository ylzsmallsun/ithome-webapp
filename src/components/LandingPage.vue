<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>User List</h2>
    <ul>
      <li v-for="user in userList" :key="user.name">
        {{ `${user.name}:  ${user.age}` }}
      </li>
    </ul>
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
import { Tabbar, TabbarItem } from 'vux'
import axiosService from '../axiosService/axiosurlService'
export default {
  name: 'LandingPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userList: []
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  mounted () {
    console.log('getting list...')
    axiosService.getlistService().then((res) => {
      console.log(res.data)
      this.userList = res.data.userList
    })
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
