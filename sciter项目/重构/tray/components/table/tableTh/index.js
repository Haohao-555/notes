let a = 0;
export class TableTh extends Element {
    index = -1;
    sortFlag = -1;
    tableTitle;
    tableData;
    constructor(props) {
        super();
        this.props = props;
        this.tableData = props.tableData;
        this.tableTitle = props.tableTitle;
    }
    render() {
        return <thead id="tableTh">
                <style src="./components/table/tableTh/index.css"/>
                <tr>
                    {this.props.tableTitle.map((item, i) => {
                        return <td style={'width:' + item.width} onclick={()=> this.sort(item.sortId, i)} flag={this.index == i ? this.sortFlag : 1}>
                                    <span>{item.name}</span>
                                    <div class="icon-group">
                                        <div class={this.index == i && this.sortFlag == 2 ? "icon iconfont icon-sanjiao2 active" : "icon iconfont icon-sanjiao2"} onclick={()=> {this.sortIcon(item.sortId, i, 1)}}></div>
                                        <div class={this.index == i && this.sortFlag == 1 ? "icon iconfont icon-sanjiao1 active" : "icon iconfont icon-sanjiao1"} onclick={()=> {this.sortIcon(item.sortId, i, 2)}}></div>
                                    </div>
                                </td>
                    })}
                </tr>
              </thead>;
    }
    componentUpdate(data) {
        Object.assign(this, data);
        this.post(() => this.patch(this.render()));
    }
    sort(dataId, i) {
        console.log("触发sort",this.tableData)
        if (i != 0 && this.tableData.length != 0) {
            console.log("触发sort")
            let el = document.$(`table thead tr td:nth-child(${i + 1})`);
            let flag = el.getAttribute("flag");
            if (a == 0) {
                this.props.sort(dataId, i, flag);
            } else {
                a = 0;
            }
        }      
    }
    sortIcon(dataId, i, flag) {
        console.log("this.tableData", this.tableData)
        if (i != 0 && this.tableData.length != 0) {
            console.log("触发sortIcon")
            this.props.sort(dataId, i, flag);
            a = 1;
        }
    } 
}