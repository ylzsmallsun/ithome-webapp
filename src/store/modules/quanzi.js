/**
 * Created by smallsun on 2018-10-10
 */
import axiosService from '../axiosService/axiosurlService'
import * as TYPES from '../type'

const state = {
  author: 'smallsun',
  topic_list: []
}

const getters = {
  topic_list: state => state.topic_list
}

const actions = {
  getTopicList ({commit}) {
    axiosService.getTopicList().then((res) => {
      // console.log(res.data.Result)
      let list = res.data.Result.map(obj => {
        return {
          id: obj.Id,
          headerImg: obj.HeadImg,
          tieOwner: obj.Un,
          category: obj.Cn,
          tipName: obj.C,
          title: obj.T,
          postTime: obj.PostDateStr,
          lastCommentName: obj.Rn,
          lastCommentTime: obj.LastCommentDateStr,
          commentCount: obj.Rc
        }
      })
      console.log(list)
      commit(TYPES.QUANZI_TOPIC_LIST, list)
    })
  }
}

const mutations = {
  [TYPES.QUANZI_TOPIC_LIST] (state, data) {
    state.topic_list = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
