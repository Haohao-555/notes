## 其他

### 进度条和度量标签

* 进度条

```html
 <!-- 
    value 当前的值
    max 最大的值
    min 最小的值
 -->
<style>
    progress {
        width: 600px;
        height: 20px;
    }
</style>
<progress value="20" max="100" min="1"></progress>
<!-- 加载网页、滚动网页 -->
 <script>
    //  设置value
    var v1 = 1;
    var timer = setInterval(function(){
        v1 +=1;
        if(v1 > 600) {
            clearInterval(timer);
            return;
        }
        document.querySelector("progress").value = v1;
    },30)
 </script>
```

* 度量尺

```html
<style>
   meter {
    width: 600px;
    height: 20px;
   }
</style>
<!--  low 低 high 高 --> 
<meter value="80" max="100" min="1" low="30" high="80"></meter>
 <!-- 设置密码的强度：弱，中，强 -->
<script>
    // 设置meter标签的值
    var setMeter = function(v1){
        document.querySelector("meter").value = v1;
    }
    setMeter(20);
</script>
```

* 自定义(进度条和度量尺)

```html
<style>
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .myprogress {
        width: 600px;
        height: 10px;
        background-color: #ccc;
        border-radius: 5px;
    }

    .myprogress li {
        width: 50px;
        height: 10px;
        background-color: red;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
</style>
<ul class="myprogress">
    <li></li>
</ul>
```

>    progress  meter  有默认样式，不方便修改，甚至修改不了
>
> ​    如果项目比较注重页面外观的，就不建议使用 progress 和 meter 标签
>
> ​    推荐使用 ul > li 组合标签



### 表单新增元素

```html
<!-- action : 接口地址 -->
<!-- method : 后台用何种方式接收表单提交的数据 -->
<!-- fieldset: 对表单数据进行分组（一组） -->
<!-- legend：针对分组设置标题  -->
<form action="#"  method="get">
    <fieldset>
        <legend>
            <h2>Student</h2>
        </legend>
        <div><input type="number" placeholder="编号"></div>
    </fieldset>

    <fieldset>
        <legend>
            <h2>Teacher</h2>
        </legend>
        <!-- 输入数字 -->
        <div><input type="number" placeholder="编号"></div>
    </fieldset>
</form>
```

<img src="https://i.loli.net/2021/09/14/l7yaNIWuhCsYXPB.png" style="zoom:50%;" />



### 表单元素的属性

```html
<!-- 
    form 是表单标签（表单提交数据）
    input 标签（type 类型 ）
    required  属性，当前输入框必须填写的意思
    pattern 属性， 校验当前输入的文本 格式是否正确 (填写正则表达式)
    autofocus 属性，刷新页面时自动获取焦点
    ..
 -->
<form action="http://nudianli.com:8082/login" method="post">
    <fieldset>
        <legend>
            <h2>表单标签属性</h2>
        </legend>
        <div>
            <input 
                type="text" 
                name="uname"
                placeholder="请输入账号"
                required 
                pattern="^\w{5,}"
                autofocus>
        </div>

        <div>
            <input 
                type="text" 
                name="upass"
                placeholder="请输入密码"
                required>
        </div>

        <div>
            <input type="submit">
        </div>
    </fieldset>
</form>
```

>  表单新增的元素和新增的属性，所呈现的外观效果，会因为不同浏览器而有所差别。
>
>  注重页面外观的网站，需自定义警告提示，一些后台管理系统，可以使用H5表单元素。



### 表单中的关键字搜索

```html
<form action="">
    <div>
        <input 
            type="search" 
            placeholder="请输入关键字"
            list="productId">
    </div>
    <div>
     <!-- 
        <datalist id="demo" >
            <option value="秋冬卫衣">秋冬卫衣</option>
            <option value="新款棉衣">新款棉衣</option>
            <option value="夏季经典短袖">夏季经典短袖</option>
            <option value="青少年衬衫">青少年衬衫</option>
        </datalist>  
      -->   
        <datalist id="productId">
            <option value="0">衣服</option>
        </datalist>

    </div>
</form>
```

> ​     list 属性 ，对应datalist标签的id属性一一对应
>
> ​    datalist 和 option 是组合标签 关键字
>
> ​    如果使用新增表单元素，就需要注意元素的默认样式。项目需要外观一致的效果，就不建议使用 datalist>option 标签 
>
> ​    采用自定义的方式 结构： ul > li 行为：JS

```html
<script>
    // json格式数据
    var data = [
        {"product": "秋冬卫衣","price":"100元"},
        {"product": "新款棉衣","price":"90元"},
        {"product": "夏季经典短袖","price":"80元"},
        {"product": "青少年衬衫1","price":"70元"},
        {"product": "青少年衬衫2","price":"70元"},
        {"product": "青少年衬衫3","price":"70元"},
        {"product": "青少年衬衫4","price":"70元"}
    ]

    // 渲染数据
    var template = function(array){
        var str = '';
        for(var i = 0 ; i < array.length ; i ++){
            str += '<option value="'+array[i].product+'">'+array[i].product+'</option>'
        }
        document.querySelector("#productId").innerHTML = str;
    }
    // 初始化
    template(data);
</script>
```



### 音频文件

```html
<!-- controls : 显示音频的默认控件 -->
<!-- autoplay : 是自动播放的属性，但部分浏览器不支持自动播放 -->
<!-- loop: 是循环播放 -->
<!-- muted ： 设置静态 -->
<audio  src="./music/hktk.mp3" controls autoplay loop></audio>
```



### 视频文件

```html
<!-- 
     controls : 设置视频的默认控件
     autoplay ： 自动播放（浏览器允许静音的多媒体播放、视频文件）
     loop： 循环播放
     muted： 设置视频静音
-->
<video src="./video/fun.mp4" controls autoplay loop muted></video>
```



### 播放和暂停音乐

```html
<!-- 
    隐藏音频文件的外观
    不使用display:none 这个属性会让元素页面中消失
    可以使用透明度opacity , height 属性
 -->
<audio src="./music/hktk.mp3" id="audio"></audio> 
<script>
   // 获取 audio 标签
   var audio = document.querySelector("#audio");
    
   // 播放
   audio.play();
   
   // 暂停
   audio.pause();
</script>
```



### 播放和暂停视频

```html
<!-- 
    隐藏音频文件的外观
    不使用display:none 这个属性会让元素页面中消失
    可以使用透明度opacity , height 属性
 -->
<video src="./test.mp4" id="video"></video> 
<script>
   // 获取 video 标签 
   var video = document.querySelector("#video");
    
     // 播放
   video.play();
   
   // 暂停
   video.pause();
</script>
```



### Cookie存储

> 具体看 Cookie 操作小案例



### 本地储存

```javascript
// 数据
var _user_id_ = "Example202109151724";

// 存数据
localStorage.setItem("userId",_user_id_);
localStorage.setItem("userName","admin");
localStorage.setItem("userPassWord","1231231");

// 取数据
var _id = localStorage.getItem("userId");
console.log(_id);

// 删数据
localStorage.removeItem("userId");

// 清空所有数据
localStorage.clear();
```

> 总结：
>
> ​      localStorage 对象提供的储存数据的方法
>
> ​      特点：
>
> ​        1. 数据永久保存在本地客户端(浏览器)，除非手动删除
>
> ​        2. 如果需要设置有效时间，可以利用时间戳 (结束时间-开始时间) >= 2小时
>
> ​        3. 在同一个服务器环境下，同一个浏览器不同的窗口都可以共享储存的数据（共享数据）
>
> ​        4. 没有大小的限制



### 会话存储

```javascript
// 数据
var _user_id_ = "Demo202109151724";

// 存数据
sessionStorage.setItem("userId",_user_id_);
sessionStorage.setItem("userName","admin");
sessionStorage.setItem("userPassWord","1231231");

// 取数据
var _id = sessionStorage.getItem("userId");
console.log(_id);

// 删数据
sessionStorage.removeItem("userId");

// 清空所有数据
sessionStorage.clear();
```

>  总结：
>
> ​      sessionStorage 对象提供的储存数据的方法
>
> ​      特点：
>
> ​        数据不是永久保存的
>
> ​        储存的数据需在同一个服务器环境下，并且是同一个浏览器窗口才能共享



### 拖放

```html
<style>
     img ,  div  {
        width: 150px;
        height: 150px;
    }
    div {
        background-color: blue;
    }
</style>

<!-- 默认允许拖拽 -->
<img src="./assets/i-douyin.png" alt="">

<!-- 设置 draggable="true 属性 ; false不能拖拽-->
<div draggable="true"></div>

<script>
    var count = 0;
     /*
        1. 鼠标按下并拖拽触发事件
        注意：只有在元素范围内拖拽才会触发，远离则不会触发
     */ 
    div.ondragstart = function(){
        console.log("ondragstart");
    }
    
    // 2. 鼠标拖拽并在目标元素上悬停连续触发事件
    div.ondragover = function(){
        count ++;
        console.log("ondragover",count);
    }
    
    // 3. 鼠标拖拽结束并松开鼠标触发事件
    div.ondragend = function(e){
        console.log("ondragend");
        console.log(e)
    }
    
    // 4. 鼠标拖拽并移入目标元素触发事件
    img.ondragenter = function(){
        console.log("ondragenter");
    }
    
    // 5. 鼠标拖拽并离开目标元素触发事件
    img.ondragleave = function(){
        console.log("ondragleave");
    }
    
    // 6. 鼠标拖拽移入目标元素(开始和结束)并且结合ondragover事件触发 （与前面相比较多了个鼠标抬起时才触发）
    img.ondrop = function(){
        console.log("drop example");
    }
    // 鼠标拖拽且在目标元素悬停
    img.ondragover = function(event){
        // 调用阻止页面默认行为（行为：选中文本，页面跳转...）
        event.preventDefault();
    }
</script>
```

> 具体使用可以看 HTML5 编程题 （拖拽元素）
>

与鼠标事件实现元素拖拽相比较

```html
<!--
    鼠标事件
         onmousedown onmousemove onmouseup
-->       
<div class="demo" draggable="true"></div>
<script>
     var demo = document.querySelector(".demo");
    // 定义函数  获取鼠标的在页面的位置
    function getPoint(obj){
        return {
            x: obj.pageX - demo.offsetWidth / 2,
            y: obj.pageY - demo.offsetHeight / 2
        }
    }
   
    // 拖拽元素
    var demo = document.querySelector(".demo");
    demo.ondragend = function(event){
        var o1 = getPoint(event);
        var x = o1.x;
        var y = o1.y;

        // 设置红色盒子的位置
        demo.style["left"] = x +"px";
        demo.style["top"] = y +"px";
    }
</script>
```



### 自定义鼠标右击菜单

```html
<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 200px;
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid #ccc; 
        display: none;
    }
    ul li {
        padding-left: 20px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
    }
    ul li:last-child {
        border-bottom: 0px solid transparent;
    }
    ul li:hover {
        background-color: #f0f0f0;
    }
</style>
<ul class="menu">
    <li>菜单1</li>
    <li>菜单2</li>
    <li>菜单3</li>
</ul>
<script>
    // 阻止默认右键行为
    document.oncontextmenu = function(event) {
        event.preventDefault();
        return false;
    }
    
    // 自定义鼠标右击菜单
    document.addEventListener("mousedown", function(event) {
        var buttonCode = event.button || event.buttons;
        if(buttonCode >= 2) {
            $(".menu").show();
            $(".menu").css({
                left: event.pageX,
                top: event.pageY
            })
        }
    })
</script>
```



### 触摸（移动端）

```html
<div class="box"></div>
<script>
   var el = document.querySelector(".box");
   var isStart = false; 
    
    // 手指按下  （.box标签）
    el.ontouchstart = function(){
        console.log("touchstart");
        isStart = true;
    } 
    
    // 手指滑动  （document对象）
    document.ontouchmove = function(event){
        if(isStart){
            // 手指滑动的对象（坐标） 
            // 手指在页面的坐标位置X
            // console.log(event.touches);
            var x = event.touches[0].pageX ;
            // 手指在页面的坐标位置Y
            var y = event.touches[0].pageY;

            // 减去盒子尺寸的一半
            x = x - el.offsetWidth / 2;
            y = y - el.offsetHeight / 2;

            // 设置.box标签的位置
            el.style["left"] = x + "px";
            el.style["top"] = y + "px";
        }
    }
    
    // 手指松开  （document对象）
    document.ontouchend = function(){
        isStart = false;
        console.log("touchend");
    }
</script>
```



### 全屏和退出全屏

```html
<img src="./imgs/animal.jpg" alt="" class="pic">
<div>
    <button class="btn">进入全屏</button>
</div>
<script>
    var pic = document.querySelector(".pic");
    var btn = document.querySelector(".btn");
    // 事件绑定
    btn.onclick = function(){
        // 图片全屏展示
        pic.requestFullscreen();
    }
    pic.onclick = function(){
        // 退出全屏
        document.exitFullscreen();
    }
</script>
```



### 网络状态的监听

```javascript
// 网络连接时触发事件
window.addEventListener("online", function(event) {
    .....
})

// 网络断开时触发事件
window.addEventListener("offline", function(event) {
    .....
})
```



### 原生地理定位

```javascript
navigator.geolocation.getCurrentPosition(
  function(position) {
      console.log(position);
      var y = position.coords.latitude; // 纬度
      var x = position.coords.longitude;// 经度
  },
  function(error){
                console.log("获取用户位置信息失败");
  }
)
```

> 有些浏览器是不支持的， IE 浏览器可能可以支持
>
> 正常需要获取地理位置时可以通过第三方API来获取



### requestAnimationFrame方法（并不是H5新增的）

制作页面动画方法

```html
<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: red;
    }
    button {
        padding: 10px 20px;
    }
</style>
<div class="box"></div>
<button>开始动画</button>
<button>停止动画</button>
<script>
    // 获取盒子标签
    var box = document.querySelector(".box");
    var btns = document.querySelectorAll("button");
    
    var t = null;
    
    var step = function() {
        // 获取盒子的当前宽度
        var curWidth = box.offsetWidth;
        // 步长
        var speed = 5;
        // 判断是否到达目标位置
        if(curWidth == 500) return;
        // 设置盒子宽度
        box.style["width"] = curWidth + speed + "px";
    }
    
    btn[0].onclick = function() {
         // 一直执行 step 函数
        t = requestAnimationFrame(step);
    }
    
    btn[1].onclick = function() {
        cancelAnimationFrame(t);
    }
</script>
```

> requestAnimationFrame 好处是不用设置定时器，不断去调用step 函数



