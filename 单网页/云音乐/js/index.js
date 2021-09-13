$(function () {
    // 当前推荐的
    var rcmd_offset = 0;
   

    // 初始化
    rcmd(rcmd_offset);
    swiper();
    hot_song();
    loco();
    $('.update').on("click", function (e) {
        var index = e.target.dataset.index
        if (index == 1) {
            rcmd_offset++;
            rcmd(rcmd_offset * 10);
        }
    })
})