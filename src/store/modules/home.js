/**
 * Created by smallsun on 2018-10-10
 */
import axiosService from '../axiosService/axiosurlService'
import * as TYPES from '../type'

const state = {
  author: 'smallsun',
  swiper_list: [{
    url: 'javascript:',
    img: 'https://k.sinaimg.cn/n/tech/transform/310/w710h400/20181010/nM5Q-hkrzyan5374492.jpg/w710h340z1l1t1bf9.jpg',
    title: '深击|多元化能否拯救锤子？'
  }, {
    url: 'javascript:',
    img: 'https://img.ithome.com/newsuploadfiles/focus/0893a8f8-6d65-443d-99a3-78c47e361b00.jpg',
    title: '谷歌Pixel 3/3 XL正式发布'
  }, {
    url: 'javascript:',
    img: 'https://img.ithome.com/newsuploadfiles/focus/7e81bf56-3530-4437-a2d5-ea631a73908a.jpg',
    title: '五款手游车轮战'
  }],
  news_list: [],
  tabIndex: 0
}

const getters = {
  swiper_list: state => state.swiper_list,
  news_list: state => state.news_list
}

const actions = {
  getNewsList ({commit}) {
    axiosService.getNewsList().then((res) => {
      // console.log(res.data.Result)
      let list = res.data.Result.map(obj => {
        return {
          src: obj.image,
          title: obj.title,
          desc: obj.description,
          url: obj.url
        }
      })
      console.log(list)
      commit(TYPES.HOME_NEWS_LIST, list)
    })
  },
  getUserList () {
    axiosService.getlistService().then((res) => {
      console.log(res.data)
      this.userList = res.data.userList
    })
  }
}

const mutations = {
  [TYPES.HOME_NEWS_LIST] (state, data) {
    state.news_list = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
