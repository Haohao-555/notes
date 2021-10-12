/**
 * 
获取 url 中的参数
        1. 指定参数名称，返回该参数的值 或者 空字符串
        2. 不指定参数名称，返回全部的参数对象 或者 {}
        3. 如果存在多个同名参数，则返回数组
        4. 不支持URLSearchParams方法 
 */
function getUrlParam(sUrl, sKey) {
    var arr = sUrl.split("#")[0].split("?")[1].split("&");
    var obj = {};
    arr.forEach(e => {
        const [key, value] = e.split("=");
        if (Reflect.has(obj, key)) {
            obj[key] = [].concat(obj[key], value)
        } else {
            obj[key] = value
        }
    });
    return obj[sKey] || " "
}
console.log(getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe", "test"));