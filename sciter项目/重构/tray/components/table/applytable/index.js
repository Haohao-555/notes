// 表格组件（审批申请页面）
import { TableTh } from "../tableTh/index";
import { Scrollbar } from "../../../js/scrollbar/index";
let tableData;
let tableTitle;

let index = -1;
let sortFlag = -1;
let minWidth;

let pageNum;
let scrbar = null;

let MaxHeight = 607;
let MinHeight = 352;

let currentHeight;
let changeSizeId;
export class Atable extends Element {
    constructor(props) {
        super();
        this.props = props;
        minWidth = props.minWidth;
        tableData = props.tableData;
        tableTitle = props.tableTitle;
    }
    componentDidMount() {
        let size = this.getScrollSize();
        this.setScroll(tableData.length, 27, size);
        this.showData(tableData, pageNum, 0);
        let view = Window.this;
        // 监听屏幕最大化和最小化
        view.on("stateChange", () => {
            if (document.$("#app").initView == "Private") {
                if (view.state == Window.WINDOW_MAXIMIZED) size = MaxHeight;
                else size = MinHeight;

                currentHeight = size;

                this.setScroll(tableData.length, 27, size); 
                this.showData(tableData, pageNum, 0);
            }
           
        });    
    }
    componentUpdate(data) {
       document.$("#tableTh").componentUpdate(data);
       tableData = data.tableData.slice(0);
       let size = this.getScrollSize();
       this.setScroll(tableData.length, 27, size);
       this.showData(tableData, pageNum, 0);
    }
    render() {
        return  <div id="table">
                   <style src="./components/table/applytable/index.css"/>
                   <div class="table-wrapper">
                        <div class="table-container">
                            <table style={"min-width:" + minWidth}>
                                <TableTh index={index} sortFlag={sortFlag} tableTitle={tableTitle} tableData={tableData} sort={this.props.sort}/>
                                <tbody></tbody>
                            </table>
                        </div>
                        <div class="scroll-y"></div>
                   </div>
                </div>;
    }
    getScrollSize() {
        let size = Window.this.state == Window.WINDOW_MAXIMIZED ? MaxHeight : MinHeight;
        currentHeight = size;
        return size;
    }
    setScroll(total, itemSize, size) {
        scrbar = new Scrollbar();
        scrbar.setOption({ total, itemSize, size });

        let divScroll = document.$(".scroll-y");
        divScroll.clear();

        scrbar.createAt(divScroll);

        pageNum = scrbar.getPageItems();
        scrbar.onscroll = (pos) => {
           this.showData(tableData, pageNum, pos);
        }
    }
    showData(data, num, pos) {
        num = data.length <= num ? data.length : num;
        let tbody = document.querySelector("table tbody");
        tbody.clear();
        let content = this.renderDom(data, num, pos);
        tbody.append(content);
    }
    renderDom(data, num, pos) {
        let content = "";
        for (let i = 0; i < num; i++) {
            let item = data[i + pos];
            content += `<tr>`;
            for (let j = 0; j < tableTitle.length; j++) {
                let name = tableTitle[j];
                content += `<td><span>${item[name.dataId]}</span></td>`
            }
            content += `</tr>`;
        }
        return content;
    }
    init() {
      index = -1;
      sortFlag = -1;
      scrbar = null;
      document.$("#tableTh").componentUpdate({
          index,
          sortFlag,
          tableData: []
      }) 
    }
}