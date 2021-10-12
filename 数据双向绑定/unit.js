// 渲染函数
let render = (renderData) => {
    let ul = document.querySelector("ul");
    let str = "";
    renderData.forEach((e) => {
        str += `<li>${e.id} - ${e.name}</li>`;
    });
    ul.innerHTML = str;
};

// 数据绑定
let binding = (target, bindEl) => {
    return new Proxy(target, {
        get(target, prop) {
            return Reflect.get(target, prop);
        },
        set(target, prop, value) {
            // 判断设置的属性是否为绑定的属性
            if (Reflect.has(target, bindEl)) {
                // 渲染页面
                render(value);
            }
            // 更新数据
            Reflect.set(target, prop, value);
        },
    });
}

