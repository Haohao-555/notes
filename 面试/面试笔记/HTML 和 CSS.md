# HTML 和 CSS

### 1、浏览器内核: 

* IE： **trident** 内核 

* Firefox：**gecko** 内核 

* Safari: **webkit** 内核 

* Opera:以前是 presto 内核，Opera 现已改用 Google Chrome 的 Blink 内核 

* Chrome:**Blink**(基于 webkit，Google 与 Opera Software 共同开发)

  

### 2、什么是 Doctype？ 严格模式与混杂模式的区别？

* 声明位于文档中的最前面的位置，处于标签之前。

* 告知浏览器文档使用哪种 HTML 或 XHTML 规范。

* 重点：<font color=#FF0000> 告诉浏览器按照何种规范解析页面</font>。

* 严格模式下：页面排版及 JS 解析是以该浏览器支持的最高标准来执行 。

* 混杂模式：不严格按照标准执行，主要用来兼容旧的浏览器，向后兼容。

* DOCTYPE 不存在或格式不正确会导致文档以混杂模式呈现。

  

### 3、Quirks 模式是什么？它和 Standards 模式有什么区别 

* 从 IE6 开始，引入了 Standards 模式，目的是<font color=#FF0000> 在支持旧的布局方式下提供新的渲染机制</font>。

* 两者的区别：

  * 盒模型:

    * Standards：如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度
    *  Quirks：IE 的宽度和高度还包含了 padding 和 border

  * 设置行内元素的高宽：

    * Standards: 不生效
    * Quirks：能生效

  * 设置百分比的高度：

    * standards：一个元素的高度是由其包含的内容来决定的，如果父元素没有设置百分比的高度，子元素设置一个百分比的高度是无效的。

  * margin:0 auto 设置水平居中

    * standards：生效
    * Quirks：不生效

  * 等等......

    

### 4、div+css 的布局较 table 布局有什么优点？ 

*  div+css 的优点：
  * 改版的时候更方便 只要改 css 文件
  * 页面加载速度更快、结构化清晰、页面显示简洁
  * 表现与结构相分离
  * <font color="red">易于优化（seo）搜索引擎更友好，排名更容易靠前</font>

* table 布局缺点：

  * table 比其他html标签占更多的字节。造成下载时间延迟，占用服务器更多的流量资源（<font color=#08ffc8>代码冗余</font>）
  * <font color="#2E94B9">table 会阻挡浏览器渲染引擎的渲染顺序，会延迟页面的生成速度，让用户等待时间更久</font>
  * 灵活性差，一旦设计确定，后期很难通过CSS让它展现新的面貌
  * <font color="red">不利于搜索引擎抓取信息，直接影响到网站的排名</font>

* table 布局优点：

  * 兼容性好

  * 容易上手

    

### 5、 img 的 alt 与 title 有何异同？ strong 与 em 的异同？

* 在 img 加载不出来时，**alt 会替换掉图片将文字显示到页面中**。（替换文字的语言由 lang 属性指定）

* title: 该属性为设置该属性的元素提供建议性的信息。（在 IE 浏览器下会在没有 title 时把 alt 当成 title  显示）

* strong: **粗体强调标签**，强调，表示内容的重要性

* em: **斜体强调标签**，更强烈强调，表示内容的强调点

   

   补充： b 标签和 strong 标签,i 标签和 em 标签的区别？ 

* 后者有语义，前者则无。

  

### 6、渐进增强和优雅降级之间的不同

* 渐进增强： 针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验
* 优雅降级 ：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。



### 7、为什么利用多个域名来存储网站资源会更有效

* CDN 缓存更方便 
* 突破浏览器并发限制 
* 节约 cookie 带宽 
* 节约主域名的连接数，优化页面响应速度 
* 防止不必要的安全问题



### 8、谈一下你对网页标准和标准制定机构重要性的理解

​        网页标准和标准制定机构都是为了能**让 web 发展的更‘健康’**，开发者遵循统一的标准，降低开发难度，开发成本，SEO 也会更好做，也不会因为滥用代码导致各种 BUG、安全问题， 最终提高网站易用性。



### 9、cookies 和 Web Storage（sessionStorage 、 localStorage） 的区别

* cookie 和 Web Storage <font color="red">为了更大容量存储设计的</font>

* cookie
  * <font color="red">Cookie 的大小是受限的</font>
  * cookie 还需要指定作用域，<font color="red">不可以跨域调用</font>
  * Cookie 的作用是与<font color="red">服务器进行交互</font>
* Web Storage
  * Web Storage 仅仅是为 了在本地“存储”数据而生
  * sessionStorage 用于本地存储一个会话（session）中的数据，**这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁**
  * localStorage 用于**持久化的本地存储**，除非主动删除数据，否则数据是永远不会过期的



### 10、简述一下 src 与 href 的区别

​       src 是 source 的缩写,  指向外部资源的位置，在请求 src 资源时会下载并应用到文档中。（例如 js 脚本，img 图片 和 frame 等元素）

​      **注**： 当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行 完毕，图片和框架等元素也如此。

​     因此：**js 脚本放在底部而不是头部**

​     如果 js脚本必须放在头部加载时，可以使用<font color="green">异步加载 js文件</font>

```html
 <script type="text/javascript" src="text.js" async></script>
```

​      href 是 Hypertext Reference 的缩写，指向网络资源所在位置，建立和当前元素（锚点） 或当前文档（链接）之间的链接，如果我们在文档中添加  

```html
<link href=”common.css” rel=”stylesheet”/>
```

那么浏览器会识别该文档为 css 文件，就会<font color="red">并行下载资源并且不会停止对当前文档的处理</font>。 这也是为什么建议使用 link 方式来加载 css，而不是使用@import 方式。（link 和 @import 的具体差别看第30点）



### 11、知道的网页制作会用到的图片格式有哪些？ 

​         png-8，png-24，jpeg，gif，svg， Webp

* “PNG8”是指8位索引色位图，“PNG24”是24位索引色位图；

> WebP 格式，谷歌（google）开发的一种旨在加快图片加载速度的图片格式。 图片压缩体积大约只有 JPEG 的 2/3，并能节省大量的服务器带宽资源和数据空间。Facebook  Ebay 等知名网站已经开始测试并使用 WebP 格式。

<font color="blue">在质量相同的情况下，WebP 格式图像的体积要比 JPEG 格式图像小 40%</font>



### 12、什么是微格式

​       微格式（Microformats）是一种让机器可读的语义化 XHTML 词汇的集合，是结构化数据的开放标准。是为特殊应用而制定的特殊格式。

​       优点：将智能数据添加到网页上，让网站内容在搜索引擎结果界面可以显示额外的提示。（应用范例：豆瓣，有兴趣自行 google）

​      [详细内容](https://www.jianshu.com/p/7e11c1f32a48)



### 13、在 css/js 代码上线之后开发人员经常会优化性能，从用户刷新网页开始， 一次 js 请求一般情况下有哪些地方会有缓存处理？ 

* dns 缓存

* cdn 缓存

* 浏览器缓存

* 服务器缓存

  

### 14、一个页面上有大量的图片（大型电商网站），加载很慢，你有哪些方法优化这些图片的加载，给用户更好的体验。

​     （1） **图片懒加载**，在页面上的未可视区域可以添加一个滚动条事件，判断图片位置与浏览器顶端 的距离与页面的距离，如果前者小于后者，优先加载。

​      （2）**图片预加载技术** 将当前展示图片的前一张和后一张优先下载

​      （3）如果图片为 css 图片，可以使用 **CSSsprite**，**SVGsprite**，**Iconfont**、**Base64** 等技术

​      （4）如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩的特别厉害的缩略图， 以提高用户体验。 

​      （5）如果图片展示区域小于图片的真实大小，则因在服务器端根据业务需要先行进行图片压缩， 图片压缩后大小与展示一致。



### 15、 如何理解 HTML 结构的语义化？

   * 去掉或样式丢失的时候能让页面呈现清晰的结构

   * 有利于 seo 优化，利于被搜索引擎收录（更便于搜索引擎的爬虫程序来识别） 

   * 便于项目的开发及维护，使 html 代码更具有可读性，便于其他设备解析

     <img src="https://i.loli.net/2021/08/01/alqDYQOsrHN92nt.png" style="zoom:80%;" />

>    具体看当前目录下资料的第一点
>



### 16、谈谈以前端角度出发做好 SEO 需要考虑什么？

> 具体看当前目录下资料的第二点



### 17、有哪项方式可以对一个 DOM 设置它的 CSS 样式？ 

* **外部样式表**，引入一个外部 css 文件 
* **内部样式表**，将 css 代码放在  标签内部 
* **内联样式**，将 css 样式直接定义在 HTML 元素内部



### 18、CSS 都有哪些选择器？

[文章一（css笔记）](https://blog.csdn.net/weixin_44659458/article/details/119079744)

[文章二（CSS3最常用选择器总结笔记）](https://blog.csdn.net/weixin_44659458/article/details/109306304)



### 19、CSS 中可以通过哪些属性定义，使得一个 DOM 元素不显示在浏览器可视范围内？ 

* 设置 display 属性为 none
* 设置 visibility 属性为 hidden
* 技巧性： 设置宽高为 0，设置透明度为 0，设置 z-index 位置在-1000

* 两者的区别：
  * display : 隐藏对应的元素但不挤占该元素原来的空间。
  * visibility: 隐藏对应的元素并且挤占该元素原来的空间（视觉隐藏）。



### 20、链接访问过后 hover 样式就不出现的问题是什么？如何解决？ 

   *      改变 CSS 属性的 排列顺序: L-V-H-A（link,visited,hover,active）



### 21、什么是 Css Hack？ie6,7,8 的 hack 分别是什么？

​       针对不同的浏览器写不同的 CSS 代码的过程，就是 CSS hack。

```css
background-color:blue; /*firefox*/
background-color:red\9; /*all ie*/
background-color:yellow; /*ie8*/
+background-color:pink; /*ie7*/
_background-color:orange; /*ie6*/ 
:root #test { background-color:purple\9; } /*ie9*/
```

 

### 22、行内元素和块级元素的具体区别是什么？

* 块级元素(block)特性：
  * 独占一行
  * 宽度(width)、高度(height)、内边距(padding)和外边距(margin)都可控制
  * `div` `p` `h1~h6` `form` `ul` 等
* 内联元素(inline)特性：
  * 宽度(width)、高度(height)、内边距的 top/bottom和外边距的top/bottom都不可改变
  * padding 和 margin 的 left 和 right 是可以设置的
  *  `a` `b` `br` `i` `span` `input` `select`
* inline-block 元素
  * 可以设置宽高，不独占占一行
  * 但有一个缺点：两个 inline-block 并排会出现小空隙（html中换行导致的）。可以在其父元素添加 font-size: 0px；即可解除 
  * 通过 display: inline-block 来切换元素

补充： 空(void)元素有那些？ 

* 常见的空元素：    `<br>` `<hr>` `<img>` `<input>` `<link>` `<meta>`
*  鲜为人知的是：`<area>` `<base>` `<col>` `<command>` `<embed>` `<keygen>` `<param>` `<source>` `<track>` `<wbr>`



### 23、什么是外边距重叠，重叠的结果是什么？如何触发 BFC

​    [外边距重叠问题（补充）](https://blog.csdn.net/weixin_44659458/article/details/119079744)

   补充：什么是 BFC

* BFC 是指浏览器中创建了一个独立的渲染区域，该区域内所有元素的布局不会影响到区域外 元素的布局，这个渲染区域只对块级元素起作用

  

### 24、rgba()和 opacity 的透明效果有什么不同？

* rgba()和 opacity 都能实现透明效果
* opacity 作用于元素，以及元素内的 所有内容的透明度
* rgba()只作用于元素的颜色或其背景色（设置 rgba 透明的元素的子元素不会继承透明效果！）



### 25、css 中可以让文字在垂直和水平方向上重叠的两个属性是什么？

* 垂直方向：line-height
* 水平方向：letter-spacing

<img src="https://i.loli.net/2021/07/30/kjwgdUJTr7Qs8Fn.png" style="zoom:67%;" />





### 26、如何垂直居中一个浮动元素？

[全网最全实现元素（盒子、图片）水平垂直方向居中](https://blog.csdn.net/weixin_44659458/article/details/118912533)



### 27、px 、 em 、rem 三者的区别。 

* **px**：px (pixel,像素)是一个相对单位，相对的是设备像素(device pixel)。通过设备像素比可以获取1px在设备上真实的使用的设备像素。
* **em**： em是最常见的相对长度单位，**基准值是当前元素的字号大小**。 在CSS中，1em表示当前元素的字号大小，实际值取决于在哪个元素上应用。
* **rem** (CSS3 新增)：**根节点（html）的font-size决定了rem的尺寸**，也就是说它是一个相对单位，相对于(html)。



### 28、描述一个”reset”的 CSS 文件并如何使用它。知道 normalize.css 吗？你 了解他们的不同之处？

* reset.css 是直接将浏览器的默认样式直接去掉。
* normalize.css 是统一所有浏览器的默认样式

> ​    具体看当前目录下资料的第三点



### 29、Sass、Less 是什么？大家为什么要使用他们？

* 它们是 CSS 预处理器。它们是 CSS 上的一种抽象层。它们是一种特殊的语法/语言编译成 CSS。
* Less （动态样式语言）将 CSS 赋予了动态语言的特性，如变量，继承，运算， 函数. LESS 既可以在客户端上运行 (支持 IE 6+, Webkit, Firefox)，也可一在服务端运行 (借助 Node.js)。
* 结构清晰，便于扩展。
* 可以轻松实现多重继承。



### 30、CSS 中 link 和@import 的区别是： 

* Link 属于 html 标签，而@import 是 CSS 中提供的
* 在页面加载的时候，link 会同时被加载，而@import 引用的 CSS 会在页面加载完成后才会加载引用的 CSS

* @import 只有在 ie5 以上才可以被识别，而 link 是 html 标签，不存在浏览器兼容性问题
* Link 引入样式的权重大于@import 的引用（@import 是将引用的样式导入到当前的页面中）



### 31、简介盒子模型 

* 什么是盒模型

  * 所有的html元素都可以看作是盒子
  * 盒子模型（Box Model）具体包括了外边距（Margin），边框（Border），内边距（Padding）和内容（Content）

* 盒模型分为 **IE 盒子模型** 和 **W3C 盒子模型**

*  W3C 盒子模型

  <img src="https://i.loli.net/2021/08/01/v9hTXt2DBJ8c7gf.png" style="zoom:33%;" />

  w3c盒子模型的范围包括margin、border、padding、content,并且content部分不包含其他部分。

* IE 盒子模型

  <img src="https://i.loli.net/2021/08/01/SEmrhfOqCou1geZ.png" style="zoom:33%;" />

IE盒子模型的范围包括 margin、border、padding、content,和w3c盒子模型不同的是，IE盒子模型的content部分包含了padding和border.

* box-sizing: content-box (默认) | border-box

  > content-box (默认) | border-box 两者的区别：（计算盒子大小）https://blog.csdn.net/weixin_44659458/article/details/119079744



### 32、HTML 与 XHTML——二者有什么区别？ 

[W3C](https://www.w3school.com.cn/xhtml/xhtml_intro.asp)

- XHTML 元素必须被正确地嵌套。

- XHTML 元素必须被关闭。

- 标签名必须用小写字母。

- XHTML 文档必须拥有根元素。

  

### 33、哪些 css 属性可以继承？

* 可继承： font-size font-family color, ul li dl dd dt; 
* 不可继承 ：border padding margin width height ;



### 34、text-align:center 和 line-height 有什么区别？

*  text-align 是水平对齐，line-height 是行间。



### 35、**position 跟 display、margin collapse、overflow、float 这些特性相互叠加后会怎么样？**

> 当前目录下的HTML 和 CSS第35题



### **42、html 常见兼容性问题？** 

* 1、双边距 BUG float 引起的 使用 display

     当为一个块级元素同时设置float和margin属性时，在IE6下元素的margin显示效果为原来的2倍。

  * 解决方法：

    *  为浮动元素设置display:inine
    * 使用css hack （使用只有IE6能识别的下划线来为margin设值，设置的值为想要效果的一半）

    ```css
    .div1{
         margin-left:50px; 
         _margin-left:25px; 
         float:left;width:100px; 
         height:100px; 
         background-color:red;
    }
    ```

    

* 2、3 像素问题

  * [vertical-align的使用及解决图片底部默认空白缝隙问题和图像与文本垂直方向居中对齐](https://blog.csdn.net/weixin_44659458/article/details/109286486)

  

* 3、超链接 hover 点击后失效 使用正确的书写顺序 link visited hover active

* 4、Ie z-index 问题 给父级添加 position:relative

* 5、Png 透明 使用 js 代码改

* 6、Min-height 最小高度 ！Important 解决’

* 7、select 在 ie6 下遮盖 使用 iframe 嵌套

* 8、为 什 么 没 有 办 法 定 义 1px 左 右 的 宽 度 容 器 （ IE6 默 认 的 行 高 造 成 的 ， 使 用

  over:hidden,zoom:0.08 line-height:1px）

* 9、IE5-8 不支持 opacity，解决办法：

  ```css
  .opacity {
   opacity: 0.4
   filter: alpha(opacity=60); /* for IE5-7 */
   -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; /* for IE 
  8*/
  }
  ```

* 10、IE6 不支持 PNG 透明背景，解决办法: IE6 下使用 gif 图片



#### 43、absolute 的 containing block 计算方式跟正常流有什么不同?























更新中.........
