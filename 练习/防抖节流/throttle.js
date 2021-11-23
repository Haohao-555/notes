var box = document.querySelector(".box")
function getUserAction(event) {
    console.log("当前的this指向（对象元素）", this)
    console.log("event事件对象", event)
    event.target.innerHTML = ++event.target.innerHTML
}

// 定时器
function Timethrottle(func, wait) {
   var timerId;
   var throttled = function(event) {
       var e = event || window.event;
       func = func.bind(this)
       if(!timerId) {
           timerId = setTimeout(function() {
               timerId = null;
               func(e)
           }, wait)
       }
   }
   return throttled
}

function TimeStampthrottle(func, wait) {
    var previous = 0;
    var throttled = function(event) {
        var e = event || window.event;
        func = func.bind(this)
        var timeNow = new Date().getTime()
        if(timeNow > previous + wait) {
            func(e)
            previous = timeNow;
        }
    }
    return throttled
}
box.onmousemove = TimeStampthrottle(getUserAction, 1000);