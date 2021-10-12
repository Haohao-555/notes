function ajax(option) {
    // 获取请求 url 地址
    var url = option.url;
    // 获取请求类型
    var dataType = option.dataType;
    // 获取请求方式
    var type = option.type;
    // 获取请求数据
    var data = option.data;
    // 获取是否异步
    var async = option.async === false ? true : option.async;

    var str = "";
    // 将数据转成字符串
    if (typeof data === "object") {
        for (var key in data) {
            str += key + "=" + data[key] + "&";
        }
        str.slice(0, str.length - 1);
    }

    if (dataType != "jsonp") {
        // 创建 XMLHttpRequest 实例化对象
        var xhr = new XMLHttpRequest();
        // 监听准备状态变化
        xhr.onreadystatechange = function () {
            // 请求前
            if (xhr.readyState <= 1) {
                if (option.beforeSend) option.beforeSend()
            }

            // 请求完成
            if (xhr.readyState == 4) {
                var res;
                if (option.complete) option.complete();
                // 响应完成
                if (xhr.status === 200) {
                    // 判断响应数据类型
                    var _type = xhr.getResponseHeader("content-Type");
                    if (_type.indexOf("json") > -1) {
                        res = JSON.parse(xhr.responseText);
                    } else if (_type.indexOf("xml") > -1) {
                        res = xhr.responseXML;
                    } else {
                        // 普通文本
                        res = xhr.responseText;
                    }
                    if (option.success) option.success(res);
                } else {
                    if (option.error) option.error()
                }
            }
        }
        // 判断请求的方式
        if (type === "get" || type === "GET") {
            // 判断请求的数据是否存在
            if (str.length == 0) {
                // 发起请求
                xhr.open(type, url, async)
            } else {
                // 发起请求
                xhr.open(type, url + "?" + str, async)
            }
            // 发送请求
            xhr.send(null)
        } else if (type === "post" || type === "POST") {
            // 发起请求
            xhr.open(type, url, async);
            // 设置请求头
            xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded");
            // 发送请求
            xhr.send(str);
        }
    } else {// jsonp
        // 获取回调函数的名称
        var jsonName = option.jsonpCallback;
        // 判断 option 中是否存在 json 属性
        if(option.json) {
            str += "&" + option.json + "=" + jsonName;
        }
        // 创建 script 标签
        var script = document.createElement("script");
        // 设置 src
        script.src = url + "?" + str;
        // 获取 head
        var head = document.querySelector("head");
        // 添加 script
        head.appendChild(script);
        // 设置回调函数
        window[jsonName] = function(res) {
            if(option.success) option.success(res);
        }
    }

}
$ = {}
$.ajax = ajax