### 变量

```less
@width: 600px;
@mainColor: deepskyblue;
.container {
    width: @width;
    margin: 0 auto;
}
```



### 嵌套规则

```less
.tt-nav {
    height: 80px;
    background-color: #000;
    color: #fff;
    > div {
        height: 80px;
        background-color: #333;
    }
    ul {
        li {
            // 伪类选择器的写法
            &:hover {}
        }
    }
}
```

> * ctrl + /    这种注释不会被编译
> * /`*导航条*`/   这种注释会被编译



### 混合语法

* 类型一

```less
.pad {
    padding: 0 15px;
}
.mar {
    margin: 0 auto
}
.aaa {
    height: 80px
}

.header {
    .pad ;
    .mar ;
    .aaa ;
}
```

等价于

```css
.pad {
  padding: 0 15px;
}
.mar {
  margin: 0 auto;
}
.aaa {
  height: 80px;
}
.header {
  padding: 0 15px;
  margin: 0 auto;
  height: 80px;
}
```



* 类型二

```less
.pad() {
    padding: 0 15px;
}
.mar(){
    margin: 0 auto;
}
.aaa() {
    height: 80px;
}

.f(@value) {
    width: 100px;
    height: 50px;
    float: @value;
}
// 参数默认值
.d(@value: block) {
    display: @value;
}

.header {
    .pad();
    .mar();
    .aaa();
}

.box-1 {
    .f(left);
}
.box-3 {
    .d();
}
.box-3 {
    .d(inline-block);
}
```

等价于

```css
.header {
  padding: 0 15px;
  margin: 0 auto;
  height: 80px;
}
.box-1 {
  width: 100px;
  height: 50px;
  float: left;
}
.box-3 {
  display: block;
}
.box-3 {
  display: inline-block;
}
```



### 插入值

```less
@str: tt;
.@{str}-header {
    height: 80px;
}
.@{str}-nav {
    height: 100px;
}
```

等价于

```css
.tt-header {
  height: 80px;
}
.tt-nav {
  height: 100px;
}
```



### 拓展

```less
.box-rect {
    width: 200px;
    height: 100px;
    background-color: red;
}
.demo {
    opacity: .8;
}
/* .box-circle 继承 .box-rect */
.box-circle:extend(.box-rect) {
    border-radius: 20px;
}
.box-circle:extend(.demo) {
    border-radius: 20px;
}
```

等价于

```css
.box-rect,
.box-circle {
  width: 200px;
  height: 100px;
  background-color: red;
}
.demo,
.box-circle {
  opacity: 0.8;
}
.box-circle {
  border-radius: 20px;
}
.box-circle {
  border-radius: 20px;
}
```



### 判断语法

```less
// 根据条件设置左浮动或右浮动
.pull(@value) {
    .l(@value)when(@value = l) {
        float: left;
    }
    .r(@value)when(@value = r) {
        float: right;
    }
    .l(@value);
    .r(@value);
}

.test-1 {
    .pull(l);
}
.test-2 {
    .pull(r);
}
```

等价于

```css
.test-1 {
  float: left;
}
.test-2 {
  float: right;
}
```



### 循环语法

```less
.loop(@i) when (@i < 4){
    .box-@{i} {
        // background-color: rgba(255,0,0,(@i/10));
        background-color: rgba(255,0,0,((10-@i)/10));
        height: 600px * (@i / 10);
    }
    .loop(@i + 1);
}
.loop(1);
```

等价于

```css
.box-1 {
  background-color: rgba(255, 0, 0, 0.9);
  height: 60px;
}
.box-2 {
  background-color: rgba(255, 0, 0, 0.8);
  height: 120px;
}
.box-3 {
  background-color: rgba(255, 0, 0, 0.7);
  height: 180px;
}
.box-4 {
  background-color: rgba(255, 0, 0, 0.6);
  height: 240px;
}
```

