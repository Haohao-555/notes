import * as sys from "@sys";
let currentP = "";
export class FileScan {
    constructor() {
        this.i = 0; // 当前扫描到第几层
        this.fileList = []; // 文件信息
        this.checksub = true; // 递归
        this.start = false; // 扫描状态
        this.scanDir = []; // 当前层待扫描目录
        this.nextDir = []; // 下一层待扫描目录
        this.fType = ["*"]; // 文件类型
        this.cache = []; // 暂存空间
        this.tools = null; // 提示
    }
    // 开始扫描
    startscan(scanparam, callback) {
        this._init();
        this.checksub = scanparam.checksub;
        this.scanDir = scanparam.path;
        this.fType = scanparam.fType;
        // 启动扫描
        this.start = true;
        this._scan();
        if (callback) callback({ error: 0 });
        // 控制台提示
        this.tools = setInterval(() => {
            console.log("缓存数:", this.fileList.length, "当前扫描路径:", currentP, "下一层待扫描路径", this.nextDir);
        }, 4000);
    }
    // 停止扫描
    stopscan(param, callback) {
        this.start = false;
        this.tools && clearInterval(this.tools);
        if (callback) callback({ error: 0 });
    }
    // 获取数据
    getscanState(param, callback) {
        let len = this.fileList.length;
        let num;
        // 控制返回数据条数
        if (this.start && len > 400) {
            if (len > 800) num = Math.floor(Math.random() * (320 - 299 + 1) + 299);
            else num = Math.floor(Math.random() * (400 - 200 + 1) + 200);
        } else {
            num = len;
        }
        // 取数据
        let pathList = this.fileList.splice(0, num);
        // 过滤数据
        let filterPathList = this._filerData(pathList);
        // 获取信息
        let list = this.getFileInfo(filterPathList);
        // 执行回调
        if (callback) callback({
            next: this.start,
            error: 0,
            list,
            currentP,
        });
    }
    // 扫描
    _scan() {
        if (this.start) {
            let task = this.scanDir.shift();
            this._nextLayer(task).then(res => {
                if (res.error == 0 && this.checksub) {
                    if (this.scanDir.length > 0) {
                        this._scan();
                    } else {
                        if (this.nextDir.length != 0) {
                            this.scanDir = this.nextDir.splice(0);
                            this._scan();
                        } else {
                            this.stopscan();
                        }
                    }
                } else {
                    this.stopscan()
                }
            });
        }
    }
    
    // 获取下一层目录 (过滤文件)
    async _nextLayer(parentPath) {
        try {
            currentP = parentPath;
            let dir = await sys.fs.readdir(parentPath);
            for await (let item of dir) {
                if (item.type == 2) {
                    this.nextDir.push(parentPath + item.name + "/");
                } else {
                    this.fileList.push({
                        name: item.name,
                        path: parentPath + item.name
                    });
                }
            }
        } catch(e) {
            console.log(e);
        }
        return { error: 0 }
    }

    // 过滤
    _filerData(list) {
        if (this.fType[0] == "*") { // 不进行过滤
            return list;
        } else {
            return list.filter(item => {
                if (sys.fs.match(item.name, ".*") || sys.fs.match(item.name, "~*")) return false;
                for (let f of this.fType) {
                    if (sys.fs.match(item.name, f)) return true;
                }
                return false;
            })
        }
    }
    // 获取文件信息
    getFileInfo(list) {
        return list.map(item => {
            let info = sys.fs.$stat(item.path);
            let { st_size = "", st_mtime = "" } = info || {};
            return {
                name: item.name,
                path: item.path,
                time: st_mtime ? st_mtime * 1000 : 0,
                formatime: st_mtime ? this._formatTime(st_mtime) : "",
                size: st_size ? parseInt(st_size + "") : 0,
                formasize: st_size ? Math.ceil(parseInt(st_size + "") / 1024) : "",
                des: "",
                state: "未加密"
            }
        })
    }
    // 格式化时间
    _formatTime(timeStamp) {
        timeStamp = timeStamp ? timeStamp * 1000 : "";
        if (timeStamp) {
            let mydate = new Date(timeStamp);

            let y = mydate.getFullYear();
            let m = mydate.getMonth() + 1;
            let d = mydate.getDate();
            let h = mydate.getHours();
            let min = mydate.getMinutes();
            let s = mydate.getSeconds();

            y = y >= 10 ? y : "0" + y;
            m = m >= 10 ? m : "0" + m;
            d = d >= 10 ? d : "0" + d;
            h = h >= 10 ? h : "0" + h;
            min = min >= 10 ? min : "0" + min;
            s = s >= 10 ? s : "0" + s;

            return y + "-" + m + "-" + d + " " + h + ":" + min + ":" + s;
        }
        return "";
    }
    // 初始化
    _init() {
        this.fileList = [];
        this.nextDir = [];
        this.promise = [];
        this.fType = ["*"];
        this.cache = [];
        this.i = 0;
    }
}