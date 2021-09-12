; (function () {
    var timerId
    var swipertimerId;
    var move_boxId;
    // 请根据要求，写下你的代码...
    $(".nav ul").on("mouseenter", "li", function (e) {
        $(this).find(".content").slideDown(1000)
    })
    $(".nav ul").on("mouseleave", "li", function (e) {
        $(this).find(".content").slideUp();
    })

    $(".tab-nav").on("click", ".item", function (e) {
        $(this).addClass("active").siblings().removeClass("active")
        $(".tab-con ul").eq($(this).index()).addClass("active").siblings().removeClass("active");
    })

    $(".move").on("mouseenter", ".box", function (e) {
        $box = $(this);

        $box.find(".top").animate({
            left: -120
        }, 500)
        $box.find(".left").animate({
            top: 120
        }, 500)
        $box.find(".right").animate({
            top: 120
        }, 500)
        $box.find(".bottom").animate({
            left: -120
        }, 500)
    })

    $(".move").on("mouseleave", ".box", function (e) {
        $box = $(this);
        $box.find(".top").animate({
            left: 0
        })
        $box.find(".left").animate({
            top: 0
        })
        $box.find(".right").animate({
            top: 0
        })
        $box.find(".bottom").animate({
            left: 0
        })
    })

    function timer() {
        var l = ["日", "一", "二", "三", "四", "五", "六"];
        var date = new Date();
        var year = date.getFullYear();
        var mouth = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var d = date.getDay();
        mouth = mouth <= 9 ? "0" + mouth : mouth
        day = day <= 9 ? "0" + day : day
        hour = hour <= 9 ? "0" + hour : hour
        min = min <= 9 ? "0" + min : min
        sec = sec <= 9 ? "0" + sec : sec
        $(".timebox").text(`${year}年${mouth}月${day}日 星期${l[d]} ${hour} : ${min} : ${sec}`)

    }
    // 初始化
    timer()
    timerId = setInterval(function () {
        timer()
    }, 1000);

    // 轮播图
    var $ul = $(".banner ul")
    var $point = $(".point ol li")
    // 轮播到当前图片下标
    var index = 0;
    // 小图标
    var small_index = 0;
    var len = $ul.children().length;
    var num = $point.length;
    function autoplay() {
        index++;
        if (index > len - 1) {
            index = 1;
            $ul.css("left", 0);
            $ul.css({ left: 0 }, 500);
        }
        $ul.animate({ left: -(660 * index) }, 500);

        small_index++;
        small_index = small_index > num - 1 ? 0 : small_index
        $(".point ol li").eq(small_index).addClass("active").siblings().removeClass("active");
    }
    swipertimerId = setInterval(function () {
        autoplay();
    }, 1500)

    $(".banner").on("mouseenter", function () {
        clearInterval(swipertimerId);
    })
    $(".banner").on("mouseleave", function () {
        swipertimerId = setInterval(function () {
            autoplay();
        }, 1500);
    })
    $(".point ol").on("mouseenter", "li", function () {
        if (swipertimerId) {
            clearInterval(swipertimerId);
        }
        index = $(this).index();
        small_index = $(this).index();
        $ul.animate({ left: -(660 * index) }, 500);
        $(".point ol li").eq(small_index).addClass("active").siblings().removeClass("active");
    })
    $(".point ol").on("mouseleave", "li", function () {
        if (!swipertimerId) {
            swipertimerId = setInterval(function () {
                autoplay();
            }, 1500);
        }


    })

    $(".left").on("click", function () {
        index--;
        small_index--;
        index = index < 0 ? 0 : index;
        small_index = small_index < 0 ? 0 : small_index;
        $ul.animate({ left: -(660 * index) }, 500);
        $(".point ol li").eq(small_index).addClass("active").siblings().removeClass("active");
    })
    $(".right").on("click", function () {
        index++;
        small_index++;
        small_index = small_index > num - 1 ? num - 1 : small_index
        index = index >= num - 1 ? num - 1 : index
        $ul.animate({ left: -(660 * index) }, 500);
        $(".point ol li").eq(small_index).addClass("active").siblings().removeClass("active");
    })
})()

