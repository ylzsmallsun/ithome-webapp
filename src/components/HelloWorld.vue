<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>User List</h2>
    <ul>
      <li v-for="user in userList" :key="user.name">
        {{ `${user.name}:  ${user.age}` }}
      </li>
    </ul>
  </div>
</template>

<script>
import axiosService from '../axiosService/axiosurlService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userList: []
    }
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
</style>
