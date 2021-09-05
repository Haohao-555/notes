#### JQuery 入口函数

```javascript
// jquery入口函数可以执行多次
$(document).ready(function(){
     console.log(1);
})

// 简写
 $(function(){
    console.log(1);
 })
```



#### JQuery 选择器

```html
<div class="box-1">div</div>
<span class="txt-2">span</span>
<h3 id="demo">h3</h3>
<button>button</button>
<input type="text" value="input">
<ul>
    <li>1</li>
    <li>2</li>
</ul>
<input type="checkbox" checked>
<input type="checkbox">
<script>
    $(function() {
        // 页面上的标签
        // DOM: 文档对象模型（DOM 是控制页面元素的一套标准）
        // dom对象：页面上的标签（元素）

        // 选择器（获取页面标签的一种方式）
        // 调用 $函数或者 jQuery函数，传递的是选择器的标记
        // 返回 jquery 对象
        var o1 = $(".box-1") 
        console.log(o1); // o1 是 jQuery 对象
        console.log(typeof o1);
        console.log($("#demo"))
        console.log($("button"));
        console.log($("input[type='text']"))
        console.log($("ul > li:nth-child(1)"))
        console.log($("input[type='checkbox']:checked"))
    })
</script>
```

```html
<div class="wrapper">
  <div class="nav">
    <ul>
      <li>颜色</li>
      <li>颜色</li>
      <li>颜色</li>
      <li class="active">黄色</li>
      <li>紫色</li>
      <li>粉色</li>
      <li>淡蓝色</li>
      <li>黄绿色</li>
    </ul>
  </div>
</div>
<script>
  $(function () {
    // 选中 .nav 标签
    $(".nav").css("background", "deepskyblue");
    // 选中 .nav 标签的父元素
    $(".nav").parent().css("height", "120px");
    // 选中 .nav 标签的子元素
    $(".nav").children("ul").css("backgroundColor", "#ccc");
    //选中 .nav 标签下所有的li元素
    $(".nav").find("li").css("borderRadius", "20px");
    // 选中 .active标签的上一个元素
    $(".active").prev().css("backgroundColor", "blue");
    // 选中 .active标签的下一个元素
    $(".active").next().css("backgroundColor", "purple");

    // 选中 .active以外的所有 li 元素
     $(".active").siblings("li").css("backgroundColor", "#fff");

    // 选中 ul li 列表中第一个 li 标签
    $("ul li").first().css("backgroundColor", "red");
    // 选中 ul li 列表中第一个 li 标签
    $("ul li").last().css("backgroundColor", "yellowgreen");

    // 通过索引值选中元素
    $("ul li").eq(1).css("background", "green");
    $("ul li").eq(2).css("background", "blue");

    // 选中倒数第二个li
    var len = $("ul li").length;
    $("ul li")
      .eq(len - 2)
      .css("backgroundColor", "lightblue");
    $("ul li")
      .eq(len - 3)
      .css("backgroundColor", "blue");
  });
</script>
```



#### JQuery 设置元素的样式

```html
<div class="box-1"></div>
<script>
   $(function() {
       // 方法一
       $(".box-1").css("backgroundColor","red");
       
       // 方法二
       var option = {
           backgroundColor: "green",
           borderRadius: "50px"
       }
       $(".box-1").css(option);
   })
</script>
```



#### JQuery 控制元素的类名

```html
<div>1</div>
<div>2</div>
<div>3</div>
<script>
    
  // 设置元素的类名 addClass
  $("div").eq(0).addClass("bg-red");
    
  // 移除元素的类名 removeClass
  $("div").eq(0).removeClass("bg-red");
    
  // 切换类名 toggleClass（存在就移除 不存在就添加）
  $("div").eq(0).toggleClass("bg-red");
  $("div").eq(0).toggleClass("bg-red");
    
  // 判断是否包含该类名 hasClass
  var flag = $("div").eq(0).hasClass("bg-red");  
  console.log(flag); // true 表示存在该类名; false表示不存在该类名
</script>
```



#### JQuery 控制元素的文本

```html
<div>
   <!-- 双标签 -->
  <span>天空突然下了点雨</span>
</div>
<div class="form-1">
   <!-- 单标签 -->
   <input type="text" value="现在天气又好转了">
</div>
<script>
    // 获取值
    var v1 = $(".text-1").html();
    console.log(v1); //   <!-- 双标签 --><span>天空突然下了点雨</span>  原样输出
    
    // 获取值
    var v2 = $(".text-2").text();
    console.log(v2); // 天气突然下了点雨 去除掉标签 原样输出
    
    // 获取表单值
    var v3 = $(".form-1 input").val();
    console.log(v3);
    
    // 设置元素的纯文本
    $(".text-1").text("<b>天空突然下了点雨</b>");
    
    // 设置文本内容
    $(".form-1 input").val("输入...");
</script>
```



#### JQuery 控制标签的属性

```html
<div class="">1</div>
<div id="">2</div>
<img src="" alt="3">
<a href="">4</a>
<script>
   // 设置标签的属性
   $("div").eq(0).attr("class","box");
   // 获取标签的属性
   var v1 =  $("div").eq(0).attr("class"); 
   // 删除标签的属性
   $('img').removeAttr("src")
</script>
```



#### JQuery 表单标签的属性控制

```html
<div>
    <input type="button" value="按钮" disabled>
    <input type="button" value="按钮">
</div>
<div>
    <input type="checkbox" checked>
    <input type="checkbox" >
</div>
<script>
  var v1 = $("input[type='button']").eq(0).prop("disabled");
  var v2 = $("input[type='button']").eq(1).prop("disabled");
  console.log(v1);// true
  console.log(v2);// false
    
  var v3 = $("input[type='checkbox']").eq(0).prop("checked");
  var v4 = $("input[type='checkbox']").eq(1).prop("checked");
  console.log(v3);// true
  console.log(v4);// false 
    
   // 选择复选框标签 设置勾选状态
   $("input[type='checkbox']").eq(0).prop("checked",false);
</script>
```



#### JQuery 对象和 DOM 对象

```html
<div></div>
<script>
   var $dom = $("div");
   console.log( $dom );
    
   // 转成 dom 对象
   var div1 = $dom[0];
   var div2 = $dom.get(0); 
    
   // 转成 jQuery 对象
   var ele = document.querySelector("div");
   var $ele =  $(ele);
   
</script>
```



#### JQuery 操作 DOM

* 给容器中添加子元素 

```html
<div id="container">
    <div class="demo"></div>
</div>
<script>
  $(function() {
      // 添加元素 往容器标签尾端（索引值为length-1）添加元素 滚动加载
      $('container').append("<div class='box1'>1</div>");
      
      // 添加元素 往容器标签首位（索引值为0）添加元素 下拉刷新
      $('container').prepend("<div class='box'>4</div>");
  })
</script>
```

* 给容器中添加子元素 

```html
<div class="box-1">
    <!-- 目标元素 -->
    <div></div>
</div>
<div class="box-2"></div>
<script>
// 把目标元素移动至指定的容器标签
$(function() {
 $(".box-1 > div").appendTo('.box-2');
})
</script>
```

* 给指定元素前后添加元素

```html
<div class="container">
    <div class="demo"></div>
</div>
<script>
    $(function() {
        // 在元素前添加元素
        $('demo').before('<h2>Hello World</h2>');
        // 在元素后添加元素
        $('demo').after('<h2>Hello world</h2>');
    })
</script>
```

* 给指定元素前后添加元素

```html
<div class="container">
    <div class="demo"></div>
</div>
<div class='box'></div>
<script>
   $(function() {
       // 将 .box 元素添加到 .demo元素的后面
       $('.box').insertAfter('.container .demo');
       $('.box').insertBefore('.container .demo');
   })
</script>
```

* 删除元素

```html
<ul>
    <li class="list-1">A</li>
    <li class="list-2">B</li>
    <li class="list-3">C</li>
</ul>
<script>
   $(function() {
       // 删除所有 li 元素
       $('ul li').remove();
       
       // 删除指定元素
       $('ul li').eq(0).remove();
       $('.list-1').remove();
       
       // 清空元素
       $('ul').html("");
       $('ul').empty();
   })
</script>
```

* 克隆元素

```html
<div class='container'>
    <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
    </ul>
</div>
<script>
   $(function() {
       var $ele = $('.container').clone();
       $('body').append($ele);
   })
</script>
```



#### JQuery 事件

* 方法一：$(selector).事件类型(function(){})

```html
<button class="btn-1">点击按钮1</button>
<button class="btn-2">点击按钮2</button>
<button class="btn-3">点击按钮3</button>
<script>
   $('.btn-1').click(function() {
       console.log(this);
       // 把 dom 对象转成 jquery 对象
       $(this).css('backgroundColor', 'yellow')
   })
   // 其他事件监听也是类似 （jquery对象.监听事件的类型）
</script>
```

* 方法二：$(selector).bind(事件类型，function(){})

```html
<button class='btn'>按钮</button>
<script>
    // 一个监听器可以监听多种事件类型
   $('.btn').bind('click mouseenter', function(event) {
       var count = 0;
       // 获取事件的类型  
       var type = event.handleObj.origType;
       if(type === "click") {
           count++
           if(count == 5) {
               // 删除点击监听器
               $('.btn').unbind("click");
               // 删除所有事件类型的监听器
               // $(".btn").unbind(); 
           }
       }
       
   })    
</script>
```

* 方法三：事件委托 delegate()

```html
<ul>
    <li data-type="a">张三</li>
    <li data-type="b" class="item-2">李四</li>
    <li data-type="c">赵云</li>
    <li data-type="e">孙六</li>
</ul>
<script>
    // 区分父容器中的子元素
   $('ul').delegate("li[data-type='b']", 'click', function(e) {
       console.log(e.target)
   })
   $('ul').delegate(".item-2", 'click', function(e) {
       console.log(e.target)
   })
   $('ul').delegate("li", 'click', function(e) {
       if(e.target.dataset.type == 'b') {
           console.log("lisi")
       }
   })
    
   // 绑定多个事件
    $('ul').delegate(".item-2","click mouseenter",function(event) {
        if(event.handleObj.origType == "click") {
            console.log("click")
        }else if(event.handleObj.origType == "mouseenter") {
            console.log("mouseenter")
        }
    })
    
    // 解除点击事件
    $('ul').undelegate("click");
    // 解除所有事件
    $('ul').undelegate();
</script>
```

* 方法四：事件委托 on() （jQuery 推荐）

```html
<div class="container">
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
</div>
<script>
   // 绑定事件
   $('button').on("click", function() {
        console.log(e);
   })
    
   // 事件委托
   $('.container').on("click", "button", function(e) {
       console.log($(this))
   })
    
   // 绑定多个事件
   $('.container').on('click mouseenter', "button", function(e) {
       if(e.handleObj.origType == "click"){
           console.log('click')
       }
   })
    
   // 取消点击事件绑定
   $('.container').off("click")
   
   // 取消所有事件绑定
   $('.container').off();
</script>
```



#### 显示和隐藏元素 

* 方式一：简单

```html
<button class='btn-show'>显示</button>
<button class='btn-hide'>隐藏</button>
<div class='box'></div>
<script>
    // 元素隐藏
    $(".box").hide();
    
    // 元素显示
    $(".box").show();
    
    // 显示隐藏切换
    $(".box").toggle();
    
    // 方式一：执行动画,通过改变元素的宽度和高度等显示和隐藏元素
    $(".btn-show").click(function() {
        $(".box").show(1000);
        // $(".box").hide(1000);
    })
    
    // 方式二：fast / slow
    $(".btn-show").click(function(){
        $(".box").show("fast"); // 显示
     // $(".box").hide("slow"); // 隐藏  
    }) 
    
    // 方式三：动画结束后，可以执行回调函数
    $(".btn-show").click(function() {
        $(".box").show(1000, function() {
            console.log("show")
        })
    })
</script>
```

* 方式二：下拉显示和收起隐藏

```html
<button class='btn-show'>下拉显示</button>
<button class='btnl-hide'>收起隐藏</button>
<div class='box'>hello world</div>
<script>
    // 方式一
    $('.box').slideUp(); // 隐藏元素
    $('.box').slideDown(); // 显示元素
    $('.box').slideToggle(); // 切换
    
    // 方式二
    $('.box').slideDown(1000);
    
    // 方式三
    $('.box').slideDown(1000, function() {
        console.log("显示元素")
    })
</script>
```

* 方式三：淡入显示和淡出隐藏

```html
<button class="btn-show">淡入显示</button>
<button class="btn-hide">淡出隐藏</button>
<div class="box">hello world</div>
<script>
   // 方式一
   $('.box').fadeOut(); // 隐藏元素
   $('.box').fadeIn(); // 显示元素
   $('.box').fadeToggle(); // 切换
   
   // 方式二
   $('.btn-show').click(function() {
       $('.box').fadeIn(500)
   })
    
   // 方式三
   $('.btn-show').click(function() {
       $('.box').fadeIn(500, function() {
           console.log("淡入")
       })
   })
</script>
```



#### 动画

* 动画开始

```html
<button class="btn-animate">执行动画</button>
<div class="box"></div>
<script>
    /*
      参数： 1、样式对象 2、毫秒值/英文词汇 3、回调函数
    */
    $(".btn-animate").animate({
        width: "100px",
        borderRadius: "50px"
    }, 1000, function() {
        $('.box').css("background", "blue")
    })
</script>
```

* 动画结束

```javascript
$("#start").click(function() {
    $('.box').animate({height:50}, 3000)
             .animate({width: 300}, 3000)
             .animate({marginLeft: 150}, 3000)
})
$("#pause").click(function() {
    // 一个参数
    $('.box').stop(); // 立即停止当前动画，继续执行后续动画
    $('.box').stop(true); // 立即停止当前的动画，不执行后续的动画
    $('.box').stop(false); // 立即停止当前动画，继续执行后续动画
    
    // 两个参数
    $('.box').stop(true, false); // 立即停止当前的动画，不执行后续的动画
    $(".box").stop(true,true); // 立即完成当前的动画，停止执行后续的动画
    $(".box").stop(false,true); // 立即完成当前的动画，会执行后续的动画
    $(".box").stop(false,false);  //立即停止当前的动画，会执行后续的动画
})
```

> 总结：参数不写默认为 false
>
>  后续动画 取绝于 第一个参数为 false则执行，true 则结束
>
>  当前动画 取绝于 第二个参数为false则停止，true 则完成 

* 动画队列

```html
<button class="btn-start">开始</button>
<button class="btn-next">继续执行(下一个动画)</button>
<button class="btn-pause">停止</button>
<div>
    <div class="red"></div>
    <div class="green"></div>
</div>
<script>
  $(function() {
     // 定义动画队列
     var arr = [
       function() {$(.red).animate({marginLeft: 100}, 1000)},
       function() {$(.green).animate({marginLeft: 100}, 1000)},  
     ]
     // 绑定事件
     $(".btn-start").click(function() {
         $("body").queue("fx", arr)
     })
     $(".btn-next").click(function() {
         // 执行下一个动画
         $("body").dequeue("fx")
     })
     $(".btn-pause").click(function() {
         // 清除动画队列
         $("body").clearQueue("fx");
     })
  }) 
  // 如果以上方法不符合您的业务逻辑，那就直接根据数组索引值执行动画
  // var f1 = arr[0]
  // f1()
</script>
```



#### 获取元素下标

* 并列关系

```html
<div>
    <button>按钮</button>
    <button>按钮</button>
    <button>按钮</button>
    <button>按钮</button>
    <button>按钮</button>
    <button>按钮</button>
</div> 
<script>
  $('div').on('click', "button", function() {
      console.log($(this).index);
  })
</script>
```

* 嵌套关系

```html
<div><button>按钮</button></div>
<div><button>按钮</button></div>
<div><button>按钮</button></div>
<div><button>按钮</button></div>
<div><button>按钮</button></div>
<div><button>按钮</button></div>
<script>
   $('div button').click(function() {
       var v1 = $('div button').index($(this));
       console.log(v1);
   })
</script>
```



#### 遍历jQuery对象数组

* 方法一： 调用者 jQuery 对象

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
<script>
    // 定义颜色数组
    var arrColor = [
        "red",
        "green",
        "purple",
        "yellow",
        "pink"
    ]
    $('ul li').each(function(index, item) {
        // item 是 dom 对象
        // 讲 item 转成 jquery 对象
        $(item).css("background", arrColor[index]);
    })
</script>
```

* 方法二：调用者 $

```javascript
$.each(arrColor, function(index, item) {
    // index 代表索引值
    // item 代表数组的每一项的每一项数据
    $("ul li").eq(index).css("background", item);
})
```



#### 拓展方法

* 方式一： 调用者 jquery 对象

```html
<div class="box"></div>
<script>
   // 写法一  $.fn fn是原型对象
   $.fn.sayHello = function() {
       console.log("hello world");
   }
   $.fn.changeWidth = function() {
       console.log(this); // 此时 this 是 jquery 对象
       console.log($(this));
       this.css("width","500px"); // 正确
       $(this).animate({width:500}, 2000); // 正确
   }
   $(".box").sayHello(); // hello world
   $(".box").changeWidth(); 
    
   //写法二 
    $.fn.extend({
        foo: function() {
            console.log("foo");
        },
        myRandom(num) {
            renturn Math.floor(Math.random()*num);
        }
    })
    $(".box").foo(); // foo
    $(".box").myRandom(100);
</script>
```

* 方式二：调用者 $

```javascript
// 方法一
$.sayHello = function() {
    console.log("hello world");
}
$.changeColor = function() {
    $(".box").css("background", "red")
}
$.sayHello();
$.changeColor();

//写法二
$.extend({
    foo: function() {
        console.log("foo");
    },
    myRandom(num) {
        return Math.floor(Math.random() * num);
    }
})
$.foo(); // foo
$.myRandom(100);
```



#### jQuery 中的 input 和 change 的区别

```html
<input type="range" id="range"></input>
<script>
    // 触发一次
    $("#range").change(function() {
        console.log("change值", $(this).val());
    })
    // 触发多次
    $("#range").input(function() {
        console.log("input值", $(this).val());
    })
</script> 
```



#### 更改 $ 别名

```html
<button>点击一下</button>
<script>
    $(function() {
        // 更改 jQuery别名 $
        // 调用者： jQuery 或 $
        // 作用： 改变 jq的函数别名
        var _ = $.noConflict();
        
        _("button").click(function() {
            _(this).css("background", "red");
        })
    })
</script>
```



#### 补充： jquery 中的 offset 与原生 offsetLeft 及 offsetTop的区别

> 注意： jquery 中的 offset 和原生 offset 获取的边距都是**相对浏览器可视化的部分**
>
> jquery 中：
>
> ​         offset 不受 定位的影响
>
> 原生 DOM 中：
>
> ​         父容器是否设置了 position 属性值，会影响到其 offsetLeft

```html
<style>
    body {
        margin: 0;
    }
    .header {
        height: 100px;
        border-bottom: 3px solid #000;  
    }
    .nav {
        width: 1000px;
         /* 经过计算水平居中距离左边距离为 268px 即 margin: 0 268px*/
        margin: 0 auto; 
        height: 100px;
        background-color: deepskyblue;
        /* 添加position */
        /* position: relative; */
    }
    .nav .box {
        width: 100px;
        height: 80px;
        background-color: red;
    }
</style>
<div class="header">
    <!-- 父元素 -->
    <div class="nav">
        <!-- 子元素 -->
        <div class="box"></div>
    </div>
</div>
<script>
    // 通过 jquery 来获取 .box 元素距离左边的距离
    var point = $(".box").offset(); // {top: 0,left: 268}
    console.log(point); 
    // 接下来 如果缩小浏览器的宽度小于 1000（.nav的宽度）
    console.log(point); // {top:0, left: 0}  正常
    // 父元素（.nav）去掉定位 position 也没有影响到
    
    // 原生情况下
    var box = document.querySelector(".box");
    // 父容器添加了 position 情况下
    console.log({
        top: box.offsetTop,
        left: box.offsetLeft
    }); // {top: 0, left: 0}
    // 父容器没有添加了 position 情况下
     console.log({
        top: box.offsetTop,
        left: box.offsetLeft
    }); // {top: 0,left: 268}
</script>
```

> 总结：
>
> （1）在原生js 中 使用 offsetLeft 时需要考虑到父容器是否添加了定位属性
>
> （2）而在 jq 中不需要考虑这个问题， offsetLeft 是直接获取该元素距离可视化浏览器左边的距离
>
> （3）在 jq 中 即使子元素设置 top left 也不会影响到获取元素距离可视化浏览器的左和上的距离



jquery 对象中的position 方法

> 用法： $('.box').position();   获取元素的位置
>
> 少用：由于jquery 的版本更新迭代，有些比较旧的版本没有该方法
>
> offest 和 position 选择
>
> ​     如果该元素添加了 top 和 left 属性 则使用 position
>
> ​     反之， 使用 offset 获取即可

具体区别这里不细谈，可以通过下面例子来看看区别

```html
<style>
body {
        margin: 0;
    }
    .header {
        height: 100px;
        border-bottom: 3px solid #000;  
    }
    .nav {
        width: 1000px;
        margin: 0 auto;
        height: 100px;
        background-color: deepskyblue;
        /* 添加position */
        position: relative;
    }
    .nav .box {
        width: 100px;
        height: 80px;
        background-color: red;
        /* 添加定位*/
        position: absolute;
        /* 考虑这里 */
        left: 30px;
    }
</style>
<div class="header">
    <!-- 父元素 -->
    <div class="nav">
        <!-- 子元素 -->
        <div class="box"></div>
    </div>
</div>
<script>
    var point = $(".box").offset();
    console.log(point);// {top: 0, left: 298}  268 + 30
    
   
    var pos = $(".box").position();
    console.log(pos) // {top: 0, left: 30} 
</script>
```



