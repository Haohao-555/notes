var box = document.querySelector(".box")
function getUserAction(event) {
    console.log("当前的this指向（对象元素）", this)
    console.log("event事件对象", event)
    event.target.innerHTML = ++event.target.innerHTML
}

function denounce(func, wait, imm) {
    var timerId; 
    var denounced = function(event) {
        var e = event || window.event;
        if(timerId) {
            clearInterval(timerId)
        }
        func.bind(this)

        if(imm) {
            if(!timerId) {
                func(e)
            }
            timerId = setTimeout(function() {
                timerId = null
            }, wait)
        }else {
            timerId = setTimeout(function() {
                func(e)
            }, wait)
        }
    }
    return denounced
}

// box.onmousemove = denounce(getUserAction, 1000, true)
box.onmousemove = denounce(getUserAction, 1000, false)
