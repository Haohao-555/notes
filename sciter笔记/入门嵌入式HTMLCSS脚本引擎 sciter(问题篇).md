sciter

1、初始化打开页面时，无法指定高度

解决方法：

```javascript
init() {
    // 设窗口的最小宽高
    Window.this.minSize = [933, 635];
    // 获取屏幕的宽高
    let arr = Window.this.screenBox('workarea', 'dimension');
    // 初始化窗口大小及居中设置
    Window.this.move((arr[0] - 933)/2, (arr[1] - 635) /2, 933, 635);
}
```

2、外框无法去掉

解决方法：

在 html 标签添加 `window-frama="extended"`即可将窗口隐藏、可以进行sheng's

```html
<html window-frame="extended"></html>
```

3、如何监听窗口的的变化

解决方法：

```javascript
// 监听屏幕最大化及最小化
Window.this.on("stateChange", ()=> {
    if(Window.this.state == Window.WINDOW_MAXIMIZED) {
        document.body.classList.add("bodyPadding");
    }else {
        document.body.classList.remove("bodyPadding");
    }
})
```

4、如何让窗口可以进行拖拽

解决方法：在拖拽的区域添加 `role="window-caption"`

```html
<div class="logo" role="window-caption"></div>
```

5、最小化、最大化、关闭窗口

```javascript
// 设置窗口状态最小化
Window.this.state = Window.WINDOW_MINIMIZED;
// 设置窗口状态最大化
Window.this.state = Window.WINDOW_MAXIMIZED；
// 关闭窗口
Window.this.close(true);
```

css

1、弹性盒模型，有些特性无法使用无法使用

2、行内块元素独占一行

3、div 嵌套行内块元素和浮动元素时，浮动生效（另起一行），行内块元素独占一行。



js

1、dataset 无法设置（原生js无法实现事件委托）



vue2

1、在父元素DOM绑定事件,点击子元素，不触发事件（不会冒泡）

2、阿里字体图标无法使用

3、在DOM元素中添加伪类元素，并在DOM元素绑定事件时，点击伪类元素无法触发事件