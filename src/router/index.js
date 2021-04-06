import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home'
import exam1 from '@/page/exam1'
import result from '@/page/result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/home',
      component: home // 考试首页
    },
    {
      path: '/exam1',
      component: exam1 // 小学考试
    },
    {
        name: 'Result',
        path: '/result', // 考试结果
        component: result
      }
  ]
})
