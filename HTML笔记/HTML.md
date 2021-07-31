![](https://i.loli.net/2021/07/13/DNyKkgznpImGELB.png)

## 一、浏览器引擎

呈现引擎（Rendering Engine）现在流行称为**浏览器内核**，目前五大浏览器的内核分别为：
1. IE * Trident 
2. Edge * EdgeHTML
3. firefox * Gecko
4. Chrome  *  Blink （Blink 其实是 WebKit 的分支）
5. Opera * Presto（已废弃） * Webkit
6. Safari * Webkit



## 二、HTML概念

HTML 是 HyperText Markup Language (超文本标记语言)的缩写，是一款描述网页的标记语言(结构语言)。
它包括一系列标签，通过这些标签不仅可以说明文字文本还可以说明图形、动画、声音、表格、链接等。 

**注意**：HTML这种结构语言并不是编程语言（不具备编程语言功能）



## 三、HTML发展史

HTML 1.0：在1993年6月作为互联网工程工作小组(IETF)工作草案发布。

HTML 2.0：1995年11月作为RFC 1866发布，于2000年6月发布之后被宣布已经过时。

HTML 3.2：1997年1月14日，W3C推荐标准。 

HTML 4.0：1997年12月18日，W3C推荐标准。

HTML 4.01（微小改进）：1999年12月24日，W3C推荐标准。

HTML 5：2014年10月28日，W3C推荐标准。HTML5极大地提升了Web在富媒体、富内容和富应用等方面的能力，被喻为终将改变移动互联网的重要推手。 



## 四、HTML主要结构

```html
<!doctype html> <!-- document type 文档类型,定义当前html文档遵循的版本规范,这里遵循html5规范 -->
<html lang="en"> <!--html 文档根标签,文档所有内容必须要存放在这里 lang="en"告诉浏览器该文档中使用的语言为英语 -->
<head> <!-- 头部标签,主要存放设置网页内容的东西 -->
    <meta charset="UTF-8"> <!-- 元数据标签,这里表示是网页使用UTF-8字符集编码,正确的字符集编码可以保证网页不会乱码 -->
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <!-- 元数据标签,这里表示是定义网页可见区域的初始宽度和网页缩放，用于移动端应用开发 -->
    <title>Document</title> <!-- 标题标签,标签内的文本内容会作为当前网页标签栏的标题 -->
</head>
<body> <!-- 文档主体标记, 该标签内的所有内容都会展示在浏览器页面的可视区域内 -->

</body>
</html>
```
上面的代码就是一个很基本的HTML结构，下面是它们的功能：

标签名 | 描述 | 功能 
--- | --- | ---
`<!doctype html>` | 文档类型标记 | 声明**html版本** 
`<html>` | 根控制标记 | 此元素可告知浏览器其自身是一个 **HTML 文档**。 
`<head>` | 头控制标记 | 用于定义文档的头部，它是所有头部元素的容器。`<head>` 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。
`<title>` | 文件标题声明标记 | 用于定义文档的**标题** 
`<meta>` | 文档元数据声明标记 | 元素可提供有关页面的**元信息**（meta-information） 
`<body>`| 文档主体标记 | 元素包含文档的所有浏览器**可视区域内容**（比如文本、超链接、图像、表格和列表等等。 



## 五、HTML标签的语义化

为什么要有语义化标签

1. 方便代码的阅读和维护
2. 对搜索引擎友好，有了良好的结构和语义你的网页内容自然容易被搜索引擎抓取，你网站的推广便可以省下不少的功夫。
3. 语义 Web 技术有助于利用基于开放标准的技术，从数据、文档内容或应用代码中分离出意义。

### 1、HTML 常见语义标签

标签名 | 描述
--- | ---
`<h1></h1> ... <h6></h6>` | 定义标题，用于修饰文本，块级标签。 # 
`<a></a>` | 超链接用于页面之间或页面内部的跳转。 # 
`<p></p>`|定义段落，用于修饰文本，块级标签。 #
`<div></div>` | 定义一个块级元素，div标签可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不使用任何格式与其关联。**没有默认样式**  # 
`<span></span>` | 标签被用来组合文档中的行内元素。以便通过样式来格式化它们。 **没有默认样式**  # 
`<pre></pre>`| 修饰文本，**保留换行符和空格**，一般用于展示代码，**块级标签**。# 
`<em></em>`	| 把文本定义为强调的内容。 **斜体** # 
`<dfn></dfn>`	| 定义一个定义项目。
`<code></code>` | 定义计算机代码文本。 **不保留换行符和空格** # 
`<samp></samp>`| 定义样本文本。
`<kbd></kbd>`|	定义键盘文本。它表示文本是从键盘上键入的。它经常用在与计算机相关的文档或手册中。
`<var></var>` | 定义变量。您可以将此标签与 `<pre>` 及 `<code>` 标签配合使用。
`<cite></cite>` |	定义引用。可使用该标签对参考文献的引用进行定义，比如书籍或杂志的标题。
`<strong></strong>` | 用于修饰**加粗**文本，行内标签。# 
`<br>`|定义换行，块级标签，**该标签没有语义性**
`<i></i>`|用于修饰斜体文本，行内标签，**该标签没有语义性**
`<b></b>`|用于修饰加粗文本，行内标签，**该标签没有语义性**

### 2、HTML 5 新增语义化标签

HTML5 引入了很多具有语义化、提升页面可访问性的 HTML 元素

标签名 | 描述
--- | ---
`<header>`| 它可以为父级标签呈现简介信息或者导航链接，适用于那些在多个页面顶部重复出现的内容。
`<main>` | 用于呈现网页的主体内容，且每个页面只能有一个。这意味着它只应包含与页面中心主题相关的信息，而不应包含如导航连接、网页横幅等可以在多个页面中重复出现的内容。
`<article>` | 是一个**分段**标签，用于呈现独立及完整的内容。这个标签适用于博客入口、论坛帖子或者新闻文章。 
`<nav>` | 用于呈现页面中的主**导航**链接。它可以使屏幕阅读器快速识别页面中的导航信息。对于页面底部辅助性质的站点链接，不需要使用 nav，用 footer 会更好。 
`<footer>` | 与header和nav类似，footer也具有语义化特性，可以使辅助设备快速定位到它。它位于页面**底部**，用于呈现版权信息或者相关文档链接。 
`<section>` | section也是一个 HTML5 新标签，与article标签的语义含义略有不同。article用于独立的、完整的内容，而section用于**对与主题相关的内容进行分组**。它们可以根据需要嵌套着使用。举个例子：如果一本书是一个article的话，那么每个章节就是section。当内容组之间没有联系时，可以使用div。 

小案例：
```html
<header></header>
<main>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article>
       <h3>Climb foliage quickly using a minimum spanning tree approach</h3>
    </article>
    <article>
        <h3>No training is NP-complete without parkour</h3>
     </article>
</section>

<section id="combat">
    <h2>Combat Training</h2>
    <article>
       <h3>Dispatch multiple enemies with multithreaded tactics</h3>
    </article>
     <article>
        <h3>Goodbye world: 5 proven ways to knock out an opponent</h3>
     </article>
</section>
</main>
<footer></footer>
```

### 3、标签的嵌套

* 内联元素不能嵌套块级元素；块级元素可以嵌套内联元素；内联元素可以嵌套内联元素
* 有几个比较特殊的块级元素只能包含内联元素，不能包含块级元素：`h1`~`h6`,`p`, `dt`
* 块级元素与块级元素并列，内联元素与内联元素并列
* 块级和内联不能并列

### 4、标签划分

* 块级元素
  * **可以设置宽高，独占一行**
  * 块级元素： `div` `h1~h6` `p` `ul` `ol` `li`  等
* 行内元素（内联元素）
  * **不能设置宽高，不能独占一行**
  * 行内元素： `a` `strong` `b` `em` `del` `span` 等
* 行内块级元素
  * **能设置宽高，不独占一行**
  
  * 行内块级元素： `img`
  
  * 小细节：**如果标签换行，或者有空格，则会出现小间隙**
  
    <img src="https://i.loli.net/2021/07/12/8rCBl2cp36AeQIW.png" style="zoom:67%;" />

​              

### 5、标签转换

display:  inline  | inline-block  |  block

* inline （行内元素）
* inline-block （行内块级元素）
* block （块级元素）



## 六、字符实体 

**常用实体字符**： 

- `&lt;` 小于符的实体字符,在页面中替换成`<`。 

```html
<body>
    渲染一个小于号 &lt;
</body>
```

- `&gt;` 大于于符的实体字符,在页面中替换成`>`。

```html
<body>
    渲染一个大于号 &gt;
</body>
```

- `&amp;` 连接符的实体字符,在页面中替换成`&`。

```html
<body>
    渲染一个连接符 &amp;
</body>
```

- `&nbsp;` 空格符的实体字符,在页面中替换成` `。

```html
<body>
<!-- 在html中多个连续的空格回车会被截断成一个空格渲染到页面上 -->
你         好 <br>
使用空格实体字符可以解决此问题渲染多个连续的空格：你&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好
</body>
```

- `&copy;` 版权符的实体字符,在页面中替换成 `©`

```html
<body>
&copy; 2020 GEC
</body>
```

- `&reg;` 注册商标的实体字符,在页面中替换成 `®`

```html
<body>
粤嵌 &reg;
</body>
```

- `&deg;` 摄氏度的实体字符,在页面中替换成`°`

```html
<body>
气温：38&deg;
</body>
```



## 七、标题元素

**介绍**：HTML提供了h1，h2，h3，h4，h5，和 h6元素用来表示页面的标题。

> 1. 标题元素有一个排名在其名称中的数字给出。h1 元素具有最高等级常用于网站的标题，该h6元素具有最低等级，并且两个具有相同名称的元素具有相同等级。
>
> 2. 标题元素属于不可自由嵌套的块级元素（自己独占一行），即在标题标签中**不可以嵌套任何块级元素**。
>    **格式**：

```html
<h1>标题1</h1>
<h2>标题2</h2>
<h3>标题3</h3>
<h4>标题4</h4>
<h5>标题5</h5>
<h6>标题6</h6>
```

**元素支持的属性**：

| 属性名称 | 属性值                  | 说明                                             |
| -------- | ----------------------- | ------------------------------------------------ |
| align    | left<br>center<br>right | 文本左对齐(默认值)<br>文本居中对齐<br>文本右对齐 |

```html
<h2 align="left">标题</h2>
<h2 align="center">标题</h2>
<h2 align="right">标题</h2>
```

**注意**，从SEO（Search Engine Optimization，搜索引擎优化）角度中标题标签要遵循一定的用法：

1. `<h1>`中部署主关键词。`<h1>`尽量靠近在 html 中的`<body>`标签，越近越好，以便让搜索引擎最快的领略主题。
2. `<h2>`表示一个段落的标题，或者说副标题。
3. `<h3>`表示段落的小节标题，`<h3>`效果跟Strong差不多，一般是用在段落小节。
4. `<h4>-<h6>`基本很少用到，是告诉搜索引擎这些不是很重要的内容，单一篇文章内容较多的时候，可以用来说明一些内容是不很重要的。
5. 一个页面之中，h1标签**只能使用一次**，它代表这个页面的精髓，是这个页面最突出表现的主题。整个页面的文章都要围绕着h1标签的内容来描述，尽量突出h1标签中的文字。而h2-h6标签可以应用多次，但要控制好，否则会稀释权重。



## 八、段落标签

> 段落元素同样属于不可自由嵌套的块级元素（自己独占一行），p标签中**不可以嵌套任何块级元素**。

**格式**：

```html
<p>这是一个段落1</p>
<p>这是一个段落2</p>
```

**元素支持的属性**：

| 属性名称 | 属性值                  | 说明                                             |
| -------- | ----------------------- | ------------------------------------------------ |
| align    | left<br>center<br>right | 文本左对齐(默认值)<br>文本居中对齐<br>文本右对齐 |

```html
<p align="right">这是一个段落1</p>
```



## 九、排列清单控制标记

### 1、有序列表（ordered list）

**格式**:

```html
<ol>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li>列表项4</li>
</ol>
```

**元素支持的属性**：

| 属性名称 | 属性值                      | 说明                                                         |
| -------- | --------------------------- | ------------------------------------------------------------ |
| type     | 1<br>a <br> A <br> i <br> I | 使用 1,2,3,4 为有序列表每一项排序(默认值) <br> 使用 a,b,c,d 为有序列表每一项排序 <br> 使用 A,B,C,D 为有序列表每一项排序 <br> 使用 i,ii,iii,iv 为有序列表每一项排序 <br> 使用 I,II,III,IV 为有序列表每一项排序 <br> |


### 2、无序列表 （unordered list）

格式:

```html
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li>列表项4</li>
</ul>
```

**元素支持的属性**：

| 属性名称 | 属性值                     | 说明                                                         |
| -------- | -------------------------- | ------------------------------------------------------------ |
| type     | dise <br>circle <br>square | 每一项使用实心圆标记(默认值) <br> 每一项使用空心圆标记 <br> 每一项使用实心方块标记 |


### 3、列表的嵌套

**格式**:

```html
<ul>
    <li>
        .....
        <ol>
            <li>…</li>
            <li>…</li>
            <li>…</li>
        </ol>
    </li>
    <li>
        .....
        <ol>
            <li>…</li>
            <li>…</li>
            <li>…</li>
        </ol>
    </li>
</ul>
```

### 4、自定义列表

**格式**:

> `<dl>`自定义列表的开始
>
> `<dt>`表示一个项目, dt元素属于不可自由嵌套的块级元素（自己独占一行），即在标题标签中**不可以嵌套任何块级元素**。
>
> `<dd>`表示一个项目下的更详细的内容

```html
<dl>
    <dt>广东</dt>
    <dd>广州</dd>
    <dd>佛山</dd>
    <dd>深圳</dd>
    <dt>湖南</dt>
    <dd>长沙</dd>
    <dd>株洲</dd>
    <dd>衡阳</dd>
</dl>
```



## 十、表格


**基本格式**：

>`<table>`用来声明整个表格.
>
>`<tr>…</tr>`用来声明表格的一行.
>
>`<th>…</th>`用来声明表格中的一个标题栏位.
>
>`<td>…</td>`用来声明表格中的一个数据栏位.
>![表格图示.png](http://edu.yueqian.com.cn/group1/M00/00/3E/wKgA3V-rQfyANaDCAAAOzarIyzg788.png)

```html
<table>
    <tr>…
        <th>… </th>
        <th>… </th>
        <th>… </th>
    </tr>
    <tr>
        <td>… </td>
        <td>… </td>
        <td>… </td>
    </tr>
</table>
```

**元素支持的属性**:

- `<table>`标签下的常用属性

| 属性名称    | 属性值        | 说明                                               |
| ----------- | ------------- | -------------------------------------------------- |
| border      | 像素          | 设置表格的边线 被舍弃CSS border 替代               |
| cellspacing | 像素 / 百分比 | 存储格框线宽度 被舍弃 CSS border-spacing 替代      |
| cellpadding | 像素 / 百分比 | 数据与框线的距离 被舍弃 CSS padding 替代           |
| width       | 像素 百分比   | 表格宽度 被舍弃 CSS width替代                      |
| height      | 像素 百分比   | 表格宽度 被舍弃 CSS width 替代                     |
| summary     | 字符串        | 用来描述表格数据说明 被舍弃使用`<caption>`元素代替 |

- `<th>``<td>`标签下的常用属性

| 属性名称 | 属性值                                | 适用元素 | 说明                                                         |
| -------- | ------------------------------------- | -------- | ------------------------------------------------------------ |
| width    | 像素 / 百分比                         | th，td   | 设置宽 被舍弃                                                |
| height   | 像素 / 百分比                         | th，td   | 设置高  被舍弃                                               |
| colspan  | 正整数                                | th，td   | 向右合并单元格扩展栏位                                       |
| rowspan  | 正整数                                | th，td   | 向下合并单元格扩展栏位                                       |
| headers  | 字符串                                | td       | headers 属性会将表格中的一个表头单元格和一个数据单元格联系起来。<br>这个属性的值是引号包括的一列名称，这些名称是用 id 属性定义的不同表头单元格的名称。<br>headers 属性对非可视化的浏览器，也就是那些在显示出相关数据单元格内容之前就显示表头单元格内容的浏览器非常有用。 |
| scope    | row / col /rowgroup / colgroup (默认) | th，td   | 本质上指定表头的轴。默认情况下，标题是列的标题，这是典型的，但行也可能以标题开头，您可以将该标题的范围限定为行或行组。 |

- headers: 该属性对非可视化浏览器非常有用可以显示出单元格之间的关系

```html
    <table>
        <tr>
            <th id="name">姓名</th>
            <th id="age">年龄</th>
            <th id="address">住址</th>
            <th id="tel">电话</th>
        </tr>
        <tr>
            <td headers="name">保国</td>
            <td headers="age">69</td>
            <td headers="address">中国谭东</td>
            <td headers="tel">+86 6666666</td>
        </tr>
    </table>
```

- 表格的标题：

HTML为表格提供了`<caption>`元素用来做表格的标题，一般情况下`<caption>`会被作为table的第一个标签。但是**`<caption>`标签可以放在table任意地方**，最终显示显示时都会出现在table的最上方。

```html
<table>
<caption>财务统计表</caption>
    <tr>…
        <th>… </th>
        <th>… </th>
        <th>… </th>
    </tr>
    <tr>
        <td>… </td>
        <td>… </td>
        <td>… </td>
    </tr>
</table>
```

**注意**：`<caption>`特有的属性已被舍弃。

- 表格的结构化

```html
<table>
<thead>……</thead> --------表头区
<tbody>……</tbody> --------表体区
<tfoot>……</tfoot> --------表尾区
</table>
```

**注意**：

1. 在 HTML5 中规定`<tfoot>`一定会渲染在`<tbody>`之后。`<thead>`一定要在`<tbody>`之前。
2. `<thead>`、`<tbody>`、 `<tfoot>` 内部包含0个和多个tr元素，并且caption一定要在thead之前。



## 十一、图像

**格式**: 

```html
<img src="URL">
```

**元素支持的属性**：

| 属性名称 | 属性值      | 说明         |
| -------- | ----------- | ------------ |
| src      | URL         | 图片的路径   |
| alt      | 文本内容    | 给图片做注解 |
| width    | 像素/百分比 | 宽           |
| height   | 像素/百分比 | 高           |

> **alt属性中的文本作为备用文字描述了图片的内容**，这可以帮助用户在图片加载失败或者不可见的情况下理解图片内容，也有助于搜索引擎理解图片内容，并将其加入到搜索结果中。



## 十二、超链接

**基本格式**: 

```html
<a href="http://www.baidu.com">跳转至网站</a>
<a href="mailto:gecedu@163.com">发送Email</a>
<a href="tel:+123456789">播出电话</a>
```

> 在 HTML 4.01 中，<a> 标签可以是超链接或锚。在 HTML5 中，<a> 标签始终是超链接，但是如果未设置 href 属性，则只是超链接的占位符。
> HTML5 提供了一些新属性，同时不再支持一些 HTML 4.01 属性。

### 1、支持的属性 

**download**(HTML 5 新增)： 接受一个 filename (文件名) 作为属性值或不设置任何属性，此属性指示浏览器下载 URL 而不是导航到它，因此将提示用户将其保存为本地文件。

```html
<!--
  下载文件，download 的值是下载文件后进行重命名
-->
<a href="/files/file.pdf" download>Download PDF</a>
<a href="/files/file.pdf" download="guide">Download PDF</a>
```

> 注意：
>
> - 此属性对允许的值没有限制，但是 / 和 \ 会被转换为下划线。大多数文件系统限制了文件名中的标点符号，故此，浏览器将相应地调整建议的文件名。
> - 此属性仅适用于同源 URL(协议、域名、端口号都相同)。

**href**：接受一个URL路径地址作为参数，URL 规定链接指向的页面的  URL 或 URL 片段。

```html
<a href="http://www.baidu.com">百度一下</a>
<a href="/index.html">主页</a>
<a href="#somewhere">主页</a>
```

**格式**： scheme://host[:post]/path/filename

> scheme 指的是一种页面跳转协议,支持的协议有:
>
> - http:// 或  https:// 链接到外部地址
> - mailto:// 将用户的电子邮件程序打开，让他们发送新邮件
> - tel:// 提供电话链接有助于用户查看连接到手机的网络文档和笔记本电脑。
> - file:// 本地文件传输协议,
> - ftp:// 文件传输协议
>
> HTML5 支持使用scheme在移动端唤醒app：
>
> - taobao:// 淘  宝	
> - alipay:// 支付宝	
> - wechat:// 微  信	
> - mqq:// Q   Q	
> - baiduboxapp:// 或 BaiduSSO:// 百  度	
> - openApp.jdMobile:// 或 jd:// 京  东	
> - bilibili:// 打开哔哩哔喱
>
> host： 指的是 IP 地址或计算机名称
>
> post： 指的是服务器端口
>
> path： 指的是文件路径
>
> filename： 指的是文件名

```html
<a href="http://www.baidu.com:80/index.html">百度一下</a>
<a href="wexin://tencent.com:8080/dl/news/open?data=902323&params=test">唤醒微信</a>
```

**补充**：相对路径与绝对路径

- 绝对路径：绝对路径就是你的主页上的文件或目录在硬盘上真正的路径，(URL和物理路径)例如：
  C:\xyz\test.txt 代表了test.txt文件的绝对路径。http://www.sun.com/index.htm也代表了一个
  URL绝对路径。

- 相对路径：相对与某个基准目录的路径。包含Web的相对路径（HTML中的相对目录），例如：在
  Servlet中，"/"代表Web应用的根目录。和物理路径的相对表示，例如：`./` 代表当前目录,
  `../`代表上级目录。这种类似的表示，也是属于相对路径。

> 注意：
>
> - URL 片段是哈希标记（#）前面的名称，哈希标记可以指定当前同一页面内的位置。URL 不限于基于 Web（HTTP）的文档，也可以使用浏览器支持的任何协议。
> - 可以使用 href="#top" 或者 href="#" 链接返回到页面顶部。这种行为是 HTML5 的特性。

hreflang: 该属性用于指定链接文档的人类语言。其仅提供建议，并没有内置的功能。

**media**:  media_query  规定被链接文档是为何种媒介/设备优化的。(HTML 5 新增)

rel: 规定当前文档与被链接文档之间的关系，[rel可选值](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types) 。

**target**:规定在何处打开链接文档,可选值包含：

- _self (默认)：当前页面加载，即在当前页面打开新的链接。
- _blank： 新窗口打开超链接。
- _parent：加载响应到的HTML5浏览器上下文的父浏览器上下文。如果没有parent框架或者浏览器上下文，此选项的行为方式与 _self 相同。
- _top：加载的页面占据整个原来的窗口，加载到顶层浏览器上下文。如果没有上层浏览器上下文，此选项的行为方式相同_self。

> 注意：
>
> - 使用target时，考虑添加 rel="noopener noreferrer" 以防止针对 window.opener API 的恶意行为。
> - 使用target=“_blank”链接到另一个页面将在与页面相同的进程中运行新页面。如果新页面执行开销大的的JS，那么页面的性能可能会受到影响。要避免这种情况，请使用rel=noopener。
> - rel="noopener"：防止新标签页使用JavaScript的window.opener功能，该功能可能会访问包含链接（您的网站）的页面来执行恶意操作，例如窃取信息或共享受感染的代码。
> - rel="noreferrer"：防止其他网站或跟踪服务（例如Google Analytics（分析））将您的页面标识为单击链接的来源。

### 2、链接到本页的某个部分

```html
<!-- 应用于目录定位 -->
<a href="#属性">
Description of Same-Page Links
</a>

<div id="属性"> 点击上面页内的锚点，网易会跳转至与锚点属性同名id的元素上</div>
```

### 3、图片链接

```html
<a href="https://developer.mozilla.org/en-US/">
  <img src="https://mdn.mozillademos.org/files/6851/mdn_logo.png" 
       alt="MDN logo" />
</a>
```



## 十三、基准参考点

**概念**：HTML <base> 元素用于指定一个文档中包含的所有 相对路径 的根 URL。一个文档中只能包含一个 <base> 元素。

```html
<head>
    <base href=”http://www.baidu.com”>
</head>
```

**支持的属性**：

- href 用于文档中相对路径 地址的基础 URL。允许绝对和相对URL。
- target 默认浏览上下文的关键字或作者定义的名称，当没有明确目标的链接 `<a>` 或表单 `<form>` 导致导航被激活时显示其结果。该属性值定位到浏览上下文（例如选项卡，窗口或内联框 `<iframe>` ）。
  以下的关键字指定特殊的意思：
      1. _self: 载入结果到当前浏览上下文中。（该值是元素的默认值）。
      2. _blank: 载入结果到一个新的未命名的浏览上下文。
      3. _parent: 载入结果到父级浏览上下文（如果当前页是内联框）。如果没有父级结构，该选项的行为和_self一样。
      4. _top: 载入结果到顶级浏览上下文（该浏览上下文是当前上下文的最顶级上下文）。如果没有父级，该选项的行为和_self一样。

**注意**：如果指定了以上任一属性，base元素必须在其他任何属性是URL的元素之前。例如：<link> 的 href 属性。并且base对于锚点同样有效。



## 十四、表单

### 1、`<form>` 元素

```html
<form action="/my-handling-form-page" method="post">

</form>
```

**支持的属性**：

- name: 给这个表单起个名字
- **method**: 属性定义了发送数据的HTTP方法(它可以是“get”或“post”).

> 此值可以被 `<button>`、`<input type="submit">` 或 `<input type="image">` 元素中的 formmethod 属性覆盖。

- **action**: 属性定义了在提交表单时,应该把所收集的数据送给谁(/那个模块)(URL)去处理。
- **enctype**: 当 method 属性值为 post 时，enctype 就是将表单的内容提交给服务器的 MIME 类型 。可能的取值有：
  1. application/x-www-form-urlencoded：未指定属性时的默认值。
  2. multipart/form-data：当表单包含 type=file 的 `<input>` 元素时使用此值。
  3. text/plain：出现于 HTML5，用于调试。
- target：表示在提交表单之后，在哪里显示响应信息。在 HTML5 里：
  1. _self：默认值。在相同浏览中加载。
  2. _blank：在新的未命名的浏览上下文中加载。
  3. _parent：在当前上下文的父级浏览上下文中加载，如果没有父级，则与 _self 表现一致。
  4. _top：在最顶级的浏览上下文中（即当前上下文的一个没有父级的祖先浏览上下文），如果没有父级，则与 _self 表现一致。    


### 2、`<input>`  type 属性值

input是一个单一型元素用于为基于Web的表单创建交互式控件，以便接受来自用户的数据。

```html
<input type="text">
```

**type**：input的工作方式相当程度上取决于type属性的值，不同的 type 值会赋予input元素不同的功能。如果未指定此属性，则采用的默认类型为 text。

**表单输入类型**：

- text (默认)：单行的文本输入框，输入中的换行会被自动去除。

```html
<input type="text">
```

- password：单行的密码输入框，输入的文本使用密文显示。

```html
<input type="password">
```

- number：只能输入数字的输入框。

```html
<input type="number">
```

- email：编辑邮箱地址的输入框。类似 text 输入，但在支持的浏览器上会有邮箱格式的规则验证提示。

```html
<input type="email">
```

- search (H5新增)：用于搜索字符串的单行文字区域。输入文本中的换行会被自动去除。在支持的浏览器中可能有一个删除按钮，用于清除整个区域。拥有动态键盘的设备上的回车图标会变成搜索图标。

```html
<input type="search">
```

- tel (H5新增)：用于输入电话号码的控件。拥有动态键盘的设备上会显示电话数字键盘。

```html
<input type="tel">
```

- url (H5新增)：用于输入 URL 的控件。类似 text 输入，在支持的浏览器上会有URL的规则验证提示，在支持动态键盘的设备上有相应的键盘。

**表单日期类型**：

- week：用于输入以年和周数组成的日期，不带时区。

```html
<input type="week">
```

- month (H5新增)：输入年和月的控件，不带时区。

```html
<input type="month">
```

- time (H5新增)：于输入时间的控件，不包括时区。

```html
<input type="time">
```

- date (H5新增)：输入日期的控件（年、月、日，不包括时间）。在支持的浏览器激活时会打开日期选择器或年月日的数字滚轮。

```html
<input type="date">
```

- datetime-local(H5新增)：输入日期和时间的控件，使用户所在时区。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮。(目前支持的浏览器为数不多)

```html
<input type="datetime-local">
```

**表单单复选类型**：

- checkbox：复选框，可设为选中或未选中。

```html
<input type="checkbox">
<input type="checkbox">
```

 <input type=”checkbox” name=” 栏位 名 称 ” value=” 内定
值” checked=”checked” disabled=”disabled ”>

- radio：单选框

```html
<input type="radio">
```

单 选 栏 位 :<input type=”radio” name=” 栏 位 名 称 ” value=” 内 定 值 ”
checked=”checked” disabled=”disabled ”>

**表单按钮类型**：

- button：没有默认行为的按钮，上面显示 value 属性的值，默认为空。

- submit：用于提交表单的按钮。

- image：带图像的 submit 按钮。显示的图像由 src 属性规定。如果 src 缺失，alt 属性就会显示。

- reset：此按钮将表单的所有内容重置为默认值。不推荐。

**表单文件类型**

- file：让用户选择文件的控件。使用accept属性规定控件能选择的文件类型。

```html
<input type="file" accept="image/png">
```

**表单颜色类型**

- color (H5新增)：用于指定颜色的控件；在支持的浏览器中，激活时会打开取色器。

```html
<input type="color">
```

**表单范围控制类型**

- range (H5新增)：此控件用于输入不需要精确的数字。控件是一个范围组件，默认值为正中间的值。同时使用htmlattrdefmin   和 htmlattrdefmax来规定值的范围。

**表单范围控制类型**

- hidden：不显示的控件，其值仍会提交到服务器。举个例子，右边就是一个隐形的控件。

### 3、`<input>`元素的其他属性

- **type**：**所有**input元素,input表单控件的type 

- **autocomplete**：**所有**input元素，用于表单的自动填充功能 

- **autofocus**：**所有**input元素,页面加载时自动聚焦到此表单控件 

- **disabled**：**所有**input元素,表单控件是否被禁用 

- form：所有input元素,将控件和一个form元素联系在一起

- **name**：**所有**input元素,input表单控件的名字。以名字/值对的形式随表单一起提交

- **value**：**所有**input元素,表单控件的值。以名字/值对的形式随表单一起提交


- **list**：**绝大部分**input元素,自动填充选项的 `<datalist>` 的id值 

  ```html
   <input type="text" name="phone" list="phone_list">
       <datalist id="phone_list">
             <option value="华为"></option>
             <option value="苹果"></option>
             <option value="vivo"></option>
             <option value="oppo"></option>
       </datalist>
  ```

  <img src="https://i.loli.net/2021/07/12/TYI5X2gBhxJQVUP.png" style="zoom:67%;" />

- **readonly**：**绝大部分**input元素,存在时表示控件的值不可编辑(布尔值) 

- **required**：**绝大部分**input元素,表示此值为必填项或者提交表单前必须先检查该值(布尔值)

- **checked**：当input元素**type为radio, checkbox**时，用于控制控件是否被选中

- **alt**：当input元素**type为image**时，alt属性是可访问性的要求。

- **accept**：当input元素**type为file**时，用于规定文件上传控件中期望的文件类型。

- capture：当input元素type为file时，文件上传控件中媒体拍摄的方式

- dirname：当input元素type为text, search时，表单区域的一个名字，用于在提交表单时发送元素的方向性

- formaction：	当input元素**type为image, submit**时，用于提交表单的URL

- formenctype：	当input元素**type为image, submit**时，表单数据集的编码方式，用于表单提交

- formmethod：	当input元素**type为image, submit**时，用于表单提交的HTTP方法 

- formnovalidate：	当input元素**type为image, submit**时，提交表单时绕过对表单控件的验证

- formtarget：当input元素**type为image, submit**时，表单提交的浏览上下文

- **height**：	image 和 `<img>` 的 height 属性相同；垂直方向

- **src**：	image	和<img> 的 src 属性一样；图像资源的地址

- **width**：	image	与 `<img>` 的 width 属性一样

- **max**：当input元素**type为number**时，当前数字表单元素可以输入的最大值

- **min**：当input元素**type为number**时，当前数字表单元素可以输入的最小值	

- **step**：当input元素**type为number**时，当前数字表单元素有效的递增值

- **maxlength**：当input元素**type为password, search, tel, text, url**时，value 的最大长度（最多字符数目）

- **minlength**：当input元素**type为password, search, tel, text, url**时，	value 的最小长度（最少字符数目）

- **placeholder**：当input元素**type为password, search, tel, text, url**时，当表单控件为空时，控件中显示的内容

- **pattern**：当input元素**type为password, text, tel**，匹配有效 value 的模式（pattern）

- **size**：当input元素**email, password, tel, text**时,控件的大小

- **multiple**：当input元素**type为email, file**时。是否允许多个值(布尔值)


### 4、`<label>` 元素

**概念**：`<label>` 元素（标签）表示用户界面中某个元素的说明。

```html
<div class="preference">
    <label for="html">你喜欢HTML5吗?</label>
    <input type="checkbox" name="html" id="html">
</div>

<div class="preference">
    <label for="program">你喜欢编程吗?</label>
    <input type="checkbox" name="program" id="program">
</div>

<label>
    <input type="radio" id="sex" value="男" name="sex">男
</label>
<label>
    <input type="radio" id="sex" value="女" name="sex">女
</label>
```

实现关联的方法有有两种：

1. 你需要给 `<input>` 一个 id 属性。而 `<label>` 需要一个 for 属性，其值和 `<input>` 的 id 一样。

```html
<label for="apple">Do you like apple?</label>
<input type="checkbox" name="apple" id="apple">
```

2. 你也可以将 `<input>` 直接放在 `<label>` 里，此时则不需要 for 和 id 属性，因为关联已隐含存在。

```html
<label>Do you like apple?
  <input type="checkbox" name="apple">
</label>
```

**支持的属性**：

- for：即和 `<label>` 元素在同一文档中的 可关联标表单元素 的 id。

> 注意：`<label>` 元素可同时有一个 for 属性和一个子代控件元素，只是 for 属性需要指向这个控件元素。

- form：表示与 label 元素关联的 `<form>` 元素（即它的表单拥有者）。其值应是同一文档中 `<form>` 元素的 id。因此你可以将 label 元素放在文档的任何位置，而不仅作为 `<form>` 元素的后代。


### 5、多行文本输入框

```html
<label for="proposal">请提出宝贵的建议</label>

<textarea id="proposal" name="proposal"
          rows="5" cols="33">
    这里是多行文本输入框的内容......
</textarea>
```

**支持的属性**：

- **name**： 元素的名称。
- **autocomplete**：是否使用浏览器的记忆功能自动填充文本。可能的值有：
  off: 不使用浏览器的记忆自动填充，使用者必须输入他们想要输入的所有内容。或者网页提供了自己的自动填充方法。
  on: 浏览器根据用户之前输入的内容或者习惯，在用户输入的时候给出相应输入提示。
- **autofocus**：页面加载完毕之后是否自动给本元素添加焦点。只有跟表格关联的才能使本属性生效。
- **disabled**：**禁用文本域**。默认为false。
- **form**：指定跟自身相关联的表单。值必须为本文档内的表单的ID，如果未指定，就是跟当前所在的表单元素相关联。这就允许你在文档的任意地方放置文本域元素。
- **placeholder**：向用户提示可以在控件中输入的内容。 在渲染提示时，占位符文本中的回车符(\r)或换行符(\n)一定会被作为行断（换行）处理。
- **readonly**：**不允许用户修改元素内文本**。和 disabled 属性不同的是，这个能让用户点击和选择元素内的文本。如果在表单里，这个**元素的值还是会跟随表单一起提交**。
- **required**：提示用户这个元素的内容必填。
- **cols**：文本域的可视宽度。必须为正数，默认为20 (HTML5)。
- **rows**：元素的输入文本的行数（显示的高度）。
- **maxlength**：允许用户输入的最大字符长度 (Unicode) 。未指定表示无限长度。
- **minlength**：允许用户输入的最小字符长度(Unicode) 
- **wrap**：指定文本换行的方式。默认为soft。可能的值为：
  hard: 在文本到达元素最大宽度的时候，浏览器自动插入换行符(CR+LF) 。比如指定 cols值。
  soft: 在到达元素最大宽度的时候，不会自动插入换行符。


### 6、窗体选项栏

**概念**：HTML `<select>` 元素表示一个提供选项菜单的控件

**格式**：

```html
<label for="关联id">Choose:</label>
<select name=”栏位名称” size=”数字” id="关联id">
    <option value=”选项值” selected=”selected”>
    <option value=”选项值”>…
    <option value=”选项值”>…
</select>
<!-- 
你还可以将 <option> 元素放在 <optgroup> 元素中以为下拉菜单创建不同的选项分组。
-->
<select>
    <optgroup label="分组名称">
        <option>Tyrannosaurus</option>
        <option>Velociraptor</option>
        <option>Deinonychus</option>
    </optgroup>
    <optgroup label="分组名称">
        <option>Diplodocus</option>
        <option>Saltasaurus</option>
        <option>Apatosaurus</option>
    </optgroup>
</select>

   
<!--  multiple 多选-->
<select name=”栏位名称” size=”数字” multiple>
    <option value=”选项值” selected=”selected”>
    <option value=”选项值”>…
    <option value=”选项值”>…
</select>
```

**select支持的属性**：

- autofocus：这个布尔值属性能够让一个对象在页面加载的时候获得焦点。一个文档中只有一个对象可以有这个属性。
- disabled：这个布尔值的属性表示用户不能与该表单控件交互。
- form：`<select>` 所关联的 `<form>` (它的"表单拥有者")。其值必须是在同一文档中的 <form> 元素的id（如果没有设置这个属性， `<select>` 元素则与其任何存在的祖先 `<form>` 元素关联）。
- multiple：这个布尔值属性表示列表中的选项是否支持多选。没有声明该值时，一次只能选中一个选项。声明这个属性后，大多数浏览器都会显示一个可滚动的列表框，而非一个下拉菜单。
- name：该属性规定了控件的名称。
- required （H5新增）：一个布尔值属性，表示必须选中一个有非空字符串值的选项。
- size：如果控件显示为滚动列表框（如声明了 multiple），则此属性表示为控件中同时可见的行数。浏览器不需要将选择元素呈现为滚动列表框。默认值为 0。

**option支持的属性**：

- disabled：如果设置了这个布尔属性，则该选项不可选。浏览器通常会将这种控件显示为灰色，并且不再接受任何浏览器事件，例如鼠标点击或者焦点相关的事件。如果这个属性没有设置，而这个元素的其中一个父元素是被禁用的 <optgroup> 元素，则这个元素仍然是禁用的 。
- label：这个属性是用于表示选项含义的文本。如果 label 属性没有定义，它的值就是元素文本内容。
- selected：这个布尔属性存在时表明这个选项是否一开始就被选中。 `<select>` 元素的 multiple 属性没有设置，则 `<select>` 元素中只有一个 `<option>` 元素可以拥有 selected 属性。
- value: 这个属性的值表示该选项被选中时提交给表单的值。如果省略了这个属性，值就从选项元素的文本内容中获取。
