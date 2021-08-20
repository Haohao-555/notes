# ✍🏻DOM事件
**介绍**：事件是在编程时系统内发生的动作或者发生的事情，系统会在事件出现时产生或触发某种信号，并且会提供一个自动加载某种动作（列如：运行一段代码）的机制。例如：如果用户在网页上单击一个购买按钮，会显示一个购买确认信息框来响应这个动作。 

具体的说事件是可以被JavaScript侦测到的行为,网页中每一个元素都可以产生某些可以出发JavaScript函数的事件，在网页中, 事件在浏览器窗口中被触发并且通常被绑定到窗口内部的特定部分 — 可能是一个元素、一系列元素、被加载到这个窗口的 HTML 代码或者是整个浏览器窗口。举几个可能发生的不同事件：
- 用户在某个元素上点击鼠标或悬停光标。
- 用户在键盘中按下某个按键。
- 用户调整浏览器的大小或者关闭浏览器窗口。
- 一个网页停止加载。
- 提交表单。
- 发生错误。

**概念**：每个可用的事件都会有一个**事件处理器**，也就是事件触发时会运行的代码块。当我们定义了一个用来回应事件被激发的代码块的时候，我们说我们**注册了一个事件处理器**。注意事件处理器有时候被叫做**事件监听器**——从我们的用意来看这两个名字是相同的，监听器留意事件是否发生，然后处理器就是对事件发生做出的回应。



### 🤙🏻事件的绑定方式

**介绍**：JavaScript可以通过多种不同的方法将事件侦听器代码添加到网页，以便在关联的事件被触发时运行它。这种方法我们称之为事件的绑定方式

#### 💪🏻事件处理器属性

**介绍**：只要监听的事件触发你赋值给他的代码(**事件处理函数**)就会运行。

**例子**：

```html
<button class="bgChange">随机改变颜色</button>
<script>
   function randomColor() {
        return Math.floor(Math.random() * 256)
   }
   var bgChange = document.querySelector(".bgChange")
   bgChange.onclick = function () {
      var rgb = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")"
      document.body.style.backgroundColor = rgb
   }
</script>
```

**注意**：
1. JavaScript有很多事件处理器属性可供使用。
2. 如果需要取消事件处理器属性的事件处理函数，比如在某些App中当商品售完后购买按钮点击事件将会被取消。**只需要将对应的事件处理器属性值赋值为null即可**
   

<br/>

#### 💪🏻行内事件处理器

**（请勿使用）**

**介绍**：在Web上注册事件处理程序的最早方法是类似于事件处理器属性的HTML属性(也称为内联事件处理程序)—属性值实际上是当事件发生时要运行的JavaScript代码。

**例子**：

```html
<button onclick="alert('你好，这是我的旧式事件处理程序!');">Press me</button>
<button onclick="bgChange()">Press me</button>
<script>
function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
</script>
```

**注意**：通过上面的例子，你会发现HTML属性等价于许多事件处理器的属性；但是，你不应该使用这些 —— 他们被认为是不好的做法。使用一个行内事件处理属性似乎看起来很简单，但该用法会导致代码难以管理和效率低下。因为混用 HTML 和 JavaScript，使得文档很难解析，在开发中最好的行为是将 JavaScript 代码单独书写。并且该方法也不适用于给多个元素绑定相同事件处理方法

<br/>

#### 💪🏻添加事件监听器

`addEventListener()`

**介绍**：DOM操作提供一种新的事件触发机制, 这个机制给浏览器提供了一个函数 `addEventListener()`。该函数和**事件处理属性**是类似的，但是语法略有不同。

**例子**：
```html
<button class="bgChange">随机改变颜色</button>
<script>
   function randomColor() {
        return Math.floor(Math.random() * 256)
   }
   var changeColor = function () {   
        var rgb = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")"
        document.body.style.backgroundColor = rgb
   }  
   var bgChange = document.querySelector(".bgChange")
   bgChange.addEventListener("click", changeColor)
</script>
```

> 这个机制带来了一些相较于旧方式的优点。在大型的、复杂的项目中非常有用并且在其他的一些场景中非常有效。

<br/>

##### **👉🏻注意：addEventListener 与 事件处理器属性的区别👈🏻**

🤞🏻`addEventListener`可以给同一个事件监听器注册多个处理器

```javascript
// 使用事件处理器属性无法给同一个事件同时绑定多个方法, functionB 会覆盖掉 functionA。我们也是通过这种方式取消事件的绑定
myElement.onclick = functionA;
myElement.onclick = functionB;

// 但是addEventListener可以给同一个事件同时绑定多个方法，这时functionA与functionB都会正常工作 执行顺序按绑定的顺序执行
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
```

🤞🏻**`addEventListener`** 给同一个事件目标注册了多个相同的 EventListener，那么重复的实例会被抛弃。所以这么做不会使得 EventListener 被调用两次，也不需要手动清除多余的EventListener ，因为重复的都被自动抛弃了，但是前提是 options 中的 capture 的参数值一致，如果capture的值不一致，此时就算重复定义，也不会被抛弃掉。

```javascript
function functionA() {
  console.log('触发，我会给元素绑定同样的EventListener')
  
  // functionA 被触发又一次给事件目标myElement注册了一个相同的EventListener，因为EventListener完全相同旧的事件监听将会被自动抛弃
  myElement.addEventListener('click', functionA);
}

myElement.addEventListener('click', functionA);


function functionB() {
  console.log('触发，我会给元素绑定同样的EventListener')
  
  // functionA 被触发又一次给事件目标myElement注册了一个相同的EventListener，但是capture值与旧的EventListener不同，这时就的事件监听将不会被抛弃
  myElement.addEventListener('click', functionB, true);
}

myElement.addEventListener('click', functionB);
```

<br>

##### .addEventListener()细讲

**概念**：`.addEventListener()` 方法将指定的监听器注册到事件目标上，当该对象触发指定的事件时，指定的回调函数就会被执行。 事件目标可以是一个文档上的元素 Element,Document和Window或者任何其他支持事件的对象 (比如 `XMLHttpRequest`)。

**语法**：

```javascript
target.addEventListener(type, listener);
target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
```
**参数**

- type：一个区分大小写的字符串，表示要侦听的事件类型。例 "click" 点击事件。
- listener：当指定类型的事件发生时，处理事件目标对象的回调函数。
- options ：可选属性，一个指定有关 listener 属性的可选参数对象。可用的选项如下：
  - capture:  Boolean，表示事件是否使用**捕获模式**。（事件的捕获会在后面的课程中学习） 
  - once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
  - passive: Boolean，该属性用来改善的滚屏性能，当值设置为true时，表示 listener 永远不会 **阻止浏览器默认事件**即永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。（阻止浏览器默认事件会在后面的课程中学习）
- useCapture： Boolean，可选属性表示事件是否使用**捕获模式**。 默认为 `false` 。 

<br/>

#### 💪🏻取消事件监听

**`removeEventListener()`** 
**概念**：因为 **`addEventListener`** 可以给同一个事件监听器注册多个处理器，导致我们无法使用覆盖的方式删除已注册的监听事件,所以JavaScript提供了专门用来删除使用 `.addEventListener()` 方法添加的事件。使用事件类型，事件侦听器函数本身，以及可能影响匹配过程的各种可选择的选项的组合来标识要删除的事件侦听器。
**语法**：

```javascript
target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);
```
**参数**
- type：一个区分大小写的字符串，表示要侦听的事件类型。例 "click" 点击事件。
- listener：需要从目标事件移除的同一个处理事件目标对象的回调函数。
- options ：可选属性，一个用来匹配需要删除指定事件侦听器特征的可选对象。
  - capture:  Boolean，表示事件是否使用**捕获模式**。（只有该属性影响匹配） 
- useCapture： Boolean，可选属性表示事件是否使用**捕获模式**。 默认为 `false` 。

> 删除指定的事件监听时，需要提供以前调用addEventListener()所提供的监听事件, 这样你或许可以达到移除此监听事件的目的. 并且, 你必须要提供相同的 **type** 、 **listener** 、 **options** 和 **useCapture** 参数给 removeEventListener()。**注意** 唯一需要 removeEventListener() 检测的是 capture/useCapture 标志. 这个标志必须与 removeEventListener() 的对应标志匹配, 但是其他的值不需要

**例子**：
```javascript
element1.addEventListener("mousedown", handleMouseDown, true);

element1.removeEventListener("mousedown", handleMouseDown, false);     // 失败
element1.removeEventListener("mousedown", handleMouseDown, true);      // 成功



element2.addEventListener("click", handleMouseDown, { passive: true });

element2.removeEventListener("click", handleMouseDown, { passive: true });     // 成功
element2.removeEventListener("click", handleMouseDown, { capture: false });    // 成功
element2.removeEventListener("click", handleMouseDown, { capture: true });     // 失败
element2.removeEventListener("click", handleMouseDown, { passive: false });    // 成功
element2.removeEventListener("click", handleMouseDown, false);                 // 成功
element2.removeEventListener("click", handleMouseDown, true);                  // 失败
```



<hr/>

### 🤙🏻事件分类

#### 💪🏻资源事件

| 事件名称    | 触发条件                                               |
| ----------- | ------------------------------------------------------ |
| load        | 页面元素(包括图像多媒体等)资源及其相关资源已完成加载。 |
| beforunload | 用户退出页面                                           |

**例子**：
```html

```

<br/>

#### 💪🏻视图事件

| 事件名称 | 触发条件                         |
| -------- | -------------------------------- |
| resize   | 窗口或者框架被重新调整大小时触发 |
| ⚡scroll  | 档视图或元素已被滚动。           |

**例子**：
```javascript

```
> 注意：一个元素的 scrollTop 属性是这个元素的内容顶部（滚动出去的）到它的视口可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。
>
> 该属性可读写即可以通过设置该属性让元素偏移。

<br/>

#### 💪🏻鼠标事件

| 事件名称     | 触发条件                                                    |
| ------------ | ----------------------------------------------------------- |
| ⚡click       | 当用户点击某个对象时调用的事件句柄                          |
| ⚡dblclick    | 当用户双击某个对象时调用的事件句柄                          |
| ⚡mouseover   | 鼠标移动到某个元素之上                                      |
| ⚡mouseout    | 鼠标从某元素离开                                            |
| ⚡mousedown   | 鼠标按钮按下                                                |
| ⚡mouseup     | 鼠标按键被松开                                              |
| ⚡mousemove   | 鼠标在某个元素内移动                                        |
| ⚡mouseenter  | 鼠标光标从元素外部移动到元素内部时触发,这个事件不冒泡       |
| ⚡mouseleave  | 位于元素内部的鼠标光标移动到元素范围之外触发,这个事件不冒泡 |
| ⚡contextmenu | 鼠标右键菜单展开时                                          |

**例子**：

```

```

<br/>

#### 💪🏻键盘事件

| 事件名称  | 触发条件                                                     |
| --------- | ------------------------------------------------------------ |
| ⚡keydown  | 某个键盘按键被按下时触发.(不区分大小写)                      |
| ⚡keyup    | 某个键盘按键被松开时触发                                     |
| ⚡keypress | 除 Shift、Fn、CapsLock 外的任意键被按住。而且按住不放(长按),会连续触发。 |

**例子**：

```

```

<br/>

#### 💪🏻表单事件

| 事件名称 | 触发条件                                                     |
| -------- | ------------------------------------------------------------ |
| reset    | 点击重置按钮时                                               |
| ⚡submit  | 点击提交按钮                                                 |
| ⚡focus   | 元素获得焦点（不会冒泡）。                                   |
| ⚡blur    | 元素失去焦点（不会冒泡）。                                   |
| ⚡input   | 表单元素的输入事件当value发生变化时                          |
| ⚡change  | 对于表单元素的值被用户提交时。与输入事件不同的是，对元素值的每次更改不一定会触发更该事件。 |

> 补充：
> focus() 方法用于为 checkbox 赋予焦点。
> blur() 方法用于从链接上移开焦点。

**例子**：

```

```



<hr/>

### 🤙🏻Event对象

**介绍**：有时候在事件处理函数内部，您可能会看到一个固定指定名称的参数，例如event，evt或简单的e。 这被称为事件对象，它被自动传递给事件处理函数，以提供额外的功能和信息。 简单的说Event对象是事件执行过程中的状态,用来保存当前事件的信息对象

**如何获取Event对象**：
**概念**：事件处理函数的第一参数会默认获取Event对象

**例子**：

```html
<div class="bix"></div>
<script>
    var box = document.getElementsByClassName("box")[0]
    box.onclick = function(e) {
         // 兼容浏览器版本的写法
        var even = e || window.event
        console.dir(even);
    }
</script>
```

<br>

#### 💪🏻Event对象详情

- **Event公共属性与方法**

| 名称               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| currentTarget      | 其事件事件处理程序**当前正在处理事件的那个元素** 一般为 null |
| ⚡target            | 返回触发此事件的元素(**事件的目标元素**)                     |
| type               | 被触发的事件类型                                             |
| ⚡preventDefault()  | **通知浏览器不要执行与事件相关联的默认动作.**                |
| ⚡stopPropagation() | **取消事件进一步捕获或者冒泡**                               |


- **鼠标/键盘事件Event属性**

| 名称            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| altKey          | 返回当前事件触发时,'ALT'是否被按下                           |
| ctrlKey         | 返回当前事件触发时,'Ctrl'是否被按下                          |
| shiftKey        | 返回当前事件触发时,'Shift'是否被按下                         |
| button          | 返回当前事件被触发时,鼠标那个按钮被点击                      |
| which           | 该属性声明了被敲击的键生成的ascii码 字符码                   |
| keyCode         | 该属性声明了被敲击的键生成的ascii码 字符码                   |
| clientX         | 返回当事件被触发时,鼠标指针相对于浏览器可视区域的水平坐标    |
| clientY         | 返回当事件被触发时,鼠标指针相对于浏览器可视区域的垂直坐标    |
| screenX         | 返回当某个事件被触发时,鼠标指针相对于电脑屏幕的水平坐标      |
| screenY         | 返回当某个事件被触发时,鼠标指针相对于电脑屏幕的垂直坐标      |
| pageX,PageY     | 鼠标相对于文档的位置(包括滚动条的距离,即clientX+document.body.scrollLeft,IE不支持) |
| offsetX,offsetY | 返回发生事件的地点在事件源元素的坐标系统中的x坐标和y坐标     |

> 键盘事件对象属性：altKey、ctrlKey、shiftKey、which、keyCode
>
> 鼠标事件对象属性：button、clientX、clientY、screenX、screenY、pageX、PageY 、offsetX、offsetY    

```html

```

<br>

#### 💪🏻阻止默认行为

**介绍**：默认行为就是浏览器自己触发的事件。比如：a链接的跳转，表单的提交，鼠标右键菜单显示。

**例子**：

```html
<a href="www.baidu.com"></a>
<script>
   var a = document.querySelector("a").onclick = function () {
      e.preventDefault()
   }
</script>
```

<br>

#### 💪🏻事件的冒泡与捕获

**概念**：事件冒泡和捕捉是两种机制，主要描述当在一个元素上有两个相同类型的事件处理器被激活会发生什么。当一个事件发生在具有父元素的元素上时，现代浏览器运行两个不同的阶段 - 捕获阶段和冒泡阶段。 

**在捕获阶段**

- 浏览器检查元素的最外层祖先`<html>`，是否在捕获阶段中注册了一个onclick事件处理程序，如果是，则运行它。
- 然后，它移动到`<html>`中单击元素的下一个祖先元素，并执行相同的操作，然后是单击元素再下一个祖先元素，依此类推，直到到达实际点击的元素。

**在冒泡阶段，恰恰相反**

- 浏览器检查实际点击的元素是否在冒泡阶段中注册了一个onclick事件处理程序，如果是，则运行它
- 然后它移动到下一个直接的祖先元素，并做同样的事情，然后是下一个，等等，直到它到达`<html>`元素。
  ![冒泡与捕获](http://edu.yueqian.com.cn/group1/M00/05/A0/wKgP3GDvlN-AEtffAAA1Z4itJqg524.png?token=null&ts=null)


**解释**：在现代浏览器中，默认情况下，所有事件处理程序都在冒泡阶段进行注册。因此，在上面的图示中，当您单击`<video>`时，这个单击事件从 `<video>` 元素向外冒泡直到 `<html>` 元素。

<br>

#### 💪🏻阻止事件冒泡

**概念**：标准事件对象Event具有可用的名为 `stopPropagation()` 的函数, 当在事件对象上调用该函数时，它只会让当前事件处理程序运行，但事件不会在冒泡链上进一步扩大，因此将不会有更多事件处理器被运行不会向上冒泡。

**代码**：在冒泡阶段进行阻止

```html
<div class="parent">
    <div class="son1">
        <div class="sunzi">孙子元素</div>
    </div>
    <div class="son2">第2个子元素</div>
<div>
<script>
    var parent = document.querySelector(".parent")
    var firstKid = parent.children[0]
    var sunzi = parent.children[0].children[0] 
    firstKid.onclick = function (e) {
        console.log("儿子被点击了")
        // 阻止冒泡
        e.stopPropagation();
    }
    sunzi.onclick = function (e) {
        console.log("孙子被点击了")
        // e.stopPropagation();
    }
</script>    
```

**👉🏻注意👈🏻**

* 在事件没有进行冒泡阻止时，会继续冒泡到定层 document > body
* 不是所有的事件都能冒泡,以下事件不能冒泡:
  * blur、focus、load、unload
  * Media由媒介（比如视频、图像和音频）触发的事件
  * mouseleave & mouseenter
* 冒泡到最顶层的目标不同,大部分浏览器到window，IE8  到 document

<br>

**代码：**在捕获阶段进行阻止

> 默认情况下，绝大多数事件处理程序都是在冒泡阶段注册的，这在大多数情况下更有意义。如果您真的想在捕获阶段注册一个事件，那么您可以通过使用`addEventListener()`注册您的处理程序，并将可选的第三个属性设置为`true`。

```html
<div class="parent">
    <div class="son1">
        <div class="sunzi">孙子元素</div>
    </div>
    <div class="son2">第2个子元素</div>
<div>
<script>
    var parent = document.querySelector(".parent")
    var firstKid = parent.children[0]
    var sunzi = parent.children[0].children[0] 
    
    parent.addEventListener("click", function (e) {
            console.log("爸爸被点击了")
    })
    
    firstKid.addEventListener("click", function (e) {
        console.log("儿子被点击了")
    })
    
    sunzi.addEventListener("click", function (e) {
        console.log("孙子被点击了")
       // e.stopPropagation(); 不生效
    }, { capture: false })
    
    document.body.addEventListener("click", function (e) {
       console.log("body的点击方法被触发了")
       // 阻止捕获
       e.stopPropagation();
        }, { capture: true })
</script>    
```

<br>

**👉🏻注意：两者的区别👈🏻**

* 冒泡阶段：点击事件的执行顺序是从最底层开始执行逐步冒泡到顶层（孙子 、儿子、爸爸、body、document）
* 捕获阶段：点击事件的执行顺序是从最顶层开始执行逐步下沉到到低层（document、body、爸爸、儿子、孙子 ）
* 相同点：一旦遇到 ` e.stopPropagation()`就停止冒泡（下沉）

<br>

#### 💪🏻事件委托 

**介绍**：冒泡还允许我们利用事件委托，事件委托是通过事件冒泡这种方式，利用**父级元素(或祖先元素)将事件监听器设置在其父级元素上，从而让其子元素(或后代元素)都绑定事件（注册事件）而不是每个子节点单独设置事件监听器。**优势在于**减少使用循环减少DOM操作（节省内存） 动态给所有子元素或后代元素绑定事件**

**例子**：

```html
<style>
 div {
    width: 25%;
    height: 200px;
    float: left;
  }
</style>
<script>
    
function randomColor() {
     return "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.random() + ")"
}
    
// 先创建16个盒子
for (var i = 0; i < 16; i++) { 
     var div = document.createElement("div")
     document.body.appendChild(div)
}
    
// 事件委托： body托管里面的子元素div的点击事件，因为div点击后click事件会冒泡到body
document.body.onclick = function (event) {
    var e = event || window.event;
    if (e.target.tagName == "DIV") {
        e.target.style.background = randomColor()
    }
}    
</script>

```

<br>

#### 💪🏻节点克隆

`cloneNode(deep)` 方法创建节点的拷贝，并返回该**副本**。
**语法**

```javascript
var dupNode = node.cloneNode(deep);
```

- node：将要被克隆的节点
- dupNode：克隆生成的副本节点
- **deep** （可选）：是否采用深度克隆,如果为true，则该节点的所有后代节点也都会被克隆，如果为false，则只克隆该节点本身

**例子**：
```html
<div class="box1">
    盒子1
    <span>span标签</span>
</div>
<script>
    var box1 = document.getElementsByClassName("box1")[0]
    var div1 = box1.cloneNode(true)
    console.log(div1); // <div class="box1">盒子1<span>span标签</span></div>
    var div2 = box1.cloneNode(false)
    console.log(div1); // <div class="box1"></div>

</script>
```

**补充**：
1. 克隆一个元素节点会拷贝它所有的属性以及属性值,当然也就包括了属性上绑定的事件(比如`onclick="alert(1)"`)，但**不会拷贝那些使用 `addEventListener()` 方法或者 `node.onclick = fn` 这种用JavaScript动态绑定的事件**。

2. 在使用 `Node.appendChild()` 或其他类似的方法将拷贝的节点添加到文档中之前，那个**拷贝节点并不属于当前文档树的一部分**，也就是说，它没有父节点.

3. 如果`deep`参数设为`false`，**则不克隆它的任何子节点.该节点所包含的所有文本也不会被克隆**，因为文本本身也是一个或多个的 Text节点.

4. 如果`deep`参数设为`true`，则会复制**整棵DOM子树(包括那些可能存在的Text子节点)**。对于空结点(例如`<img>`和`<input>`元素)，则`deep` 参数无论设为 `true` 还是设为 `false` ，都没有关系，但是仍然需要为它指定一个值。

**注意**:为了防止一个文档中出现**两个ID重复的元素**，使用`cloneNode()`方法克隆的节点在需要时应该**指定另外一个与原ID值不同的ID**
如果原始节点设置了ID，并且克隆节点会被插入到相同的文档中，那么应该**更新克隆节点的ID以保证唯一性**。**name属性可能也需要进行修改**，取决于你是否希望有相同名称的节点存在于文档中。
