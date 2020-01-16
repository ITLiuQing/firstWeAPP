import Vue from 'vue'
import App from './index'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()


// 导出一个页面级别的配置，因为小程序的每个页面都可以有一些单独的配置
// // config 注意，页面级可配置属性相当于只是`src/main.js`中配置里的`window`部分
export default {
  config: {
    navigationBarTitleText:'文章列表页面'
  }
}
