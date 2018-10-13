// import axiosService from '../axiosService/axiosurlService'
import * as TYPES from '../type'
import VueRouter from '../../router/index.js'

const state = {
  author: 'smallsun',
  tabbarIndex: 0
}
const getters = {
  tabIndex: state => state.tabbarIndex
}
const actions = {
  updateTabbarIndex ({ commit }, param) {
    commit(TYPES.UPDATE_TABBAR_INDEX, {
      tabbarIndex: param.tabbarIndex
    })
  }
}

const mutations = {
  [TYPES.UPDATE_TABBAR_INDEX] (state, {tabbarIndex}) {
    state.tabbarIndex = tabbarIndex
    if (tabbarIndex === 1) {
      VueRouter.push({
        path: '/quanzi'
      })
    } else {
      VueRouter.push({
        path: '/'
      })
    }
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
