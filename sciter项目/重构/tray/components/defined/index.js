// 自定义组件（我的电脑页面）
export class Defined extends Element {
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        return <div class="defined model-container marginauto">
                    <style src="./components/defined/index.css" />
                    <div class="header">
                        <div class="header-title">{@"自定义快捷操作"}</div>
                        <span class="close" onclick={this.props.closeDefined}></span>
                    </div>
                    <div class="defined-body">
                        <div class="defined-item">
                            <label>{@"名称"}</label>
                            <input type="text" id="name"/>
                        </div>
                        <div class="defined-item">
                            <label>{@"链接"}</label>
                            <input type="text"/>
                        </div>
                        <div class="defined-item">
                            <label>{@"图标"}</label>
                            <div class='wait-icon' onclick={()=>{this.openFile()}}>
                                <span style={'display:block'}>+</span>
                                <img src="" style={'display:none'}/>
                            </div>
                            <span class="tols">{@"请选择40x40px的png图片"}</span> 
                        </div>
                    </div>
                    <div class="footer">
                    <button class="primate" onclick={()=> {this.confirm()}}>{@"确定"}</button> 
                    <button class="btn" onclick={this.props.closeDefined}>{@"取消"}</button> 
                    </div>
                </div>;
    }
    // 确定按钮事件
    confirm() {
        let name = document.querySelector("#name").value;
        let path = document.querySelector(".wait-icon img").getAttribute("src");
        this.props.confirm({
            url: path,
            state: 0,
            text: name
        });
    }
    // 打开系统文件目录
    openFile() {
        // 过滤文件
        const file_filter = "img file only(*.png)| *.png"
        let p = Window.this.selectFile {
             filter: file_filter,
             mode: "open",
             path: URL.toPath(__DIR__)
        };
        if (p) {
            document.querySelector(".wait-icon span").style.display = "none";
            document.querySelector(".wait-icon img").style.display = "block";
            document.querySelector(".wait-icon img").setAttribute("src", p);
        }
    }
}