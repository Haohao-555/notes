/*
*
* canvas 画布
* 1. 绘制线    drawLine
* 2. 绘制矩形  drawRect
* 3. 绘制圆形  drawCircle
* 4. 绘制文本  drawText
*/ 

// 编写函数实现不同的功能
// 功能1：
var drawLine = function(ctx,x1,y1,x2,y2,color,width) {
    // 默认变量值
    // 起点坐标
    // var x1 = x1 || 100;
    // var y1 = y1 || 100;
    var x1 = x1 === undefined ? 100 : x1;
    var y1 = y1 === undefined ? 100 : y1;

    // 终点坐标
    // var x2 = x2 || 500;
    // var y2 = y2 || 100;
    var x2 = x2 === undefined ? 500 : x2;
    var y2 = y2 === undefined ? 100 : y2;

    // 颜色
    var color = color || "#ccc";
    // 线大小
    var width = width || 1;
    // 绘制线
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(x1,y1);

    ctx.lineTo(x2,y2);

    ctx.closePath();
    ctx.stroke();
}
// 功能2：
// ctx 是对象 
var drawRect = function(ctx,x,y,w,h,color){
    var x = x === undefined ? 100: x;
    var y = y === undefined ? 100: y;
    var w = w === undefined ? 100: w;
    var h = h === undefined ? 100: h;
    var color = color === undefined ? "red": color;
    // 绘制矩形
    ctx.beginPath();
    ctx.fillStyle = color;
    // 绘制矩形
    ctx.rect(x,y,w,h);
    ctx.closePath();
    // 填充（表现图形）
    ctx.fill();
}
// 功能3：
var drawCircle = function(ctx, x,y,r,s,e,color){
    var x = x === undefined ? 100: x;//坐标X
    var y = y === undefined ? 100: y;//坐标Y
    var r = r === undefined ? 100: r;//半径
    var s = s === undefined ? 0 : s; // 开始的角度
    var e = e === undefined ? 360 : e;// 结束的角度
    var color = color === undefined ? "red": color;//颜色
    // 绘制圆(弧形)
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x,y);
    // 绘制弧形
    ctx.arc(
        x,
        y,
        r,
        s * Math.PI/180,
        e * Math.PI/180,
        false
    )
    ctx.closePath();
    ctx.fill();
}
// 功能4：
var drawText = function(ctx,str,x,y,color,font){
    var str = str || "hello world!";
    ctx.beginPath()
    ctx.fillStyle= color || "#000";
    ctx.font = font || "20px 微软雅黑";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
        str,
        x,
        y)
    ctx.closePath();
}