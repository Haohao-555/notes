## position 跟 display、margin collapse、overflow、float 这些特性相互叠加



**一、'display'、'position' 和 'float' 的相互关系**

下图：

<img src="https://i.loli.net/2021/08/06/k9joILUxiEgebQB.png" style="zoom:80%;" />

| **设定值**                                                   | **转换后** |
| ------------------------------------------------------------ | ---------- |
| inline-table                                                 | table      |
| inline, inline-block,run-in,table-row-group,table-column,table-column-group,table-header-group,table-footer-group,table-row,table-cell,table-caption | block      |
| 其他                                                         | 保持设定值 |



1、`position:absolute` 和 `position:fixed` 优先级最高，有它存在的时候，浮动不起作用

```html
<style>
.container {
     width: 300px;
     height: 300px;
     border: 1px solid #ff0000;
}
.item {
     width: 100px;
     height: 100px;
     border: 1px solid yellowgreen;
     background-color: yellowgreen;
     position: fixed;
     float: right;
}
</style>

<div class="container">
    <div class="item"></div>
</div>
```



2、`display`值为none

当元素display值为none时，元素不产生框，float和position都不起作用。



3、float值不为none

当元素有了浮动属性（float不为none，是left或right）后，该框浮动且display值会按上表转换。例如，span是行内元素，设置浮动后会变为块级元素。



4、元素为根元素

如果元素是根元素，设置的display也会按上表进行转换。否则，元素的display值为指定值或默认值。



**二、position 跟 display、overflow、float下的 margin collapse**



补充：margin collapse **外边距折叠** 指的是毗邻的两个或多个外边距 (margin) 会合并成一个外边距

margin 毗邻，可以归结为以下两点：

* 这两个或多个外边距没有被非空内容、padding、border 或 clear 分隔开。
* 这些 margin 都处于普通流中。



**两个或多个毗邻的普通流中的块元素垂直方向上的 margin 会折叠**

* 参与折叠的 margin 都是正值

  ```html
  <div style="height:50px; margin-bottom:50px;width:50px; background-color: red;">A</div>
  <div style="height:50px;margin-top:100px; width:50px; background-color: green;">B</div>
  ```

  在 margin 都是正数的情况下，取其中 margin 较大的值为最终 margin 值。

  

*  参与折叠的 margin 都是负值

  ```html
  <div style="height:100px; margin-bottom:-75px;width:100px; background-color: red;">A</div>
  <div style="height:100px;margin-top:-50px; margin-left:50px; width:100px; background-color: green;">B</div>
  ```

  <img src="https://i.loli.net/2021/08/06/DfcXxGKBshpmYtP.png" style="zoom:50%;" />

  当 margin 都是负值的时候，取的是其中**绝对值较大**的，然后，从 0 位置，负向位移。

  

* 参与折叠的 margin 中有正值，有负值

```html
<div style="height:50px; margin-bottom:-50px;width:50px; background-color: red;">A</div>
<div style="height:50px;margin-top:100px; width:50px; background-color: green;">B</div>
```

<img src="https://i.loli.net/2021/08/06/RtjipGXOyHslQdv.png" style="zoom:80%;" />

​        先取出负 margin 中绝对值中最大的，然后，和正 margin 值中最大的 margin 相加。



* 相邻的 margin 要一起参与计算，不得分步计算

```html
<div style="margin:50px 0;background-color:green; width:50px;">
    <div style="margin:-60px 0;">
           <div style="margin:150px 0;">A</div>
    </div>
</div>
<div style="margin:-100px 0;background-color:green; width:50px;">
    <div style="margin:-120px 0;">
           <div style="margin:200px 0;">B</div>
    </div>
</div>
```

<img src="https://i.loli.net/2021/08/06/kTWcsL9blQ1Cf3z.png" style="zoom:80%;" />

A 和 B 之间的 margin 折叠产生的 margin，是6个相邻 margin 折叠的结果。将其 margin 值分为两组：

- 正值：50px，150px，200px
- 负值：-60px，-100px，-120px

根据有正有负时的计算规则，正值的最大值为 200px，负值中绝对值最大的是 -120px，所以，最终折叠后的 margin 应该是 200 + (-120) = 80



此时我们的解决方法就是：在元素能够触发 格式化上下文（BFC）

* 给父元素添加下列 css 样式的其中一个即可
  * **border-top: 1px solid transparent;**
  * **padding-top: 1px;**
  * **display: inline-block;**
  * **float: left;**
  * **position: absolute;**
  * **position: fixed;**
  * **overflow: scroll;**

* 对于兄弟元素而言：
  * **给其中一个元素添加父元素，然后触发BFC规则（不推荐）**
  * **只设置其中一个块级元素的margin值即可（推荐）**

