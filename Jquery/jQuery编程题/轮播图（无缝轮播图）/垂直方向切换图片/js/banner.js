$(function () {
    // 需求:
    // 1.完成轮播图的布局(垂直)
    // 2.左侧用于显示缩略图
    // 3.图片自动切换(无缝衔接)
    // 4.缩略图跟随切换
    // 编码：
    // 定义变量 记录相关的数据
    // 索引值
    var index = 0;
    var square = 0;
    // 定时器变量
    var timer = null;
    // 高度
    var h = 426;
    // 大图图片的数量
    var len = $(".tt-banner-photo li").length;
    // 小图图片的数量
    var num = $(".tt-banner-small li").length;
    // 编写函数 实现图片切换和缩略图的切换
    var autoPlay = function () {
        // 大图
        index++;
        // 判断
        if (index > len - 1) {
            // 给index赋值 
            index = 1;
            // 设置承载图片的容器
            $(".tt-banner-photo ul").css("top", 0);
        }
        // 动画切换下一个图片
        $(".tt-banner-photo ul").animate({ top: -(index * h) }, 500)
        // 小图
        square++;
        // 判断
        if (square > num - 1) {
            // 给square赋值0
            square = 0;
        }
        // 切换小图边框高亮
        $(".tt-banner-small li").eq(square)
            .addClass("active")
            .siblings()
            .removeClass("active");
    }

    // 测试
    // autoPlay();
    // 执行定时器函数
    timer = setInterval(function () {
        autoPlay();
    }, 1500);


    // 鼠标移入移出侧栏
    $(".tt-banner-small").hover(
        function () {
            clearInterval(timer);
        },
        function () {
            clearInterval(timer);
            timer = setInterval(function () {
                autoPlay();
            }, 1500);
        }
    )

    // 鼠标在缩略图上点击
    $(".tt-banner-small li").on("click", function () {
        // 获取索引值
        var v1 = $(this).index();
        // 赋值（必须的）
        index = v1;
        square = v1;
        // 动画切换下一个图片
        $(".tt-banner-photo ul").animate({ top: -(index * h) }, 500)
        // 切换小图边框高亮
        $(".tt-banner-small li").eq(square)
            .addClass("active")
            .siblings()
            .removeClass("active");
    })
})