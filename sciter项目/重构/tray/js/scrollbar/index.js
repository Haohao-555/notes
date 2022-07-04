// 滚动条组件
import { throttle } from "../../js/throttle/index";
export class Scrollbar {
    // 滚动条选项
    options = {
        total: 0, //  数据总条数
        pos: 0, // 当前滚动位置
        itemSize: 0, // 每条数据高度
        size: 0, // 控件大小
        isthrottle: false, // 是否节流滚动
        isshowbar: false
    }
    // 修改轨道高度
    Refresh(_this) {
        let MaxH = 2000000; // 极限高度
        let h = [];
        if (!_this.created) return;
        _this.bar.style.height = _this.options.size;
        let height = _this.options.itemSize * _this.options.total;
        if (height > MaxH) {
            // 分摊高度
            while (height > MaxH) {
                let a = height - MaxH;
                h.push(MaxH);
                height = a;
            }
            if (height != 0) h.push(height);
            // 设置高度
            h.forEach((item, i) =>  _this.content.children[i].style.height = item);
        } else {
            _this.content.children[0].style.height = height;
        }
        _this.isshowbar = _this.options.total > _this.getPageItems();
    }
    // 设置选项
    setOption(options) {
        for (let attr in options) {
            this.options[attr] = options[attr];
        }
        this.Refresh(this);
    }
    // 获取滑块位置
    getPos() {
        return Math.ceil(this.bar.scrollTop / this.options.itemSize);
    }
    // 设置滑块位置
    setPos(val) {
        this.options.pos = val;
    }
    // 计算可视化展示条数
    getPageItems() {
        return Math.floor((this.options.size) / this.options.itemSize)
    }
    // 创建滚动条
    createAt(dom) {
        let _this = this;
        let bar = document.createElement("div");
        let content = document.createElement("div");

        bar.classList.add("scroll-wrapper");
        content.classList.add("scroll-content");

        bar.style.width = "18px";
        bar.style.overflowX = "hidden";
        bar.style.overflowY = "scroll-indicator";
        bar.style.verticalScrollbar = "v-vertical-indicator";
        content.style.backgroundColor = "transparent";
        
        for (let j = 0; j < 10; j++) {
            let span = document.createElement("span");
            span.style.display = "block";
            content.appendChild(span);
        }
        bar.append(content);

        let scrollEvent = () => {
            let pos = _this.getPos();
            _this.options.pos = pos;
            _this.onscroll(pos);
        };
        
        if (this.options.isthrottle) {
            bar.addEventListener("scroll", throttle(scrollEvent, 600, {trailing: true, leading: true}))
        } else {
            bar.addEventListener("scroll", scrollEvent);
        }
       
        this.bar = bar;
        this.content = content;

        dom.clear();
        dom.append(this.bar);
        this.created = true;

        this.Refresh(_this);
    }
}