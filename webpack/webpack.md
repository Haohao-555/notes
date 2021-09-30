## Webpack 笔记

###  安装 webpack

> 前置条件安装了 node

* 全局安装 webpack 及 webpack-cli
  *  npm install -g  webpack  --registry=https://registry.npm.taobao.org
  * npm instal -g   webpack-cli  --registry=https://registry.npm.taobao.org           

### 快速入门

* 创建项目并初始化项目

<img src="https://i.loli.net/2021/09/30/7uU6ierTbLnYqOB.png" style="zoom:80%;" />

<img src="https://i.loli.net/2021/09/30/sZInRhwUjKDfAuE.png" style="zoom:67%;" />



* 创建并配置 webpack 文件（webpack.config.js）

  ```javascript
  // 导入 path 模块 （处理路径）
  var path = require('path');
  
  // module 模块系统对象
  // exports 配置选项
  module.exports = {
      // 入口文件
      entry: "./src/index.js",
      // 设置模式 development（开发模式） production 生产环境
      mode: "development",
      // 输出
      output: {
          /*
            __dirname: 项目的绝对路径
            打包后的文件存放在 dist 目录下
           */
          path: path.resolve(__dirname, "dist"),
          // 设置打包后的文件名称
          filename: "bundle.js"
      }
  }
  ```



* 入口文件

  ```javascript
  var rd = function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
  }
  
  document.write(rd(100, 200)+"<br/>");
  document.write(rd(100, 200)+"<br/>");
  document.write(rd(100, 200)+"<br/>");
  document.write(rd(100, 200)+"<br/>");
  document.write(rd(100, 200)+"<br/>");
  ```



* 打包项目

  > webpack --config webpack.config.js

  <img src="https://i.loli.net/2021/09/30/2JHS8zcTmuEFfbo.png" style="zoom:67%;" />

<img src="https://i.loli.net/2021/09/30/Nd12bOag7CnipV4.png" style="zoom:67%;" />

开发模式下

```javascript
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var rd = function (min, max) {\r\n    return Math.floor(Math.random() * (max - min) + min);\r\n}\r\n\r\ndocument.write(rd(100, 200)+\"<br/>\");\r\ndocument.write(rd(100, 200)+\"<br/>\");\r\ndocument.write(rd(100, 200)+\"<br/>\");\r\ndocument.write(rd(100, 200)+\"<br/>\");\r\ndocument.write(rd(100, 200)+\"<br/>\");\r\n\n\n//# sourceURL=webpack://project01/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
```

生产模式下

```javascript
(()=>{var r=function(r,t){return Math.floor(Math.random()*(t-r)+r)};document.write(r(100,200)+"<br/>"),document.write(r(100,200)+"<br/>"),document.write(r(100,200)+"<br/>"),document.write(r(100,200)+"<br/>"),document.write(r(100,200)+"<br/>")})();
```



> 打包项目也可以使用 npm run build 
>
> 前提是在项目的 package.json 中配置好选项
>
> <img src="https://i.loli.net/2021/09/30/NrJymREf8iWuT49.png" style="zoom:67%;" />



### 打包 CSS 文件

> 在 src 目录下创建 css 文件（base.css）,并在入口文件（index.js）中引入文件

```javascript
import './base.css'
```



* 配置 webpack.config.js

```javascript
var path = require('path');
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
    // 配置 loader 模块
    module: {
        rules: [
            {
                // 打包 css 文件
                test: /\.css$/i,
                use: [
                    "style-loader", 
                    "css-loader"
                ]
            }
        ]
    }
}
```

> 配置前需要下载插件 style loader css-loader 
>
> npm install --save-dev style-loader
>
> npm install css-loader



* 打包文件并启动项目

  > 测试方法：在生产的dist 文件中创建一个 html 文件 并将 bundle.js 引入后，打开该文件，此时可以看到 css 样式是否加载成功



### 打包 scss

> 安装 sass-loader sass
>
> npm install sass-loader sass --save-dev

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 3 最后把 javascript 写入到bundle.js
          "style-loader",
          // 2 再把 css 转成 javascript
          "css-loader",
          // 1 将 sass 编译为 css
          "sass-loader",
        ],
      },
    ],
  },
};  
```





### 打包图片

> 安装 url-loader
>
> npm install url-loader -- save-dev

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};
```

