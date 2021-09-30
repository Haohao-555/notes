### 旧版本

```scss
// 声明变量 
$mainColor: red
.nav 
  width: 100px
  height: 100px
  color: $mainColor
  ul 
    padding: 0
    margin: 0
```

> 文件后缀名 sass

### 新版本

```scss
$mainColor: red;
.nav {
    width: 100px;
    height: 100px;
    color: $mainColor;
    ul {
        padding: 0;
        margin: 0;
    }
}
```

> 文件后缀名 scss



### 声明变量

```scss
$maxWidth: 1000px;
$minWidth: 300px;
$mainColor: red;
.header {
    width: 100%;
    max-width: $maxWidth;
    min-width: $minWidth;
    margin: 0 auto;
    height: 100px;
    background-color: $mainColor;
}
```



### 嵌套

```scss
.tt-aside {
    position: fixed;
    top: 200px;
    left: 80px;
    .box {
        width: 90px;
    }
}
```



### 混合语法

```scss
@mixin pad {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
}
.nav {
    // 使用代码块
    @include pad();
}
@mixin color($value: blue) {
    background-color: $value;
}

.aside {
    @include color(red);
}
```



### 计算属性

```scss
$w: 100px;
.header {
    width: $w;
    height: 100px;
    overflow: hidden;
    .item {
        width: ($w / 3);
        height: 44px;
        margin-top: (100px -44);
        margin-bottom: (100px - 44);
    }
}
```



### 内置函数

```scss
.box {
    width: ceil((100px / 3));
    width: floor((100px / 3));
    width: round((100px / 3));
    height: 100px -2;
    background-color: red;
}
```

等价于

```css
.box {
  width: 334px;
  width: 333px;
  width: 333px;
  height: 98px;
  background-color: red;
}
```



### 预定义函数

```scss
@function add($x:100px, $y:50px) {
    @return $x + $y;
}
.box {
   width: add();
   height: add();
}
```

等价于

```
.box {
   width: 150px;
   height: 150px;
}
```



### 插值语法

```scss
$str: tb;
.#{$str}-header {
    height: 100px;
}
.#{str}-nav {
    height: 80px;
}
```

等价于

```css
.tb-header {
    height: 100px;
}
.tb-nav {
    height: 80px;
}
```



### 判断语法

```scss
@mixin demo($i) {
    @if($i < 5) {
        width: 100px;
        .circle {
            width: 100px;
            height: 100px;
            border-radius: 50px;
            background-color: red;
        }
    }
    @else if($i >= 5) {
        width: 1400px;
    }
}

.box-1 {
    @include demo(1);
}
```

等价于

```scss
.box-1 {
    width: 100px;
}
.box-1 .circle {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: red;
}
```



### 循环语法

```scss
@for $i from 1 to 5 {
    .box-#{$i} {
        width: 100px + $i * 10;
    }
}
```

等价于

```scss
.box-1 {
    width: 110px;
}
.box-2 {
    width: 120px;
}
.box-3 {
    width: 130px;
}
.box-4 {
    width: 140px;
}
```



```scss
@each $key in alibaba tenxun baidu zjtd {
    .box-#{$i} {
        width: 100px;
    }
}
```

等价于

```css
.box-alibaba {
    width: 100px;
}
.box-tenxun {
    width:100px;
}
.box--baidu {
    width: 100px;
}
.box-zjtd {
    width: 100px;
}
```

