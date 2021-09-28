$(function () {

    var nav_flag = false; // true 已经显示 false 
    var big = false;
    var audio = false;
    $(".header .nav").on("mouseenter", "li", function () {
        var len = $(".header .nav").children().length;
        var index = $(this).index()
        if (index < len - 1) {
            var $li = $(".header .nav").children().eq(index);
            $li.addClass("h_active").siblings().removeClass("h_active");
            $li.find("a em").addClass("f_active").siblings().removeClass("f_active")
        }

    })
    $(".header .nav").on("mouseleave", "li", function () {
        $(this).removeClass("h_active").find("a em").removeClass("f_active");
    })
    $(document).on("mousemove", function (e) {
        var max;
        var min = $(".banner")[0].offsetTop;
        var v = $(e)[0].pageY;
        max = nav_flag ? 410 : 125;
        if (!big && !audio) {
            if (v >= min && v <= max) {
                $(".J_subNav").slideDown(300);
                nav_flag = true
            } else {
                $(".J_subNav").slideUp(300);
                nav_flag = false
            }
        }
    })

    $(".ost_left .l_item-2").on("mouseenter", function () {
        if (nav_flag) $(".J_subNav").slideUp(300);
        big = true;
        $(".ost_d").css({ display: "block" });
    })
    $(".ost_d").on("mouseleave", function () {
        $(".ost_d").css({ display: "none" });
        big = false;
    })

    // $(".ost_right .r_item_2").on("mouseenter", function () {
    //     if (nav_flag) $(".J_subNav").slideUp(300);
    //     $(".ost_pop").css({ display: "block" });
    //     audio = true;
    // })
    // $(".ost_pop").on("mouseleave", function () {
       
    //     $(".ost_pop").css({ display: "none" });
    //     audio = false;
    // })
})