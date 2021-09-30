$(function () {
    var top = $(".banner")[0].offsetTop;
    var header_height = $(".header")[0].offsetHeight;
   
    var newcenter_width = $(".news_center")[0].offsetWidth;
    
   
    
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
    

    $(".header").on("mouseenter", function() {
        $(".J_subNav").slideDown(300);
    })
    $(".header").on("mouseleave", function(e) {
        if($(e)[0].pageY < top)  $(".J_subNav").slideUp(300);
    })

    $(".J_subNav").on("mouseleave", function(e) {
        if($(e)[0].pageY > top + header_height) $(".J_subNav").slideUp(300);
    })
  


    $(".ost_left .l_item-2").on("mouseenter", function () {
        $(".ost_d").css({ display: "block" });
    })
    $(".ost_d").on("mouseleave", function () {
        $(".ost_d").css({ display: "none" });
       
    })



    $(".ost_right .r_item_2").on("mouseenter", function () {
        $(".ost_pop").css({ display: "block" });
       
    })
    $(".ost_pop").on("mouseleave", function () {
        $(".ost_pop").css({ display: "none" });
    })

    
    $(".new_top").on("mouseenter", "li", function(e) {
        var index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".new_center_container").stop(true,true).animate({left: -(index * newcenter_width)+ "px"});
    })


    $(".item_subnav").on("mouseenter", "a", function(e) {
        $(".item_subnav").children().eq($(this).index()).addClass("on").siblings().removeClass("on")
    })


    $(".strategy_center .title").on("mouseenter", "a", function(e) {
        $(".strategy_center .title").children().eq($(this).index()).addClass("on").siblings().removeClass("on")
    })
})