## webpack 和 babel

### 概叙

1、基本配置

2、高级配置

3、性能优化（重点）

* 优化打包效率
* 优化产出代码

4、构建流程概叙

5、babel

<hr/>

### webpack基本串讲

拆分配置

* webpack.common.js 公共配置

  ```javascript
  module.exports = {
      entry: `./src/index.js` // 入口文件
      module: {
        rules: [
          {   // 编译 ES6
              test: /\.js$/, // 验证规则
              loader: ['babel-loader'],
              include: './src' // 需要编译的路径
              exclude: /node_modules/ // 不需要编译的路径
          },
          {   // 编译 css
              test: /\.css$/,
              // loader 的执行顺序是： 从后往前    
              loader: ['style-loader', 'css-loader']
          },
          {
              // css兼容处理
              test: /\.css$/,
              loader: ['style-loader', 'css-loader', 'postcss-loader']    
          },
          {
              // 编译 less （scss 同理）
              test: /\.less$/,
              loader: ['style-loader', 'css-loader', 'less-loader']    
          }
        ]
      },
      plugins:[
          new HtmlWebpackPlugin({
              template: './src/index.html',
              filename: 'index.html'
          })
      ]
  }
  ```
  
  1、编译 ES6 是使用 babel，可以在项目的根目录下创建 `.babelrc`文件，配置编译规则
  
  ```json
  {
      "presets": ["@babel/preset-env"],
      "plugins": []
  }
  ```
  
  > `@babel/preset-env`：包含了常用的 ES6,ES7,ES8常用的语法
  
  2、`postcss-loader`：配置浏览器css兼容性。使用时需要在项目根路径下创建`postcss.config.js`
  
  ```javascript
  module.exports = {
      // 增加从 postcss-loader 插件集合中引入添加css前缀插件
      plugins: [require('autoprefixer')]
  }
  ```
  
  > 需要安装 `autoprefixer`、`postcss-loader`

<br/>

* webpack.dev.js 开发配置

  ```javascript
  const webpackCommonConf = require('./webpack.common.js');
  const { smart } = require('webpack-merge');
  const webpack = require('webpack');
  module.exports = smart(webpackCommonConf, {
     mode: 'development',
     module: {
         rules: [
             {
                 // 开发环境下图片处理：直接引入 图片 url
                 test: /\.(png|jpg|jpeg|gif)$/,
                 use: 'file-loader'
             }
         ]
     },
     plugins: [
         new Webpack.DefinePlugin({
             // 配置 window.ENV = 'development'
             ENV: JSON.stringify('development')
         })
     ],
     devServer: {
         port: 8080, 
         progress: true, // 显示打包的进度
         contentBase: './dist', // 项目根路径
         open: true, // 自动打开浏览器
         compress: true // 自动 gzip 压缩
     }
     proxy: {
       // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
      '/api': 'http://localhost:3000',
       // 将本地 /api2/xxx 代理到 localhost:3000/xxx
      '/api2': {
         target: 'http://localhost:3000',
         pathRewrite: {
             '/api2': ''
         }
       }
     }
  });
  ```

  1、开发环境下启动命令（需要下载 webpack-dev-server）
  
  ```javascript
  "dev": "webpack-dev-server --config build-base-conf/webpack.dev.js",
  ```
  
  2、处理图片：开发环境下使用url，如果在线上环境下使用url，对性能方面是比较不友好的       

<br/>

* webpack.prod.js 生产配置（线上）

  ```javascript
  const webpackCommonConf = require('./webpack.common.js');
  const { smart } = require('webpack-merge');
  module.exports = smart(webpackCommonConf, {
      mode: 'production',
      output: {
          filename: 'bundle.[contentHash:8].js', // 打包代码时，加上 hash 戳
          path: './dist'
      }
      module: {
          rules: [
              {
                  //  生产环境下图片处理：将比较小的图片地址设置为base64
                  test: /\.(png|jpg|jpeg|gif)$/,
                  use: {
                      loader: 'url-loader',
                      options: {
                          // 小于 5kb 的图片用 base64 格式产出
                          // 否则，依然延用 file-loader 的形式，产出 url 格式
                          limit: 5 * 1024,
                          outputPath: '/img1', // 图片打包到 img1 目录下
                      }
                  }
              }
          ]
      },
      plugins: [
          {
              new ClearWebpackPlugin(), // 会默认清除 output.path 文件夹
              new Webpack.DefinePlugin({
                   // window.ENV = 'production'
                   ENV: JSON.stringify('production')
              })
          }
      ]
  })
  ```
  
  1、生产环境下启动命令
  
  ```javascript
  "build": "webpack --config build-base-conf/webpack.prod.js"
  ```
  
  2、生产环境下将小图片转成base64的好处
  
  * 减少 http 请求
  * 性能优化
  
  3、打包代码时，加上 hash 戳的好处
  
  * 什么是hash 戳：根据内容去生产对应的8位字符串。只要内容变了，生产的字符串也会进行变化。
  * 当内容没有变化时，访问页面，请求js文件时，会命中缓存，提高访问速度

<hr/>

### 面试题

1、前端代码为何要进行构建和打包

2、module、chunk、bundle 分别是生命意思，有何区别？

3、loader 和 plugin 的区别？

4、webpack 如何实现懒加载

5、webpack 常见性能优化

6、babel-runtime 和 babel-polyfill 的区别