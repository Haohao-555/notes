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

