import { Aside } from "../../components/aside/index";
import { Search } from "../../components/search/index";
import { UpdatePw } from "../../components/updatePw/index";
import { Fast } from "../../components/fast/index";
import { Set } from "../../components/set/index";
import { Theme } from "../../components/theme/index";

import { Computer } from "../computer/index";
import { Exam } from "../exam/index";
import { Private } from "../private/index";
import { Tools } from "../tools/index";
import { FileScan } from "../fileScan/index";

export class App extends Element {
    hanleList = Window.this.myapp.hanleList;
    aside = Window.this.myapp.aside;
    asideId = Window.this.myapp.asideId;
    initView = Window.this.myapp.initView;
    
    routes = {
        "Computer": <Computer/>,
        "FileScan": <FileScan/>,
        "Exam": <Exam/>,
        "Private": <Private/>,
        "Tools": <Tools/>
    }
    navigateto = (id) => {
        Window.this.myapp.asideId = id;
        let i = this.aside.findIndex(item =>item.id == id);
        if (this.initView != this.aside[i].route) {
            let route = this.aside[i].route;

            Window.this.myapp.initView = route;
            this.initView = route;
            
            document.$(".container").animate(()=> {
                document.$(".container").content(this.loadComponents());
            }, {
                effect:"slide-right", 
                ease:"cubic-out",
                duration:600
            });
        }
    }
    constructor(props) {
        super();
        this.props = props;
    }
    render(flag) {
        return <div class="wrapper" id="app">
                <style src={"./theme/"+ this.props.themeId +".css"} />
                <Aside aside={this.aside} asideId={this.asideId} navigateto={this.navigateto.bind(this)} logout={this.props.logout.bind(this)} updatePw={this.showModule.bind(this)}/>
                    <div class="appMain">
                        <Search 
                           set={this.showModule.bind(this)}
                           theme={this.showModule.bind(this)}
                           help={this.help.bind(this)}/>
                        <div class="container">
                            {this.loadComponents()}
                        </div>
                    </div>
                    {this.maskRender(flag)}
                    <div class="help-mask none">
                        <div class="mask-box"></div>
                    </div>
                </div>;      
    }
    // 组件加载
    loadComponents() {
        if(this.initView == "Computer") {
            return <Computer showModule={this.showModule.bind(this)} hanleList={this.hanleList} key={Math.random()}/>;
        }
        return this.routes[this.initView];
    }
    // 修改主题（确定按钮事件）
    changeTheme(theme) {
        // 关闭弹窗
        document.$(".mask").classList.add("none");
        // 执行 Main 中修改事件
        this.props.changeTheme(theme);
    }
    // 快捷操作（确定按钮事件）
    confrim(list) {
        let update = this.hanleList.slice(0);
        let filter = update.map(item=> {
            for (let i = 0; i < list.length; i++) {
                if (list[i] == item.id) {
                    item.state = 1;
                    return item;
                }
            }
            item.state = 0;
            return item;
        });

        document.$(".mask").classList.add("none");
        Window.this.myapp.hanleList = filter;
        this.updateHandleList(filter);
        this.post(()=> this.patch(this.render()));
    }
    // 自定义快捷操作（确定按钮事件）
    defined(item) {
       let data = this.hanleList.slice(0);
       data.push({
            id: this.hanleList.length + 1,
            url: item.url,
            state: 0,
            text: item.text
       });
       Window.this.myapp.hanleList = filter;
       this.updateHandleList(data);
       this.post(()=> this.patch(this.render(true)));
    }
    maskRender(flag) {
        if (flag == true) {
            return <div class="mask">
                      <Fast closeModule={this.closeModule.bind(this)} 
                        hanleList={this.hanleList} 
                        confrim={this.confrim.bind(this)}
                        defined={this.defined.bind(this)}
                        />
                   </div>;
        }
        return <div class="mask none"></div>;
    }
    // 打开弹窗
    showModule(type) {
        document.$(".mask").classList.remove("none");
        switch(type) {
            case 1:
                this.updatePw();
                break;
            case 2:
                this.set();
                break;
            case 3:
                this.theme();
                break;
            case 4:
                this.addHandle();
                break
        }
    }
    // 关闭弹窗
    closeModule() {
        document.$(".mask").classList.add("none");
    }
    // 加载弹框显示内容
    load(model, id) {
        document.$(".mask").content(model);
        // 添加弹窗移动
        // this.moveModule(id);
    }
    // 弹窗移动 (有bug)
    moveModule(id) {
        let head = document.querySelector("#"+id+" .header-title");
        let target = document.querySelector("#"+id);
        let mask = document.$(".mask");
        let flag = false;
    
        head.off("mousedown").off("mouseup");

        head.on("mousedown", function() {
            flag = true;
        });
        document.on("mouseup", function() {
            flag = false;
        });
        head.on("mousemove", function(e) {
            if (flag) {
                
                let x = e.clientX - mask.offsetLeft - target.offsetWidth / 2;
                let y = e.clientY;
                console.log(e.clientY)
                
                let maxX = mask.offsetWidth - target.offsetWidth;
                let maxY = mask.offsetHeight - target.offsetHeight;

                x = x < 0 ? 0 : x;
                y = y < 0 ? 0 : y;
                x = x > maxX ? maxX : x;
                y = y > maxY ? maxY : y;


                target.classList.remove("marginauto");
                target.style.left = x + "px";
                target.style.top = y + "px";
            }
        });
    }
    // 弹窗（设置）
    set() {
        let model = <Set closeSet={this.closeModule.bind(this)} id="set"/>;
        this.load(model, "set");
    }
    // 弹窗（主题）
    theme() {
        let model = <Theme 
                        id="theme"
                        closeTheme={this.closeModule.bind(this)} 
                        themeId={this.props.themeId} 
                        changeTheme={this.changeTheme.bind(this)}
                        />;
        this.load(model, "theme");
    }
    // 弹窗（帮助）
    help() {
    //   document.querySelector(".help-mask").classList.remove("none");  
    }
    // 弹窗（修改密码）   
    updatePw() {
       let model = <UpdatePw closeModule={this.closeModule.bind(this)} id="pw"/>;
       this.load(model, "pw");
    }
    // 弹窗（快捷操作）
    addHandle() {
        let model = <Fast closeModule={this.closeModule.bind(this)} 
                        hanleList={this.hanleList} 
                        confrim={this.confrim.bind(this)}
                        defined={this.defined.bind(this)}
                        id="fast"
                        />;
        this.load(model, "fast");
    }
    // 手动更新数据
    updateHandleList(target) {
        this.hanleList.splice(0);
        target.forEach(item => this.hanleList.push(item));
    }
}