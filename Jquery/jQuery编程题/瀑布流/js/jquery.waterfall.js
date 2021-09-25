(
    function ($) {
        $.fn.waterFall = function () {
            console.log($(this)); // $("#waterfall")

            // 记录每一个列的宽度
            var w = $(this).find("li")[0].offsetWidth;
            // 记录列数
            var count = 5;
            // 记录容器 container 的宽度
            var containerWidth = $(this).find(".container").width();
            // 记录列与列之间的间距
            var space = (containerWidth - w * count) / (count - 1);

            // 定义数组 记录 5个高度
            var arrHeight = [];

            // 循环所有的 li 标签
            $(this).find("li").each(function (index, dom) {
                // 打印每一个 li 标签的高度
                var h = dom.offsetHeight;
                // 判断索引值 如果小于5 就是列表中的前5个
                if (index < count) {
                    arrHeight[index] = h;
                    // 顺手将前5个 li 标签的left个设置好
                    $(dom).css({ left: index * (w + space) })
                } else {
                    var minV = arrHeight[0];
                    var minIndex = 0;
                    // 找到高度最小值
                    for (var i = 1; i < arrHeight.length; i++) {
                        if (minV > arrHeight[i]) {
                            minV = arrHeight[i];
                            minIndex = i;
                        }
                    }

                    $(dom).css({
                        left: minIndex * (w + space),
                        top: minV + space + 50
                    })
                    arrHeight[minIndex] += h + space;

                }

            })
            console.log(arrHeight)
        }
    }
)(jQuery)