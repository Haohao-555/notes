export class Computer extends Element {
    // info = Window.this.mycomputer.info;
    info = {
        name: "Teclink iMac",
        mac: "8C-85-90-80-AB-F1(192.168.3.86)",
        ip: "127.0.0.1",
        val: "4.61.0101.0",
        md: "透明加密授权",
        mes: "已授权",
        pc: "已授权",
        time: "2021-09-01 00:00:00  "
    }
    constructor(props) {
       super();
       this.props = props;
    }
    render() {
        return <div class="module">
                  <style src="./views/computer/index.css"/>
                  <div class="content ip-base">
                    <div class="title">{@"基础信息"}</div>
                    <div class="body">
                            <img src="./static/img/mac.490c5a51.png"/>
                            <ul class="pc-info">
                                <li>
                                    <span>{@"计算机名称"}</span>
                                    <span>{this.info.name}</span>
                                </li>
                                <li>
                                    <span>{@"IP/MAC"}</span>
                                    <span>{this.info.mac}</span>
                                </li>
                                <li>
                                    <span>{@"服务器IP地址"}</span>
                                    <span>{this.info.ip}</span>
                                </li>
                                <li>
                                    <span>{@"版本"}</span>
                                    <span>{this.info.val}</span>
                                </li>
                                <li>
                                    <span>{@"加密授权"}</span>
                                    <span>{this.info.md}</span>
                                </li>
                                <li>
                                    <span>{@"敏感信息识别授权"}</span>
                                    <span>{this.info.mes}</span>
                                </li>
                                <li>
                                    <span>{@"安全桌面授权"}</span>
                                    <span>{this.info.pc}</span>
                                </li>
                                <li>
                                    <span>{@"最后策略更新时间"}</span>
                                    <span>
                                        {this.info.time}
                                        <i class="iconfont icon-shuaxin" onmouseenter={()=>{this.changeFlag(1, 1)}} onmouseleave={()=> {this.changeFlag(0, 1)}}></i>
                                        <div class='tool none'>{@"手动更新策略"}</div>
                                    </span>
                                    
                                </li>
                            </ul>
                    </div>
                  </div>
                  <div class="content">
                     <div class="title">
                         {@"快捷操作"}
                         <i class="iconfont icon-shezhi1" onmouseenter={()=>{this.changeFlag(1, 2)}} onmouseleave={()=> {this.changeFlag(0, 2)}} onclick={()=>{this.props.showModule(4)}}></i>
                         <div class='tool none'>{@"配置"}</div>
                     </div>
                     <div class="body">
                         {this.props.hanleList.map((item, i) => {
                                 return <div class={item.state == 0? 'item none' : 'item'}>
                                             <img src={item.url}/>
                                             <div class="des">{item.text}</div>
                                        </div>
                         })}
                     </div>
                  </div>
               </div>;
    }
    changeFlag(flag, i) {
        let f = flag == 1 ? true : false;
        let select;
        switch(i) {
            case 1:
                select = ".pc-info .tool";
                break;
            case 2:
                select = ".title .tool";
                break;
        }
        if (f) document.$(select).classList.remove("none");
        if (!f) document.$(select).classList.add("none");
    }   
}