/*
* H5-视频播放器
* 需求：
*  1. 可以播放视频，可以暂停视频
*  2. 显示视频文件的时长
*  3. 设置视频播放的进度条
*  4. 设置视频播放的倍速
*  5. 设置视频的音量
*
*
*
*/
// 编码方式： 面向对象
// 构造函数
function Player() {
    // 添加属性
    // 音频元素
    this.video = document.querySelector(".video-box-content video");

    // 按钮组
    this.buttons = document.querySelectorAll(".video-box-bottom .btns button");
    // 播放
    this.btnPlay = this.buttons[0];
    // 暂停
    this.btnPause = this.buttons[1];

    // 进度条
    this.progress = document.querySelector(".progress");
    // 时间
    this.spans = document.querySelectorAll(".time span");
    // 已播放时间
    this.curTime = this.spans[0];
    // 视频时长
    this.durTime = this.spans[1];

    // 倍速
    this.btnSpeed = document.querySelector(".speed > div");
    this.boxSpeed = document.querySelector(".speed > ul");
    this.itemsSpeed = document.querySelectorAll(".speed > ul li");

    // 音量
    this.range = document.querySelector(".range")
    this.boxRange = document.querySelector(".range ul");
    this.liRange = document.querySelector(".range ul li");
    this.barRange = document.querySelector(".range ul li .bar");

    // 获取 ul 的子元素
    this.line = this.progress.children[0];
    // 获取 ul 的父元素
    this.progressParent = this.progress.parentElement;
}

//  原型对象
// 添加方法 初始化
Player.prototype.init = function () {
    // 播放和暂停视频
    this.addClickEvent();
    // 设置视频时间
    this.setVideoTime();
    // 设置当前播放时长
    this.addMouseEvent();
    // 设置视频的快慢
    this.setSpeed();
}

// 添加方法 添加点击事件 控制视频的播放和暂停
Player.prototype.addClickEvent = function () {
    // 记录当前函数作用域的this
    var _this = this;
    // 点击播放视频
    this.btnPlay.onclick = function () {
        _this.video.play();
        _this.btnPlay.className = "active";
        _this.btnPause.className = "";
    }
    // 点击暂停视频
    this.btnPause.onclick = function () {
        _this.video.pause();
        _this.btnPlay.className = "";
        _this.btnPause.className = "active";
    }
}

// 添加方法 设置视频时间
Player.prototype.setVideoTime = function () {
    // 记录当前函数作用域的 this
    var _this = this;
    // 记录当前视频播放时间位置
    this.currentTime = 0;
    // 记录视频播放总时长
    this.durationTime = 0;
    // 在视频播放前触发事件
    this.video.oncanplay = function () {
        // 获取事件的总时长
        _this.durationTime = this.duration;
        // 渲染时间
        var obj = _this.formatTime(_this.durationTime)
        _this.durTime.innerHTML = `${obj.h}:${obj.m}:${obj.s}`
    }
    // 视频播放时触发事件
    this.video.ontimeupdate = function () {
        // 获取当前视频播放时间位置
        _this.currentTime = this.currentTime;
        var obj = _this.formatTime(_this.currentTime)
        _this.curTime.innerHTML = `${obj.h}:${obj.m}:${obj.s}`
        // 设置进度条
        _this.setProgress();
    }
}

// 添加方法 设置视频的进度条
Player.prototype.setProgress = function () {
    // 判断视频时长是否有值
    if (this.currentTime == 0 || this.durationTime == 0) return;
    // 获取 ul 标签的宽度
    var ul_width = this.progress.offsetWidth;
    // 计算 line 的宽度
    var v1 = (this.currentTime / this.durationTime) * ul_width;
    v1 = v1.toFixed(2);
    this.line.style["width"] = v1 + "px";
}

// 添加方法 设置视频当前播放时间位置
Player.prototype.addMouseEvent = function () {
    var _this = this;
    // 记录 x 距离（当前播放视频的位置）
    this.x = 0;
    // 记录 ul 标签的宽度
    this.w = this.progress.offsetWidth;
    // 判断鼠标是否按下 line 标签
    this.isMousDown = false;

    // 鼠标按下 ul 标签
    this.progress.onmousedown = function () {
        _this.isMousDown = true;
    }
    // 鼠标移动
    document.addEventListener("mousemove", function () {
        if (_this.isMousDown) {
            // 鼠标在页面的 x 位置
            var mx = event.pageX;
            // 鼠标在进度上滑动的距离
            _this.x = mx - _this.progressParent.offsetLeft;
            // 判断是否小于0
            if (_this.x < 0) {
                _this.x = 0;
            }
            // 判断是否超过进度条
            if (_this.x > _this.progressParent.offsetLeft) {
                _this.x = _this.progressParent.offsetLeft;
            }

            // 设置 li 标签的宽度
            _this.line.style["width"] = _this.x + "px";
            // 设置视频的当前时间位置
            // 计算时间
            var v2 = (_this.x / _this.w) * _this.durationTime;

            _this.video.currentTime = v2;

        }
    })
    // 鼠标抬起
    document.addEventListener("mouseup", function () {
        _this.isMousDown = false;
    })
}

// 添加格式化时间的方法
Player.prototype.formatTime = function (seconds) {
    // 计算小时
    var h = Math.floor(seconds / 3600);
    // 计算分钟
    var m = Math.floor(seconds % 3600 / 60);
    // 计算秒种
    var s = Math.floor(seconds % 60);

    // 补零
    h = h < 10 ? ("0" + h) : ("" + h);
    m = m < 10 ? ("0" + m) : ("" + m);
    s = s < 10 ? ("0" + s) : ("" + s);
    return {
        h: h,
        m: m,
        s: s
    }
}

// 添加方法 设置视频播放的快慢
Player.prototype.setSpeed = function () {
    var _this = this;
    this.btnSpeed.onmouseenter = function () {
        _this.boxSpeed.style["display"] = "block"
    }
    for (var i = 0; i < this.itemsSpeed.length; i++) {
        this.itemsSpeed[i].onclick = function () {
            var v3 = this.dataset.speed;
            // 设置视频的速度
            _this.video.playbackRate = v3;
            // 隐藏列表
            _this.boxSpeed.style["display"] = "none"
        }
    }
}
new Player().init();
