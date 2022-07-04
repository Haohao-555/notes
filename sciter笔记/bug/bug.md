```html
<html>
    <head>
        <meta charset="utf-8" />
    </head>
    <style>
        p.multi {
            width: 100px;
            border: 1px solid;
            overflow-y:hidden;
            text-overflow:ellipsis;
            max-height:2.4em; 
            border:1px solid;
            line-height:1.2em;
        }
    </style>
    <body>
   <p.multi>Prettylongtextitisherejusttoshowellipsiswhentextoverflowsthecontainer. </p>
    </body>
</html>
```

![](C:\Users\huangjh\Desktop\bug\1.png)

```html
<html>
    <head>
        <meta charset="utf-8" />
    </head>
    <style>
        p.multi {
            width: 100px;
            /* height: 20px; */
            border: 1px solid;
            overflow-y:hidden;
            text-overflow:ellipsis;
            max-height:2.4em; 
            border:1px solid;
            line-height:1.2em;
        }
    </style>
    <body>
        <p.multi>Pretty long text, it is here just to show ellipsis when text overflows the container. </p>
    </body>
</html>
```

![](C:\Users\huangjh\Desktop\bug\2.png)

分析总结：

1、前者将字符串当成了一个单词，导致 sciter 并不会出现换行。并且这种情况在网页也会出现，属于正常情况。

2、但在 sciter 中更为特殊的是一连串使用中文时，同样也会出现前者的情况。而在网页中是不会出现该问题的。

```
<p>测啥日惹啊佛号房屋过户艾迪康飞洒地方黑科技佛号房屋过户艾迪康飞洒地方黑科技佛号房屋过户艾迪康飞洒地方黑科技</p>
```

在 sciter 中：

![](C:\Users\huangjh\Desktop\bug\3.png)

相比较于英文字符，中文字符会出现省略号，而英文是直接全部字符展示出来，并不会出现省略号

在网页中：

![](C:\Users\huangjh\Desktop\bug\4.png)

