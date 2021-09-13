var BASE_URL = 'https://cloud-music-api-sandy.vercel.app'
// 轮播图
function swiper_render(data) {
    // 四张轮播图
    var count = 4;
    var str ="";
    for(var i = 0; i < count; i++) {
        str += `<img src="${data[i].imageUrl}">`
    }
    str += `<img src="${data[0].imageUrl}">`
    $(".swiper_wrapper").html("").append(str)
}
function swiper() {
    $.ajax({
        url: BASE_URL+"/banner",
        type: "get",
        success: function(res) {
            swiper_render(res.banners)
        },
        error: function(error) {
            console.log(error)
        }
    })
}

// 推荐歌单
function rcmd_render(data) {
    var str = "";
    data.forEach(e => {
        str += `
             <div class='item' data-id=${e.id}>
                <a href=''>
                  <img src=${e.coverImgUrl}>
                  <p class='name'>${e.name}</p>
                  <div class='count'>
                  播放量：${e.playCount}
                  <i class='iconfont icon-bofang icon'></i>
                  </div>
                </a>
             </div>
             `
    });
    $(".rcmd").html("").append(str)
}
function rcmd(offset) {
    $.ajax({
        url: BASE_URL+"/top/playlist",
        type: "get",
        data: {
            limit: 10,
            offset: offset,
        },
        success: function (res) {
            rcmd_render(res.playlists)
        },
        error: function (error) {
            console.log(error)
        }
    })
}

// 热门歌单
function hot_render(data) {
    var str =""
    data.forEach(e => {
        str += `
               <div class='item'>
                  <img src='${e.picUrl}' class='new_img'/>
                  <div class='name' data-id=${e.id}>${e.name}</div>
                  <div class='count'>播放量：${e.playCount}</div>
               </div>
               `
    })
    $(".new").html("").append(str)
}
function hot_song(){
    $.ajax({
        url: BASE_URL+"/personalized",
        type: "get",
        data: {
            limit:10
        },
        success: function(res) {
            hot_render(res.result)
        },
        error:function(error) {
            console.log(error)
        }
    })
}

// 独家放送
function loco_render(data) {
   console.log(data)
   var str = "";
   data.forEach(e => {
       str += `
              <div class='item'>
                 <img src ='${e.picUrl}'/>
                 <p class='name' data-id=${e.id}>${e.name}</p>
              </div>
             `
   })
   console.log(str)
   $(".loco").html("").append(str);
}
function loco() {
   $.ajax({
       url: BASE_URL + "/personalized/privatecontent",
       type: "get",
       success: function(res) {
           loco_render(res.result);
       },
       error: function(error) {
           console.log(error);
       } 
   })
}


