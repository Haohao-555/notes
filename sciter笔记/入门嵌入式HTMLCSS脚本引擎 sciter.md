1、运行 `index.htm`

```html
<html>
    <head>
        <title>Document</title>
        <style>
            .container {
                width: 600px;
                height: 100px;
                margin: auto;
                border: 1px solid #333;
                display: flex;
                justify-content: space-around;

                /* 在 sciter 运行添加 */
                flow: horizontal;
                border-spacing: *;
            }
            .item {
                width: 100px;
                height: 100px;
                background-color: skyblue;
                text-align: center;
                line-height: 100px;
                color: #fff;
                font-size: 30px;
            }
        </style>
    </head>
    <body>
        <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        </div>
    </body>
    <script>
        // 原生
        document.querySelector(".container").onclick = function(e) {
            if(e.target.className == "item") {
                console.log(e.target)
                console.log("点击盒子");
            }else {
                console.log("点击盒子外面");
            }
        }
    </script>
</html>
```

方法一：打开 sciter 文件夹中的 bin 目录，找到相对应电脑系统及位数，以管理员身份运行`usciter.exe` 。选中左侧顶部按钮选择 index.htm 即可运行。



方法二：进入到`usciter.exe`的目录下（`C:\Users\huangjh\Desktop\sciter-js-sdk-main\sciter-js-sdk-main\bin\windows\x64`），将其目录添加到环境变量中。cmd 进入到`index.htm` 的目录下，并执行命令 `scapp.exe index.htm`即可运行。



2、将 index.htm 打包成 .exe文件

* 下载打包工具 `https://imagemagick.org/ `
* 并将路径`D:\ImageMagick`添加系统变量中
* 打开`sciter-js-sdk-main\bin\quark\windows`目录中的 `quark-start.bat`
* 根据提示填写相关信息即可打包成 .exe文件



3、运行 vue代码

* 下载 vue 代码并引入到页面中

* 后缀名为`.htm` ，不是`.vue`

* 选择方法一或者二都可以运行

```html
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <div id="app">
            <div>
                <input type="text" v-model="value">
                <button @click="handleClick">提交</button>
            </div>
            <ul>
                <todo-item v-for="(item,i) in list" :key="i" :content="item" :index="i" @delete="handleDelete"></todo-item>
            </ul>
        </div>
    </body>
    <script src="./vue.js"></script>
    <script>
        Vue.component('todo-item', {
            props: ['content', 'index'],
            template: '<li @click="handleClick">{{content}}</li>',
            methods: {
                handleClick: function() {
                    this.$emit('delete', this.index);
                }
            }
        })
        new Vue({
            el: "#app",
            data() {
                return {
                    value: "",
                    list: []
                }
            },
            methods: {
                handleClick: function() {
                    this.list.push(this.value);
                    this.value = "";
                },
                handleDelete: function(index) {
                    this.list.splice(index, 1);
                }
            }
        })
    </script>
</html>
```

  