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

