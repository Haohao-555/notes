export class Login extends Element {
    watchPwF = true;
    keepPw = true;
    autoLog = true;
    constructor(props) {
       super();
       this.props = props;
    }
    watchPw() {
        let flag = this.watchPwF? false: true;
        this.componentUpdate({watchPwF: flag});
    }
    checkbox(i) {
        let flag;
        switch(i) {
            case 1:
                flag = this.keepPw ? false : true;
                this.componentUpdate({keepPw: flag})
                break;
            case 2:
                flag = this.autoLog ? false : true;
                this.componentUpdate({autoLog: flag})
                break;
        }
    }
    render() {
       return <div class="login-container">
                 <style src={"./theme/"+ this.props.themeId +".css"} />
                <div class="head-option">
                    <span class="close"></span>
                    <span class="lesson"></span>
                </div>  
                <div class="login-form" >
                    <div class="title-container" role="window-caption">
                      <img src="./static/img/login.c36abcc5.png" alt=""/> 
                      <h3 class="title">{@"文件加密系统"}</h3>  
                    </div>
                    <div class="form-item">
                        <span class="icon user"></span>
                        <input type="text"  placeholder="Username" value="admin"/>
                    </div>
                    <div class="form-item">
                        <span class="icon suo"></span>
                        <input type={this.watchPwF? 'password': 'text'}  placeholder="Password" value="111111"/>
                        <span class={this.watchPwF? 'bi': 'open'} onclick={()=>{this.watchPw()}}></span>
                    </div>
                    <button onclick={this.props.denglu}>{@"登录"}</button>
                    <div class="form-item">
                        <div class={this.keepPw ? 'item active': 'item'} onclick={()=>{this.checkbox(1)}}>
                            <div class="checkbox">
                                <i class="iconfont icon-checkboxchecked" style={this.keepPw ? 'display: block': 'display: none'}></i>
                            </div>
                            <span>{@"记住密码"}</span>
                        </div>    
                        <div class={this.autoLog ? 'item active' : 'item'} onclick={()=>{this.checkbox(2)}}>
                            <div class="checkbox" >
                                <i class="iconfont icon-checkboxchecked" style={this.autoLog ? 'display: block': 'display: none'}></i>
                            </div>
                            <span>{@"自动登录"}</span>
                        </div>    
                    </div>
                </div> 
              </div>;          
    }
    ["on click at span.close"](evt, span) {
        Window.this.close(true);
    }
    ["on click at span.lesson"](evt, span) {
        Window.this.state = Window.WINDOW_MINIMIZED;
    } 
}