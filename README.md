# mpVue框架和vant-weapp 组件库 开发小程序

> A Mpvue demo

## 准备工作

node.js、vue-cli 、微信开发者工具、Visual Studio Code编辑器（安装Vetur插件） 必须安装好

## Build Setup

``` bash
# 初始化mpVue框架

在自己想要存放项目的文件夹，打开终端执行以下命令：

vue init mpvue/mpvue-quickstart myproject

一直回车，安装后，进入myproject

cd myproject

# 安装vant-weapp 组件库 

npm i @vant/weapp -S --production

安装后，将node_modules文件夹里面的vant-weapp/dist 的文件都复制到根目录下的static文件夹里面再新建一个vant文件夹，都粘贴进去

# 整理项目文件

1、把eslint关闭，不然会报错，build\webpack.base.conf.js里面的
    rules: [
        // {
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   enforce: 'pre',
        //   include: [resolve('src'), resolve('test')],
        //   options: {
        //     formatter: require('eslint-friendly-formatter')
        //   }
        // },
      注释即可解决报错提示
2、清理不需要的页面，自己创建自己需要的页面
    旧版：一个页面需要两个文件，XXX.vue和main.js即可
    新版：需要三个，XXX.vue、main.js和mian.json
3、页面如何引用vant-weapp组件
    在根目录的app.json文件添加如下
    "usingComponents": {
        "van-button": "../static/vant/button/index"
    },
4、用微信开发者工具导入项目，路径是XXX\dist\wx
    先执行以下npm run build 生成 dist
5、热修改
    npm run dev


# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
