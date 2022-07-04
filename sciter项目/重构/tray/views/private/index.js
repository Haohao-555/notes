import { Atable } from "../../components/table/applytable/index";
// 完整表格数据
let tableData;

// 生成随机数据中数据项格式
const typeList = ["使用设备", "解密申请", "发送邮件"];
const stateList = ["全部", "待审批",  "待执行", "已完成"];
const filePath = ["/Users/teclink/test/O", "/Users/teclink/test/1", ""];

// 表格头部信息
const tableTitle = [
    {
        width: "60px",
        name: @"序号",
        dataId: "id",
        sortId: "id"
    },
    {
        width: "2*",
        name: @"时间" ,
        dataId: "time",
        sortId: "timeStamp"
    }, 
    {
        width: "80px",
        name: @"状态",
        dataId: "state",
        sortId: "state"
    },
    {
         width: "116px",
         name: @"申请类型",
         dataId: "type",
         sortId: "type"
    },
    {
        width: "116px",
        name: @"申请方式",
        dataId: "method",
        sortId: "method"
    },
    {
         width: "100px",
         name: @"审批人",
         dataId: "exam",
         sortId: "exam"
    },
    {
        width: "2*",
        name: @"文件路径",
        dataId: "filePath",
        sortId: "filePath"
    },
    {
         width: "95px",
         name: @"区域",
         dataId: "area",
         sortId: "area",
    }
];
const tableWidth = "800px";

const applyList= [
    {
        name: @"申请解密"
    },
    {
        name: @"申请外发"
    },
    {
        name: @"申请临时离线"
    },
    {
        name: @"申请使用设备"
    },
    {
        name: @"申请移动存储"
    },
    {
        name: @"申请打印"
    },
    {
        name: @"申请打印不带水印"
    },
    {
        name: @"申请聊天工具传送文件"
    },
    {
        name: @"申请复制到移动盘"
    },
    {
        name: @"申请复制到网络盘"
    },
    {
        name: @"申请刻录光盘"
    },
    {
        name: @"申请去除文档水印"
    }
];

const optionTypeList = [
    {
        name: @"全部"
    },
    {
        name: @"解密申请"
    },
    {
        name: @"使用设备"
    }, 
    {
        name: @"发送邮件"
    }
];
let typeIndex = 0;

export class Private extends Element {
    // 展示在页面表格数据
    showTable;
    // 状态数目
    pend;
    fished;
    per;
    constructor(props) {
        super();
        this.props = props;
        this.showTable = this.randomTableData();  
    }
    render() {
        return <div class="module">
                 <style src="./views/private/index.css"/>
                 <div class="content">
                    <ul class="privete-head">
                        <li class='active' onclick={()=>{this.changeState(0)}}>{@"全部"}</li>
                        <li onclick={()=>{this.changeState(1)}}>{@"待审批"}({this.pend})</li>
                        <li onclick={()=>{this.changeState(2)}}>{@"待执行"}({this.per})</li>
                        <li onclick={()=>{this.changeState(3)}}>{@"已完成"}({this.fished})</li>
                        <li>
                            <button onfocus={()=>{this.createApply(true)}} onblur={()=>{this.createApply(false)}} class="icon-jia iconfont">
                                <span>{@"创建申请"}</span>
                            </button> 
                            <div class='option none'>
                                {applyList.map((item, i)=><div class="option-item" onclick={() => this.applyOption(i)}>
                                                                    <span>{item.name}</span>
                                                                    <i class="iconfont icon-sanjiaoxing"></i> 
                                                                </div>)}      
                            </div> 
                        </li>
                    </ul>
                    <div class="apply-panel">
                        <div class="form-item" >
                            <span class="label ">{@"申请类型"}:</span>
                            <button class='select' onfocus={()=>{this.selectTypeFlag(true)}} onblur={()=>{this.selectTypeFlag(false)}}>
                                <span>{optionTypeList[typeIndex].name}</span>
                                <i class='iconfont icon-sanjiaoxing'/>
                            </button>
                            <div class='type-option none'>
                                {optionTypeList.map((item, i) => {
                                    return  <div 
                                            class={typeIndex == i? 'type-item active':'type-item'} 
                                            onclick={()=> {this.selectedtypeValue(i)}}>
                                                {item.name}
                                            </div>
                                })}
                            </div>
                        </div>
                        <div class="btn-group">
                            <button class="primary" onclick={()=> {this.search()}}>{@"查询"}</button>
                            <button class="btn">{@"查看详情"}</button>
                            <button class="btn">{@"取消申请"}</button>
                        </div>
                    </div>
                    <div class="table-wrapper">
                        <Atable 
                           tableTitle={tableTitle} 
                           tableData={this.showTable} 
                           minWidth={tableWidth} 
                           sort={this.sort.bind(this)}
                        />
                    </div>
                 </div>
              </div>;
    }
    // 生成数据
    randomTableData() {
        let data = [];
        for(let i = 0; i < 20; i++) {
            data.push({
                id: i+1,
                time: this.formatTime(),
                state: stateList[this.randomNum(1, 3)],
                type: typeList[this.randomNum(0, 2)], 
                timeStamp: new Date().getTime(),
                method: "流程审批",
                exam: "admin",
                filePath: filePath[this.randomNum(0, 2)],
                area: this.randomNum(0, 1) == 1 ? "公共" : "",
            });
        }
        // 备份数据
        tableData = data.slice(0);
        // 待审批
        this.pend = this.stateSum(stateList[1]);
        // 待执行
        this.per = this.stateSum(stateList[2]);
        // 已完成
        this.fished = this.stateSum(stateList[3]);
        return data;
    }
    // 排序
    sort(name, i, j) {
        let flag = j == 1 ? true: false;
        // 排序
        let data;
        let sortData = this.showTable.slice(0);
        if (name != "timeStamp") {
            data = sortData.sort((a, b) => {
               if (flag) return a[name].localeCompare(b[name]);
               if (!flag) return b[name].localeCompare(a[name]);
            });
        }else {
                data = sortData.sort((a, b) => {
                    if (flag) return a[name] - b[name];
                    if (!flag) return b[name] - a[name];
                });
        }
        data = data.map((item, i) => {
            item.id = i + 1;
            return item;
        })
        document.$("#table").componentUpdate({
            tableData: data,
            sortFlag: j == 1 ? 2 : 1,
            index: i,
        });
    }
    // 状态
    changeState(i) {
        let li = document.$(".privete-head").children;
        for (let i = 0; i < li.length; i++) {
            if (i != 4) li[i].classList.remove("active");
        }
        document.$(`.privete-head li:nth-child(${i+1})`).classList.add("active");
        let filterData;
        if (i != 0) filterData = tableData.filter(item => item.state == stateList[i]); 
        if (i == 0) filterData = tableData;

        filterData = filterData.map((item, i) => {
            item.id = (i + 1);
            return item;
        });
        this.showTable = filterData.slice(0);
        document.$("#table").componentUpdate({
            tableData: this.showTable,
            sortFlag: -1,
            index: -1
        });
    }
    // 查询
    search() {
        let filterData;
        let option = [
            {
                name: "全部"
            },
            {
                name: "解密申请"
            },
            {
                name: "使用设备"
            }, 
            {
                name: "发送邮件"
            }
        ];
        if (typeIndex != 0) filterData = tableData.filter(item => item.type == option[typeIndex].name);
        if (typeIndex == 0) filterData = tableData;
        filterData = filterData.map((item, i) => {
            item.id = i + 1;
            return item;
        });
        this.showTable = filterData.slice(0);
        document.$("#table").componentUpdate({
            tableData: this.showTable,
            sortFlag: -1,
            index: -1,
        });
    }
    
    randomNum(min, max) {
        return parseInt(Math.random() * (max-min + 1) + min);
    }
    formatTime() {
        let mydate = new Date();
        let y = mydate.getFullYear();  
        let m = mydate.getMonth() + 1;      
        let d= mydate.getDate();      
        let h = mydate.getHours() + 1;      
        let min = mydate.getMinutes() + 1;    
        let s = mydate.getSeconds() + 1;

        y = y >= 10 ? y : "0"+ y;
        m = m >= 10 ? m : "0"+ m;
        d = d >= 10 ? d : "0"+ d;
        h = h >= 10 ? h : "0"+ h;
        min = min >= 10 ? min : "0"+ min;
        s = s >= 10 ? s : "0"+ s;

        return y + "-" + m + "-" + d + " " + h + ":" + min + ":" + s;
    }
    stateSum(state) {
        let i = 0;
        tableData.forEach(item => {
            if (item.state == state) i++;
        });
        return i;
    }
   
    
    // 创建申请
    createApply(flag) {
        setTimeout(()=> {
            let el = document.$(".privete-head li:last-child .option");
            if (flag) el.classList.remove("none"); 
            if (!flag) el.classList.add("none"); 
        },300);
    }
    applyOption(i) {
        console.log(i);
    }

    // 申请类型
    selectTypeFlag(flag) {
        let btn = document.$(".apply-panel .form-item .select");
        let icon = document.$(".apply-panel .form-item .select i");
        let option = document.$(".apply-panel .form-item .type-option");
        setTimeout(()=> {
            if (flag) {
                 btn.classList.add("active");
                 icon.classList.add("icon-active");
                 option.classList.remove("none");
            } else {
                btn.classList.remove("active");
                icon.classList.remove("icon-active");
                option.classList.add("none");
            }
        }, 300);
    }
    selectedtypeValue(i) {
        typeIndex = i;
        let span = document.$(".apply-panel .form-item .select span");
        let option = document.$(".apply-panel .form-item .type-option");
        for (let child of option.children) child.classList.remove("active");
        option.children[i].classList.add("active");
        span.innerHTML = optionTypeList[typeIndex].name;
    }
}