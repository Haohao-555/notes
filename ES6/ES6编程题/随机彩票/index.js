const redLength = 6;

// 生成随机数
let randomNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

let render = data => {
    let str = "";
    data.forEach(e => {
        str += `<li>${e}</li>`
    });
    document.querySelector("ul").innerHTML = str;
}

document.querySelector(".button").onclick = function () {
     // 存放号码（排除掉重复的数值）
     let set = new Set();

     // 生成蓝色号码
     let blueNum = randomNum(16, 1);

     // 生成红色号码
     while(set.size != redLength) {
        set.add(randomNum(33, 1));
     }

     let arr = Array.from(set);
     arr.push(blueNum);

     render(arr)
}
