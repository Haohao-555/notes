import { Stable } from "../../components/table/scantable/index";
import { fs } from "../../js/scan/index";
let scanflag = false;
let timerID = null;
// 扫描参数
let scanParam = Window.this.filescan.scanParam;
// 扫描范围
const scanArea = Window.this.filescan.scanArea;
// 文件类型
const fType = Window.this.filescan.fType;
// 安全区域
const safeareaList = Window.this.filescan.safeareaList
// 安全等级
const safelevellist = Window.this.filescan.safelevellist;
// 表格头部信息
const tableTitle = Window.this.filescan.tableTitle;

let tableData = Window.this.filescan.scanData;

const tableWidth = "900px";
let tdIndex = -1;
let sortFlag = -1;
export class FileScan extends Element {
    constructor(props) {
        super();
        this.props = props;
    }
    // 组件销毁
    componentWillUnmount() {
        if (scanflag) {
            fs.callFunc("stopscan", {}, (res) => {
                if (res.error == 0) scanflag = false; 
            })
        }
        this.stopScan();

        this.updateData({
            i: -1,
            flag: -1,
            tableData: [],
        });
    }
    componentDidMount() {
        if (tableData.length != 0) {
            this
        }
    }
    render() {
        return <div class="module">
                    <style src="./views/fileScan/index.css" />
                    <div class="content">
                        <div class="title-container">
                            <div class="title">{@"扫描文件"}</div>
                            <div class="btn" onclick={() => { this.scan() }}>{@"开始扫描"}</div>
                        </div>
                        <div class="body">
                            <div class="filescan-panel">
                                <div class="scan-item" >
                                    <div class="area">
                                        <span class="text">{@"扫描范围"}:</span>
                                        <div class="select">
                                            <button class="input" onfocus={() => { this.select(1, true) }} onblur={() => { this.select(1, false) }}>
                                                <span>{scanArea[scanParam.pathIndex].area}</span>
                                            </button>
                                            <button class="open" onclick={() => { this.openDir() }}>...</button>
                                            <button class="icon" onfocus={() => { this.select(1, true) }} onblur={() => { this.select(1, false) }}>
                                                <i class='iconfont icon-sanjiaoxing' />
                                            </button>
                                            <ul class="scan-area" style='display:none'>
                                                {scanArea.map((item, i) => {
                                                        return <li class={scanParam.pathIndex == i ? 'active' : ''} text={item.area} onclick={() => { this.scanAreaEvent(i) }}>{item.area}</li>
                                                    })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div class={scanParam.subDir ? 'check active' : 'check'} onclick={() => { this.checkbox(1) }}>
                                        <div class="checkbox">
                                            <i class="iconfont icon-checkboxchecked" style={scanParam.subDir ? 'display: block' : 'display: none'} />
                                        </div>
                                        <span>{@"搜索子文件夹"}</span>
                                    </div>
                                </div>
                                <div class="scan-item">
                                    <div class="file">
                                        <span class="text">{@"文件类型"}:</span>
                                        <div class="type">
                                            <button class="input" onfocus={() => {this.select(2, true) }} onblur={() => {this.select(2, false) }}>
                                                <span>{fType[scanParam.fTypeIndex].text}</span>
                                            </button>
                                            <i class='iconfont icon-sanjiaoxing' />
                                            <ul class="type-list" style='display: none'>
                                                {fType.map((item, i) => {
                                                    return <li class={scanParam.fTypeIndex == i ? 'active' : ''} text={item.text} onclick={() => {this.fTypeEvent(i) }}>{item.text}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div class={scanParam.encry ? 'check active' : 'check'} onclick={() => {this.checkbox(2) }}>
                                        <div class="checkbox" >
                                            <i class="iconfont icon-checkboxchecked" style={scanParam.encry ? 'display: block' : 'display: none'} />
                                        </div>
                                        <span>{@"仅搜索加密文件"}</span>
                                    </div>
                                </div>
                                <div class="scan-item">
                                    <div class="option">
                                        <span class="text">{@"安全区域"}:</span>
                                        <div class="safe">
                                            <button class="input" onfocus={() => {this.select(3, true)}} onblur={() => {this.select(3, false)}}>{@"全部"}</button>
                                            <i class="iconfont icon-sanjiaoxing"></i>
                                            <ul class="safe-list" style={'display: none'}>
                                                {safeareaList.map((item, i) => {
                                                    return <li class="active">{item}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="option">
                                        <span class="text">{@"安全等级"}:</span>
                                        <div class="safe">
                                            <button class="input" onfocus={() => { this.select(4, true) }} onblur={() => { this.select(4, false) }}>{@"全部"}</button>
                                            <i class='iconfont icon-sanjiaoxing' />
                                            <ul class="safe-list" style='display:none'>
                                                {safelevellist.map((item, i) => {
                                                    return <li class='active'>{item}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="scan-mask" style="display: none;"></div>
                            </div>
                            <div class="message">
                                <span class="text">{@"扫描准备就绪，请点击「开始扫描」"}</span>
                                <span class="number"></span>
                                <span class="fileText"></span>
                            </div>
                            <div class="table-wrapper">
                                <Stable tableTitle={tableTitle}
                                    tableData={tableData}
                                    minWidth={tableWidth}
                                    sort={this.sort.bind(this)}
                                    stopScan={this.stopScan.bind(this)}
                                    startScan={this.startScan.bind(this)} />
                            </div>
                        </div>
                    </div>
              </div>;
    }
    // 初始化环境
    init() {
        this.stopScan();
        tableData = [];
        tdIndex = -1;
        sortFlag = -1;
        // 初始表格环境
        document.$("#table").init();
        // 样式修改
        this.styleChange({
            btnText: @"停止扫描",
            maskDisplay: "block"
        });
    }
    // 更新数据
    updateData(data, type = "update") {
        document.$("#table").componentUpdate(data, type);
    }
    // 扫描文件 
    scan() {
        if (!scanflag) { // 开启扫描
            console.log("----------------------------开启扫描----------------------------");
            // 初始化环境
            this.init();
            // 获取参数
            let param = this.getScanParm();
            // 开始扫描
            fs.callFunc("startscan", param, (res) => {
                if (res.error == 0) {
                    scanflag = true;
                    // + "0" +"个文件。"
                    this.styleChange({
                        messageText: @"扫描中：扫描到有",
                        number: @" 0 ",
                        fileText: @"个文件。",
                        btnText: @"停止扫描",
                        maskDisplay: "block",
                    });
                    this.startScan();
                }
            });
        } else { // 停止扫描
            fs.callFunc("stopscan", {}, (res) => {
                if (res.error == 0) {
                    scanflag = false;
                    this.stopScan();
                    this.styleChange({
                        messageText: @"扫描结束：扫描到有",
                        number: ` ${tableData.length} `,
                        fileText: @"个文件。",
                        btnText: @"重新扫描",
                        maskDisplay: "none"
                    });
                }
            })
        }
    }
    // 获取文件信息
    getFile() {
        fs.callFunc("getscanState", {}, (res) => {
            if (res.error == 0) {
                if (res.list.length != 0 && scanflag) {
                    let formatedata = res.list.map((item, i) => {
                        item.id = i + 1 + tableData.length;
                        return item;
                    })
                    tableData = tableData.concat(formatedata);
                    if (res.list.length > 0) {
                        this.styleChange({
                            messageText: @"扫描中：扫描到有",
                            number: ` ${tableData.length} `,
                            fileText: @"个文件。",
                            btnText: @"停止扫描",
                            maskDisplay: "block"
                        });
                        this.updateData({
                            tableData,
                            flag: sortFlag,
                            i: tdIndex,
                            noDataFlag: false,
                        });
                    }
                }
                // 扫描结束
                if (!res.next) {
                    this.stopScan();
                    this.styleChange({
                        number: ` ${tableData.length} `,
                        fileText: @"个文件。",
                        messageText: @"扫描结束：扫描到有",
                        btnText: @"重新扫描",
                        maskDisplay: "none",
                    });
                    console.log("前端扫描结束", tableData);
                }
            }
        });
    }
    // 选中目录
    openDir() {
        let p = decodeURI(Window.this.selectFolder());
        if (p) {
            p = p.split("file://")[1];
            let index = scanArea.findIndex(item => item.area[0] == p);
            if (index == -1) {
                let id = scanArea.length;
                scanArea.push({
                    id,
                    area: p,
                    path: [p]
                });
                Window.this.filescan.scanArea = scanArea.slice(0);
                let li = document.createElement("li");
                li.setAttribute("text", p);
                li.innerText = p;
                li.onclick = () => this.scanAreaEvent(id);
                document.$(".scan-item:nth-child(1) .area .select .scan-area").appendChild(li);
                this.scanAreaEvent(id);
                scanParam.pathIndex = id;
            } else {
                this.scanAreaEvent(index);
            }
        }
    }
    // 扫描参数处理
    getScanParm() {
        let path = scanArea[scanParam.pathIndex].path;
        path = path.map(item => {
            if (!item.endsWith("/")) return item += "/";
            return item;
        });
        let param = {
            // 是否搜索子文件夹
            checksub: scanParam.subDir,
            // 是否仅搜索加密文件
            encry: scanParam.encry,
            // 文件类型
            fType: fType[scanParam.fTypeIndex].filter,
            path
        };
        Window.this.filescan.scanParam = {
            subDir: scanParam.subDir,
            encry: scanParam.encry,
            fTypeIndex: scanParam.fTypeIndex,
            pathIndex: scanParam.pathIndex,
        }
        return param;
    }
    // 排序
    sort(name, i, flag) {
        let index = 0;
        if (name !== "state" || name !== "des") {
            // 清空
            this.updateData({
                tableData: [],
                i: -1,
                flag: -1,
                load: scanflag
            });
            // 排序
            if (name == "path" || name == "name") { // 字符串排序
                tableData.sort((a, b) => {
                    if (flag == 1) return a[name].localeCompare(b[name]);
                    if (flag == 2) return b[name].localeCompare(a[name]);
                });
            } else {
                tableData.sort((a, b) => { // 数值排序
                    if (flag == 1) return a[name] - b[name];
                    if (flag == 2) return b[name] - a[name];
                })
            }
            tableData = tableData.map((item => {
                item.id = ++index;
                return item;
            }))

            sortFlag = flag == 1 ? 2 : 1;
            tdIndex = i;
            // 更新
            if (tableData.length != 0) {
                document.$("#table").init("sort");
                this.updateData({
                    tableData,
                    flag: sortFlag,
                    i: tdIndex,
                }, "sort");
            }
        }
    }
    // 下拉框样式修改
    select(i, flag) {
        let sec = 150;
        switch (i) {
            case 1:
                let input = document.$(".select .input");
                let icon = document.$(".select .icon");
                let i = document.$(".select .icon i");
                let scanArea = document.$(".select .scan-area");
                if (flag) {
                    input.style.borderColor = "var(--primaryColor)";
                    icon.style.borderColor = "var(--primaryColor)";
                    scanArea.style.display = "block";
                    i.classList.add("active");
                } else {
                    setTimeout(() => {
                        input.style.borderColor = "";
                        icon.style.borderColor = "";
                        scanArea.style.display = "none";
                        i.classList.remove("active");
                    }, sec);
                }
                break;
            case 2:
                let type = document.$(".file .type");
                let type_i = document.$(".file .type i");
                let type_list = document.$(".file .type-list");
                if (flag) {
                    type.style.borderColor = "var(--primaryColor)";
                    type_i.classList.add("active");
                    type_list.style.display = "block";
                } else {
                    setTimeout(() => {
                        type.style.borderColor = "";
                        type_i.classList.remove("active");
                        type_list.style.display = "none";
                    }, sec);

                }
                break;
            case 3:
                let first_safe = document.$(".option:first-child .safe");
                let first_i = document.$(".option:first-child .safe i");
                let first_safeList = document.$(".option:first-child .safe .safe-list");
                if (flag) {
                    first_safe.style.borderColor = "var(--primaryColor)";
                    first_i.classList.add("active");
                    first_safeList.style.display = "block";
                } else {
                    setTimeout(() => {
                        first_safe.style.borderColor = "";
                        first_i.classList.remove("active");
                        first_safeList.style.display = "none";
                    }, sec);
                }
                break;
            case 4:
                let two_safe = document.$(".option:nth-child(2) .safe");
                let two_i = document.$(".option:nth-child(2) .safe i");
                let two_safeList = document.$(".option:nth-child(2) .safe .safe-list");
                if (flag) {
                    two_safe.style.borderColor = "var(--primaryColor)";
                    two_i.classList.add("active");
                    two_safeList.style.display = "block";
                } else {
                    setTimeout(() => {
                        two_safe.style.borderColor = "";
                        two_i.classList.remove("active");
                        two_safeList.style.display = "none";
                    }, sec);
                }
                break;
        }
    }
    // 单选框样式
    checkbox(i) {
        let flag
        switch (i) {
            case 1:
                flag = scanParam.subDir ? false : true;
                let sub_check = document.$(".scan-item:nth-child(1) .check");
                let sub_box = document.$(".scan-item:nth-child(1) .check .checkbox i");
                if (flag) {
                    sub_check.classList.add("active");
                    sub_box.style.display = "block";
                    scanParam.subDir = true;
                } else {
                    sub_check.classList.remove("active");
                    sub_box.style.display = "none";
                    scanParam.subDir = false;
                }
                break;
            case 2:
                flag = scanParam.encry ? false : true;
                let enc_check = document.$(".scan-item:nth-child(2) .check");
                let enc_box = document.$(".scan-item:nth-child(2) .check .checkbox i");
                if (flag) {
                    enc_check.classList.add("active");
                    enc_box.style.display = "block";
                    scanParam.encry = true;
                } else {
                    enc_check.classList.remove("active");
                    enc_box.style.display = "none";
                    scanParam.encry = false;
                }
                break;
        }
    }
    // 扫描过程样式修改
    styleChange({ messageText = @"扫描准备就绪，请点击「开始扫描」", btnText = @"停止扫描", maskDisplay = "none", number="", fileText=""}) {
        document.$(".content .body .message .text").innerHTML = messageText;
        document.$(".content .body .message .number").innerHTML = number;
        document.$(".content .body .message .fileText").innerHTML = fileText;
        document.$(".title-container .btn").innerHTML = btnText;
        document.$(".filescan-panel .scan-mask").style.display = maskDisplay;
    }
    // 扫描范围下拉框事件
    scanAreaEvent(i) {
        let li = document.$(".scan-item:nth-child(1) .area .select .scan-area");
        let input = document.$(".scan-item:nth-child(1) .area .select .input span");

        let el = li.children.item(i);
        input.innerText = el.getAttribute("text");

        for (let item of li.children) {
            item.classList.remove("active");
        }
        el.classList.add("active");
        scanParam.pathIndex = i;
    }
    // 文件类型下拉框事件
    fTypeEvent(i) {
        let li = document.$(".scan-item:nth-child(2) .file .type .type-list");
        let input = document.$(".scan-item:nth-child(2) .file .type .input span");

        let el = li.children.item(i);
        input.innerText = el.getAttribute("text");

        for (let item of li.children) {
            item.classList.remove("active");
        }
        el.classList.add("active");
        scanParam.fTypeIndex = i;
    }
    stopScan() {
        timerID && clearInterval(timerID);
    }
    startScan() {
        timerID = setInterval(() => {
            this.getFile();
        }, 1500);
    }
}