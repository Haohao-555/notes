(
    function () {
        let timerId;
        // 图片列表
        let imgList = $(".swiper .container li");
        // 小点列表
        let pointList = $(".point");
        // 容器
        let container = $(".swiper .container");
        // 容器宽度
        let w = $(".swiper").width();
        // 当前图片轮播的下标
        let img_index = 0;
        // 当前小点
        let point_index = 0;
        // 主动播放
        let autoPlay = function () {
            img_index++;
            if (img_index > imgList.length - 1) {
                img_index = 1;
                container.css({
                    left: 0
                })
            }
            container.animate({left: -w * img_index}, 500)

            point_index++;
            point_index= point_index > pointList.children().length - 1 ? 0: point_index;
            $(".point").children().eq(point_index).addClass("active").siblings().removeClass("active");
        }
        timerId = setInterval(function() {
            autoPlay()
        }, 1500);
    }
)()