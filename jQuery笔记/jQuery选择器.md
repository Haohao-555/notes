```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>jQuer选择器y</title>
    <script src="../jquery-3.6.0.min.js"></script>
    <style>
      body,
      ul {
        margin: 0;
        list-style: none;
      }
      .wrapper {
        height: 100px;
        background-color: #f0f0f0;
      }
      .nav {
        width: 1200px;
        height: 100px;
        margin: 0 auto;
      }
      .nav ul {
        width: 1200px;
        height: 100px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .nav ul li {
        height: 40px;
        line-height: 40px;
        width: 100px;
        border: 1px solid #ccc;
        text-align: center;
        background-color: #fff;
      }
      .nav ul li.active {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
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
        // $(".active").siblings("li").css("backgroundColor", "#fff");

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
  </body>
</html>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../jquery-3.6.0.min.js"></script>
    <style>
        h3, p {
            padding: 0;
            margin: 0;
        }
        button , input {
            font-size: 20px;
        }
        input[type='checkbox'] {
            width: 30px;
            height: 40px;
        }
    </style>
</head>
<body>
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
</body>
</html>
```

