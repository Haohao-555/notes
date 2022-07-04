Window.this.filescan = {}
// 扫描数据
Window.this.filescan.scanData = [];
// 扫描参数
Window.this.filescan.scanParam = {
   subDir: false,
   encry: false,
   pathIndex: 0,
   fTypeIndex: 0, 
}
// 扫描范围
Window.this.filescan.scanArea = [{
    id: 1,
    area: "C:/",
    path: ["C:/"]
}]

// 扫描类型
Window.this.filescan.fType = [
    {
        id: 1,
        text: @"全部",
        filter: ["*"]
    },
    {
        id: 2,
        text: @"Office文件(*.doc; *.docx; *.xls; *.xlsx; *.ppt; *.pptx)",
        filter: ["*.doc", "*.docx", "*.xls", "*.xlsx", "*.ppt", "*.pptx"]
    },
    {
        id: 3,
        text: @"图像文件(*.jpg; *.jpeg; *.jpe; *.bmp; *.gif; *.png; *.tif; *.tiff)",
        filter: ["*.jpg", "*.jpeg", "*.jpe", "*.bmp", "*.gif", "*.png", "*.tif", "*.tiff"]
    }
]
// 表格头部信息
Window.this.filescan.tableTitle = [
    {
        width: "80px",
        name: @"序号",
        dataId: "id",
        sortId: "id"
    },
    {
        width: "2*",
        name: @"文件名称",
        dataId: "name",
        sortId: "name"
    },
    {
        width: "3*",
        name: @"文件夹",
        dataId: "path",
        sortId: "path"
    },
    {
        width: "2*",
        name: @"修改时间",
        dataId: "formatime",
        sortId: "time"
    },
    {
        width: "131px",
        name: @"大小/kb",
        dataId: "formasize",
        sortId: "size"
    },
    {
        width: "110px",
        name: @"状态",
        dataId: "state",
        sortId: "state"
    },
    {
        width: "120px",
        name: @"描述",
        dataId: "des",
        sortId: "des"
    }
]
// 安全区域
Window.this.filescan.safeareaList = [@"全部"];

// 安全等级
Window.this.filescan.safelevellist = [@"全部"];


