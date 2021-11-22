function http(option) {
    // 获取请求参数
    var url = option.url;
    var data = option.data;
    var type = option.type;

    var str = "";
    if (typeof data == "object") {
        for (var key in data) {
            str += "&" + key + "=" + data[key]
        }
        str = str.slice(0, str.length - 1);
    }

    return new Promise((resolve, reject) => {
        // 创建异步实例对象
        var xhr = new XMLHttpRequest();
        // 创建准备状态变化函数
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var str;
                    var _type = xhr.getResponseHeader("content-Type");
                    if (_type.indexOf("jsonp") >= -1) {
                        str = JSON.parse(xhr.responseText);
                    } else if (_type.indexOf("xml") >= -1) {
                        str = xhr.responseXML
                    } else {
                        str = xhr.responseText
                    }
                    resolve(str)
                } else {
                    reject(xhr)
                }
            }
        }
        if (type == "get" || type == "GET") {
            if (str.length != 0) {
                xhr.open(type, url + "?" + str, true)
            } else {
                xhr.open(type, url, true)
            }
            xhr.send(null)
        } else if (type == "post" || type == "POST") {
            xhr.open(type, url, true);
            xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded")
            xhr.send(str)
        }
    })
}