### ajax

#### ajax 是什么

> 1、ajax 是创建动态网页的技术
>
> 2、ajax 可以读取本地以及远程文档内容.
>
> 3、ajax 可以实现数据的前后端交互
>
> 
>
> Asynchronous Javascript And XML（异步JavaScript和XML）



#### ajax 特点

> ajax 可以读取本地或远程文档的内容（基于这个特点可以处理数据的前后端交互）



#### ajax 的编程

1、XMLHttpRequest 对象（构造函数）

> 该对象仅支持同源策略，不支持跨域！
>
> 但是后台接口一旦设了以下代码：

```javascript
// 设置跨域访问
app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
```

> XMLHttpRequest 对象 就可以读取这个后台接口的数据



2、jsonp

> jsonp 不是数据格式
>
> jsonp 是处理跨域访问数据的一种方式
>
> jsonp 仅仅支持 get 方式提交参数
>
> 即表示 "跨域的解决方案".

原理：

* 动态创建script 标签，利用script的src属性读取接口内容（脚本）
*  把创建的script标签，添加到head标签里
* 在定义全局函数，再调用 success 回调函数处理方法脚本当中的数据



#### get 和post方式的区别是什么？

* get 请求速度快 ，post 请求速度慢
* get 安全程度较低, post 安全程度较高
* get 缓存比较严重, post 几乎没有缓存
* get 请求数据有大小的限制(约4k) , post请求数据没有大小的限制



#### 如何实现数据的前后端交互

* 接口说明文档（地址，方式，参数，返回值）
* 编写前端界面
* 前端编写ajax代码（请求数据和渲染数据）



#### 什么时候使用ajax?

*  当页面需要局部刷新数据时
* 当页面需要调用后台接口渲染数据时
* 当页面需要提交数据给服务端时



#### 什么时候需要使用jsonp?

* 当页面地址和数据接口地址不一致时
* 当后台返回的数据是一段脚本时



![](https://i.loli.net/2021/09/09/ehMTw1RzqoES3LG.png)



具体编程看 ajax编程
