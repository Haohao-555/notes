(function () {
    $.fn.fullPage = function (params) {
        // 颜色数组 
        var arrColor = params.sectionColor;
        // 浏览器高度
        var winHeight = window.innerHeight;
        // 索引值
        var index = 0;
        // 定义延迟函数变量
        var delay = null;
        // 记录有多少屏
        var len = $(this).find(".section").length;
        // 记录 .layout 容器标签
        var $layout = $(this).find(".layout");
        // 记录导航点
        var $point = $(this).find(".point span");
        // 记录当前函数作用域的 this
        var _this = this;

        var init = function () {
            $(_this).find(".section").each(function (index, dom) {
                // 设置每一屏的颜色
                $(dom).css("backgroundColor", arrColor[index])
                // 设置每一屏的高度
                $(dom).css("height", winHeight);
            })
        }
        // 初始化
        init();

        // 鼠标滚轮
        $(document).on("mousewheel", function (event) {
            // 判断你延迟变量是否有值，若有值，表示正在执行
            // 事件再次频繁触发，就需要清除延迟函数
            if (delay) clearInterval(delay);

            // 事件没有频繁触发，再执行延迟函数
            delay = setTimeout(function () {
                // 根据当前的字段判断滚轮的方向
                var wheelDelta = event.originalEvent.wheelDelta;
                if (wheelDelta < 0) { // 向后
                    index++;
                    index = index > len - 1 ? len - 1 : index;
                } else { // 向前
                    index--;
                    index = index < 0 ? 0 : index;
                }
                // 切换到下一屏
                $layout.animate({
                    marginTop: -index * winHeight
                }, 300, function () {
                    // 判断是否有回调函数
                    params.aferLoad && params.aferLoad(index);
                })
                // 设置导航点跟随切换
                $point.eq(index).addClass("active").siblings().removeClass("active");
                // 重置delay的值
                delay = null;
            }, 100);

        })

        // 鼠标移入导航点事件
        $(this).find(".point span").on("mouseenter", function () {
            // 获取索引值
             index = $(this).index();
              // 切换到下一屏
              $layout.animate({
                marginTop: -index * winHeight
            }, 300, function () {
                // 判断是否有回调函数
                params.aferLoad && params.aferLoad(index);
            })
            // 设置导航点跟随切换
            $point.eq(index).addClass("active").siblings().removeClass("active");
        })
    }
})(jQuery)