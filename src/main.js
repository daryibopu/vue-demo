// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 导入APP.vue，主实例文件
import router from './router' // 路由
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import store from './store/' //vuex传递变量

Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App } // 导入的App
})
