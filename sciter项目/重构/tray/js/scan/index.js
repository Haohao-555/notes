// 入口文件
import { FileScan } from "./FileScan";
let fileScan = null;
let fs = {
    callFunc(type, data, callback) {
         if(type == "startscan") fileScan = new FileScan();
         fileScan[type](data, callback); 
    }
}
export {
    fs
}