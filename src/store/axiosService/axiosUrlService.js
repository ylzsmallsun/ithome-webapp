
import axiosService from './axiosService'

const service = axiosService()
export default {
  getNewsList: function (param) {
    return service.getUrl('/api/getNewsList', param)
  },
  getTopicList: function (param) {
    return service.getUrl('/api/getTopicList', param)
  },
  getlistService: function (param) {
    return service.getUrl('/getlist', param)
  }
}
