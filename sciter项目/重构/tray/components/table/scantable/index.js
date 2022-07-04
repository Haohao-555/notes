// 表格组件（文件扫描）
import { Scrollbar } from "../../../js/scrollbar/index";
import { TableTh } from "../tableTh/index";
import { throttle } from "../../../js/throttle/index";
let tableTitle = [];
let tableData = [];
let pageNum = 0;
let currentPos = 0;
let scrbar = null;
let firstRender = true;
let index = -1;
let sortFlag = -1;
let timerId = null;
let MaxHeight = 490;
let MinHeight = 217;
let currentH = MinHeight;

let a = 0;
export class Stable extends Element {
    constructor(props) {
        super();
        this.props = props;
        this.i = props.i;
        this.flag = props.flag;
        this.minWidth = props.minWidth;
        this.scanflag = props.scanflag;
        tableTitle = props.tableTitle;
        tableData = props.tableData;
    }
    componentUpdate(data, type) {
        tableData = data.tableData.slice(0);
        index = data.i;
        sortFlag = data.flag;
        if (firstRender) { // 首次渲染
            this.setScroll(tableData.length, 27);
            if (type == "update") {
                this.showData(tableData, pageNum, currentPos);
            } else {
                console.log("currentPos", currentPos)
                this.showData(tableData, pageNum, currentPos);
                let nowScrollTop = currentPos * 27;
                document.$(".scroll-wrapper").scrollTo(0, nowScrollTop);
            }
            if (tableData.length >= pageNum) firstRender = false;
        } else {
            scrbar.setOption({ total: tableData.length });
        }
        this.styleChange(false);
        document.$("#tableTh").componentUpdate({
            index,
            sortFlag,
            tableTitle,
            tableData
        })
    }
    componentDidMount() {
        tableData = [];
        let view = Window.this;
        // 最大化最小化
        view.on("stateChange", () => {
            if (document.$("#app").initView == "FileScan") {
                if (tableData.length != 0) {
                    scrbar.setOption({
                        size: this.getScrollSize()
                    });
                    pageNum = scrbar.getPageItems();
                    let pos = scrbar.getPos();
                    this.showData(tableData, pageNum, pos);
                }
            }
        });
        // 屏幕大小变化
        let sizeEvent = () => {
            let router = document.$("#app").initView;
            if (scrbar && router == "FileScan") {
                let newH = document.offsetHeight - 374;
                currentH = newH % 27 == 0 ? newH : (Math.floor(newH / 27)) * 27;
                scrbar.setOption({
                    size: currentH
                });
                pageNum = scrbar.getPageItems();
                let pos = scrbar.getPos();
                this.showData(tableData, pageNum, pos);
            }
        }
        view.on("size", throttle(sizeEvent, 600, { trailing: true, leading: true }))
        // 鼠标滚轮事件
        document.$("table").addEventListener("mousewheel", (e) => {
            if (scrbar && scrbar.isshowbar) {
                let prevScrollTop = document.$(".scroll-wrapper").scrollTop;
                let nowScrollTop;
                if (e.deltaY > 0) { // 下
                    nowScrollTop = (prevScrollTop + 1 * 27) < 0 ? 0 : (prevScrollTop + 1 * 27);
                } else { // 上
                    nowScrollTop = (prevScrollTop - 1 * 27);
                }
                document.$(".scroll-wrapper").scrollTo(0, nowScrollTop);
                let pos = scrbar.getPos();
                scrbar.setPos(pos);
                this.showData(tableData, pageNum, pos);
            }
        })
    }
    render() {
        return <div id="table">
                    {/* <div class="console">123</div> */}
                    <style src="./components/table/scantable/index.css" />
                    <div class="table-wrapper">
                        <div class="table-container">
                            <table style={"min-width:" + this.minWidth}>
                                <TableTh index={index} sortFlag={sortFlag} tableTitle={tableTitle} tableData={tableData} sort={this.props.sort} />
                                <tbody>
                                    <tr class="noDataMask">
                                        <td colspan={tableTitle.length}>{@"暂无数据"}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="scroll-x" onscroll={this.scrollX}>
                            <div style={"min-width:" + this.minWidth}></div>
                        </div>
                        <div class="scroll-y"></div>
                        <i class="thead-border-right"></i>
                        <i class="noData-border-right"></i>
                    </div>
                </div>;
    }
    init(type="update") {
        index = -1;
        sortFlag = -1;
        firstRender = true;
        scrbar = null;
        pageNum = 0;
        tableData = [];
        timerId = null;
        if (type == "update") currentPos = 0;
        this.styleChange(true);
        document.$("#tableTh").componentUpdate({
            index,
            sortFlag,
            tableTitle,
            tableData
        })
    }
    setScroll(total, itemSize) {
        scrbar = new Scrollbar();
        let size = currentH;
        scrbar.setOption({ total, itemSize, size, isthrottle: true });

        let divScroll = document.$(".scroll-y");
        divScroll.clear();

        scrbar.createAt(divScroll);

        pageNum = scrbar.getPageItems();
        scrbar.onscroll = (pos) => {
            currentPos = pos;
            ++a;
            this.props.stopScan();

            timerId && clearTimeout(timerId);

            this.showData(tableData, pageNum, pos);

            timerId = setTimeout(() => {
                console.log("执行频率为", a);
                a = 0;
                this.props.startScan();
            }, 2000);
        }
    }
    getScrollSize() {
        let state = Window.this.state;
        let domH = document.offsetHeight - 374;
        let size = state == Window.WINDOW_MAXIMIZED ? MaxHeight : domH;
        currentH = size;
        return size;
    }
    showData(data, num, pos) {
        num = data.length <= num ? data.length : num;
        let tbody = document.querySelector("table tbody");
        tbody.clear();
        let content = this.renderDom(data, num, pos);
        tbody.appendChild(content);
    }
    renderDom(data, num, pos) {
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < num; i++) {
            let item = data[i + pos];
            let tr = document.createElement("tr");
            let content = "";
            for (let j = 0; j < tableTitle.length; j++) {
                let name = tableTitle[j];
                content += `<td><span>${item[name.dataId]}</span></td>`
            }
            tr.innerHTML = content;
            fragment.appendChild(tr);
        }
        return fragment;
    }
    styleChange(enable = false) {
        if (enable) {
            let noData = `<tr class="noDataMask"><td colspan=${tableTitle.length}>暂无数据</td></tr>`
            document.querySelector("table tbody").clear();
            document.querySelector("table tbody").append(noData);
            document.$(".noData-border-right").style.display = "block";
            document.$(".thead-border-right").style.display = 'block';
        } else {
            document.$(".noData-border-right").style.display = 'none';
            document.$(".thead-border-right").style.display = 'none';
        }
    }
    scrollX() {
        document.$("table").style.left = (- this.scrollLeft + "px");
    }
}

