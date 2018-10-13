import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import QuanziPage from '@/components/quanzi/QuanziPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/quanzi',
      name: 'QuanziPage',
      component: QuanziPage
    }
  ]
})
