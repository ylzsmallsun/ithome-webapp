// import axiosService from '../axiosService/axiosurlService'
import * as TYPES from '../type'
import VueRouter from '../../router/index.js'

const state = {
  author: 'smallsun',
  pageHeaderTitle: 'IT之家',
  tabbarIndex: 0
}
const getters = {
  pageHeaderTitle: state => state.pageHeaderTitle,
  tabbarIndex: state => state.tabbarIndex
}
const actions = {
  updateTabbarIndex ({ commit }, param) {
    commit(TYPES.UPDATE_TABBAR_INDEX, {
      tabbarIndex: param.tabbarIndex
    })
  },
  updatePageHeaderTitle ({ commit }, param) {
    commit(TYPES.UPDATE_PAGE_TITLE, {
      pageTitle: param.pageTitle
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
  },
  [TYPES.UPDATE_PAGE_TITLE] (state, {pageTitle}) {
    state.pageHeaderTitle = pageTitle
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
