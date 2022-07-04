/**
 * 
 * @param {function} func 回调函数
 * @param {num} wait 时间间隔
 * @param {object} options  配置选项 
 * option.leading：false 表示禁用第一次执行
 * option.trailing: false 表示禁用停止触发的回调
 * @returns 节流函数
 */
export function throttle(func, wait, options = {}) {
    let timeout; // 计时器 id
    let context; // 上下文 this
    let args; // 参数
    let previous = 0; // 上一次时间
    
    // 节流函数
    let  throttled = function () {
        context = this;
        args = arguments;
        let now = new Date().getTime();
        // previous 为 0 即为第一次调用, 且 禁止第一次执行
        if (!previous && options.leading == false) previous = now;
        // 事件触发间隔 与 规定间隔时间（wait）的差值
        let remaining = wait - (now - previous);
        // 在时间间隔范围内触发（除第一次禁止执行外）
        if (remaining <= 0) { 
            // 清除上一次设置的计时器
            if (timeout) { 
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            // 立即执行回调函数
            func.apply(context, args);
            // 垃圾回收
            if (!timeout) context = args = null;
        } 
        // 未到时间间隔，设置结束触发时，能够在执行一次回调函数
        else if (!timeout && options.trailing !== false) { 
            timeout = setTimeout(later, remaining);
            // 垃圾回收
            if (!timeout) context = args = null;
        }
    };

    // 事件结束后根据是否立即执行重新设置 previous
    // 无需立即执行 则将 previous 设置为 0
    // 需要立即执行 则将 previous 设置成本次方法的触发时间 
    let later = function() {
        previous = options.leading ? new Date().getTime() : 0;
        timeout = null;
        func.apply(context, args);
    };
    
    return throttled;
}