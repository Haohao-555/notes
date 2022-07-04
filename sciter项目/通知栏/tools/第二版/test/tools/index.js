// 屏幕高度
let windowH;
// 屏幕宽度
let windowW;
// 当前通知的高度 
let currentPos = 0;
// 当前定时器状态
let timerClose = false;
let timerId = null;
// 当前定时器待关闭通知ID
let toolsItemIdClose = 1;
// 数据标识
let RandomId = 1;
export class Tools {
    options = {
        w: 346, // 宽度
        space: 10, // 间隔
        el: "#tools", // DOM 元素
        clickCallback: () => { }, // 点击回调函数
        toolsList: [] // 通知列表
    }
    // 初始化
    init({ w = 346, space = 10, el = "#tools", clickCallback } = {}) {
        // 范围控制
        w = w <= 346 ? 346 : w;
        w = w >= 400 ? 400 : w;

        // 赋值
        this.options.w = w;
        this.options.el = el;
        this.options.space = space;
        this.options.clickCallback = clickCallback;

        // 创建渲染区域
        this.createTools();
    }
    // 创建渲染区域
    createTools() {
        let tools = document.$(this.options.el);
        [windowW, windowH] = Window.this.screenBox('workarea', 'dimension');
        // 样式
        Object.assign(tools.style, {
            height: windowH + "px",
            width: this.options.w + "px",
            background: "transparent",
            position: "relative"
        });
        // 移动
        tools.takeOff({
            x: windowW - this.options.w - 10,
            y: 0,
            relativeTo: "screen",
            window: "detached"
        });
    }
    // 增加通知
    add(message) {
        let itemH = message.itemH;

        // 范围控制
        itemH = itemH <= 116 ? 116 : itemH;
        itemH = itemH >= 180 ? 180 : itemH;
        message.itemH = itemH;

        // 生成唯一标识
        message.id = RandomId++;
        this.options.toolsList.push(message);

        this.renderItem(message);
        this.addEvent(message.id);

        if (!timerClose) {
            toolsItemIdClose = RandomId - 1;
            this.startCloseTimer();
        }
    }
    // 渲染
    renderItem(item) {
        let toolItem = document.createElement("div");
        let dom = `<div class="tools-item" id="item-${item.id}" style="${this.setItemStyle(item)}">
                        <span class="tools-close iconfont icon-guanbi"></span>
                        <div class="tools-left">
                           <img src="${this.getImgsrc(item)}" style="${this.setImgStyle(item)}" class="tools-img"/>
                        </div>
                        <div class="tools-right">
                            <div class="tools-right-container">
                                <div class="tools-title">${item.title}</div>
                                <div class="tools-content" style="${this.setContentStyle(item)}">${this.getContent(item)}</div>
                            </div>
                        </div>
                   </div>`;
        toolItem.innerHTML = dom;
        document.$(this.options.el).appendChild(toolItem);
    }
    // 增加事件
    addEvent(id) {
        let toolsItem = document.$(`#item-${id}`);
        // 进入事件
        let enter = false;
        // 关闭事件
        let close = false;

        // 关闭事件
        toolsItem.children[0].on("click", (e) => {
            close = true;
            this.closeToolsItem(id);
            e.stopPropagation();
        });

        // 进入事件
        toolsItem.on("mouseenter", (e) => {
            // 判断该通知是否已经启动定时器
            if (id == toolsItemIdClose) {
                this.stopCloseTimer();

                // 下一个通知
                let nextId = this.next(toolsItemIdClose);
                if (nextId != -1) { // 存在通知
                    toolsItemIdClose = nextId;
                    this.startCloseTimer();
                }
                enter = true;
            }
        });

        // 离开事件
        toolsItem.on("mouseleave", (e) => {
            // 触发进入事件，并且关闭事件未触发
            if (enter && !close) {

                timerId && clearTimeout(timerId);
                timerClose = false;

                toolsItemIdClose = id;
                this.startCloseTimer();

                enter = false;
            }
        });

        // 点击事件
        toolsItem.on("click", (e) => {
            let i = this.options.toolsList.findIndex(item => item.id == id);
            if (this.options.clickCallback) this.options.clickCallback(this.options.toolsList[i]);
        });
    }
    // 启动定时关闭通知
    startCloseTimer() {
        if (!timerClose) {
            timerClose = true;
            timerId = setTimeout(() => {
                timerClose = false;
                // 下一个通知
                let nextId = this.next(toolsItemIdClose);
                // 关闭操作
                this.closeToolsItem(toolsItemIdClose);
                if (nextId != -1) { // 存在通知
                    toolsItemIdClose = nextId;
                    this.startCloseTimer();
                }
            }, 5000);
        }
    }
    // 关闭定时关闭通知
    stopCloseTimer() {
        timerId && clearTimeout(timerId);
        timerClose = false;
    }
    // 隐藏关闭 dom
    closeToolsItem(id) {
        let toolsItem = document.$(`#item-${id}`);
        Object.assign(toolsItem.style, {
            left: this.options.w + "px"
        });
        let len = this.options.toolsList.length - 1;
        let i = this.options.toolsList.findIndex(item => item.id == id);
        let delH = this.options.toolsList[i].itemH;

        // 删除数据
        this.options.toolsList.splice(i, 1);

        if (i != len) {
            this.updateItemPos(id, delH);
        } else {
            currentPos = 0;
        }
    }
    // 更新位置
    updateItemPos(id, delH) {
        setTimeout(() => {
            this.options.toolsList.forEach((item) => {
                if (item.id > id) {
                    let itemDom = document.$(`#item-${item.id}`);
                    let currentBottom = ("" + itemDom.style.bottom).split("px")[0];
                    let newCurrentBottom = currentBottom - (this.options.space + delH)
                    Object.assign(itemDom.style, {
                        bottom: newCurrentBottom
                    });
                }
            })
            currentPos -= (delH + this.options.space);
        }, 310)
    }
    // 下一条通知
    next(id) {
        let len = this.options.toolsList.length - 1;
        let i = this.options.toolsList.findIndex(item => item.id == id);

        if (i + 1 <= len) {
            return this.options.toolsList[i + 1].id;
        }
        return -1;
    }
    // --------------- 样式设置 ---------------
    setItemStyle(item) {
        let style = `bottom: ${this.setPosition(item)}; 
                     width: ${this.options.w}px;
                     height: ${item.itemH}px;`;
        return style;
    }
    setImgStyle(item) {
        let imgH = 35;
        let style = `margin-top: ${(item.itemH - imgH) / 3};
                     width: ${imgH}px;`;
        return style;
    }
    setContentStyle(item) {
        return `height: ${item.itemH - 54}px`;
    }
    setPosition(item) {
        let pos = this.options.space + currentPos;
        currentPos += item.itemH + this.options.space;
        return pos + "px";
    }
    getImgsrc(item) {
        return `./tools/icon/${item.type ? item.type : 'success'}.png`;
    }
    getContent(item) {
        let str = "";
        let len = item.content.split('\n').length;
        let arr = item.content.split('\n').splice(0, len >= 3 ? 3 : len);
        arr.forEach(item => str += `<div class="tools-row">${item}</div>`);
        if (len >= 4) str += "...";
        return str;
    }
}