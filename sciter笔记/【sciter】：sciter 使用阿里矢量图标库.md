## sciter 使用阿里矢量图标库

步骤一：选择要使用的图标，并添加到项目中（阿里矢量官网中的项目）

步骤二（关键）：选中`项目设置`，在字体格式中选择`TTF`，其他不选，保存

步骤三：点击 `Font class`，并生成代码，将代码复制到项目中。

步骤三：修改代码需要将伪类选择器的单冒号改成双冒号

```css
.icon-shezhi:before {
    content: "\e61c";
}

/* 改成 */
.icon-shezhi::before {
    content: "\e61c";
}
```

步骤四（关键）：需要下载ttf，路径在下载代码中的 `font-face`

```css
@font-face {
  src: url('//at.alicdn.com/t/font_3277023_7iq2bycwke3.ttf?t=1648192709961') format('truetype');
}
```

直接复制链接，到浏览器即可下载 TTF 文件，并将其放到项目中的某个目录中

步骤五：修改`src`路径

```
@font-face {
    font-family: "iconfont"; /* Project id 3277023 */
    src: url(./font_3277023_7iq2bycwke3.ttf);
  }
```

步骤六：在`main.htm`引入文件并使用

```html
<i class="iconfont icon-shezhi"></i>
```