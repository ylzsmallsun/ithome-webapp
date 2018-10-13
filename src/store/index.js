import Vue from 'vue'
import Vuex from 'vuex'
import Common from './modules/common'
import Home from './modules/home'
import Quanzi from './modules/quanzi'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  modules: {
    Home,
    Common,
    Quanzi
  }
})

export default store
