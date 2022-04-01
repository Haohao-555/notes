案例

```html
<html>
    <head>
        <style>
           @font-face {
               font-family: "iconfont"; 
               src: url(./font_3277023_mz9rke2hlrd.ttf);
           }
           .iconfont {
               font-family: "iconfont" !important;
               font-size: 16px;
               font-style: normal;
               -webkit-font-smoothing: antialiased;
               -moz-osx-font-smoothing: grayscale;
            }
            .icon-gps-line::before {
               content: "\e70a";
            }
            .icon-sousuo::before {
               content: "\e600";
               color: #000; 
             }
            i:hover {
                color: red;
            }
        </style>
    </head>
    <body>
        <!--可变色 -->
        <i class="iconfont icon-gps-line"></i> 
        <!--不变色-->
        <i class="iconfont icon-sousuo"></i>
    </body>
</html>
```

不变色的主要原因是在 :before 已经设置了颜色，导致使用 :hover 时颜色不生效

将颜色去掉，颜色设置在 i 标签上即可。