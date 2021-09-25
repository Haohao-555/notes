## canvas 

> h5新增的标签
>
> 作用：绘制图形图像
>
> 
>
> **优点：**
>
> 处理图形图像的绘制过程减少DOM操作
>
> 优化web性能



```html
 <canvas id="canvas"> 当前浏览器版本太低了，请换个浏览器试下 </canvas>
```

> 不能直接设置样式(不可用)
>
> canvas.style.width = "600px";
>
> canvas.style.height = "800px";
>
> 
>
> 设置画布的大小（正确打开方式）
>
>  canvas.width = 450 ;
>
>  canvas.height = 500 ;
>
> 在绘制前，必须设置canvas 的大小



### 绘制图像

案例一：画一条直线

```html
<canvas id="canvas"> 当前浏览器版本太低了，请换个浏览器试下 </canvas>
<script>
    var canvas = document.querySelector("#canvas");
    
    // 获取 canvas 提供的上下文对象
    var ctx = canvas.getContext("2d");
    
    // 线
    var width = 2;
    var color = "green";
    var start = {x: 100, y: 50};
    var end = {x: 400, y: 50};
    
    // 设置线
    ctx.lineWidth = width;
    // 设置线的颜色
    ctx.strokeStyle = color;
    // 设置起点坐标
    ctx.moveTo(start.x, start.y);
    // 设置下一个点（终点坐标）
    ctx.lineTo(end.x, end.y);
    // 描边
    ctx.stroke();
</script>
```



案例二：画一个三角形

```javascript
// 获取 canvas 提供的上下文对象
var ctx = canvas.getContext("2d");

// 定义数据
var x1 = 100;
var y1 = 100;

var x2 = 300;
var y2 = 200;

var x3 = 100;
var y3 = 400;

// 开始绘制路径
ctx.beginPath();

ctx.lineWidth = 5;
ctx.strokeStyle = "red";

// 设置填充颜色
ctx.fillStyle = "red";


ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y2);

// 结束绘制路径（闭合）
ctx.closePath();

ctx.stroke();

// 填充颜色
ctx.fill();
```



案例三：画一个矩形

```javascript
var ctx = canvas.getContext("2d");
// 矩形相关的数据
var x = 100;// 坐标
var y = 100;

var w = 200; // 尺寸
var h = 100;

// 设置属性
ctx.fillStyle = "green";
ctx.strokeStyle = "red";
ctx.lineWidth = 10;

// 画一个矩形（描边）
ctx.strokeRect(x, y, w, h);

// 画一个矩形（填充）
ctx.fillRect(x, y, w, h);
// 填充的拆分写法
ctx.rect(x, y, w, h);
ctx.fill();
```

<img src="https://i.loli.net/2021/09/24/NXGHcMmt23h79nC.png" style="zoom:67%;" />



### 清除指定区域（橡皮擦）

```javascript
var ctx = canvas.getContext("2d");
// 矩形相关的数据
var x = 100;// 坐标
var y = 100;

var w = 200; // 尺寸
var h = 100;

ctx.lineWidth = 10;
ctx.strokeStyle = "red";
ctx.fillStyle = "green";

ctx.strokeRect(x, y, w, h);
ctx.fillRect(x, y, w, h);

// 清除指定区域
var cx = 80; // 坐标
var cy = 80;
var cw = 160;  // 尺寸（范围）
var ch = 80;

ctx.clearRect(cx, cy, cw, ch);
```

<img src="https://i.loli.net/2021/09/24/oh8bwRQJAE9G6pS.png" style="zoom:50%;" />



### 绘制弧形

>  弧度 = 角度 * Math.PI / 180 

```javascript
var ctx = canvas.getContext("2d");

// 坐标
var x = 200;
var y = 200;

// 半径
var r = 300;
// 角度
var angle = 300; 

// 计算弧度
var rad = angle * Math.PI / 180; 

ctx.lineWidth = 10;
ctx.strokeStyle = "red";
ctx.fillStyle = "green";

// 设置中心
ctx.moveTo(x, y);

// 绘制弧度
ctx.arc(x, y, r, 0, rad, false);

// 闭合
ctx.closePath();
ctx.stroke();
ctx.fill();
```

> ctx(x, y, r, 0, rad, false);
>
> x, y 原点
>
> r 半径
>
> 0 开始的角度
>
> rad 弧度
>
> false 顺时针



### 绘制文字

```javascript
var ctx = canvas.getContext("2d");

// 定义文本
var str = "hello world!";
ctx.beginPath();

ctx.strokeStyle = "red";

ctx.fillStyle = "green";

// 定义坐标
var point = {
    x: 100,
    y: 100,
}
// 设置字体
ctx.font = "50px 微软雅黑";
// 设置文本水平方向对齐 left center right
ctx.textAligin = "center";
// 设置文本垂直方向对齐 bottom middle（中） top
ctx.textBaseline = "middle";

// 绘制文本
ctx.strokeText(str, 100, 100);

ctx.closePath();
```

<img src="https://i.loli.net/2021/09/25/sIwfJ3mvUWyBbPo.png" style="zoom:67%;" />

