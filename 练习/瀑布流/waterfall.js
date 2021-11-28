(
    function($) {
        $.fn.waterFall = function() {
            // 获取 li 标签的宽度
            let w = $(this).find("li")[0].offsetWidth;
            // 获取容器的宽度
            let containerWidth = $(this).find(".container").width();
            // 设置显示列数
            let count = 5;
            // 计算间隔
            let space = (containerWidth - count * w) / (count - 1);
            
            // 存放高度的数组
            let arrHeight = [];
            // 遍历 li 标签
            $(this).find("li").each(function(index, dom) {
                // 获取每个 li 标签的高度
                let h = dom.offsetHeight;
                if(index < count) {
                    arrHeight[index] = h;
                    $(dom).css({
                        left: index * (space + w)
                    })
                }else {
                    // 获取最小值
                    let minV = arrHeight[0];
                    let minIndex = 0
                    for(let i = 0; i < arrHeight.length; i++) {
                        if(minV > arrHeight[i]) {
                            minV = arrHeight[i];
                            minIndex = i
                        }
                    }
                    $(dom).css({
                        left: minIndex * (space + w),
                        top: 50 + minV + space
                    })

                    arrHeight[minIndex] += h + space
                }
            })
        }
    }
)(jQuery)