;(function(){
    // 定义函数 设置根元素的字体 
    var myResize = function(){
        // 二倍图设计稿的宽度 750 640
        // 一倍图的尺寸  375  320 
        var width = 375;
        // 页面的宽度
        var winWidth = window.innerWidth; 
        // 判断可视区宽度是否超出指定范围 限制尺寸/字体
        if(winWidth >= 750){
            winWidth = 750;
        }
        // 定义变量记录 1rem = ?px 
        // 1rem = 20px
        var v1 = 20;
        // 计算根元素的字体大小
        // 屏幕变化，字体跟随变化
        var fontSize =  winWidth / width * v1 ;
        // 设置根元素的字体属性 html标签
        document.documentElement.style["fontSize"] = fontSize+"px";
    }
    // 初始化
    myResize();
    // 监听可视区区域的宽度的变化
    window.addEventListener("resize",myResize);
    window.addEventListener("load",myResize);// 加载DOM标签 图片 视频音频
    window.addEventListener("DOMContentLoaded",myResize);// 加载DOM标签
})()
