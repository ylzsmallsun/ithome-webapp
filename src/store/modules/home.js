/**
 * Created by smallsun on 2018-10-10
 */
import axiosService from '../axiosService/axiosurlService'

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
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '五款手游车轮战',
    fallbackImg: 'https://img.ithome.com/newsuploadfiles/focus/7e81bf56-3530-4437-a2d5-ea631a73908a.jpg'
  }]
}

const getters = {
  swiper_list: state => state.swiper_list
}

const actions = {
  getUserList () {
    axiosService.getlistService().then((res) => {
      console.log(res.data)
      this.userList = res.data.userList
    })
  }
}

export default {
  state,
  actions,
  getters
}
