### 背景 background

> 在 css3 之前就已存在
>
> background-color、background-image、background-repeat、background-position



#### background-size 

> 设置图片的大小

```css
.box {
  background-image: url('demo.jpg');
  background-size: contain || cover;
}
/*
  contain: x轴 和 y轴 撑满整个盒子
  cover:   其中一条轴撑满盒子
             w > h 横向填充背景
             w < h 纵向填充背景
*/
```



#### background-origin  

> 设置背景图片的原点位置（起点） 从哪个区域开始显示

```html
<style>
.demo {
    width: 150px;
    height: 150px;
    border: 15px dashed #000; 
    padding: 20px;
    background-image: url(./imgs/net-demo.jpg);
    background-repeat: no-repeat;
}
.demo-1 {
    background-origin: border-box;
}
.demo-2 {
    background-origin: padding-box; /*默认*/
}
.demo-3 {
    background-origin: content-box;
}
</style>
<div class="demo demo-1"></div>
<div class="demo demo-2"></div>
<div class="demo demo-3"></div>
```

<img src="https://i.loli.net/2021/09/17/xIL7sD9XlVzZCnP.png" style="zoom:80%;" />

 

#### background-clip 

> 裁剪背景图片，从哪个区域开始裁剪

```html
<style>
.demo {
    width: 150px;
    height: 150px;
    border: 15px dashed #000; 
    padding: 20px;
    background-image: url(./imgs/net-demo.jpg);
    background-repeat: no-repeat;
}
.example-1 {
    background-clip: border-box;
}
.example-2 {
    background-clip: padding-box; /*默认*/
}
.example-3 {
    background-clip: content-box;
}
</style>
<div class="demo example-1"></div>
<div class="demo example-2"></div>
<div class="demo example-3"></div>
```



#### background-attachment 

> 背景定位

小例子

```html
<style>
    body {
        margin: 0;
    }
    h1 {
        margin: 0;
        padding: 0;
    }

    .header {
        height: 300px;
        background-color: pink;
    }
    .footer {
        height: 900px;
        background-color: skyblue;
    }

    .main {
        width: 900px;
        height: 400px;
        background-color: #ccc;
        margin: 0 auto;
        background-image: url(./imgs/bg.jpg);
        background-repeat: no-repeat;
        /* background-position:x y; */
        background-size: cover;
        font-size: 100px;
        color: red;
        /* 固定背景图 常用 fixed */
        background-attachment: fixed;

    }
  [class^="demo"] {
        width: 100px;
        height: 100px;
        background-color: rgb(121, 24, 24);
        position: fixed;
        top: 50%;
        margin-top: -50px;
    }
    .demo-1 {
        left: 0;
    }
    .demo-2 {
        right: 0;
    }
</style>
<div class="header">
    <h1>页面标题1</h1>
</div>
<div class="main">
    hello world !
</div>
<div class="footer">
    <h1>页面标题2</h1>
</div>
 <!-- 参考物： -->
<div class="demo-1"></div>
<div class="demo-2"></div>
```



边框背景图片

小例子

```html
<style>
    .box {
        width: 200px;
        height: 300px;
        background-color: #ccc;
        margin: 100px;
        /* 设置边框 */
        border: 30px solid #f00; 
    }

    .box-1 {
        border-image-source: url(./imgs/border.png);/*边框背景图片路径*/
        border-image-slice: 47 47 47 47;/*裁剪边框背景图（九宫格）*/
        border-image-width: 20px;/*边框背景图尺寸(设置小一点可以平铺效果)*/
        border-image-outset: 0px;/*设置边框背景的位置（盒子内外）*/
        border-image-repeat: repeat;/*边框背景图是否平铺 repeat round*/
    }
</style>
 <div class="box box-1">hello world</div>
```

<hr>

### 阴影 shadow

#### box-shadow

> 盒子阴影

```html
<style>
.box {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    /* 
    box-shadow: 水平偏移量  垂直偏移量  模糊度 延伸量（可选） 颜色  内阴影（可选）; 
    */
    box-shadow: 5px 5px 5px  red;
}
</style>
<div class="box"></div>
```



#### text-shadow

> 文字阴影
>

```html
<style>
.demo {
    width: 450px;
    height: 80px;
    background-color: #ccc;
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    /* text-shadow: 水平偏移量  垂直偏移量  模糊度  颜色  */
    text-shadow: -4px -4px 3px green;
 }
</style>
<div class="demo">hello world ! </div>
```

>  text-shadow 可以设置多种颜色进行重叠
>
>  text-shadow: -4px -4px 3px green，4px 3px 2px red .....,.....;



霓虹灯的制作

```html
.demo {
    width: 450px;
    height: 80px;
    background-color: #ccc;
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    text-shadow: -4px -4px 3px green;
}
<div class="demo demo-2">hello world ! </div>
<script>
var el = document.querySelector(".demo-2");
    var arrColor = [
        "2px -2px 3px deepskyblue",
        "2px -2px 3px red",
        "-4px -4px 3px green",
        "4px 4px 3px orange",
        "-4px -4px 3px purple",
        "-4px -4px 3px blue",
        "-4px -4px 3px pink"
    ]
    var index = 0;
    var autoPlay = function(){
        index ++ ;
        index = index > arrColor.length - 1 ? 0 : index ;
        el.style["textShadow"] = arrColor[index];
    }
    var t = setInterval(autoPlay,2000);
</script>
```

<hr>

### 渐变色 gradient

#### linear-gradient

> 线性渐变

```html
<!--
  linear-gradient(参数1， 参数2， 参数3);
    参数一：渐变方向  left right bottom top 角度
    参数二：开始颜色
    参数三：结束颜色
    特点：颜色从一侧开始往另一侧逐渐改变（过渡）
-->
<style>
.box {
    width: 200px;
    height: 100px;
    border: 1px solid #ccc; 
}    
.box-1 {
    background-image: linear-gradient( to right, red, green);
}
.box-2 {
    background-image: linear-gradient(35deg, red, green);
} 
.box-3 {
    background-image: linear-gradient(180deg, red, yellow, purple, green);
}      
</style>
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
```

![](https://i.loli.net/2021/09/18/Xa48b5sYtKWxqeN.png)



彩带效果

```html
<style>
.box {
    width: 200px;
    height: 100px;
    border: 1px solid #ccc; 
}
.box-4 {
    width: 600px;
    background-size: 100px 100px;
    background-position: -50px 0;
    /* 渐变(方向/角度,开始颜色,结束颜色) */
    background-image: linear-gradient(
        146deg,
        white 0%,

        white 20%,
        black 20%,

        black 40%,
        white 40%,

        white 60%,
        black 60%,

        black 80%,
        white 80%,

        white 100%
    );
}    
</style> 

<div class="box box-4"></div>

<script>
 var el = document.querySelector(".box-4");
        var x = 0;
        var autoPlay = function(){
            x += 1;
            x = x > 600 ? 0: x ;
            el.style["backgroundPosition"] = x+"px 0"
        }
        var t = setInterval(autoPlay,30);
</script>
```

![](https://i.loli.net/2021/09/18/WyRl63SQai7eBD4.png)



#### radial-gradient

> 径向渐变

```css
/*
  radial-gradient(参数1，参数2， 参数3)
   参数1: 中心坐标  left top right botton center / (x,y)
   参数2: 开始颜色
   参数3: 结束颜色
   特点： 从中心往四周扩散逐渐改变颜色
*/
.box-1 {
    background-image: radial-gradient(
        at center center ,
        red,
        green
    );
}

.box-2 {
    background-image: radial-gradient(
        at 100px 100px,
        red 0%,
        red 30%,
        yellow 40%,
        green 60%,
        green 80%
    );
}

.box-3 {
    background-image: radial-gradient(
        at center ,
        red 0%,

        red 20%,
        green 20%,

        green 40%,
        red 40%,

        red 60%,
        green 60%,

        green 80%,
        red 80%
    );
}

.box-4 {
    background-image: repeating-radial-gradient(
        at 50px 50px,

        red 0%,
        red 20%,

        green 20%,
        green 40%
    );
}
```

![](https://i.loli.net/2021/09/18/5SxRNa3GYsZJrjD.png)

<hr>

### 过渡 transition

```html
<style>
.box {
    width: 100px;
    height: 100px;
    background-color: red;
   
    /* 属性名称 all 代表所有的属性 */
    transition-property: width;
    
    /* 过渡持续的时间 */
    transition-duration: 10s;
    
    /* 延迟执行过渡 */
    transition-delay: 5s;
    
    /* 过渡运动的状态（快慢） */
    transition-timing-function:  cubic-bezier(.09,1.27,.9,-0.56);
    
    /* 
    linear       匀速
    ease-in      加快
    ease-out     减慢
    ease-in-out  先快后慢
    */
    transition-timing-function:  linear | ease-in | ease-out | ease-in-out;
    
 
     /* 过渡属性 上面等价于 */
     transition: width 10s 5s cubic-bezier(.09,1.27,.9,-0.56);
}
.box-1:hover  {
    width: 900px;
}    
</style>
<div class="box box-2"></div>
```

> 贝塞尔曲线 https://cubic-bezier.com/#.2,1.14,.84,-0.11
>

<hr>

### 旋转 rotate

<img src="https://i.loli.net/2021/09/18/H5auMV8cvSkZI24.png" style="zoom:50%;" />

```html
<style>
.wrap {
    width: 310px;
    height: 438px; 
    border: 1px solid #ccc; 
    /* 属性值越小，效果越强烈 透视距离*/
    perspective: 800px;
}
.wrap .box {
    width: 310px;
    height: 438px;
    background-image: url(./imgs/pk1.png);
    border: 1px solid #f00;
    /* 过渡 */
    transition: transform 2s;
}
    
.wrap:hover .box-1{
    /* 围绕X轴旋转60度 */
    transform: rotateX(60deg);
}
    
.wrap:hover .box-2{
    /* 围绕Y轴旋转60度 */
    transform: rotateY(60deg);
}  

.wrap:hover .box-3{
    /* 围绕Z轴旋转60度 */
    transform: rotateZ(60deg);
} 

.wrap:hover .box-4 {
    /* 围绕x和y和z所形成对角线旋转60度 前三个参数可以是任意数值*/
    transform: rotate3d(1,1,0,60deg)
}    
/*
    3D
    避免 3D旋转造成 父容器中的其他元素产生不必要的影响。可以使用父相子绝对
*/    
.wrap {
    position: relative;
}    
.wrap .message {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 310px;
    height: 438px;
    line-height: 438px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: #0051ff;
}    
</style>
<div class="wrap">
    <div class="box box-1">X</div>
</div> 

<div class="wrap">
    <div class="box box-2">Y</div>
</div> 

<div class="wrap">
    <div class="box box-3">Z</div>
</div> 

<!--3D-->
<div class="wrap">
   <div class="message">hello world !</div>
   <div class="box box-4"></div>
</div>
```

> 具体可以看CSS3编程题  **翻牌**
>



修改旋转的参考点

```css
ul li {
     /* 设置旋转中心 (left top right bottom center)*/
     transform-origin: left bottom;
}
```

> 具体可以看CSS3编程题 **雷达扫描**



### 位移 translate

```css
.box {
    /* X轴移动 */
    transform: translateX(100px);
    
    /* Y轴移动 */
    transform: translateY(100px);
    
    /* Z轴移动 */
    transform: translateZ(100px);
    
    /* 结合 */
     transform: translate3d(100px, 100px, 100px);
}
```

> 多个属性同时使用时需要写在一行
>
> 正确
>
>  transform: translate3d(100px, 100px, 100px)  rotate3d(1,1,0,60deg)
>
> 错误
>
> transform: translate3d(100px, 100px, 100px) 
>
> transform: rotate3d(1,1,0,60deg)
>
> 后者会覆盖前者

<hr>

### 缩放 scale

```css
.box-1 {
  /* X Y Z正常 */
  transform: scale(1);
  /* 大于1 放大 小于1 缩小*/
   
  /* X 轴放大 */
  transform: scaleX(1.5)
  
  /* Y 轴缩小 */
  transform: scaleY(0.5)
}
```

> scale translate rotate 案例具体看CSS3编程题 **立体正方形**

<hr>

###  变形 skew

```css
.box-1 {
    /* 变形：角度倾斜 */
    transform: skew(30deg);
}
.box-2 {
    transform: skewX(30deg);
}
.box-3 {
    transform: skewY(30deg);
}
```

<hr>

### 动画 animation

> 用了动画就不要用过渡，用了过渡就不要使用动画 二取一

```javascript
// 定义动画
@keyframes move {
    from {
        margin-left: 0;
    }
    to {
        margin-left: 500px;
    }
}
```



> @keyframes 支持主流浏览器
>
> @-o- keyframes 支持欧拉浏览器
>
> @-moz- keyframes 支持火狐浏览器
>
> @-webkit- keyframes 支持谷歌浏览器



| 属性                      | 用处                 | 备注                                                         |
| ------------------------- | -------------------- | ------------------------------------------------------------ |
| animation-name ✔          | 动画名称             | 必填 <br/>move                                               |
| animation-duration ✔      | 动画持续的时间       | 必填                                                         |
| animation-timing-function | 动画状态（快慢）     | 可选 <br/>linear （匀速） <br/>贝塞尔曲线                    |
| animation-delay           | 延迟执行动画         | 可选                                                         |
| animation-iteration-count | 执行动画的次数       | 可选  <br/>infinite（无限次）                                |
| animation-direction       | 动画方向             | 可选 <br/>alternate-reverse（反方向）<br/>alternate（正常）  |
| animation-fill-mode       | 动画结束时停留的位置 | 可选 <br/>backwards（默认）回到原位置<br>forwards（动画结束的位置） |
| animation-play-state      | 停止执行动画         | paused（停止）<br/>running（运动）                           |

> animation 参数
>
> animation: 动画名称，动画持续的时间，动画状态（快慢），延迟执行动画，执行动画的次数，动画方向， 动画结束的位置;

