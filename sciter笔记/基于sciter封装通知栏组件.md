#### #功能

* 定时关闭通知栏某条通知的信息
* 手动关闭通知栏某条通知的信息
* 点击获取通知栏某条通知的信息
* 鼠标进入通知栏某条通知时，该通知不会被定时关闭，离开时，在重新计时
* 通知按输入格式原样输出

#### #原理

方案一：原本是每创建一条通知即创建一个window窗口，但通过测试发现：

* 打包后，每创建一条通知，该应用在任务栏中会再次出现一个窗口
* 并且但主窗口最小化时，其他窗口也会出现最小化
* 每创建一个窗口，会出现延迟现象
* CPU 占比高

关键代码：

```javascript
window = new Window({
  url: __DIR__ + "./index.htm",
  state: Window.WINDOW_SHOWN,
  parameters: this.options
});
```

注意细节：

* 窗口传参时通过 parameters 进行传参，可以是数组，对象，基本数据类型
* 使用以下代码即可在主窗口操作子窗口 （window 为子窗口的实例对象，非全局对象）

```javascript
window.document.$("#tools").componentUpdate(this.options)
```

<hr/>
方案二：使用 dom 来代替 window 窗口，并将其定位到屏幕右下角

关键代码：

```javascript
createTools() {
    let tools = document.$(this.options.el);
    [windowW, windowH] = Window.this.screenBox('workarea', 'dimension');
    // 移动
    tools.takeOff({
        x: windowW - this.options.w - 10,
        y: 0,
        relativeTo: "screen",
        window: "detached"
    });
}
```

注意细节：

* 需要在主窗口中创建 DOM 元素用来存放通知信息

<hr/>
两者比较：

* 后者：需要在主窗口引入css文件，从而导致出现样式重叠。前者：不会出现该问题。
* 后者：性能方面更好。前者：会出现延迟，CPU占比高。
* 前者和后者都会出现页面收缩时，通知栏也会跟着收缩。

<hr/>
综上：目前该组件使用的是方案二。

#### #如何使用

* 将 tools 文件夹存放在项目根路径

* 在main.htm文件中分别导入 tools 的`css文件`及`js文件`

```html
<html>
    <head>
       <meta charset="utf-8" />
       <style src="./tools/index.css"></style>
    </head>
    <script type="module">
        import { Tools } from './tools/index';
        class App extends Element {
           tools;
           render() {
               return <div class="container">
                        <button onclick={()={this.send()}}>send</button>
                        <div id="tools"></div>
                      </div> 
           } 
           componentDidMount() {
               if (!this.tools) this.tools = new Tools();
               // 初始化
               this.tools.init({
                    w: 280,
                    space: 15,
                    el: "#tools",
                    clickCallback,
                })
           }
           send() {
               this.tools.add({
                    title, 
                    content, 
                    type, 
                    time: Date.now(), 
                    itemH: 118 
               })
           }
        }
        document.body.content(<App/>);
    </script>
    <body></body>
</html>
```

* 参数说明
   *   初始化参数
      *   w：通知栏宽度
      *   space：每条通知的间隙
      *   el：通知栏容器选择器
      *   clickCallback：点击通知回调函数
   *   通知信息参数
      *   title：标题
      *   content：主要内容
      *   type：通知类型（success，info，wran，error）
      *   time：时间戳
      *   itemH：高度

#### # bug

在内容显示中使用多行隐藏、单行隐藏出现了一些bug