// 搜索组件（我的电脑）
export class Search extends Element {
    constructor(props) {
        super();
        this.props = props;
    }
    componentDidMount() {
      let lang = Window.this.myConfig.langs;
      document.$("." + lang).style.color = "var(--activeColor)";
    }
    render() {
        return <div class="searchHead" >
                    <div class="search">
                       <i class="searchIcon icon-sousuo iconfont"></i>
                       <input type="text" placeholder={@"请输入内容"} onfocus={this.inpfocus} onblur={this.inpblur}/> 
                    </div>
                    <div class="caption"  role="window-caption"></div>
                    <div class="option">
                        <div class="item guo">
                           <button class="guo-btn iconfont icon-guojihua" onfocus={this.btnfocus} onblur={this.btnblur}></button>
                           <ul class="langs-list">
                              <li id="langs" text="zh" class="zh">{@"中文"}</li>
                              <li id="langs" text="en" class="en">{@"英文"}</li>
                           </ul>
                        </div>
                        <div class="item set" onclick={()=>{this.props.set(2)}}>
                           <i class="iconfont icon-shezhi"></i>
                           <div class="tool prompt">{@"选择设置"}</div>
                        </div>
                        <div class="item theme" onclick={()=>{this.props.theme(3)}}>
                           <i class="iconfont icon-zhuti-04"></i>
                           <div class="tool the">{@"主题设置"}</div>
                        </div>
                        <div class="item help" onclick={()=>{this.props.help()}}>
                           <i class="iconfont icon-bangzhu"></i>
                           <div class="tool hel">{@"帮助"}</div>
                        </div>
                     </div>
                </div>;
    }
    inpfocus() {
      this.classList.add("focus");
    }
    inpblur() {
      this.classList.remove("focus");
    }
    btnfocus() {
      document.$(".langs-list").style.display = "block";
    }
    btnblur() {
      setTimeout(() => {
         document.$(".langs-list").style.display = "none";
      }, 1000)
    }
    changeLangs(type) {
      console.log(type);
    }
}