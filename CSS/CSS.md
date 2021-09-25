![](https://i.loli.net/2021/07/25/i9arF3C6hKRXqPp.png)



# 一、CSS 介绍

CSS 的全称是 Cascading Style Sheet（层叠样式表），它主要用来控制网页的样式（美化网页）。
CSS 早已被所有主流浏览器采用，它允许你轻松控制以下样式：
>  颜色 color
背景 background
字体 font
位置 position
显示 display
边框 border
内边距 padding
外边距 margin
行高 line-height
装饰 text-decoration
过渡 transtion
变化 transform
动画 animation
页面样式的属性有几百个，但常用的不过几十个。

# 二、CSS 的引入方式
使用 CSS 样式有四种方式：

1. **内联样式**：就是在任意一个html标签中使用style属性使用样式的方法。
```html
<p style="font-size: 32px;color: green">朝辞白帝彩云间</p>
```
2. **内部样式**：使用<style></style>标记，将css嵌入html中。
```html
<style type="text/css">
  h2 {
      color: red;
      font-size: 60px;
      border: 1px solid green;
  }
</style>
```
3. **外部样式**：你可以创建一个后缀名为`.css`文件，然后在文件中编写样式规则，最后在文档中使用link引用该文件。
> W3C推荐 link 标签在引入 CSS文件时需要指定 rel="stylesheet"属性，告诉浏览器引入的文件是层叠式样式表
```html
<!--rel指定文档的关系 type类型 href路径 -->  
<link rel="stylesheet" type="text/css" href="test.css">
<!-- 在HTML5中 link标签引入css时推荐不声明type属性 -->
<link rel="stylesheet" href="test.css">
```
>尽管前两个方式也有人使用，但大部分开发人员更喜欢外部样式表，因为它可以将样式与元素分开，这提高了代码的可读性和重用性。

4. **输入样式表**（不常用）：将一个css文件，通过 `@import`关键字导入到另外一个css中。
```html
<!-- 内部样式引入其他css文件 -->
<style>
  @import url(demo.css)
</style>
```
```css
/* 外部样式中引入其他css文件 */
@import url(demo.css);
```

5、**优先级比较**

​      **内联样式 > 内部样式 > 外部样式(如果优先级一样的情况下，遵从从上到下，后面设置的样式会覆盖前面的)**



# 三、CSS选择器讲解

## 1、通配符选择器

**概念**: 在 CSS 选择器中`*`被称作通配符具有特殊的含义他可以匹配页面上所有html标签元素。

> **尽量少用通配符选择器**，通配符选择器会使浏览器会去查询所有的元素从而影响影响浏览器性能。
```css
* {
  font-size: 16px;
}
```
## 2、html选择器

**概念**：在 CSS 选择器中我们可以直接使用任何html标签名作为选择器，表示查询页面中所有指定标签名的元素。
```css
 h1{
  font-size: 30px;
  color: chartreuse ;
  background-color: #2DB2FF;
}

p{
  border: 1px solid blue;
  color: gray;
}
```
## 3、类选择器

**概念**：在 CSS 选择器中类选择器以一个`.`开头后面接一个**类名**，表示查询页面中所有class为指定类名的元素。
```css
.one{
  color: red;
}

.two{
  color: darkmagenta;
}
```
```html
<p class="one two">hello</p>

<a href="http://www.baidu.com" class="one">百度</a>
<div class="two">div</div>
```
## 4、ID选择器

**概念**：在 CSS 选择器中类选择器以一个`#`开头后面接一个**id名**，表示查询页面中id为指定id名的元素。

> 在整个HTML页面中任何一个元素的**id值必须唯一**
>
> 在规范的web前端开发中，我们一般**不会使用id选择器因为会影响页面的性能**
```css
#p{
  background-color: #4183C4;
}
```
## 5、派生选择器

**概念**：在CSS中我们可以使用“html选择器，类选择器，id选择器（**不推荐**）” 通过依据元素在其位置的上下文关系来查询页面中的指定元素，使用派生选择器可以使标签更加简洁。

> 在 CSS1 中，通过这种方式来应用规则的选择器被称为上下文选择器 (contextual selectors)，这是由于它们依赖于上下文关系来应用或者避免某项规则。在 CSS2 中，它们称为派生选择器，但是无论你如何称呼它们，它们的作用都是相同的。
```css
/* 
查询页面中所有class名为two的div元素 
（div 和 .two 没有）交集选择器
*/
div.two{ 
  color: green;
}

/* 后代选择器 */
/* 查询页面中所有被div包含的p元素 */
div p{
  color: #222222;
}

/* 查询页面中所有被class名为two的div元素包含的p元素 */
div.two p{
  color: #222222;
}

/* 直接子元素选择器 */
/* 查询页面中所h1的strong直接子元素 */
h1 > strong {
  color:red;
}

/* 
   <h1>This is <strong>very</strong> <strong>very</strong> important.</h1> 会被上面的选择器选中
   <h1>This is <em>really <strong>very</strong></em> important.</h1>  strong不会被选中
*/

/* 相邻兄弟选择器 */
/* 查询紧接在 h1 元素后出现的段落，h1 和 p 元素拥有共同的父元素 */
h1 + p {
  margin-top:50px;
}
```

**CSS3新增派生选择器**：
```css
/* 查询所有相同的父元素中位于 p 元素之后的所有 ul 元素 */
p ~ ul {
  background:#ff0000;
}
```
## 6、组合选择器

**概念**：在CSS中我们经常会遇到不同选择器使用相同样式的情况，如果给每个不同选择器单独的设置样式会使得CSS过于繁琐。为了解决此问题CSS允许使用`,`将不同选择器隔开设置同一个样式，这种模式被称为组合选择器。
> 在使用组合选择器时，多个选择器每个选择器独占一行。
```css
h1,
#main,
h2,
div p{
  color: purple;
}
```

## 7、属性选择器 
**概念**： 在CSS中允许使用`[attribute]`形式的属性选择器用于选取带有指定属性的元素。
```css
/* 查询带有 readonly 属性的 <input> 元素设置样式 */
input[readonly] { 
  background-color:yellow;
}
/* 查询 type=text 的 <input> 元素设置样式 */
input[type=text] { 
  background-color:yellow;
}
/* 
 查询 titile 属性包含单词 "flower" 的元素，并设置其样式 
 该值必须必须是一个完整单词，比如 title="flower"，或者前后面使用空格隔开，比如 title="flower world"。
*/
[title~=flower] { 
  background-color:yellow;
}
/*
 查询 lang 属性值以 "en" 开头的元素，并设置其样式
 该值必须必须是一个完整单词，比如 lang="en"，或者后面跟着连字符不可以使用空格，比如 lang="en-us"。
*/ 
[lang|=en] { 
  background-color:yellow;
}
```
**CSS3新增属性选择器**：
```css
/* 
 查询 class 属性值以 "test" 文本开头的所有 div 元素
 与 | 不同 ^ 表示以字符串开头任何文本，而 | 必须是完整单词
 例子 test123与 ^ 匹配与 | 不匹配
*/
div[class^="test"] {
  background:#ffff00;
}
/* 
 查询 class 属性值以 "test" 文本结尾的所有 div 元素
*/
div[class$="test"] {
  background:#ffff00;
}

/* 查询 class 属性值包含 "test" 文本的所有 div 元素 */

div[class*="test"] {
  background:#ffff00;
}
```

## 8、伪选择器
**概念**：在 CSS 中允许使用伪类来添加一些选择器的特殊效果。

**语法**：`selector:伪类 {属性: 属性值;}`

- 锚伪类

**介绍**：CSS 中超链接的不同状态都可以不同的方式显示，这些状态包括：活动状态，已被访问状态，未被访问状态，和鼠标悬停状态。

```css
a:link {color: #FF0000;}	/* 未访问的链接 */
a:visited {color: #00FF00;}	/* 已访问的链接 */
a:hover {color: #FF00FF;}	/* 鼠标移动到链接上 */
a:active {color: #0000FF;}	/* 选定的链接 */
```
> 1. 在 CSS 定义中，:hover 必须被置于 link 和 visited 之后，active 必须被置于 hover 之后，才是有效的。 (**爱恨原则lvha**)
> 
> 2. 伪类名称对大小写不敏感。
>
> 3. :hover伪类可以应用在除超链接以外的其他元素上。

- 表单伪类

**介绍**：CSS 中可以向拥有键盘输入焦点的元素添加样式。

```css
input:focus {  /* input表单获得光标时 */
  color:yellow;
}
```

- :first-child 伪类

**介绍**：伪类向元素的第一个子元素添加样式。

```css
p:first-child { /* 将会匹配页面中第一个p元素 */
  font-weight:bold;
}
```

**CSS3新增伪类**：
- :first-of-type

**介绍**：选择器匹配属于其父元素的特定类型的首个子元素。

```css
p:first-of-type {
  color: red;
}
```

- :last-of-type

**介绍**：选择器匹配属于其父元素的特定类型的最后一个子元素。
```css
p:last-of-type {
  color: red;
}
```

- :only-of-type	

**介绍**：选择器匹配属于其父元素的特定类型唯一的子元素。
```css
/* 若p元素是父元素中唯一的p子元素，选择该p元素 */
p:only-of-type {
  color: red;
}
```
- :only-child	

**介绍**：选择器匹配属于其父元素的唯一子元素。
```css
/* 若p元素是父元素中唯一子元素，选择该p元素 */
p:only-child {
  color: red;
}
```

- :nth-child(n)	

**介绍**：选择器匹配属于其父元素的第 N 个子元素，n可以是数字、关键字、公式。
1. 数字：表示子元素的下标 
2. 关键字：odd 和 even 是可用于匹配下标是奇数或偶数的子元素的关键词（第一个子元素的下标是 1）。
3. 使用公式 (an + b)。描述：表示周期的长度，n 是计数器（从 0 开始），b 是偏移值。
```css
/* 选择第二个子元素并且类型为p的元素 */
p:nth-child(2) {
  color: red;
}

/* 选择下标为偶数的p子元素 */
p:nth-child(even) {
  color: red;
}

/* 选择下标为偶数的p子元素 */
p:nth-child(2n) {
  color: red;
}
```

- :nth-last-child(n)

**介绍**：选择器匹配属于其元素的第 N 个子元素，从最后一个子元素开始计数。n 可以是数字、关键词或公式。
```css
/* 选择最后一个元素并且元素类型为p的元素 */
p:nth-last-child(1) {
  color: red;
}
```

- :nth-of-type(n)

**介绍**：选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素。n 可以是数字、关键词或公式。

```css
/* 选择第一个p子元素 */
p:nth-last-child(1) {
  color: red;
}

/* 排除所有其他子元素后剩下p子元中是奇数位的p元素 */
p:nth-last-child(odd) {
  color: red;
}
```

- :nth-last-of-type(n)	

**介绍**：选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素，从最后一个子元素开始计数。n 可以是数字、关键词或公式。
```css
/* 选择最后一个p子元素 */
p:nth-last-child(1) {
  color: red;
}

/* 排除所有其他子元素后剩下p子元中倒数是奇数位的p元素 */
p:nth-last-child(odd) {
  color: red;
}
```
- :last-child

**介绍**：选择器匹配属于其父元素的最后一个子元素
```css
/* 选择最后一个元素并且为p元素的子元素 */
p:last-child {
  color: red;
}
```
**type** 和 **child** 的区别

```css
/*
  ele::nth-of-type(k) 找到 父元素下第k个ele元素
  ele::nth-child(k) 第n个元素且这个元素为ele，若不是，则选择失败。
*/

 .ul4 .threeli:first-of-type {
            color: blue;
  }

/*
效果应该是 1 为蓝色，但实际效果是不生效
:first-of-type 前面必须 标签 才能生效
因此改成 .ul4 li :first-of-type 才能生效

 <ul class="ul4">
        <li>1</li>
        <li>2</li>
        <li class="threeli">3</li>
        <li>4</li>
        <li>5</li>
    </ul>

*/
```

- :root	

**介绍**：选择文档的根元素。在 HTML 中，根元素始终是 html 元素。
```css
:root { 
  background:#ff0000;
}
```

- :empty	

**介绍**：选择器匹配没有子元素（包括文本节点）的每个元素。
```css
p:empty { 
background:#ff0000;
}
```

- :enabled

**介绍**：选择器匹配每个已启用的元素（大多用在表单元素上）。
```css
/* 为所有 type="text" 的已启用的 input 元素设置背景色 */
input[type="text"]:enabled { 
  background-color: #ff0000;
}
```
- :disabled

**介绍**：选择器匹配每个被禁用的元素（大多用在表单元素上）。
```css
/* 为所有 type="text" 的被禁用的 input 元素设置背景色 */
input[type="text"]:disabled { 
background-color: #dddddd;
}
```
- :checked

**介绍**：选择器匹配每个已被选中的 input 元素（只用于单选按钮和复选框）。
```css
input:checked { 
background-color: #ff0000;
}
```

- :not(selector)	

**介绍**：选择器匹配非指定元素/选择器的每个元素。
```css
:not(p) { 
background-color: #ff0000;
}
```

- :target	
**介绍**：URL 带有后面跟有锚名称 #，指向文档内某个具体的元素。这个被链接的元素就是目标元素(target element)。:target 选择器可用于选取当前激活的目标元素。
```css
/* 当激活 #news1 锚点时，选择对应id的锚元素。*/
#news1:target { 
  border: 2px solid #D4D4D4;
  background-color: #e5eecc;
}
```

## 9、伪元素选择器

**概念**：在 CSS 中允许使用伪元素来添加一些选择器的特殊效果。

**语法**：`selector:伪元素 {属性: 属性值;}`

- :first-letter 伪元素

**介绍**：CSS 中允许使用:first-letter 伪元素向文本的第一个字母添加特殊样式。
```css
p:first-letter{
  color:#ff0000;
  font-size:xx-large;
}
```
> "first-letter" 伪元素只能用于块级元素。
> 这个伪元素用于指定一个元素第一个字母的样式。所有前导标点符号应当与第一个字母一同应用该样式。

- :first-line 伪元素

**介绍**：CSS 中允许使用:first-letter 伪元素向文本的首行设置特殊样式。
```css
p:first-line {
  color:#ff0000;
}
```
> "first-line" 伪元素只能用于块级元素。

- :before 伪元素

**介绍**：CSS 中允许使用 :before 伪元素向元素的内容最前面插入新内容。

```css
h1:before{
  /* 在每个 <h1> 元素前面插入一幅图片, content 属性生成内容*/
  content:url(logo.gif);
}

p:before{
  /* 在每个 <p> 元素前面插入一个 ￥ 符号 */
  content: '￥';
}
```
- :after 伪元素

**介绍**: CSS 中允许使用  :after 伪元素可以在元素的内容之后插入新内容。
```css
/* 下面的例子在每个 <h1> 元素后面插入一幅图片： */
h1:after {
  content:url(logo.gif);
}
```

**CSS3新增伪元素**：


::selection
**介绍**: 选择器匹配被用户选取的选取是部分。只能向 ::selection 选择器应用少量 CSS 属性：color、background、cursor 以及 outline。
```css
::selection
{
    color:#ff0000;
}
::-moz-selection
{
    color:#ff0000;
}
```

**注意**：伪类与伪元素的区别简单的说就是，伪类是描述一个真实HTML元素的补充（例：特殊状态、第几个）。而伪元素他不是一个元素即不是一个HTML标签。

## 10、样式的优先级

**介绍**： 在开发时 HTML 元素的样式经常会跟其他样式发生冲突。如下面的代码你的h1元素也不能同时设置blue和red两种样式。这时浏览器该如何选择呢？

```css
* {
  color: red;
}

h1 {
  color: blue;
}
```
我们运行代码后，发现h1的最终样式是蓝色。原因是h1选择器的样式覆盖掉了通配符选择器上针对h1元素冲突的样式。为什么h1选择器会覆盖掉*选择器呢，原因是CSS给不同的选择器都设定了不同的优先级。优先级高的选择器将会覆盖掉优先级低的选择器中冲突的样式。

**概念**： 在CSS中有限级的顺序是 **!important关键字>内联样式(元素自身style设置属性)  > id 选择器 > 类选择器 > 元素选择器 > 通配符选择器 > 继承的样式**

**补充**： 在一个指定样式后添加!important关键字那么指定样式规则的应用优先权将会提升到上面所示的等级

```css
p {
  color: red!important;
}
p.demo {
  color: purple;
  }
```


# 四、单位基础

## 1、尺寸
- **%**：百分比是元素相对于父元素在对应尺寸上的百分比值

- **px**：px (pixel,像素)是一个相对单位，相对的是设备像素(device pixel)。通过设备像素比可以获取1px在设备上真实的使用的设备像素。

- **em**： em是最常见的相对长度单位，**基准值是当前元素的字号大小**。 在CSS中，1em表示当前元素的字号大小，实际值取决于在哪个元素上应用。
- **rem** (CSS3 新增)：**根节点（html）的font-size决定了rem的尺寸**，也就是说它是一个相对单位，相对于(html)。
```css
/* 设置的font-size来改变rem尺寸 */
:root{
      font-size:20px;
}

.box{
      width:1rem;
      height:1rem;
      background-color:purple;
}
```
> 应用场景：用来做web app的屏幕适配

- **vw、vh**：1vw等于视口宽度的1%，1vh等于视口高度的1%。
> 视口单位中的“视口”，桌面端指的是浏览器的可视区域；移动端指的就是Viewport中的Layout Viewport, “视区”所指为浏览器内部的可视区域大小，即window.innerWidth/window.innerHeight大小，不包含任务栏标题栏以及底部工具栏的浏览器区域大小。。

## 2、颜色

**(颜色名)**	颜色名称 (比如： red、blue、pink)

**rgb(red, green, blue)** rgb颜色函数，此函数接受以下所述的三个参数：

- red:此参数用于定义红色的强度。它是介于0到255之间的整数值，或者是介于0％到100％之间的百分比值。
- green:此参数用于定义绿色的强度。它是介于0到255之间的整数值，或者是介于0％到100％之间的百分比值。
- blue:此参数用于定义蓝色的强度。它是介于0到255之间的整数值，或者是介于0％到100％之间的百分比值。

**rgba(red, green, blue，alpha)** rgba颜色函数是 rgb 颜色值的扩展，此函数接受以下所述的四个参数： 
 RGBA 是代表Red（红色） Green（绿色） Blue（蓝色）和 Alpha（不透明度）三个单词的缩写。RGBA 颜色值是 RGB 颜色值的扩展，带有一个 alpha 通道 - 它规定了对象的不透明度。
- red:此参数用于定义红色的强度。它是介于0到255之间的整数值。
- green:此参数用于定义绿色的强度。它是介于0到255之间的整数值。
- blue:此参数用于定义蓝色的强度。它是介于0到255之间的整数值。
- alpha：此参数用于定义颜色的不透明度。它介于0到1之间（0为完全透明1为完全不透明）。

**十六进制值颜色** 十六进制值其实就是将rgb函数中，red、green、blue 0到255的取值转化为00到FF。例 #ff00ee。
```css
.box {
  color: #00aaee;
}
```
> 注意：若十六进颜色r、g、b的值全都两位相等则可以进行缩写：例 #ff00aa 可缩写为 #f0a；#ffffff 可缩写为 #fff。

**hsl(h, s, l)** hsl色彩，是一种工业界的色彩标准，因为它能涵盖到人类视觉所能感知的所有颜色，所以在工业界广泛应用。此函数接受以下所述的三个参数：

![hls.jpg](http://edu.yueqian.com.cn/group1/M00/00/5F/wKgA3V-0hHuAExiEAAFmKyeSWro245.jpg)
-h（Hue）：代表色调，取值在0度~360度之间，0度是红色，120度是绿色，240度是蓝色。360度也是红色。

![s.jpg](http://edu.yueqian.com.cn/group1/M00/00/5F/wKgA3V-0hJaAKG1gAAFv_sUNVso750.jpg)
-s（Saturation）：代表饱和度，是色彩的纯度，是一个百分比的值，取值在0%~100%，0%饱和度最低，100%饱和度最高

![l.jpg](http://edu.yueqian.com.cn/group1/M00/00/5F/wKgA3V-0hJ2AXf-5AAFPtVRrACs278.jpg)
-l（Lightness）：代表亮度，也是一个百分比值，取值在0%~100%，0%最暗，100%最亮。

```css
.box {
  color: hsl(120,50%,50%);
}
```

**hsla(h,s, l, a)** hsla色彩是hsl色彩值的扩展，此函数接受以下所述的四个参数：
-h（Hue）：代表色调，取值在0度~360度之间，0度是红色，120度是绿色，240度是蓝色。360度也是红色。
-s（Saturation）：代表饱和度，是色彩的纯度，是一个百分比的值，取值在0%~100%，0%饱和度最低，100%饱和度最高
-l（Lightness）：代表亮度，也是一个百分比值，取值在0%~100%，0%最暗，100%最亮。
-a alpha：此参数用于定义颜色的不透明度。它介于0到1之间（0为完全透明1为完全不透明）。

```css
.box {
  color: hsla(120,50%,50%, .5);
}
```



# 五、盒子模型


![盒模型.png](http://edu.yueqian.com.cn/group1/M00/00/5F/wKgA3V-0ioqAFo2WAAAZaWlDhNg645.png)


### 1、内容 content 

**概念**：由内容边界限制，容纳着元素的“真实”内容，例如文本、图像，或是一个视频播放器。它的尺寸为内容宽度（或称 content-box 宽度）和内容高度（或称 content-box 高度）。它通常含有一个背景颜色（默认颜色为透明）或背景图像。

> 如果 box-sizing 为 content-box（默认），则内容区域的大小可明确地通过 width、min-width、max-width、height、min-height，和 max-height 控制。

### 2、内边距 padding 

**概念**：由内边距边界限制，扩展自内容区域，负责延伸内容区域的背景，填充元素中内容与边框的间距。它的尺寸是 padding-box 宽度 和 padding-box 高度(padding-box这个已经被舍弃，不存在，或者说很多浏览器是不支持的)。

> 内边距的粗细可以由 padding-top、padding-right、padding-bottom、padding-left，和简写属性 padding 控制。

### 3、边框 border 

**概念**：由边框边界限制，内边距外部区域，是容纳边框的区域。

> 边框的粗细由 border-width 和简写的 border 属性控制。如果 box-sizing 属性被设为 border-box，那么边框区域的大小可明确地通过 width、min-width, max-width、height、min-height，和 max-height 属性控制。
> 假如盒子上设有背景（background-color 或 background-image），背景颜色将会一直延伸至边框的外沿，背景图片在边框的内沿。此默认表现可通过 CSS 属性 background-clip 来改变。

**边框相关属性**

- border-width：指定边框的宽度(粗细) 
- border-style: 指定边框的样式，常用可选值： none （无边框），hidden （与 "none" 相同。不过应用于表时除外，用于解决边框冲突），solid （单实线），double（双实线）
- border-color: 指定边框的颜色

```css
.box { 
  border-width: 1px; 
  border-style: solid; 
  border-color: black; 
} 
```

- border 上面三个属性的合并简写形式

```css
.box { 
  border: 1px solid black;
} 
```

**注意**：边框允许单独设置四条边，属性为 **border-top**，**border-button**，**border-left**，**border-right**

**案例**：实现小三角形 

```html
<style>
.tall {
            box-sizing: border-box;
            width: 0;
            height: 0;
            border-left: 0; /* 在CSS规范中我们约定使用0替代none关键字 */
            border-right: 10px solid #00aaee;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
        }
</style>
<style>
    /*    不占位置
          右三角： border-width 的右边框长度为 0
                  border-color 的左边给颜色
        
    */
  .right {
            width: 0;
            height: 0;
            border-width: 20px 0px 20px 20px;
            border-style: solid;
            border-color: rgba(0, 0, 0,0) rgba(0, 0, 0,0) rgba(0, 0, 0,0) skyblue;
        }
</style>

<div class="tall"></div>
```

### 4、外边距 margin

由外边距边界限制，用空白区域扩展边框区域，以分开相邻的元素。它的尺寸为 margin-box 宽度 和 margin-box 高度(很多浏览器不支持，可忽略)。

> 外边距区域的大小由 margin-top、margin-right、margin-bottom、margin-left，和简写属性 margin 控制。在发生外边距合并的情况下，由于盒之间共享外边距，外边距不容易弄清楚。

### 5、计算盒子大小

```css
box-sizing: content-box (默认) | border-box
 /* 

盒子大小的宽度：width(content) + padding-left + padding-right + border-left-width + border-right-width; 高度同理可得

适用范围是 当盒子宽度和高度设置好后，在后期开发中添加了padding 如没有修改 box-sizing 的大小则会将盒子撑大，导致盒子不能跟原先设置的一样
    故可以将 box-sizing 设置为 border-box padding会通过占据 width 和 height 的长度来控制 padding 
*/
```

### 6、块级元素水居中

```css
.box {
    width:100px;
    height:40px;
    margin-left: auto;
    margin-right: auto;
}
```

行内元素不能设置margin-top 和 margin-bottom ，但可以设置 margin-left 和 margin-right。设置 padding 时会影响到其他元素。

### 7、display

**概念**：display 属性可以设置元素的内部和外部显示类型。元素的外部显示类型将决定该元素在流式布局中的表现（块级或内联元素）；元素的内部显示类型可以控制其子元素的布局（例如：grid 或 flex）。

- 外部显式类型：
  1. block 元素生成一个块元素作用域，在正常流中生成元素前后的换行符（独占一行）。可以设置 width、 height、 margin 和 padding 属性。
  2. inline 该元素是个内联元素，这些元素不会在其前后生成换行符（不会独占一行）。在正常流中，如果有空间，下一个元素将位于同一行上，如果没有空间，下个元素将换行。内联元素设置width,height属性无效。内联元素的margin属性只在“水平方向”会生效，而padding都会生效。
- 遗留显式类型： 
  1. inline-block 元素生成一个行内块元素。它将与周围的内容一起流动，元素不再独占一行但元素具有block的属性，可设置width、 height、 margin 和 padding 属性。 
- 内部显式类型：  
  1. **table** 该属性元素类似于HTML`<table>`元素。是一个块级元素。
  2. flex 弹性盒子，元素的行为类似于块元素。
  3. grid 网格，元素的行为类似于块元素。  

> 请注意，对于行内元素来说，尽管内容周围存在内边距与边框，但其占用空间（每一行文字的高度）则由 line-height 属性决定，即使边框和内边距仍会显示在内容周围。

### 8、overflow 

**概念**：CSS属性 overflow 定义当一个元素的内容太大而无法适应 块级格式化上下文 时候该做什么。

```css
.box {
    overflow: visible | hidden | scroll | auto | inherit;
}
```

- visible (默认)：内容不会被修剪，会呈现在元素框之外 

```css
.box {
  overflow: visible;
}
```

![visible.png](http://edu.yueqian.com.cn/group1/M00/00/64/wKgA3V-07y2AN0iZAAAjCu1W6qU113.png)

- hidden：内容会被修剪，并且其余内容不可见

```css
.box {
  overflow: hidden;
}
```

![hidden.png](http://edu.yueqian.com.cn/group1/M00/00/64/wKgA3V-07z2AFRxNAAAVLHIkAu4473.png)

- scroll：内容会被修剪，浏览器会显示滚动条以便查看其余内容 

```css
.box {
  overflow: scroll;
}
```

![scroll.png](http://edu.yueqian.com.cn/group1/M00/00/64/wKgA3V-070SAJOpiAAAWhPLJMUM596.png)

- auto：由浏览器定夺，如果内容被修剪，就会显示滚动条

```css
.box {
  overflow: auto ;
}
```

![auto.png](http://edu.yueqian.com.cn/group1/M00/00/64/wKgA3V-070yAb7SCAAAZMkArfUI657.png)

- inherit： 规定从父元素继承overflow属性的值

```css
.box {
  overflow: inherit;
}
```



# 六、float 浮动


```html
.box {
  float: left | right | none | inherit
}
```

- left：元素向左浮动。
- right：元素向右浮动。
- none： 默认值。元素不浮动，并会显示在其在文本中出现的位置。
- inherit： 规定应该从父元素继承 float 属性的值。

**注意**：

1. 假如在一行之上只有极少的空间可供浮动元素，那么这个元素会跳至下一行，这个过程会持续到某一行拥有足够的空间为止。

2. 浮动元素会脱离正常的文档布局流，并吸附到其父容器的float属性指定位置。在正常布局中位于该浮动元素之下的内容，此时**会围绕着浮动元素，填满其剩余的空间**。如果空间不足于放文档流的内容，则会往下显示。 如：

   ```html
   <style>
      main {
               width: 600px;
               border: 1px solid pink;
           }
           main div {
               width: 100px;
               height: 100px;
               border: 1px solid #333;
               margin-bottom: 3px;
           }
           main .one {
               width: 110px;
               background-color: red;
               float: left;
           }
           main .two {
               width: 120px;   /* 将 width 就可以将内容放入*/
               background-color: green;
               text-align: center;
           }
   </style>
   <main>
       <div class="one">1</div>
       <div class="two">2</div>
    </main>
   ```

   <img src="https://i.loli.net/2021/07/15/FaxvhLWzHg7J6eK.png" style="zoom:80%;" />

3. 注意浮动内容仍然遵循盒子模型诸如外边距和边框。通过设置外边距就能阻止其他元素紧贴浮动元素。



**清除浮动**

- 为什么要清除浮动？

  1. 由于浮动元素脱离了文档流，所以父元素的高度无法被撑开，且margin 无法设置，影响了与父元素同级的元素。

  2. 浮动元素同级的非浮动元素会跟随其后，因为浮动元素脱离文档流不占据原来的位置, 阻止非浮动元素环绕。

- 清除浮动的方法：

  1. 在想让非浮动停止的元素上设置 clear 属性，（不能解决父元素塌陷问题和margin不能正常显示问题）

  ```css
  footer {
          clear: left | right | both;
  }
  ```

  -  left：停止任何活动的左浮动
  -  right：停止任何活动的右浮动
  -  both：停止任何活动的左右浮动

  2. 给父元素添加overflow: hidden （不推荐）

  3. 给父元素内部底下添加一个新标签，给这个新标签设置clear:both;

  4. 利用伪元素:after 给父元素添加以下属性

  ```css
  父元素:after {
    content:""; 
    display:block; /*将文本转为块级元素*/
    clear:both; /*清除浮动*/
  }
  
  父元素 {
    zoom:1; /*这是针对于IE6/7的，因为IE6/7不支持:after伪类，这个神奇的zoom:1让IE6/7的元素可以清除浮动来包裹内部元素。*/
  }
  ```

  5. 利用双伪元素:before :after 清除浮动

     ```css
     父元素:after,
     父元素:after {
       content:""; 
       display:block; /*将文本转为块级元素*/
       clear:both; /*清除浮动*/
     }
       
     父元素 {
       zoom:1;
     }
     ```

- 判断盒子在页面的位置

  * **判断盒子是否浮动，浮动则在浮动层（不占据文档流的位置）**
  * **不浮动则在文档流上依次类推，根据文档流和浮动层存在的盒子按序排序**



# 七、外边距重叠问题（补充）

块的上外边距(margin-top)和下外边距(margin-bottom)会合并为单个边距（左右边距不存在此问题），其大小为**单个边距的最大值**(或如果它们相等，则仅为其中一个)，这种行为称为边距折叠。

* 父元素和子元素之间

  ```html
  <style>
     .father {
          width: 400px;
          height: 400px;
          background: skyblue;
          margin-top: 80px;
      }
      .son {
          width: 200px;
          height: 200px;
          background: #f0f0f0;
          margin-top: 180px;
          margin-bottom: 10px;
      }
  </style>
  <div class="father">
        <div class="son"></div>
   </div>
  ```

  * 两个嵌套关系的（父子关系）块级元素，当父元素有上外边距或者没有上外边距（margin-top），子元素也有上外边距（margin-top）的时候。**两个上外边距会合成一个上外边距，以值相对较大的上外边距值为准**。

* 解决方法：给父元素添加其中一个属性即可。本质是触发 **BFC** 规则

  * **border-top: 1px solid transparent;**
  * **padding-top: 1px;**
  * **display: inline-block;**
  * **float: left;**
  * **position: absolute;**
  * **position: fixed;**
  * **overflow: scroll;**

* 兄弟元素之间

  ```html
  <style>
   .bro1 {
       height: 100px;
       background: #ccc;
       margin-bottom: 50px;
       border: 1px solid #ccc;
     }
  
     .bro2 {
        height: 100px;
        background: red;
        margin-top: 100px;
        overflow: auto;
      }
  </style>
  <div class="bro1"></div>
  <div class="bro2"></div>
  ```

  * 两个兄弟元素一个添加 margin-bottom 另外一个添加 margin-top 时，之间上下空隙距离取决于两者的最大值。

* 解决方法：

  *   **给其中一个元素添加父元素，然后触发BFC规则（不推荐）**
  *   **只设置其中一个块级元素的margin值即可（推荐）**




# 八、css背景样式属性

### 1、background-color ( 背景颜色 )

属性定义了 CSS 中任何元素的背景颜色。属性接受任何有效的`<color>`值。**背景色扩展到元素的内容和内边距中**。

### 2、background-image (背景图片) 

通过 background-image 属性允许在元素的背景中显示图像。

> 默认情况下，大图不会缩小以适应元素，因此我们只能看到它的一部分，而小图则是平铺以填充方框。
> 背景颜色和背景图片可以同时设置，背景图片会在背景颜色上方

```css
.box {
  background-image: url(balloons.jpg);
}
```

### 3、background-repeat (控制背景平铺)

使用 background-repeat 属性可以控制图像的平铺行为

```css
.box {
  background-image: url(balloons.jpg);
  background-repeat: no-repeat | repeat-x | repeat-y | repeat;
}
```

- no-repeat：不重复平铺图片。
- repeat-x：水平重复平铺图片。
- repeat-y：垂直重复平铺图片。
- repeat (默认)：在两个方向重复平铺图片。

### 4、background-size (控制背景图片大小)

通过 background-size属性，它可以设置长度或百分比值，来调整图像的大小以适应背景。

```css
.box {
  background-image: url(balloons.jpg);
  background-size: <width> <height> | cover | contain;
}
```

- `<width> <height>` 分别设置图片的宽度高度可以是长度或百分比值，如果只设置一个值该值将会设置图片宽度，高度按图片比例进行缩放。
- cover: 保证宽高比的情况下放大图片占满盒子区域。在这种情况下，有些图像可能会跳出盒子外。
- contain: 保证宽高比的情况下适应盒子区域。在这种情况下，有些可能在图像的任何一边或顶部和底部出现间隙。

### 5、background-position (背景图像定位)

background-position属性允许您选择背景图像显示在其应用到的盒子中的位置。它使用的坐标系中，框的左上角是(0,0)，框沿着水平(x)和垂直(y)轴定位。

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: <x> <y>;
}
```

- `<x> <y>` 分别表示图片相对盒子容器的x轴y轴的偏移量，可以是具体的距离长度值、百分比或者是关键字
  1. x轴支持的关键字：left center right
  2. y轴支持的关键字：top center bottom
- 精灵图定位
  - **如何确定具体的图片位置：假如给定第几行和第几列，则该图片的位置大致推断**
  - **确定每张图片的宽高：95px  95px**
  - **左上角的图片位置：12px  22px**
  - **图片和图片之间的宽高是多少： 30px  45px**
  - **假如取的是第m行，第n列，则**
    -  **宽度位置：12 + (n - 1) \* 125(95+30)**
    -  **高度位置：22 + (m - 1) \* 140(95+45)**

### 6、background-attachment （背景附加）

通过 background-attachment 可以指定当容器内容需要滚动时，背景如何滚动【很少用】。

```css
.box {
  background-attachment : scroll | fixed | local;
}
```

- scroll: **背景图相对于元素固定**，一般情况下，背景随页面滚动而移动，内容动时背景图也动，即背景和内容绑定；特殊情况是，对于可以滚动的元素（设置为overflow:scroll的元素）,当background-attachment设置为scroll时，背景图不会随元素内容的滚动而滚动。
- fixed: **背景图相对于视口固定**，即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动(即页面滚动，背景也不动)。
- local: **背景图相对于元素内容固定**，这个值是后来添加的(它只在Internet Explorer 9+中受支持，而其他的在IE4+中受支持)，对于可以滚动的元素（设置为overflow:scroll的元素）,设置background-attachment:local，则背景会随内容的滚动而滚动。

因为背景图是相对于元素自身内容定位，开始固定，元素出现滚动条后背景图随内容而滚动。
使元素的背景在页面滚动时或滚动了元素内容时背景都会滚动。

### 7、background-origin (背景定位)

background-origin 属性规定 background-position 属性相对于什么位置来定位。
**注意**：如果背景图像的 background-attachment 属性为 "fixed"，则该属性没有效果。

```css
.box {
  background-origin: padding-box | border-box | content-box;
}
```

- padding-box (默认)： 背景图像相对于内边距框左上角来定位。
- border-box： 背景图像相对于边框盒左上角来定位。
- content-box：背景图像相对于内容框左上角来定位。

### 8、background-clip (背景的绘制区域)

background-clip 属性规定背景的绘制区域。

```css
.box {
  background-clip:: padding-box | border-box | content-box;
}
```

- padding-box (默认)： 背景绘制区域包含padding content。
- border-box： 背景绘制区域包含border padding content。
- content-box：背景绘制区域包含content。


### 9、background 

background属性是以下属性的合并简写形式：

1. background-color
2. background-image
3. background-attachment
4. background-position
5. background-size
6. background-repeat
7. background-origin
8. background-clip

**注意**：background一些规则，需要在简写背景属性时遵循，例如:

1. background-color **只能开头指定**。
2. background-size **值只能包含在背景位置之后**，用'**/**'字符分隔，例如：center/80%。
3. 不需要设置的属性可以省略

例：

```css
.box {
  background: yellow url(big-star.png)  fixed center center / 400px 200px no-repeat;
}
   
```

### 10、背景多重值

在一个元素中可以设置多个背景，在单个属性值中指定多个background-image值，用逗号分隔每个值。

例：

```css
.box {
    background-image: url(image1.png), url(image2.png), url(image3.png), url(image1.png);
    background-repeat: no-repeat, repeat-x, repeat;
    background-position: 10px 20px,  top right;
}
```

**注意**：background简写属性同样允许您一次设置所有不同的属性。

例：

```css
.box {
  background:   
    url(image3.png) center center / 400px 200px no-repeat,
    url(big-star.png) center no-repeat, 
    url(small-star.png) center bottom / contain no-repeat pink,
    
}
    
```

**注意**：background 简写多重值时,**背景颜色**一定要放在**最后一个多重值**中。



# 九、文本相关属性

**介绍**：在 CSS 中可以通过设置文本属性定义文本的外观。如：改变文本的颜色、字符间距，对齐文本，装饰文本，对文本进行缩进，等等。

### 1、text-indent ( 缩进文本 )

通过使用 text-indent 属性，所有元素的第一行都可以缩进一个给定的长度，甚至该长度可以是负值。

这个属性最常见的用途是将段落的首行缩进

**注意**：一般来说，可以为**所有块级元素应用 text-indent**，但无法将该属性应用于行内元素，图像之类的替换元素上也无法应用 text-indent 属性。不过，如果一个块级元素（比如段落）的首行中有一个图像，它会随该行的其余文本移动。

**提示**：如果想把一个行内元素的第一行“缩进”，可以用左内边距或外边距创造这种效果。

### 2、text-align ( 文本对齐方式 )

该属性通过指定行框与哪个点对齐，从而设置块级元素内文本的水平对齐方式。

- left(默认)：把文本排列到左边。
- right：	把文本排列到右边。
- center：	把文本排列到中间。
- justify：	实现两端对齐文本效果。（常用于打印输出）
- inherit：	规定应该从父元素继承 text-align 属性的值。

### 3、letter-spacing ( 字母或者字符的间距 )

该属性定义了在文本字符框之间插入多少空间。由于字符字形通常比其字符框要窄，指定长度值时，会调整字母之间通常的间隔。因此，normal 就相当于值为 0。

- normal(默认)：规定字符间没有额外的空间。
- length：定义字符间的固定空间（允许使用负值）。
- inherit：规定应该从父元素继承 letter-spacing 属性的值。

### 4、word-spacing ( 单词的间距 )

该属性定义元素中字之间插入多少空白符。针对这个属性，“字” 定义为由空白符包围的一个字符串。如果指定为长度值，会调整字之间的通常间隔；所以，normal 就等同于设置为 0。允许指定负长度值，这会让字之间挤得更紧。

- normal(默认)：定义单词间的标准空间。
- length：定义单词间的固定空间（允许使用负值）。
- inherit：规定应该从父元素继承 word-spacing 属性的值。

### 5、text-transform ( 文本转换 )

CSS 里面的text-transform属性来改变英文中字母的大小写。它通常用来统一页面里英文的显示，且无需直接改变 HTML 元素中的文本。

- none (默认)：不改变文字。
- lowercase：定义无大写字母，仅有小写字母。
- uppercase：	定义仅有大写字母。
- capitalize：	文本中的每个单词以大写字母开头。
- initial：	使用默认值
- inherit：	使用父元素的text-transform值。


### 6、text-decoration ( 文本装饰 )

这个属性允许对文本设置某种效果，如加下划线。如果后代元素没有自己的装饰，祖先元素上设置的装饰会“延伸”到后代元素中。

- none (默认)： 定义标准的文本。
- underline：定义文本下的一条线。
- overline：定义文本上的一条线。
- line-through：定义穿过文本下的一条线。
- inherit：规定应该从父元素继承 text-decoration 属性的值。

### 7、white-space ( 文本空白 )

white-space 属性设置如何处理元素内的空白。

- normal(默认):空白会被浏览器忽略。
- pre:	空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
- nowrap:	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
- pre-wrap:	保留空白符序列，但是正常地进行换行。
- pre-line:	合并空白符序列，但是保留换行符。
- inherit:	规定应该从父元素继承 white-space 属性的值。

### 8、text-overflow 

CSS 属性确定如何向用户发出未显示的溢出内容。它可以被剪切，显示一个省略号或显示一个自定义字符串。
![textoverflow.png](http://edu.yueqian.com.cn/group1/M00/00/64/wKgA3V-08YCAeGzSAAAaMGxMNw8445.png)

```css
p {
    /* 要实现文本超出需要给容器一个固定大小后设置以下属性 */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```

- clip：此为默认值。这个关键字的意思是"在内容区域的极限处截断文本"，因此在字符的中间可能会发生截断。如果你的目标浏览器支持 text-overflow: ''，为了能在两个字符过渡处截断，你可以使用一个空字符串值 ('') 作为 text-overflow 属性的值。
- ellipsis：这个关键字的意思是“用一个省略号 `…`来表示被截断的文本”。这个省略号被添加在内容区域中，因此会减少显示的文本。如果空间太小到连省略号都容纳不下，那么这个省略号也会被截断。

> 该属性还有其他属性值不常用我们就不在这里讲解了

### 9、color ( 文本颜色 )

这个属性设置了一个元素的前景色（在 HTML 表现中，就是元素文本的颜色）

```css
p {
    color: #fc0
}
```

- color_name：	规定颜色值为颜色名称的颜色（比如 red）。
- hex_number：	规定颜色值为十六进制值的颜色（比如 #ff0000）。
- rgb_number：	规定颜色值为 rgb 代码的颜色（比如 rgb(255,0,0)）。
- hsl_number：	规定颜色值为 rgb 代码的颜色（比如 hsl(180,100%,50%)）。
- inherit：	规定应该从父元素继承颜色。

### 10、line-height (行高)

该属性设置行间的距离（行高）。该属性会影响行框的布局。在应用到一个块级元素时，它定义了该元素中基线之间的最小距离而不是最大距离。不允许使用负值。
![lineheight.png](http://edu.yueqian.com.cn/group1/M00/00/6B/wKgA3V-1w3uAXW4EAADLv9iQ5Cs442.png)

```css
.small {
  line-height:90%
}
```

- normal(默认)：设置合理的行间距。
- number：设置数字，此数字会与当前的字体尺寸相乘来设置行间距。
- length：设置固定的行间距。
- %：基于当前字体尺寸的百分比行间距。
- inherit：	规定应该从父元素继承 line-height 属性的值。



# 十、字体相关

### 1、font-family ( 字体系列 )

font-family 规定元素的字体系列。

```css
p {
  font-family:"Times New Roman",Georgia,Serif;
}
```

有两种类型的字体系列名称：
**指定的系列名称**：具体字体的名称，比如："times"、"courier"、"arial"。
**通常字体系列名称**：比如："serif"、"sans-serif"、"cursive"、"fantasy"、"monospace"

> 字体优雅降级:
>
> 使用某种特定的字体系列（Geneva）完全取决于用户机器上该字体系列是否可用；这个属性没有指示任何字体下载。因此，强烈推荐使用一个通用字体系列名作为后路。
>
> 所有浏览器都有几种默认字体。这些通用字体包括monospace，serif和sans-serif。
>
> 当字体不可用，你可以告诉浏览器通过 “降级” 去使用其他字体。
>
> 例如，如果你想将一个元素的字体设置成Helvetica，当Helvetica不可用时，降级使用sans-serif字体，那么可以这样写：
>
> ```css
>  p {
>           font-family: Helvetica, sans-serif;
>  }
> ```
>
> 通用字体名字不区分大小写。同时，也不需要使用引号，因为它们是 CSS 关键字。

### 2、font-style ( 字体风格 )

font-style 属性定义字体的风格,设置使用斜体、倾斜或正常字体。斜体字体通常定义为字体系列中的一个单独的字体

```css
p.normal {
  font-style:normal;
}
p.italic {
  font-style: italic;
}
p.oblique {
  font-style: oblique;
}
```

- normal (默认):浏览器显示一个标准的字体样式。
- italic：	浏览器会显示一个斜体的字体样式。
- oblique：	浏览器会显示一个倾斜的字体样式。
- inherit：	规定应该从父元素继承字体样式。

> 注意：Italic是使用了文字本身的斜体字体，oblique是让没有斜体字体的文字做倾斜处理。所以有少量的不常用字体没有斜体属性，如果我们使用Italic则会没有效果。

### 3、font-variant ( 字体变形 )

属性设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。

```css
p.small {
  font-variant:small-caps;
}
```

- normal (默认值)：浏览器会显示一个标准的字体。
- small-caps：浏览器会显示小型大写字母的字体。
- inherit：规定应该从父元素继承 font-variant 属性的值。


### 4、font-weight ( 字体加粗 )

font-weight 属性设置文本的粗细。该属性用于设置显示元素的文本中所用的字体加粗。

```css
p.normal {
  font-weight: normal;
}
p.thick {
  font-weight: bold;
}
p.thicker {
  font-weight: 900;
}
```

- normal(默认值)：定义标准的字符。
- bold：	定义粗体字符。
- bolder：	定义更粗的字符。
- lighter：	定义更细的字符。
- 100~900：   定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。(该属性值只有整百)
- inherit：	规定应该从父元素继承字体的粗细。

>  字体粗细属性是根据用户电脑上安装的字体相应匹配改变的。在很多情况下，由于系统作了最相近的匹配，因此看不出不同的 font-weight 值有什么区别。

### 5、font-size ( 字体大小 )

该属性设置元素的字体大小。注意，实际上它设置的是字体中字符框的高度；实际的字符字形可能比这些框高或矮（通常会矮）。

```css
h1 {
  font-size: 250%;
}
h2 {
  font-size: 2rem;
}
p {
font-size: 18px;
}
```

- length：把 font-size 设置为一个固定的值。
- %：	把 font-size 设置为基于父元素的一个百分比值。

### 6、font ( 字体简写方式 )

font 简写属性在一个声明中设置所有字体属性。此属性可以设置："line-height"指定行间距。

可以按顺序设置如下属性：

1. font-style
2. font-variant
3. font-weight
4. font-size/line-height
5. font-family

```css
p.ex1 {
  font:italic arial,sans-serif;
}

p.ex2 {
  font:italic bold 12px arial,sans-serif;
}

p.ex3 {
  font:italic bold 12px/20px arial,sans-serif;
}
```

> 可以不设置其中的某个值，比如 font:100% verdana; 也是允许的。未设置的属性会使用其默认值。



# 十一、position 属性值

## 1、static

**介绍**： 该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。

```css
.box {
  position: static;
}
```

![static.png](http://edu.yueqian.com.cn/group1/M00/00/60/wKgA3V-0zAyAUfpvAAByR0ly_Y8513.png)

## 2、relative

**介绍**： 该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。

```css
.box {
  position: relative;
  top: 40px; 
  left: 40px;
}
```

![relative.png](http://edu.yueqian.com.cn/group1/M00/00/60/wKgA3V-0zBSAHMEgAABwyNC22FE106.png)

> position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。

## 3、absolute

**介绍**：**元素会被移出正常文档流，并不为元素预留空间**，该元素会相对于最近的非 static 定位**祖先元素左上角**为坐标原点进行偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins）【外边距的四个边，可以写成margins】，且不会与其他边距合并。

```css
.box {
  position: absolute;
  top: 40px; 
  left: 40px;
}
```

![absolute.png](http://edu.yueqian.com.cn/group1/M00/00/60/wKgA3V-0zBuAQmE9AABwMVkMsXc775.png)


## 4、fixed

**介绍**：**元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）左上角为坐标原点进行偏移**。元素的位置在屏幕滚动时不会改变。fixed 属性会创建新的层叠上下文。

```css
.box {
  position: fixed;
  top: 40px; 
  left: 40px;
}
```

![absolute.png](http://edu.yueqian.com.cn/group1/M00/00/60/wKgA3V-0zBuAQmE9AABwMVkMsXc775.png)

> 注意：fixed一般都会以页面左上角作为坐标原点，但是如果该元素中存在某个祖先元素设置了 transform, perspective 属性，或 filter 属性非 none 时，元素将会以该祖先左上角作为坐标原点。

## 5、sticky（粘性定位）

**介绍**：元素根据正常文档流进行定位，然后相对它的最近滚动祖先和最近块级元素祖先，包括table-related元素进行偏移。粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位偏移值不会影响任何其他元素的位置。

```css
/* 
在 viewport 视口滚动到元素 top 距离小于 20px 之前，元素为相对定位。
之后，元素将固定在与顶部距离 20px 的位置，直到 viewport 视口回滚到阈值以下。
*/
.box {
 position: -webkit-sticky;
 position: sticky;
 top: 20px;
}
```

![sticky.gif](http://edu.yueqian.com.cn/group1/M00/00/60/wKgA3V-0zCKARR8hAAiH0-hXvvU098.gif)

> 该值总是创建一个新的层叠上下文（stacking context）。注意，一个sticky元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的overflow 是 hidden, scroll, auto, 或 overlay时）


## 6、层叠上下文（补充）

**概念**：层叠上下文是HTML元素的三维概念，这些HTML元素在一条垂直于电脑屏幕或网页的 z 轴上延伸，HTML 元素依据其自身层叠水平（元素的优先显示顺序）占用层叠上下文的空间。
![timg 2.jpg](http://edu.yueqian.com.cn/group1/M00/00/60/wKgA3V-001WAQN-xAAD_FR8_cuQ601.jpg)


## 7、定位相关属性

**z-index**：设置元素的层叠水平，该属性设定了一个定位元素及其后代元素。当元素之间重叠的时候， z-index 较大的元素会覆盖较小的元素在上层进行显示。

```css
.box {
    position: absolute;
/* 字符值 */
z-index: auto;

/* 整数值 */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1;/* 使用负值降低优先级 */

}
```

- auto： 盒子不会创建一个新的本地堆叠上下文。在当前堆叠上下文中生成的盒子的堆叠层级和父级盒子相同。
- `<整数值>`： （整型数字）是生成的盒子在当前堆叠上下文中的堆叠层级。此盒子也会创建一个堆叠层级为 0 的本地堆叠上下文。这意味着后代（元素）的 z-indexes 不与此元素的外部元素的 z-indexes 进行对比。

> 注意： z-index 必须配合 relative、 absolute、 fixed、 sticky 使用。

**位置属性**：CSS通过 **top、right、bottom、left** 这四个属性定义了定位元素的上、右、下、左外边距边界与其参照元素对应边之间的偏移，非定位元素设置此属性无效。

位置属性的效果取决于元素的position属性：

- 当position设置为absolute或fixed时，位置属性指定了定位元素与其包含参照元素对应方向边距之间的偏移。
- 当position设置为relative时，位置属性指定了元素的对应方向边界与自身初始位置的偏移。
- 当position设置为sticky时，如果元素在viewport里面，位置属性的效果和relative等同；如果元素在viewport外面，位置属性的效果和position为fixed等同。
- 当position设置为static时，位置属性无效。
- 当left和right​​​​​​同时指定时，元素的位置会被重复指定。当容器是从左到右时，left的值会被优先设定；当容器是从右到左时，right的值会被优先设定。
- 当top和bottom同时指定时，并且 height没有被指定或者指定为auto的时候，top和bottom​​​​​都会生效，在其他情况下，如果 height被限制，则top属性会优先设置，bottom属性则会被忽略。


## 8、vertical-align (补充)

CSS 的属性 vertical-align 用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。

```css
img {
 vertical-align: baseline | top | middle | bottom | sub | text-top;
}
```

- baseline：使元素的基线与父元素的基线对齐。HTML规范没有详细说明部分可替换元素的基线，如`<textarea>` ，这意味着这些元素使用此值的表现因浏览器而异。

> 可以替换元素有 `<iframe>` `<video>` `<img>`

- top：使元素及其后代元素的顶部与整行的顶部对齐。

- middle：使元素的中部与父元素的基线加上父元素x-height（x字符高度）的一半对齐。

- bottom：使元素及其后代元素的底部与整行的底部对齐。

- sub：使元素的基线与父元素的下标基线对齐。

- text-top：使元素的顶部与父元素的字体顶部对齐。

vertical-align属性可被用于两种环境：

- 使行内元素盒模型与其行内元素容器垂直对齐。例如，用于垂直对齐一行文本的内的图片`<img>`：
  ![verticalimg.png](http://edu.yueqian.com.cn/group1/M00/00/6B/wKgA3V-1xT-ABmotAAAOodzlQG8753.png)
- 垂直对齐表格单元内容:
  ![verticaltabel.png](http://edu.yueqian.com.cn/group1/M00/00/6B/wKgA3V-1xUaAOXbPAAAfn8ejIac248.png)

> 注意： vertical-align 只对行内元素、表格单元格元素生效：不能用它垂直对齐块级元素。     

​     

# 十二、媒体查询

```css
/* 当浏览器视口至少为600px及以上时 */
@media screen and (min-width: 600px) {
  .element {
    /* 应用一些样式 */
  }
/* 小于320px，颜色为红色 */
/* 320px <= X <= 768px，颜色为蓝色 */
/* 768px <= X <= 992px，颜色为orange */
/* 992px <= X <= 1200px，颜色为purple */
@media screen and (max-width: 320px) {
      .box {
         background: red;
      }
}

@media screen and (min-width:320px) and (max-width: 768px) {
      .box {
        background: orange;
      }
}

@media screen and (min-width:768px) and (max-width: 992px) {
     .box {
        background: purple;
     }
}

```

**注意**：除了视口宽度外，我们还有很多其他查询目标。这可能是屏幕分辨率，设备方向，操作系统首选项等等。

## 1、媒体查询语法

###  在HTML中使用媒体查询

HTML为某些元素增加了media属性配合媒体查询语句实现媒体查询功能

**`<link>`元素实现媒体查询**

```html
<html>
  <head>
    <!-- 提供给所有用户 -->
    <link rel="stylesheet" href="all.css" media="all" />
    <!-- 提供给设备宽度至少20em的用户 -->
    <link rel="stylesheet" href="small.css" media="(min-width: 20em)" />
    <!-- 提供给设备宽度至少64em的用户 -->
    <link rel="stylesheet" href="medium.css" media="(min-width: 64em)" />
    <!-- 提供给设备宽度至少90em的用户 -->
    <link rel="stylesheet" href="large.css" media="(min-width: 90em)" />
    <!-- 提供给设备宽度至少120em的用户 -->
    <link rel="stylesheet" href="extra-large.css" media="(min-width: 120em)" />
    <!-- 提供打印设备，如打印机 -->
    <link rel="stylesheet" href="print.css" media="print" />
  </head>
  <!-- ... -->
</html>
```

> 通过以需要的设备下载和提供样式的方式来拆分样式，这可能是一种微调网站性能的好方法。
>
> 但是需要明确的是，这并不总是阻止与那些媒体查询不匹配的样式表的下载,只是为它们分配了较低的加载优先级。
>
> 如果像手机这样的小屏幕设备访问该站点，它将仅在与其视口大小匹配的媒体查询中下载样式表。但是，如果出现较大的桌面屏幕，它将下载全部文件，因为它与所有这些查询都匹配。

**`<style>`元素实现媒体查询**

```html
<style>
  p {
    background-color: blue;
    color: white;
  }
</style>

<style media="all and (max-width: 500px)">
  p {
    background-color: yellow;
    color: blue;
  }
</style>
```

### 在CSS中使用媒体查询

同样，CSS是使用媒体查询最常见地方。在样式表中通过关键字 **@media** 配合条件查询语句，实现当浏览器匹配查询条件时应用对应的一组样式。

```css
/* 视口宽度介于320px和480px之间,应用以下样式 */
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .card {
    background: #bada55;
  }
}
```

也可以将媒体查询语句配合 **@import** 使用响应式导入其他样式表，但是我们**不建议使用**。因为他影响浏览器性能。

```css
/* 适用于所有屏幕的 基础样式 */
@import url("style.css") screen;
/* 应用于屏幕为纵向时（高度大于等于宽度）的样式 */
@import url('landscape.css') screen and (orientation: portrait);
/* 应用于打印设备样式 */
@import url("print.css") print;
```

## 2、媒体查询的语法

现在我们主要就CSS对媒体查询进行剖析讲解
![mediaqueryanatomy.jpg](http://edu.yueqian.com.cn/group1/M00/00/3F/wKgA3V-vgoaAOyfpAABGNFRaL38387.jpg)

### @media

在媒体查询规则第一个要素就是 **@media** 关键字自身。使用它，您可以指定一个媒体查询语句和一个CSS块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该CSS块才能应用于该文档。

```css
@media [media-type] ([media-feature]) {
  /* Styles! */
}
```

@media 规则可置于您代码的顶层或位于其它任何@条件规则组内。

```css
/* 代码的顶层 */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* 任何@条件规则组内 */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

### Media Type (媒体类型)

在媒体查询中我们通过Media Type指定匹配媒体的类型

```css
/* 该媒体类型表示匹配带有屏幕的设备 */
@media screen {
  /* Styles! */
}
```

- all：匹配所有设备
- print：匹配在打印预览中查看的文档或将内容分解为要打印的页面的设备。
- screen：匹配屏幕设备
- speech：匹配可听读内容的设备，例如屏幕阅读器。

**注意** Media Type 支持 only 关键字，他的作用是在支持媒体查询的浏览器中忽略only关键字，在不支持媒体查询的浏览器中隐藏样式表

> 为了在可以预览打印设备输出样式，所有主流浏览器的开发工具中都可以模拟打印设备样式表输出结果
>
> 相关文档：https://css-tricks.com/can-you-view-print-stylesheets-applied-directly-in-the-browser/

### Media featuers (媒体特征)

定义了要匹配的媒体类型后，就可以开始定义要与之匹配的特征。
我们已经演示了很多查询屏幕媒体宽度的例子，其中 screen 是媒体类型，min-width 和 max-width 就是具有特定值的媒体特征。

```css
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .card {
    background: #bada55;
  }
}
```

在媒体查询中我们有非常多的特征值 W3C 一共将这些媒体特征分成五大类，我们这里只讲解常用的特征。其他相关特征可以在必要时查阅相关文档： https://www.w3.org/TR/mediaqueries-4/#mq-features

| 特征名       | 描述                                                         | 值                      |
| ------------ | ------------------------------------------------------------ | ----------------------- |
| width        | 定义视口的宽度。这可以是特定数字（例如400px）或范围（使用min-width和max-width）。 | <length>                |
| height       | 定义视口的高度。这可以是特定数字（例如400px）或范围（使用min-height和max-height）。 | <length>                |
| aspect-ratio | 定义视口的宽高比。这可以是特定比例（例如1680/957）或范围（使用min-aspect-ratio和max-aspect-ratio）。 | <ratio>                 |
| orientation  | 屏幕的方向，例如根据设备的旋转方式，高大于等于宽（portrait）反之（landscape）。 | portrait / landscape    |
| resolution   | 定义设备的目标像素密度，这可以是特定比例（例如 2dppx）或范围（使用min-resolution和max-resolution） | <resolution> / infinite |

**注意**：-webkit-device-pixel-ratio 是一个非标准的媒体类型，是标准 resolution 媒体类型的一个替代方案.

```css
@media (-webkit-min-device-pixel-ratio: 2) { ... }
/* 等价于 */
@media (min-resolution: 2dppx) { ... }

/* And likewise */
@media (-webkit-max-device-pixel-ratio: 2) { ... }
/* 等价于 */
@media (max-resolution: 2dppx) { ... }
```

### Operators (运算符)

媒体查询像许多编程语言一样支持逻辑运算符，该@media规则本身是一个逻辑运算符。因此我们可以根据特定条件匹配媒体类型。

**and**
 且运算符，表示需要满足 and 运算符指定的两个特征时才匹配。

```css
/* 匹配屏幕宽度为 320px 到 768px 之间 */
@media screen (min-width: 320px) and (max-width: 768px) {
  .element {
    /* Styles! */
  }
}
```

or （或逗号分隔）
使用or或者逗号分隔功能，实现或运算符，表示只需满足其中之一个特征就可匹配。（推荐**使用逗号** or 运算符已经被舍弃）

```css
/* 匹配屏幕为纵向或者宽度至少为1200px  */
@media screen (orientation: portrait), (min-width: 1200px) {
  .element {
    /* Styles! */
  }
}

@media screen (orientation: portrait) or (min-width: 1200px) {
  .element {
    /* Styles! */
  }
}
```

not
否定运算符,通过不支持或不匹配某些特征时才匹配。

```css
/* 当设备是屏幕设备并且不是纵向的时候匹配, 这段代码已经无效原因请看注意 */
@media screen and ( not(orientation: portrait) ) {
  body {
    background-color: none;
  }
}
```

> **注意**：在Level 3中，not关键字不能用于否定单个媒体特征表达式，而只能用于否定整个媒体查询。

```css
/* 当设备时屏幕设备并且不是纵向时匹配 */
@media not screen and (orientation: portrait)  {
  body {
    background-color: none;
  }
}
```



# 十三、弹性盒子

## 1、布局元素

采用 Flex 布局的元素，称为 Flex 容器（flex container）。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item）。
flexbox是一个整体模块，而不是单一的一个属性，它涉及到了很多东西，包括它的整个属性集。它们之中有一些需要在父容器上设置，而有一些则需要在子容器上设置。

<center>

<strong>flex 容器</strong>
![01container.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-squWAFVtaAABZVn6L3xg304.png)

</center>

<center>

<strong>flex 项目</strong>  
![02items.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-sqviAIIgvAABk4X5y6TI217.png)

</center>

创建 Flex 容器 (任何容器元素都支持使用flex布局)。

```css
/* 块级弹性盒子 */
.box{
  display: flex;
}
/* 行内弹性盒子 */
.box{
  display: inline-flex;
}
```

**注意**：Flex 布局需要一些浏览器内核前缀才能支持尽可能多的浏览器

```css
.box {
  display: -webkit-box; 
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
 
```

**注意**，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

## 2、flex容器属性

**flex-direction(布局方向)**:

flex 容器默认存在两根方向轴：水平方向轴和垂直方向轴。通过 flex-direction 属性确立容器的主轴就可以确定 flex 项目在容器中的排列方向（项目默认沿主轴排列）。


![flexdirection.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-s9lKAPCMGAAByx1xFXc8299.png)


```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- row（默认值）：主轴为水平方向，起点在左端。

- row-reverse：主轴为水平方向，起点在右端。

- column：主轴为垂直方向，起点在上端。

- column-reverse：主轴为垂直方向，起点在下端。

**flex-wrap**

默认情况下，所有 flex 项目都将沿着轴线尝试放入一行。通过flex-wrap你可以对此进行更改，允许该属性根据需要包裹项目。

![flexwrap.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-s9oGACNKuAAByxyOJj0s769.png)

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- nowrap （默认）：所有弹性项目都将在一行上，不换行。

![nowrap.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-s_LWAIe2rAAB5INWMGlA411.png)

- wrap：从上到下换行排列。

![wrap.jpg](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-s_MSAWhepAABch09p-ZA868.jpg)

- wrap-reverse：从下到上换行排列。

![wrapreverse.jpg](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-s_M6AawJTAABO5GRti5E797.jpg)

**flex-flow**

flex-flow属性是flex-direction属性和flex-wrap属性的简写，默认值为row nowrap。

```css
.box {
  flex-flow: <flex-direction> <flex-wrap>;
}
```

**justify-content**

justify-content属性定义了沿主轴的对齐方式。当一行中的所有flex项目都确定或已达到最大大小时，它有助于分配剩余的可用自由空间。当项目溢出轴线时，它还对项目的对齐方式施加一些控制。

![justifycontent.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-s9pyACW7lAAFfgv62bVM587.png)

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

- flex-start （默认）：项目基于主轴线在方向的开始处对齐。
- flex-end：项目基于主轴线在方向的末端处对齐。
- center：项目沿线居中
- space-between：项目基于主轴线在方向的两端对齐。
- space-around：项目基于主轴线在方向的两端留白对齐并且每个项目之间保留相等的间隔，项目之间的间隔比项目与边框的间隔大一倍。
- space-evenly：分配项目，以使任意两个项目之间的间距（以及到边缘的间距）相等。

**注意**：浏览器对这些值的支持是细微差别的。例如，某些版本的Edge不支持space-between。

**align-items**

align-items定义了 flex 项目交叉轴上如何对齐方式。

![alignitems.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-s9quAf97CAAFrBzvf4AY302.png)

```css
.box {
  align-items: stretch | flex-start | flex-end | center | baseline ;
}
```

- stretch（默认值）：若flex项目未设置元素交叉轴对应的高度或宽度，项目将拉伸以占满整个容器交叉轴方向指定的宽度或高度。
- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的居中对齐。
- baseline: 项目对齐，如文字的基线对齐。

> **注意**：flex-wrap属性中wrap-reverse会影响到交叉轴的方向。

**align-content**：

align-content属性定义当在交叉轴上有多余的空间时，换行轴线的对齐方式。如果flex项目不换行，该属性不起作用。

![aligncontent.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-s9rmAKt50AAHR6vfqi_8742.png)

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- normal （默认）：将项目包装在默认位置，就像未设置任何值一样。
- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：交叉轴居中对齐
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- space-evenly：项目均匀分布，周围有相等的空间
- stretch：线条伸展以占据剩余空间


## 3、flex项目属性

**order**

默认情况下，flex 项目按源顺序排列,通过order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0 【可以负数，0，也可以是正数】。

![order.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-s--eAW_bRAAC6m4fG_3M188.png)

```css
.item {
  order: <integer>;
}
```

**flex-grow**

flex-grow 定义了flex项目在主轴空间足够时放大比例。它接受无单位正数作为比例。它决定了项目应在flex容器内占用的可用空间量。

> 如果所有项目都flex-grow设置为1，则容器中的剩余空间将平均分配给所有项目。如果其中一个项目的值为2，则剩余空间将尝试占其他项目的两倍。
>
> 默认为0，即如果存在剩余空间，也不放大。

![flexgrow.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-s_CeALNcDAABetrEfhkA484.png)

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

**flex-shrink**

flex-shrink属性定义了项目的缩小比例，它接受无单位正数作为比例。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

> 如果所有项目的flex-shrink属性值都为1，当空间不足时，都将等比例缩小。如果其中某一个项目的flex-shrink属性值为0，则它不会缩小。
>
> 默认为1，即如果空间不足，该项目将缩小。

**flex-basis**

flex-basis属性定义了剩余空间分配之前 元素的默认大小，它可以是长度（例如20％, 40px, 5rem等）或关键字auto。

```css
.item {
  flex-basis: <length>  | auto; /* default auto */
}
```

> 它的默认值为auto，即项目的本来大小。



**flex**
flex属性是flex-grow, flex-shrink 和 flex-basis的合并简写，第二和第三个参数（flex-shrink和flex-basis）是可选的,默认值为0 1 auto。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>?  <'flex-basis'> ]
}
```

> 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
>
> 建议您使用此属性，而不是单独写三个分离的属性，浏览器会推算相关值。

**align-self**

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。


> 默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。


![alignself.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-s-7mAM8VpAABldkN8Z7k756.png)

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```



浏览器兼容

```css
.container {
   display: -webkit-box; /* 谷歌浏览器（移动端手机浏览器） */ 
   display: -webkit-flex; /* 谷歌浏览器 */ 
   display: -moz-box; /* 火狐浏览器 */
   display: -ms-fiebox; /* IE 浏览器 */
   display:flex; /* 主流浏览器（谷歌，火狐， IE9+ 欧拉， safair）*/
}
```







