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



#### Jquery 对象和 dom 对象

```html
<div></div>
<script>
   var $dom = $("div");
   console.log( $dom );
    
   // 转成 dom 对象
   var div1 = $dom[0];
   var div2 = $dom.get(1); 
    
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

