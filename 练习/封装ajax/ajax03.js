function ajax(option) {
    // 获取请求参数
    var url = option.url;
    var data = option.data;
    var async = option.async == false ? true : option.async;
    var dataType = option.dataType;
    var type = option.type;

    // 处理参数
    var str = "";
    if(typeof data === "object") {
        for(var key in data) {
           str += "&" + key + "=" + data[key]
        }
        str = str.slice(0, str.length - 1);
    }

    if(dataType != "jsonp") {
        // 创建异步对象
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            // 请求前
            if(xhr.readyState <= 1) {
               if(option.beforeSend) option.beforeSend()
            }

            // 发送请求
            if(xhr.readyState == 4) {
                if(option.complete) option.complete()
                if(xhr.status == 200) {
                    var res = "";
                    // 获取响应数据类型
                    var _type = xhr.getResponseHeader("content-Type");
                    if(_type.indexOf("jsonp") >= -1) {
                        res = JSON.parse(xhr.responseText)
                    }else if(_type.indexOf("xml") >= -1) {
                        res = xhr.responseXML()
                    }else {
                        res = xhr.responseText()
                    }
                    if(option.success) option.success(res)
                }else {
                    if(option.error) option.error()
                }
            } 
        } 

        // 判断请求方式
        if(type == "get" || type == "POST") {
            if(str.length != 0) {
                xhr.open(type, url + "?" + str, async)
            }else {
                xhr.open(type, url, async)
            }
            xhr.send(null)
        }else if(type == "post" || type == "POST") {
            xhr.open(type, url, async)
            // 设置请求头部
            xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded");
           
            xhr.send(str)
        }
    }else {
        var jsonName = option.jsonpCallback;
        if(option.jsonp) {
            str += "&" + option.json + "=" + jsonName
        }
        // 创建 srcipt 标签
        var script = document.createElement("script");
        script.src = url + "?" + str
        // 获取头部标签
        var head = document.querySelector("head");
        head.appendChild(script)
        // 设置全局回调函数
        window[jsonName] = function(res) {
            if(option.success) option.success(res)
        }
    }
}
var $ = {};
$.ajax = ajax