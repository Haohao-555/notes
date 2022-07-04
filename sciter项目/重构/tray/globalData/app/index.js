Window.this.myapp = {}

Window.this.myapp.handleList = [
    {
        id: 1,
        url: "./static/img/com-1.png",
        state: 1,
        text: @"权限管理"
    },
    {
        id: 2,
        url: "./static/img/com-2.png",
        state: 1,
        text: @"文件扫描"
    },
    {
        id: 3,
        url: "./static/img/com-3.png",
        state: 1,
        text: @"软件中心"
    },
    {
        id: 4,
        url: "./static/img/com-4.png",
        state: 1,
        text: @"文件内容识别"
    },
    {
        id: 5,
        url: "./static/img/com-5.png",
        state: 0,
        text: @"权限管理"
    },
    {
        id: 6,
        url: "./static/img/com-6.png",
        state: 0,
        text: @"权限管理"
    },
    {
        id: 7,
        url: "./static/img/com-7.png",
        state: 0,
        text: @"权限管理"
    },
    {
        id: 8,
        url: "./static/img/com-8.png",
        state: 0,
        text: @"权限管理"
    },
    {
        id: 9,
        url: "./static/img/com-9.png",
        state: 0,
        text: @"权限管理"
    }
]

Window.this.myapp.aside = [
    {
        id: 1,
        name: @"我的电脑",
        route: "Computer",
        icon: "icon-yibiaopan"
    },
    {
        id: 2,
        name: @"文件扫描",
        route: "FileScan" ,
        icon: "icon-gps-line"
    },
    {
        id: 3,
        name: @"审批管理",
        route: "Exam",
        icon: "icon-gps-line" 
    },
    {
        id: 4,
        name: @"我的申请",
        route: "Private",
        icon: "icon-gps-line"
    },
    {
        id: 5,
        name: @"更多工具",
        route: "Tools",
        icon: "icon-gps-line" 
    }
]
// 初始路由
Window.this.myapp.initView = "Computer";
// 路由下标
Window.this.myapp.asideId = 1;