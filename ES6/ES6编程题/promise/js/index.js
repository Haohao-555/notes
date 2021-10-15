// 需求：
// 1. 点击“登录”，获取输入的账号密码，读取文档,和文档数据进行匹配
// 如果登录成功，显示“创建订单”，否则不显示“创建订单”

// 2. 点击“创建”按钮，读取文档内容，根据文档信息，显示“用户支付”,否则不显示

// 3.定义“支付”按钮，读取文档内容，根据文档信息，提示 “支付成功”

let rendAlert = message => {
  let str = `
     <div class="mask">
           <div class="content">
                <p>${message} </p>
                <button class="close">关闭</button>
           </div>
      </div> 
     `
  $("body").append(str);
  $('.close').on("click", (e) => {
    $('.mask').remove();
  })
}

let getData = (url) => {
  return new Promise(
    (resolve, reject) => {
      $.ajax({
        url,
        type: "get",
        success: (res) => {
          resolve(res);
        },
        error: (error) => {
          reject(error);
        }
      })
    }
  )
}

$("#loginId").on("click", async (e) => {
  let useraccount = $("#account").val();
  let userpassword = $("#password").val();
  let res = await getData("./data/login.json");

  if (useraccount == res.useraccount && userpassword == res.userpassword) {
    console.log("登录成功")
    $(".layout").eq(1).removeClass("hide");
    $(".layout").eq(0).addClass("hide");
  } else {
    rendAlert("密码错误");
  }
})

$('#orderId').on("click", (e) => {
  getData("./data/order.json").then(data => {
    if (data.code == 200) {
      rendAlert(data.message);
      console.log("创建订单成功");
      $(".layout").eq(1).addClass("hide");
      $(".layout").eq(2).removeClass("hide");
    }
  }).catch(err => {
    console.log(err);
  })
})

$("#payId").on("click", (e) => {
   getData('./data/pay.json').then(data => {
     if(data.code == 200) {
       console.log("支付成功");
       rendAlert(data.message);
     }
   }).catch(err => {
     console.log(err.status);
   })
})
