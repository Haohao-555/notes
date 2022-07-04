// 设置组件（我的电脑）
export class Set extends Element {
    optionList = [
        { 
           list: [
               {
                   title: @"常规选项",
               },
               {
                    text: @"安全密码设置",
                    content: "321"
                },
                {
                    text: @"安全密码输入设置",
                    content: ""
                },
                {
                    text: @"账号设置",
                    content:  @"账号设置"
                },
                {
                    text: @"解密申请设置",
                    content:  @"解密申请设置"
                },
                {
                    text: @"数据保存设置",
                    content: @"数据保存设置"
                }
           ]  
        },
        {
          list: [
                {
                    title: @"加密功能选项",
                },
                {
                    text: @"加密功能选项",
                    content:  @"加密功能选项"  
                },
                {
                    text: @"用户密码输入设置",
                    content:  @"用户密码输入设置", 
                },
                {
                    text: @"加密功能启用设置",
                    content: @"加密功能启用设置",  
                },
                {
                    text: @"数据保存设置",
                    content: @"数据保存设置"
                },
                {
                    text: @"用户密码输入设置",
                    content: "用户密码输入设置"  
                },
                {
                    text: @"加密功能启用设置",
                    content: @"加密功能启用设置",  
                },
                {
                    text: @"数据保存设置",
                    content: @"数据保存设置"  
                },
                {
                    text: @"用户密码输入设置",
                    content: @"用户密码输入设置",  
                },
                {
                    text: @"加密功能启用设置",
                    content: @"加密功能启用设置"
                },
                {
                    text: @"数据保存设置",
                    content: @"数据保存设置"
                }
          ]
        }
    ];
    i = 0;
    j = 1;
    constructor(props) {
        super();
        this.props = props;
    }
    changeOption(a, b) {
        this.componentUpdate({
            i: a,
            j: b
        });   
    }
    render() {
        return <div class="setting model-container marginauto">
                   <style src="./components/set/index.css" />  
                   <div class="header">
                        <div class="header-title">选项设置</div>
                        <span class="close" onclick={this.props.closeSet}></span>
                    </div>
                    <div class="body set-body">
                         <div class="left">
                            <ul class="left-container">
                                    {this.optionList.map((item, i) => {
                                        return item.list.map((con, j)=> {
                                                    if (j == 0) {
                                                        return <li class="title">{con.title}</li>
                                                    }
                                                    return <li class={this.i==i && this.j==j ? 'option active': 'option'} onclick={()=>{this.changeOption(i, j)}}>
                                                                <i class="icon-sanjiaoxing1 iconfont"></i>
                                                                <span>{con.text}</span>
                                                            </li>
                                            })
                                    })}
                            </ul>
                         </div>
                         <div class="right">{this.renderRight()}</div>
                    </div>
                    <div class="footer">
                        <button class="primate">{@"确定"}</button> 
                        <button class="btn" onclick={this.props.closeSet}>{@"取消"}</button> 
                    </div>
               </div>;
    }
    renderRight() {
        let i = this.i;
        let j = this.j;
        if (i == 0 && j == 1) {
            // 安全密码设置
            return this.safePw();
        }else if (i == 0 && j == 2) {
            // 安全密码输入设置
            return this.safePwIn();
        }
        return <div class="right-container">{this.optionList[i].list[j].content}</div>;
    }
    // 组件：安全密码设置
    safePw() {
        return <div class="right-container">
                    <div class="item">
                        <label>{@"原密码"}</label>
                        <input type="password"/>
                    </div>
                    <div class="item">
                        <label>{@"新密码"}</label>
                        <input type="password"/>
                    </div>
                    <div class="item">
                        <label>{@"确认密码"}</label>
                        <input type="password"/>
                    </div>
               </div>;
    }
    // 组件：安全密码输入设置
    safePwIn() {
        return <div class="right-container">
                    <div class="item">
                        <label>{@"滚动测试"}</label>
                        <input type="password"/>
                    </div>
                    <div class="item">
                        <label>{@"新密码"}</label>
                        <input type="password"/>
                    </div>
                    <div class="item">
                        <label>{@"确认密码"}</label>
                        <input type="password"/>
                    </div>
                    <div class="item">
                        <label>{@"原密码"}</label>
                        <input type="password"/>
                    </div>
                    <div class="item">
                        <label>{@"新密码"}</label>
                        <input type="password"/>
                    </div>
                    <div class="item">
                        <label>{@"确认密码"}</label>
                        <input type="password"/>
                    </div>
                    <div class="item">
                        <label>{@"原密码"}</label>
                        <input type="password"/>
                    </div>
                    <div class="item">
                        <label>{@"新密码"}</label>
                        <input type="password"/>
                    </div>
                    <div class="item">
                        <label>{@"确认密码"}</label>
                        <input type="password"/>
                    </div>
            </div>;
    }
}