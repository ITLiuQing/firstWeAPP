import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()


// 导出一个页面级别的配置，因为小程序的每个页面都可以有一些单独的配置
// // config 注意，页面级可配置属性相当于只是`src/main.js`中配置里的`window`部分
// 这是旧版写法，新版需要创建main.json文件
// export default {
//   config: {
//     navigationBarTitleText:'我是首页',
//   }
// }
