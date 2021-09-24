; (function () {
    var timerId;
    // 获取容器的宽度
    var width = $('.rotate').innerWidth();

    // 当前轮播图片下标
    var index = 0;
    var ab_index = 0;

    // 轮播图
    var $ul = $('.rotate .swiper_container');
    var len = $ul.children().length;

    // 小块
    var $point = $(".adBtn a");
    var adBtn = $point.length

    // 轮播
    var autoPlay = function () {
        index++;
        if (index > len - 1) {
            index = 1;
            $ul.css({ left: 0 })
        }
        $ul.stop(true, true).animate({ left: -(width * index) }, 500);

        ab_index++;
        ab_index = ab_index > adBtn - 1 ? 0 : ab_index;
        $point.eq(ab_index).addClass("on").siblings().removeClass("on");
    }

    // 定时轮播
    timerId = setInterval(function () {
        autoPlay();
    }, 4000);

    
    $('.rotate').on("mouseenter", function () {
        clearInterval(timerId)
    });
    $(".rotate").on("mouseleave", function () {
        timerId = setInterval(function () {
            autoPlay()
        }, 4000);
    })


    $(".adBtn").on("mouseenter", "a", function (e) {
        if (timerId) clearInterval(timerId);
        e.stopPropagation();
        ab_index = $(this).index();
        index = $(this).index();
        $ul.stop(true, true).animate({ left: -(width * index) }, 500);
        $point.eq(ab_index).addClass("on").siblings().removeClass("on");
    })
    $(".adBtn").on("mouseleave", "a", function (e) {
        e.stopPropagation();
        timerId = setInterval(function () {
            autoPlay()
        }, 4000);
    })

})()