
import axiosService from './axiosService'
export default {
  getlistService: function (param) {
    return axiosService().getUrl('/getlist', param)
  }
}
