let window;
export class Tools { 
    options = {
        w: 240, // 宽度
        space: 10, // 间隔
        toolsList: [], // 通知信息列表
    }
    init({w = 240, space = 10} = {}) {
        this.options.w = w;
        this.options.space = space; 
        this.createTools();
    }
    createTools() {
        window = new Window({
            url: __DIR__ + "./index.htm",
            state: Window.WINDOW_SHOWN,
            parameters: this.options
        })
    }
    refresh() {
        
    }
    add(message) {
        this.options.toolsList.push(message);
        window.document.$("#tools").componentUpdate(this.options)
    }
}