function ajax(option) {
    var url = option.url;
    var data = option.data;
    var type = option.type || "get";
    var async = option.async == false ? true : option.async;
    var dataType = option.dataType;

    var str = "";
    if (typeof data === "object") {
        for (var key in data) {
            str += key + "=" + data[key] + "&"
        }
        str = str.slice(0, str.length - 1);
    }

    if (dataType != "jsonp") {
        // 创建 XMLHttpRequest 实例对象
        var xhr = new XMLHttpRequest();
        // 监听准备状态变化
        xhr.onreadystatechange = function () {
            // 请求前
            if (xhr.readyState <= 1) {
                if (option.beforSend) option.beforSend()
            }

            // 发送请求
            if (xhr.readyState == 4) {
                var res;
                if (option.complete) option.complete()
                if (xhr.status == 200) {
                    // 获取响应类型
                    var _type = xhr.getResponseHeader("content-Type");
                    if (_type.indexOf("jsonp") >= -1) {
                        res = JSON.parse(xhr.responseText);
                    } else if (_type.indexOf("xml") >= -1) {
                        res = xhr.responseXML;
                    } else {
                        res = xhr.responseText;
                    }
                    if (option.success) option.success(res);
                } else {
                    if (option.error) option.error();
                }
            }
        }

        // 判断请求的方式
        if (type == "get" || type == "GET") {
            if (str.length != 0) {
                // 发起请求
                xhr.open(type, url + "?" + str, async);
            } else {
                xhr.open(type, url, async);
            }
            // 发送请求
            xhr.send(null);
        } else if (type == "post" || type == "POST") {
            // 发起请求
            xhr.open(type, url, async);
            // 设置请求头
            xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded");
            // 发送请求
            xhr.send(str);
        }

    } else {
        // jsonp 请求
        var jsonpName = option.jsonpCallback;
        if (option.jsonp) {
            str += "&" + option.jsonp + "=" + jsonpName
        }
        // 创建 script 标签
        var script = document.createElement("script");
        script.src = url + "?" + str;
        // 获取head
        var head = document.querySelector("head");
        head.appendChild(script);
        // 设置回调函数
        window[jsonpName] = function (res) {
            if (option.success) option.success(res)
        }
    }
}
var $ = {}
$.ajax = ajax;