##  Vite

Vite  是一种新型**前端构建工具**，能够显著提升前端开发体验。它主要由两部分组成：
 * 一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。
 * 一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源。


 ## Vite 可以解决的问题

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这之前，前端项目打包工具主要是 Webpack、Rollup 等工具，但随着项目不断完善，项目的体积也由此增大。从而导致项目在打包编译过程中，使得项目打包时长过长。即使使用了HMR，可以将其降低到几秒后在浏览器中显示出来，但如此循环，打包编译时间也会增加。

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由此就诞生了 Vite，**Vite 最大的特点就是快**。并且**开箱即用**（内部已经给我们集成了大量的插件），**生态丰富**（兼容Rollup 生态和 ESbuild编译模式），Rollup 的开发是早于 Webpack，**超高速热重载**（HMR）。

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正是超高速热重载原因使得 Vite 能够在所有前端构建工具中能够脱颖而出。

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为什么说 Vite 就具有超高速热重载，主要跟构建工具内部的打包的方式有关系。

   * **传统构建方式：每个项目文件都进行打包编译构建**。
      ![](https://img-blog.csdnimg.cn/img_convert/8ba3b88f77778f9e1be6b7e0e873a1de.png)
 * **Vite  少了每个文件都进行打包编译构建的这个环节（按需打包编译构建）**
![](https://img-blog.csdnimg.cn/img_convert/61d2e5077a9a39d1d591bfb87c93ff44.png)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;并且在Vite的编译中， Vite 内部还依赖于 **esbuild编译模式**（go语言编写），下图很明显看出，esbuild 的编译模式的速度要快于其他模式的编译。并且，随着项目的不断增大，编译速度方面并没有太大的影响。
![](https://img-blog.csdnimg.cn/img_convert/7434e09ba0d0f89a3df2f78b3d1e3f3c.png)
 ## 与其他传统构建工具比较（Webpack、Rollup、Vue-cli）

 * **Webpack 更全面**
 * **Rollup 更专一**
 * **Vite 更好用** 

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Webpack 和 Rollup 生态很丰富，集成了大量的插件，导致刚入门的开发者**学习成本高**。并且随着项目的不断增大，资源也要被不断地细分。导致出现数个不同的 Webpack 配置。最重要的速度慢。

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而对于 Vue-cli 来说虽然配置项相对于 Webpack 要少一些，速度快一些。但本质上还是基于 Webpack 来配置的，一旦遇到一些问题，还是需要 Webpack 的方面的知识点。并且与 Vite 相比较下要差点，而且 Vue-cli 只能是在 Vue 的生态下创建。**不能跨框架使用**。

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **在 Vite 1的版本中是基于 vue 项目的，无法是跨框架使用的**。但目前的 **vite 2 是完全可以跨框架的**（Vue3、Vue2、React等）。虽然说兼容了 Rollup 生态，但 **Vite 有其内部的插件系统，我们无需学习 Rollup 插件，直接学习 Vite 自身的语法即可，学习成本低**。

 [参考资料](https://vitejs.cn/guide/why.html)

![](https://img-blog.csdnimg.cn/img_convert/c35884fb7313cf8de73d706d08d4e19f.png)

![](https://img-blog.csdnimg.cn/img_convert/eb88fa12fe9d4653266bc5656f34f93e.png)
补充： Webpack 更新到现在已经到版本5了，而 Vite 2发布到现在不到一年，势头快赶超 Webpack

总结一句话：**Vite 是为项目而生，Webpack是为构建而生**。