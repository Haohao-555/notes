// 主题组件 （我的电脑）
export class Theme extends Element {
    data =  [
        {
            text: @"蓝色",
            themeId: "blueTheme",
            bgc: "rgb(0, 75, 147)",
            bgch: "rgb(0, 131, 255)"
        },
        {
            text: @"绿色",
            themeId: "greenTheme",
            bgc: "rgb(2, 106, 56)",
            bgch: "rgb(48, 133, 95)" 
        },
        {
            text: @"粉色",
            themeId: "pinkTheme",
            bgc: "rgb(231, 106, 141)",
            bgch: "rgb(219, 121, 149)"
        },
        {
            text: @"紫色",
            themeId: "purpleTheme",
            bgc: "rgb(171, 106, 231)",
            bgch: "rgb(148, 82, 211)"
        }
    ]
    themeIndex;
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        return <div class="themeModel model-container marginauto">
                   <style src="./components/theme/index.css" /> 
                   <div class="header">
                        <div class="header-title">{@"更换主题"}</div>
                        <span class="close" onclick={this.props.closeTheme}></span>
                    </div>
                    <div class="body themeModel-body">
                        {this.data.map((item, i) => {
                                return <div class="item" onclick={()=> {this.change(i)}}>
                                            <div class="theme-label">{item.text}</div>
                                            <div class="change-theme-container">
                                                <div class="sidebar" style={"background-color:" + item.bgc}>
                                                    <div class="hover" style={"background-color:" + item.bgch}></div>
                                                </div>
                                                <div class="panel">
                                                    <div class="top">
                                                        <div class="circle" style={"background-color:" + item.bgch}></div>
                                                        <div class="rect">
                                                            <div class="rect-item" style={"background-color:" + item.bgch}></div>
                                                            <div class="rect-item" style={"background-color:" + item.bgch}></div>
                                                        </div>
                                                    </div>
                                                    <div class="rect-item" style={"background-color:" + item.bgch}></div>
                                                    <div class="rect-item" style={"background-color:" + item.bgch}></div>
                                                    <div class="rect-item" style={"background-color:" + item.bgch}></div>
                                                </div>
                                                <img style={this.props.themeId == item.themeId ? 'display: block': 'display:none'} src="data:image/png;base64,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" />
                                            </div>
                                       </div>})}
                    </div>
                    <div class="footer">
                        <button class="primate" onclick={()=> {this.comfirm()}}>{@"确定"}</button> 
                        <button class="btn" onclick={this.props.closeTheme}>{@"取消"}</button> 
                    </div>
               </div>;
    }
    // 修改主题
    change(i) {
        let el = document.$(".themeModel-body").children;
        for (let item of el) {
            item.lastElementChild.lastElementChild.style.display = "none";
        }
        document.$(".themeModel-body .item:nth-child("+(i+1)+") img").style.display="block";
        this.themeIndex = i;
    }
    // 确定事件
    comfirm() {
       let theme = this.data[this.themeIndex].themeId;
       this.props.changeTheme(theme);
    } 
}