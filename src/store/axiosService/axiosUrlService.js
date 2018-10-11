
import axiosService from './axiosService'
export default {
  getNewsList: function (param) {
    return axiosService().getUrl('/api/getNewsList', param)
  },
  getlistService: function (param) {
    return axiosService().getUrl('/getlist', param)
  }
}
