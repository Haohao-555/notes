export class Tools extends Element {
    constructor(props) {
        super();
        this.props = props;
     }
     render() {
        return <div class="module">
                   <style src="./views/tools/index.css"/>
                   <div class="ip-base">
                       <div class="body">
                           <div class="tool-item">
                               <div class="title">{@"安全助手"}</div>
                               <div class="tool-container">
                                    <div class="opeartion">
                                        <img src="./static/img/com-1.png"/>
                                         <div class="name">{@"权限管理"}</div>
                                    </div>
                                    <div class="opeartion">
                                         <img src="./static/img/com-3.png"/>
                                         <div class="name">{@"软件中心"}</div>
                                    </div>
                                    <div class="opeartion">
                                         <img src="./static/img/com-2.png"/>
                                         <div class="name">{@"文件扫描"}</div>
                                    </div>
                                    <div class="opeartion">
                                         <img src="./static/img/com-4.png"/>
                                         <div class="name">{@"文件内容识别"}</div>
                                    </div>
                                    <div class="opeartion">
                                         <img src="./static/img/com-9.png"/>
                                         <div class="name">{@"权限管理"}</div>
                                    </div>
                                    <div class="opeartion">
                                         <img src="./static/img/com-5.png"/>
                                         <div class="name">{@"权限管理"}</div>
                                    </div>
                                    <div class="opeartion">
                                         <img src="./static/img/com-6.png"/>
                                         <div class="name">{@"权限管理"}</div>
                                    </div>
                               </div>
                           </div>
                           <div class="tool-item">
                               <div class="title">{@"系统检测"}</div>
                               <div class="tool-container">
                                    <div class="opeartion">
                                        <img src="./static/img/com-5.png"/>
                                         <div class="name">{@"权限管理"}</div>
                                    </div>
                                    <div class="opeartion">
                                         <img src="./static/img/com-6.png"/>
                                         <div class="name">{@"权限管理"}</div>
                                    </div>
                                    <div class="opeartion">
                                         <img src="./static/img/com-7.png"/>
                                         <div class="name">{@"权限管理"}</div>
                                    </div>
                                    <div class="opeartion">
                                         <img src="./static/img/com-8.png"/>
                                         <div class="name">{@"权限管理"}</div>
                                    </div>
                               </div>
                           </div>
                           <div class="tool-item">
                               <div class="title">{@"数据助手"}</div>
                               <div class="tool-container">
                                    <div class="opeartion">
                                        <img src="./static/img/com-5.png"/>
                                         <div class="name">{@"权限管理"}</div>
                                    </div>
                                    <div class="opeartion">
                                         <img src="./static/img/com-5.png"/>
                                         <div class="name">{@"权限管理"}</div>
                                    </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>;
    }
}