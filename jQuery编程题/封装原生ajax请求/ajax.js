// 封装 ajax 函数 
function ajax(option) {
    // 记录接口地址
    var url = option.url;
    // 记录请求方式
    var type = option.type || "get";
    // 记录提交的参数
    var data = option.data;
    //记录异步的布尔值（不够传入的值是什么，都为 ture）
    var async = option.async == false ? option.async : true;
    // 记录响应的数据格式 / 表示跨域的标记
    var dataType = option.dataType;

    // 处理 data 对象（把对象转成指定格式的字符串）
    var str = "";
    if (typeof data == "object") {
        for (var key in data) {
            str += key + "=" + data[key] + "&"
        }
        str = str.slice(0, str.length - 1);
    }

    // 判断执行 XMLHttpRequest 逻辑
    if (dataType != "jsonp") {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest()
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP"); // 低版本IE5/6
        }

        // 监听客户端请求和服务器端响应的状态
        xhr.onreadystatechange = function () {
            // console.log("监听请求和响应")
            // 根据请求状态码调用相关的回调函数
            if (xhr.readyState <= 1) {
                // 判断是否存在当前的回调函数 beforeSend
                if (option.beforeSend) option.beforeSend();
            }

            // 判断请求是否完成
            if (xhr.readyState == 4) {
                // 响应是否成功
                if (xhr.status == 200) {
                    // 处理响应报文
                    var _type = xhr.getResponseHeader("content-type")
                    // 接受处理结果
                    var res;
                    if (_type.indexOf("json") > -1) {
                        // 把字符串转成对象格式
                        res = JSON.parse(xhr.responseText);
                    } else if (_type.indexOf("xml") > -1) {
                        // xml 是一种存储数据的标记语言
                        res = xhr.responseXML;
                    } else {
                        // 普通文档内容
                        res = xhr.responseText;
                    }
                    // 调用 success 回调函数
                    if (option.success) option.success(res);
                } else {
                    // 调用 error 回调函数
                    if (option.error) option.error("请求失败")
                }

                // 当状态码等于 4 的时候
                if (option.complete) option.complete();
            }
        }

        // 判断请求方式是否为 get
        if (type == "get" || type == "get") {
            // 发起请求
            if (str.length == 0) {
                xhr.open(type, url, async)
            } else {
                // get 方式提交参数，参数是拼接再url的后面（地址栏）
                xhr.open(type, url + "?" + str, async)
            }
            // 发送请求主体
            xhr.send();

        } else if (type == "post" || type == "POST") {
            // 发起请求
            xhr.open(type, url, async)
            // 设置请求头信息
            xhr.setRequestHeader("content-type", "application/x-www-form-urlendcoded");
            // 发送请求主体
            xhr.send(str);
        }
    }


    // 判断执行 json 逻辑
}

// 封装 get 函数
function _get(url, success, error, data) {
    var str = "";
    if(typeof data === "object") {
        for(var key in data) {
            str += key + "=" + data[key] + "&"
        }
        str += str.slice(0, str.length-1);
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (success) success(xhr.responseText);
            } else {
                if (error) error("请求失败");
            }
        }
    };
    xhr.open("get", url+"?"+str, true);
    xhr.send();
}

// 封装 post 函数
function _post(url, data, success, error) {
    var str = "";
    if (data) {
        for (var key in data) {
            str += key + "=" + data[key] + "&";
        }
        str = str.slice(0, str.length - 1);
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (success) success(xhr.responseText);
            } else {
                if (error) error("请求失败");
            }
        }
    };
    xhr.open("post", url, true);
    xhr.setRequestHeader(
        "content-type",
        "application/x-www-form-urlencoded"
    );
    xhr.send(str);
}

var $ = {};
$.ajax = ajax;
$.get = _get;
$.post = _post;