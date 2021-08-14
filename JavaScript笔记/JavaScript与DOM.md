> **概念**：Document 接口表示任何在浏览器中载入的网页，并作为网页内容的入口，也就是 **DOM 树**。**DOM 树包**含了像 `<body>` 、`<table>` 这样的元素，以及大量其他元素。它向网页文档本身提供了全局操作功能，能解决如何获取页面的元素，如何在文档中创建一个新的元素等问题。

### 节点的选取/访问

####  选择单个元素节点

**`getElementById()`**：DOM提供的方法用来返回一个匹配**特定 ID 元素**节点对应的对象。若在当前 Document 下没有找到，则返回 null。

**语法**：

```javascript
var element = document.getElementById(id);
```

- **参数**
  - id：是大小写敏感的字符串，代表了你想获得的那个元素的id属性的值。

> **注意**：
>
> 1. JavaScript语言区分字母大小写，所以在使用“getElementById”时千万不要把id大小写弄错了，否则你得不到正确的结果。
> 2. 不同于其他元素查找方法，`getElementById()` 只有在作为 document 的方法时才能起作用，而在DOM中的其他元素下无法生效。这是因为 ID 值在整个网页中必须保持唯一。因此没有必要为这个方法创建所谓的 “局部” 版本。

**例子**：

```html
<body>
  <p id="para">Some text here</p>
  <script>
    var elem = document.getElementById('para');
    console.log(elem)
  </script>
</body>
```



**`querySelect()`**：使用css选择器语法,返回文档中与指定选择器或选择器组匹配的**第一个 HTMLElement对象**。 如果找不到匹配项，则返回null。

**语法**：

```javascript
element = document.querySelector(selectors);
```

- **参数**
  - selectors: 必须是有效的**CSS选择器字符串**。

**例子**：返回当前文档中第一个类名为 "myclass" 的元素

```html
<body>
  <p class="myclass">Some text here1</p>
  <p class="myclass">Some text here2</p>
  <p class="myclass">Some text here3</p>
  <p class="myclass">Some text here4</p>
  <p class="myclass">Some text here5</p>
  <div class="myclass"><h3>标签3</h3></div>
  <script>
    var el = document.querySelector(".myclass");
    console.log(el)
    var el2 = document.querySelector(".myclass > h3");
    console.log(el2)  
  </script>
</body>
```

> **注意**： 
>
> 1. querySelector的选择器也可以非常强大，如 `var el = document.querySelector("div.user-panel.main input[name='login']");`
> 2. `querySelect()`可以在其他DOM元素中使用，即为该方法创建所谓的 “局部” 版本用来查询当前DOM元素内部符合css选择器的元素
>
> ```javascript
>   // 返回当前文档中第一个类名为 "myclass" 的元素
>   var el = document.querySelector(".myclass");
>   // 返回第一个类名为 "myclass" 的元素内部第一个类名为"child"的元素
>   var childEl = el.querySelector(".child")
> ```



#### 选择多个元素节点

**`getElementsByClassName()`**：返回一个包含了所有指定类名的子元素的**动态类数组对象**（**意味着它可以自动更新自己来保持和 DOM 树的同步而无需重复调用**）。当在document对象上调用时，会搜索整个DOM文档，包含根节点。你也可以在任意元素上调用getElementsByClassName() 方法，它将返回的是以当前元素为根节点，所有指定类名的子元素。

**语法**：

```javascript
var elements = document.getElementsByClassName(names); 

var elements = rootElement.getElementsByClassName(names);
```

- **参数**
  - names: 是一个字符串，表示要匹配的类名列表；类名通过空格分隔

> **注意**：
>
> 1. elements 是一个**实时**集合，包含了找到的所有元素。
> 2. getElementsByClassName 可以在任何元素上调用，不仅仅是 document。 调用这个方法的元素将作为本次查找的根元素。

**例子**：

- 获取所有 class 为 'test' 的元素:

```javascript
document.getElementsByClassName('test');
```

- 获取第一个类名为 test 的元素

```javascript
// 因为该方法返回的是一个类数组对象（伪数组），可以使用下标的形式访问该对象中指定下标元素，
document.getElementsByClassName('test')[0];
```

- 遍历类名为 test 的元素

```javascript
// 因为该方法返回的是一个类数组对象（伪数组）拥有length属性 不能使用 for in 或者 forEach 遍历
var els = document.getElementsByClassName('test');

for (var i=0; i<els.length; i++) {
    console.log(els[i])
}
```

- 获取所有 class 同时包括 'red' 和 'test' 的元素.

```javascript
document.getElementsByClassName('red test');
```

- 在id 为'main'的元素的子节点中，获取所有class为'test'的元素

```javascript
document.getElementById('main').getElementsByClassName('test');
```



**`getElementsByTagName()`**：返回一个包含了所有指定标签名称元素的**动态类数组对象**（**意味着它可以自动更新自己来保持和 DOM 树的同步而无需重复调用**）。当在document对象上调用时，会搜索整个DOM文档，包含根节点。你也可以在任意元素上调用getElementsByTagName() 方法，它将返回的是以当前元素为根节点，所有指定标签名称的子元素。

**语法**：

```javascript
var elements = document.getElementsByTagName(name);
```

- **参数**
  - names: 是一个代表元素的名称的字符串。特殊字符 "*" 代表了所有元素。

**例子**： 

```javascript
var container = document.getElementById("container");

var paras = container.getElementsByTagName("p");

var num = paras.length;

alert("#container 元素中包含了 " + num + " 个段落元素 ");
```



**`getElementsByName()`**：根据给定的name 返回一个包含了所有指定name值的子元素的**动态类数组对象**。

**语法**：

```javascript
var elements = ocument.getElementsByName(name)
```

- **参数**
  - name:是元素的 name 属性的值。

**例子**：

```html
<form name="up"><input type="text"></form>
<div name="down"><input type="text"></div>

<script>
  // 因为返回的是一个伪数组，所以获取集合对象后需要通过下标获取对应元素
  var up_forms = document.getElementsByName("up");
  console.log(up_forms[0].tagName); // "FORM"
</script>
```



**`querySelectAll()`**： 使用css选择器语法,返回全部与指定的选择器匹配的**静态元素列表**(即**不会因为DOM树结构改变而自动更新**)，没有匹配的情况下为**空伪数组**。

**语法**：

```javascript
var elements = document.querySelectorAll(selectors);
```

- **参数**
  - selectors: 一个字符串包含一个或多个匹配的选择器。这个字符串必须是一个**合法的 CSS 选择器**。

**例子**：

- 获取文档中所有`<p>`元素的NodeList。

```javascript
var matches = document.querySelectorAll("p");
```

- 获取文档中所有class包含"note"或"alert"的`<div>`元素的列表，：

```javascript
var matches = document.querySelectorAll("div.note, div.alert");
```

- 获取位于ID为"test"的容器，并且内其直接父元素class为"highlighted"的div的`<p>`元素的列表

```javascript
var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");
```

**注意**：`querySelectAll()`一旦返回匹配元素的列表伪数组，就可以像任何数组一样使用他的属性与方法。

```javascript
var highlightedItems = document.querySelectorAll(".highlighted");
// getElements API 获取的动态类数组对象无法获取该对象
highlightedItems.forEach(function(userItem) {
  console.log(userItem);
});
```



#### 比较querySelectAll 和 getElementsBy 返回值

**介绍**：动态类数组对象在匹配元素发生改变时（删除、增加）数组中节点项会自动更新与页面中DOM树保持一致，而静态元素列表不会更新

> querySelectorAll 返回的是NodeList，静态对象，元素发生变化，NodeList不会更新
>
> getElementByClass, getElementsByTagName 返回的是HTMLCollection对象是一个动态对象，随着元素修改或者删除变化而变化
>
> HTML DOM 中的HTMLCollection是即时更新的（Live）;当其包含的文档机构发生变化时，自动更新
>
> NodeList是一个静态集合，随后的文档对象模型任何变动都不会影响集合的内容

```html
<p class="test p1">段落1</p>
<p class="test p2">段落2</p>
<p class="test p3">段落3</p>
<p class="test p4">段落4</p>
<p class="test p5">段落5</p>
<p class="test p6">段落6</p>
<p class="test p7">段落7</p>

<script>
  var getP = document.getElementsByClassName('test')
  var queryP = document.querySelectorAll('.test')

  console.log(getP)
  console.log(queryP)
</script>
```

![对比区别](http://edu.yueqian.com.cn/group1/M00/05/9F/wKgP3GDvkUWAZArlAABlpalGYkU741.png?token=null&ts=null)

> 在控制台中删除某个段落元素后再在控制台打印

```javascript
console.log(getP)
console.log(queryP)
```

![对比区别](http://edu.yueqian.com.cn/group1/M00/05/9F/wKgP3GDvkUWAIinpAAMHSWNDz94485.gif?token=null&ts=null)



#### NodeList

**概念**：NodeList 对象是节点的集合是一组元素的集合,每一个节点都有索引编号。通常是由document.querySelectorAll 等方法返回的。 元素节点在NodeList中保存的顺序和他们HTML页面中出现的顺序相同。

**注意**：

- **NodeList 不是一个数组，是一个类似数组的对象**(Like Array Object)。虽然 NodeList 不是一个数组，但是**可以使用 `forEach()` 来迭代**。然而，除了 forEach 方法，NodeList 没有这些类似数组的方法。但是你还可以使用 `Array.from()` 将其转换为数组。

- 在一些情况下，NodeList 是一个实时集合，也就是说，如果文档中的节点树发生变化，NodeList 也会随之变化。

**属性**：

`length`： 表示Nodelist一共有多少项

```javascript
var list = document.querySelectorAll('input[type=checkbox]');

console.log(list.length)

```

**方法**：
`NodeList.item()`：返回 NodeList 对象中指定索引的节点，如果索引越界，则返回null。等价的写法是 nodeList[i]，不过，在这种情况下，越界访问将返回 undefined。

```javascript
for (var i = 0; i < myNodeList.length; ++i) {
  var item = myNodeList[i];  // 调用 myNodeList.item(i) 是没有必要的
}
```

`NodeList.forEach()`：对每个NodeList元素执行一次所提供的函数，将元素作为参数传递给函数。

```javascript
var list = document.querySelectorAll('input[type=checkbox]');list.forEach(function (checkbox) {  console.log(list)});
```



<hr/>

### 节点分类

```html
<div class="box" id="boxId">
     <div>子元素div</div>
        <!-- 
            This is 注释
            this is 注释2
         -->
        盒子文本1
        盒子文本2
     <p>p段落标签</p>
</div>
<script>
   var box = document.querySelector("div");
   // 查看div标签内部所有的子节点，
   var kids = box.childNodes;
   console.dir(kids)
</script>
```



<img src="https://i.loli.net/2021/08/14/HDZg9pBsfVRI7SX.png" style="zoom:50%;" />



#### nodeType 和 nodeValue 分类

|          | nodeType | nodeValue        | 备注                                                         |
| -------- | -------- | ---------------- | ------------------------------------------------------------ |
| 元素节点 | 1        | null             | html标签就是元素节点                                         |
| 属性节点 | 2        | 就是属性的值     |                                                              |
| 文本节点 | 3        | 文本内容 \n 换行 | 除文本内容外，很多浏览器处理空格 或者 换行符时会保留一个空格符 空白也是文本节点， |
| 注释节点 | 8        | 就是注释内容     | 注释内容也是dom树里的一个节点                                |
| 文档节点 | 9        | null             | document对象                                                 |



#### nodeName 

**概念**：只读属性用来返回当前节点的节点名称

- 对于元素节点 nodeName = 标签名(返回的名称是大写的)
- 对于文本节点 nodeName = #text
- 对于属性节点 nodeName = 属性名(返回的名称是大写的)

**语法**:

```javascript
var str = node.nodeName;
```

**例子**：

```html
<div id="d1">hello world</div>


<script>
var div1 = document.getElementById("d1");

console.log(div1.nodeName); // DIV
</script>
```



<hr>

### 元素结点常用属性

#### .id  

**介绍**： id 属性表示元素的标识符，同一文档中，若 id 的值不是空字符串 ""，便必须是独特的；也就是说，不同元素的 ID 必须是不同的。这有助于让常用的 getElementById 方法通过 id 的值找到对应的单个元素。

**语法**：

```javascript
// 获取 id
var idStr = element.id; 
// 设置 id
element.id = idStr; 
```



#### .style

**介绍**：包含应用到元素的 CSS 样式声明对象，该属性和其包含的样式属性的主要目的是允许快速样式化。
**注意**：

- CSS 样式声明对象中的样式属性均为驼峰命名法
- 样式最好以css文件的形式定义在单独的文件中。

**语法**：

```javascript
// 获取当前元素的 color 样式 
var color = element.style.color;
// 设置当前元素的 backgroundColor 样式
element.style.backgroundColor = "#fc0"; 
```



#### .className 

**介绍**：该属性用来获取或设置指定元素的class属性的值。

**语法**：

```javascript
// 获取 class 属性值
var cName = element.className;
// 设置元素的 class 属性值
element.className = cName;
```

**注意**：使用名称className而不是class作为属性名,是因为"class" 在JavaScript中是个保留字。可以是由空格分隔的多个class属性值。

```javascript
element.className += " active test";
```



<hr/>

### 元素节点之间的遍历

#### 方法一：直接获取

**`Node.previousSibling`** 返回当前节点的前一个兄弟节点,没有则返回null.

**`Node.nextSibling`**     返回前节点紧跟在其后面的兄弟节点，如果指定的节点为最后一个节点，则返回 null

**`Node.firstChild`**   返回当前节点的第一个子节点,如果节点是无子节点，则返回 null。

**`Node.lastChild`** 返回当前节点的最后一个子节点。如果父节点为一个元素节点，则子节点通常为一个元素节点，或一个文本节点，或一个注释节点。如果没有子节点，则返回 null。

**例子：**

```html
<ul>
   <li>列表1</li>
   <li id="two">列表2</li>
   <li>列表3</li>
   <li>列表4</li>
</ul>
<script>
   var second = document.getElementById("two");
    
   // 获得前面的兄弟节点
   var prevNode = second.previousSibling;
   console.log(prevNode) // nodeType: 3 nodeValue: /n
   prevNode.style.background = "green" //Uncaught TypeError: Cannot set property 'background' of undefined 
   
   // 获得后面的兄弟节点
   var nextNode = second.nextSibling; 
   console.log(nextNode)  // nodeType: 3 nodeValue: /n 
    
   var ul = document.getElementsByTagName("ul")[0]
   
   var first = ul.firstChild
   console.log(first) // nodeType: 3 nodeValue: /n 

   var last = ul.lastChild;
   console.log(last) // nodeType: 3 nodeValue: /n  
</script>
```

> **返回的是兄弟节点（元素节点、属性节点、文本节点、注释节点、文档节点） 可能是其中一个，不一定就是元素结点**
>
> 如果兄弟元素之间是没有换行且没有注释，则一定是元素结点
>
>  如：<ul><li>列表1</li><li *id*="two">列表2</li><li>列表3</li><li>列表4</li></ul>



#### 方法二：排除空白节点

**介绍**：绝大多数浏览器,都会把元素之间的空白当做文本节点来处理,所以上面四个属性可能会返回空白元素即空白节点。DOM 中的空白符会让处理节点结构时增加不少麻烦导致：
- 有些空白符会自成一个文本节点。
- 有些空白符会与其他文本节点合成为一个文本节点。

**比如：上一种的方法**

​     DOM 树结构：     

![空白节点树](http://edu.yueqian.com.cn/group1/M00/05/9F/wKgP3GDvknGAIalxAAAgN_V9YBM989.png?token=null&ts=null)
> 其中“\n”代表换行符,要使用 DOM 游走于节点结构间又不想要无用的空白符时就需要使用JavaScript 代码排除空白节点

**排除空白节点**

```javascript
function getPrevElement(text){  
  var prev = text.previousSibling; 
  // element.nodeType == 1 是一个非空白节点    
  while (prev.nodeType !=1)  {                                           
      console.log(prev);
      prev = prev.previousSibling;
  }
  return prev;
}
// nextsibling 类似
```
> 除此以外JavaScript还提供了四个属性，解决上面四个属性获取空白节点的问题可以直接获取元素节点

**`previousElementSibling`** 返回当前元素在其父元素的子元素节点中的前一个元素节点,如果该元素已经是第一个元素节点,则返回null。

**`nextElementSibling`** 返回当前元素在其父元素的子元素节点中的后一个元素节点,如果该元素已经是最后一个元素节点,则返回null。

**`firstElementChild`**  返回对象的第一个子 元素, 如果没有子元素，则为null。

**`lastElementChild`**：返回对象的最后一个子元素，如果没有子元素，则返回 null。

**例子**：跟上一种方法一样，只是将方法名修改即可，这里就不举例了



#### 补充

>  el.chidren 获得el里面所有的子元素
>
>  el.parentElement 获得el的父元素
>
>  el.parentNode 获得el的父元素节点



<hr/>

### 节点的操作/修改

#### nodeValue   

**概念**：**仅在文本节点操作时该属性可以用来更新文本节点**

```html
<p id="demo">修改我的内容</p>

<script>

	var x=document.getElementById("demo"); 
  // 获取文本节点并修改 
	x.childNodes[0].nodeValue = "change"

</script>
```

> 不常用 需要考虑注释结点等其他结点对其影响



#### innerHTML  

**概念**：**属性设置或获取HTML语法表示的元素的后代。**

**语法**：

```html
 <div class="box">
    <i>嘤嘤嘤嘤</i>，这是盒子里的内容
 </div>
<script>
   var box = document.getElementsByClassName("box")[0]
   console.log(box.innerHTML)  //  <i>嘤嘤嘤嘤</i>，这是盒子里的内容
</script>
```

**注意**： 
- 如果一个 `<div>`, `<span>`, 或 `<noembed>` 节点有一个文本子节点，该节点包含字符 `&`, `<`,  或 `>`, innerHTML 将这些字符分别返回为`&amp;`, `&lt;` 和 `&gt`;使用 `textContent`  可获取一个这些文本节点内容的正确副本。
- 设置元素的 innerHTML 将会删除所有该元素的后代并以上面给出的 htmlString 替代。

**例子**：
```javascript
var logElem = document.querySelector(".log");
var time = new Date();
var timeStr = time.toLocaleTimeString();
logElem.innerHTML += timeStr + ": " + msg + "<br/>";
```



#### textContent

**概念**：**返回一个节点及其后代的文本内容,textContent 的值取决于具体情况：**

- 如果节点是一个 document，或者一个 DOCTYPE ，则 textContent 返回 null。
- 如果节点是个 注释、文本节点，textContent 返回节点内部的文本内容，例如 Node.nodeValue。
- 对于元素节点类型，textContent 将所有子节点的 textContent 合并后返回

**语法**
```html
<div class="box">
    <!-- <style>
      div {
         background: purple;
      }
    </style> -->
    <p style="display:none">段落标签</p>
    <!-- 这是注释1 -->
    <div>box盒子1</div>
    <!-- 这是注释2-->
    <span>span标签</span>
    <div>box盒子2</div>
</div>
<script>
 var box = document.querySelector(".box")
 console.log("textContent获得的内容输出==>",box.textContent)
</script>
```
<img src="https://i.loli.net/2021/08/14/A8VT5EYc4OWbQCI.png" style="zoom:50%;" />





#### textContent 与 innerHTML 的区别

- **Element.innerHTML 返回 HTML**。通常，为了在元素中检索或写入文本，人们使用 innerHTML。但是，**textContent 通常具有更好的性能，因为文本不会被解析为HTML**。
- **使用 textContent 可以防止 XSS 攻击**

**例子**：
```html
<div id="divA">This is <span>some</span> text!</div>

<script>
// 你可以使用 textContent 去获取该元素的文本内容
var text = document.getElementById('divA').textContent;//  'This is some text!'

// 或者设置元素的文字内容：
document.getElementById('divA').textContent = 'This text is different!';
// <div id="divA">This text is different!</div>
</script>
```



#### innerText

**介绍**： 该属性表示一个节点及其后代的“渲染”文本内容，
**注意**：请避免使用该方法，因为他**不会返回任何一个被css隐藏了的标签**。（并且因为要判断元素是否渲染导致该api很消耗性能）
**语法**

```html
<div class="box">
    <!-- <style>
      div {
         background: purple;
      }
    </style> -->
    <p style="display:none">段落标签</p>
    <!-- 这是注释1 -->
    <div>box盒子1</div>
    <!-- 这是注释2-->
    <span>span标签</span>
    <div>box盒子2</div>
</div>
<script>
 var box = document.querySelector(".box")
 console.log("innerText获得的内容输出==>",box.innerText)
</script>
```
<img src="https://i.loli.net/2021/08/14/qTDmGSk5RyCLiIJ.png" style="zoom:50%;" />





#### textContent 与 innerText 的区别：

- textContent 会获取所有元素的内容，包括 `<script>` 和 `<style>` 元素，然而 innerText 只展示给人看的元素。
- textContent 会返回节点中的每一个元素。相反，innerText 受 CSS 样式的影响，并且**不会返回隐藏元素的文本**，
- 与 textContent 不同的是, 在 Internet Explorer (小于和等于 11 的版本) 中对 innerText 进行修改， 不仅会移除当前元素的子节点，而且还会永久性地破坏所有后代文本节点。在之后不可能再次将节点再次插入到任何其他元素或同一元素中。













