var box = document.querySelector(".box")
function getUserAction(event) {
    console.log("当前的this指向（对象元素）", this)
    console.log("event事件对象", event)
    event.target.innerHTML = ++event.target.innerHTML
}
function debounce(func, wait, imm) {
    var timerId;
    var debounced = function(event) {
        var e = event || window.event;
        func.bind(this);
        if(timerId) {
            clearInterval(timerId)
        }

        if(imm) {
            if(!timerId) {
               func(e)
            }
            timerId = setTimeout(function() {
               timerId = null
            },wait)
        }else {
            timerId = setTimeout(function() {
               func(e)
            }, wait)
        }
    }
    return debounced;
}

box.onmousemove = debounce(getUserAction, 1000, true);