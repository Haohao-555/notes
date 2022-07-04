// 修改密码组件（侧栏）
export class UpdatePw extends Element {
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        return <div class="pw model-container marginauto">
                 <style src="./components/updatePw/index.css" />
                 <div class="header">
                     <div class="header-title">{@"修改密码"}</div>
                     <span class="close" onclick={this.props.closeModule}></span>
                 </div>
                 <div class="body">
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
                 </div>
                 <div class="footer">
                    <button class="primate">{@"确定"}</button> 
                    <button class="btn" onclick={this.props.closeModule}>{@"取消"}</button> 
                 </div>
               </div>;
    }
}