$(function () {
    var nav_flag = false; // true 已经显示 false 已经隐藏
    $(".header .nav").on("mouseenter", "li", function () {
        var len = $(".header .nav").children().length;
        var index = $(this).index()
        if (index < len - 1) {
            var $li = $(".header .nav").children().eq(index);
            $li.addClass("h_active").siblings().removeClass("h_active");
            $li.find("a em").addClass("f_active").siblings().removeClass("f_active")
        }
    //    if(!nav_flag) {
    //        $(".J_subNav").stop(true, true).animate({height: 285}, 500);
    //    }
    })
})