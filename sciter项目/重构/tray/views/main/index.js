import { Login } from "../login/index";
import { App } from "../app/index";   

export class Main extends Element {
    themeId = Window.this.myConfig.theme;
    isLogin = Window.this.myConfig.loginState;
    isModule = false;
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        return <div class="main">
                  {this.isLogin ? 
                      <App  logout={this.logout.bind(this)} themeId={this.themeId} changeTheme={this.theme.bind(this)} key={Math.random()}/>
                      : <Login denglu={this.denglu.bind(this)} themeId={this.themeId} />
                    }  
               </div>;
    }
    componentDidMount() {
        if(this.isLogin) this.indexWin();
        if(!this.isLogin) this.loginWin();
    }
    // 登录
    denglu() {
        let username = document.querySelector("input[type=text]").value;
        let password = document.querySelector("input[type=password]").value;
        if (username.trim().length != 0 && password.trim().length != 0) {
            this.indexWin();
            this.componentUpdate({isLogin: true});
        }
    }
    // 退出登录
    logout() {
        this.loginWin();
        Window.this.myConfig.loginState = false;
        this.componentUpdate({isLogin: false});
    }
    // 修改主题色（确定按钮事件）
    theme(theme) {
       Window.this.myConfig.theme = theme;
       this.componentUpdate({themeId: theme});
    }
    // 登录窗口
    loginWin() {
        let view = Window.this;
        view.minSize = [377, 454];
        view.maxSize = [377, 454];
        let arr = view.screenBox('workarea', 'dimension');
        view.move((arr[0] - 454)/2, (arr[1] - 454) /2, 377, 454);
    }
    // 主页窗口
    indexWin() {
        let view = Window.this;    
        view.minSize = [891, 591];
        view.maxSize = ["100%", "100%"];
        let arr = view.screenBox('workarea', 'dimension');
        view.move((arr[0] - 891)/2, (arr[1] - 591) /2, 891, 591);
        // 监听屏幕最大化及最小化
        view.on("stateChange", ()=> {
            let state = Window.this.state;
            console.log("321");
            if (state == Window.WINDOW_MAXIMIZED) {
                document.body.classList.add("bodyPadding");
            } else {
                document.body.classList.remove("bodyPadding"); 
            }
        })    
    }
}  