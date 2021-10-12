/**
 * 控制对象的属性（读 / 写）
 */
function myObject(target, prop) {
    let obj = target;
    Object.defineProperty(obj, prop, {
        get() {
            if (prop == "message") {
                return undefined
            } else {
                return this.value
            }
        },
        set(v1) {
            if (prop == "password") {
                this.value = 123456;
            } else {
                this.value = v1;
            }
        }
    })
    return obj;
}

// 测试
// 数据集合
let model = {};
// 针对数据集合进行属性的控制
let o1 = myObject(model, "message");
o1.width = "100px";
o1.height = "200px";
console.log(o1); // { width: '100px', height: '200px' }
console.log(o1.width); // 100px
console.log(o1.message); // undefined

let model2 = {};
let o2 = myObject(model2, "password");
model2.password = "abcdefg";
console.log(model2.password); // 123456