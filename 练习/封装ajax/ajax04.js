function ajax(option) {
    var url = option.url;
    var data = option.data;
    var type = option.type;
    var dataType = option.dataType;
    var async = option.async ? option.async : true;

    var str = ""
    if (typeof data === "object") {
        for (var key in data) {
            str += "&" + key + "=" + data[key]
        }
        str = str.slice(0, str.length - 1);
    }

    if (dataType != 'jsonp') {
        // 创建异步对象
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState <= 1) {
                if (option.beforeSend) option.beforeSend()
            }

            if (xhr.readyState == 4) {
                if (option.complete) option.complete()
                if (xhr.status == 200) {
                    var res;
                    var _type = xhr.getResponseHeader("content-Type");
                    if (_type.indexOf("json") >= -1) {
                        res = JSON.parse(xhr.responseText)
                    }else if(_type.indexOf("xml") >= -1) {
                        res = xhr.responseXML
                    }else {
                        res = xhr.responseText;
                    }
                    if(option.success) option.success(res)
                } else {
                    if (option.error) option.error()
                }
            }
        }

        if(type == "get" || type == "GET"){
           if(str.lenght != 0) {
               xhr.open(type, url + "?" + str, async)
           }else {
               xhr.open(type, url, async)
           }
           xhr.send(null)
        }else if(type == "post" || type == "POST") {
            xhr.open(type, url, async)
            xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded")
            xhr.send(str)
        }
    }else {
        var jsonpName = option.jsonpCallback;
        if(option.jsonp) {
            str += "&" + option.jsonp + "=" + jsonpName
        }
        var script = document.createElement("script")
        script.src = url + "?" + str;
        var head = document.querySelector("head");
        head.appendChild(script);
        window[jsonpName] = function(res) {
            if(option.success) option.success(res)
        }
    }
}
var $ = {}
$.ajax = ajax