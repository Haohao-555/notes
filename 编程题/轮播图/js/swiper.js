var nav = document.querySelector(".nav");
var li = document.querySelectorAll("li");
var prev_swiper = document.querySelector(".swiper-button-left");
var next_swiper = document.querySelector(".swiper-button-right");

//当前被激活的图片下标
var nav_index = 0;

// 还原图片透明度和小圆点
function reduction() {
  nav.children[nav_index].classList.remove("active-nav-li");
  li.forEach((_) => (_.classList.add("normal-img")));
}

// 根据下标移动到相对于图片
function next_prevSwiper(index) {
  // 判断是否超过小标
  var flag = index == nav.children.length;

  index = flag ? 0 : index;

  if (index < 0) {
    index = 0;
  }

  //还原
  reduction();
 
  nav.children[index].classList.add("active-nav-li")
 
  li.forEach((item, i) => {
    if (i != index) {
      item.classList.remove("normal-img");
      item.classList.add("hidden-img");
    }
  });

  // 更新小圆点小标
  nav_index = index;
}

// 小圆点监听器
nav.addEventListener("click", function (e) {
  var index = e.target.dataset.index;
  if (index) {
    reduction();
    next_prevSwiper(index);
  }
});

// 定时轮播
setInterval(function () {
  next_prevSwiper(parseInt(nav_index) + 1);
}, 4000);

// 上一张
prev_swiper.addEventListener("click", function () {
  next_prevSwiper(parseInt(nav_index) + 1);
});

// 下一张
next_swiper.addEventListener("click", function () {
  next_prevSwiper(parseInt(nav_index) - 1);
});