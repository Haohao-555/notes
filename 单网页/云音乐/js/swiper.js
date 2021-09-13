(function () {
    var $img = $(".swiper_wrapper")
    var $point = $(".point")
    var len = $img.children().length;
    var num = $point.children().length;
    var timerId;
    var index = 0;
    var small_index = 0;
    var autoplay = function () {
        index++;
        if (index > len - 1) {
            index = 1;
            $img.css({ left: 0 });
        }
        $img.animate({ left: -(index * 1000) }, 500);
        small_index++;
        if (small_index > num - 1) {
            small_index = 0
        }
        $point.children().eq(small_index).addClass("active").siblings().removeClass("active");
    }
    timerId = setInterval(function () {
        autoplay()
    }, 1500);

    $(".wrapper").on("mouseenter", function () {
        clearInterval(timerId)
    })

    $(".wrapper").on("mouseleave", function () {
        timerId = setInterval(function () {
            autoplay()
        }, 1500)
    })

    $(".point").on("click", "span", function() {
        console.log(123)
        var i = $(this).index();
        console.log(i)
        index = i;
        small_index =i;
        $img.animate({ left: -(index * 1000) }, 500);
        $point.children().eq(small_index).addClass("active").siblings().removeClass("active");
    })
})()