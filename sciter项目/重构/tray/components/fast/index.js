// 快捷操作组件（我的电脑）
import { Defined } from "../defined/index";
export class Fast extends Element {
    pushList = [];
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        this.pushList = this.props.hanleList.map(item => {
            if (item.state == 1) return item.id;
        });
        return <div class="fast model-container marginauto">
                    <style src="./components/fast/index.css" />
                    <div class="header">
                        <div class="header-title">{@"配置快捷操作"}</div>
                        <span class="close" onclick={this.props.closeModule}></span>
                    </div>
                    <div class="body">
                        <div class="body-container">
                            <div class="operation-container">
                                <div class="title">{@"我的快捷操作"}</div>
                                <ul class="operation-wrapper aaa">
                                     {
                                        this.props.hanleList.map((item, i)=> {
                                            return <li class="item"  style={item.state == 1? 'display:block' : 'display:none'}>
                                                      <div class="img-box">
                                                         <img src={item.url}/>
                                                         <i onclick={()=> {this.del(item.id, i)}}>
                                                         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADuElEQVRYCa1Xu2qUQRSeP7ib6BuYWKSwMkXQENIoISKkEMVKEISATdBCQrAQYrTwGUIeQivBetuIjRYKAUs3VjYJpsjuZvzOmTlzn91syMLuzJw5t/nmXGaVsh+tWkc0begHC00jfSZkR+sTJmQcTAXXjlaTq7LQpEMvLPHICvXjJ4aIjSa0wCL0A+I8i5Fo8BWdMGA2TjU+UMejpUF6cpUZbi66jZCB/bZm3OlYNX4a1XP70DTX1qq9D20dYXCj+BCP7d/EQFj9Y86t105ALd/BXM9odeWqAQIes2P9vhlrwBDizWCg1KXLTtuEzHhz/YVZ9o6FTCi238fOeTQdFxj2ciY4mH60mp2iU+XMXitZTOXgBgtGFzlcCSvcY0XmBgILb946yJwSGwDhHdu9QwKBri+3PhiwIhJiwQD7kJ8uqhMSeB5alMvDmPHBsD1G4MGDR8bi1nYs0OsZeuztrgtHHAXBpWcyhKuE1nSjjv9k2xSAcPWw5C5ou5lAiWCzjLA5siAjLefaJd6IRkFSsSx4IMhmpyIhWRAGI4RFCY3zIsfZAgKiahwA1TfxBBnNSbEkGjmbF265pZuEGc/E7l8eYD1CvBh5EkxpbBCw2bm337kQ5poqwuVI3MkVUKStP3dKOA/KwgCzvV9WQEqs5WGJBO+PygoCt4uY+Hzo5Aps0rBlYgwz0zYdjxu6Eha7nmDqrxMWS1aJXr4bBpPvFaGCs89NbbRdk4Kpd+CCZuSk6Tbq5BqxcSibvG5Nj5QzDF9EuMifYhIcCRFb6AVFLQHRFhgCOgr5QHEErKUTL2TOYZBsW6OFbhbUXrnhs43QVXbG1WQxrFT/65ilJcBr1LTpovUvhrXcd39uuRRJY9W1URaTfdLdO6DKHW2Y+6rAe3vZFRaNLA1ffVkcUPMNMzlJvITfNCj3zKvd5co954CrK1TdyJjI0DwoXlwJyNmsdKSHNKWk4xSJwtK4+arsSGo4da6ky9O4GKL1pp4NWT9dy07LJx7PsKBH5bzyuCo5VYBaruV8TpiG5P4LVJEoGNZ4/WlCo7R3djSopdI/hCFVDo08PCWfdGNTIPRjyZHsERBdLaqlfW3Zyld/mr/c0PrDR63XnnmDpSsiGkU+GR6egrCVVEb7zL/I8ltzFjb88zAqxVSdcB149jWfL74iUhnW9/EP8XtUBWsLgwg/dutXU7sGT4cs6fAnTu1lCKQMsjYB82tFqdOHoN0ASnhAaPuIaKiH0IvkJ94Yn5S63mnUD/NPXxRUxv/RpVl/6r+dHQAAAABJRU5ErkJggg==" />
                                                         </i>
                                                      </div>
                                                      <span>{item.text}</span>
                                                   </li>
                                        })
                                    }
                                    <li class="item">
                                        <div class="wait-to-add">+</div>
                                        <span>{@"待添加"}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="operation-container">
                                <div class="title">{@"全部快捷操作端口"}</div>
                                <ul class="operation-wrapper bbb">
                                     {
                                        this.props.hanleList.map((item, i)=> {
                                            return <li class="item"  style={item.state == 0? 'display:block' : 'display:none'} onclick={()=>{this.addHandle(item.id, i)}}>
                                                      <div class="img-box">
                                                         <img src={item.url}/>
                                                      </div>
                                                      <div class="add-img">
                                                          <img src="data:image/png;base64,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" />
                                                      </div>
                                                      <span>{item.text}</span>
                                                   </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer fast-footer">
                        <div class="text iconfont icon-bianji" onclick={()=>{this.showdefined()}}>
                            <span>{@"添加自定义快捷操作"}</span>
                        </div>
                        <div>
                            <button class="primate" onclick={()=> {this.confirm()}}>{@"确定"}</button> 
                            <button class="btn" onclick={()=>{this.props.closeModule()}}>{@"取消"}</button> 
                        </div>
                    </div>
                    <div class="definedMask defined-none">
                        <Defined 
                            closeDefined={this.closeDefined.bind(this)} 
                            confirm={this.queding.bind(this)}
                            class="defined"
                        />
                    </div>
                </div>;
    }
    // 关闭自定义菜单
    closeDefined() {
        document.querySelector(".definedMask").classList.add("defined-none");
    }
    // 删除
    del(id, i) {
       let index = this.pushList.findIndex(item => item == id);
       this.pushList.splice(index, 1);
       document.$(".bbb li:nth-child("+(i+1)+")").style.display = "block";
       document.$(".aaa li:nth-child("+(i+1)+")").style.display = "none";
    }
    // 添加
    addHandle(id, i) {
        this.pushList.push(id);  
        document.$(".aaa li:nth-child("+(i+1)+")").style.display = "block";
        document.$(".bbb li:nth-child("+(i+1)+")").style.display = "none";
    }
    // 确定（配置快捷操作）
    confirm() {
        this.props.confrim(this.pushList);
    }
    // 自定义快捷操作
    showdefined() {
       document.querySelector(".definedMask").classList.remove("defined-none");
    }
    // 确定（自定义快捷操作）
    queding(item) { 
       this.props.defined(item);
       document.querySelector(".defined").classList.add("defined-none");
    }
}