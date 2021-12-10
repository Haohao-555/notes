[官网]: https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html

### 一、TS优点

* 强类型匹配
* 开发编译时报错
* 极大程度的避免了低级错误
* 支持 Javascript 最新特性（包含ES6\7\8）

### 二、配置 TS 环境

* 全局安装：`npm install -g typescript`
* 编译TS文件：`tsc main.ts`
* 执行代码：`node main.js`

### 三、TS 类型

* `boolean`、`number`、`string`

```typescript
// number
function add(n1: number, n2: number) {
     return n1 + n2;
}
console.log(add(12, 12)); // 24
console.log(add("12", 12)); //报错

// boolean
// 手动映射类型
let isTrue: boolean = true;
// 自动映射类型
let isfalse = false
isfalse = "false"; // 报错

// string
let str: string = "字符串";
```

* `array`、`tuple`元组

```typescript
// array

// 数组存放指定类型
let list1: number[] = [1, 2, 3, 4]; 
let list2: Array<number> = [1, 2, 3, 4]; //泛型
let list3 = [1, 2, 3, 4];
let list4: string[] = ["1", "2", "3", "4"]; // 报错

// 数组存入任意类型
let list5 = [1, "字符串"]; // 只能存放 字符串 数值 (1)
let list6: any[] = [1, "str", true] // 存放任意类型

// tuple 元组 （特殊数组 固定长度，固定类型的数组） 可能有bug
let per1: [number, string] = [1, "字符串"]; // (2)
per1[0] = "字符串"; // 报错（类型不匹配）
per[1] = 1; //报错 （类型不匹配）
per[2] = true; //报错（超出元组长度）


// (1) 和 (2) 两者是不一样的
// 一个是数组（联合），一个是元组
```

* `union` 联合（高级类型）、`Literal`字面量类型（高级类型）

```typescript
// 什么是联合类型
// 一个变量可以存放多个类型

// 指定类型
let union1: string | number | string[];
union1 = "字符串";
union1 = 1;
union1 = ["1", "2"];
union1 = [1, 2, 3]; // 报错
union1 = true; // 报错

function add(n1: number | String, n2: number | String) {
   if(typeof n1 === "string" && typeof n1 === "string") {
        return n1.toString() + n2.toString();
   }else {
       return n1 + n2;
   }
}
console.log(add(1, 2)); // 3
console.log(add("hello", "TypeScript")); // helloTypeScript

// 指定值
let union2: 0 | 1 | 2 | 3; // 确认了类型及值
union2 = 0; 
union2 = 4; // 报错
union2 = "3"; // 报错

// Literal 字面量类型
let literal: 1 | "2" | true | [1, 2, 3, 4]
// 结合 联合类型 和 字面量类型
function add(n1: number | String, n2: number | String, resultType: "as-number" | "as-string") {
   if(resultType === "as-string") {
        return n1.toString() + n2.toString();
   }
   if(typeof n1 === "string" && typeof n1 === "string") {
        return n1.toString() + n2.toString();
   }else {
       return n1 + n2;
   }
}
console.log(add(1, 2, "as-number")); // 3
console.log(add(1, 2, "as-string")); // 12
console.log(add("hello", "TypeScript", "as-string")); // helloTypeScript
```

* `enum`枚举

```typescript
enum Color1 {
    red,
    green,
    blue,
}
let color = Color1.blue
console.log(color); // 2 （下标）

enum Color2 {
    red = 5,
    green,
    blue,
}
let color = Color2.blue
console.log(color); // 7 （下标）

enum Color1 {
    red = "5",
    green = 7,
    blue = "blue",
}
let color = Color3.blue
console.log(color); // blue 
console.log(Color3.green); // 7
```

* `any` 、unkonwn

```typescript
// any 任意数据类型 （跟 js 定义数据类型） 下面方法都不报错
let randomValue: any = 666;
randomValue = true;
randomValue = "str";
randomValue = {};
randomValue.toUpperCase();
randomValue()

// 设置成 unkonwn 时 unkonwn 不能保存类型，但可以保证类型安全
randomValue.toUpperCase(); // 报错
randomValue(); // 报错

// 进行修改后
if(typeof randomValue === "function") {
    randomValue(); // 不报错
}
if(typeof randomValue === "string") {
    randomValue.toUpperCase(); // 不报错
}
```

* `undefined`、`void`、`never`

```typescript
// void 没有返回值
function demo() : void {
    console.log("text");
}
console.log(demo()); // undefined

// undefined
function demo() : undefined {
    console.log("text");
    // 不添加 return 会报错
    return
}
console.log(demo()); // undefined

// never （一个函数永远执行不完的返回值）
function throwError(message: string, errorCode: number): never  {
    // 抛异常
    throw {
        message,
        errorCode
    }
    // 此时代码不可能执行到这里，返回值为 never
}
function whileLoop() never {
    while(true) {
        console.log("不断执行");
    }
}
throwError("not found", 404)
```

* `Generics` 泛型

```typescript
// 可以保证类型一致性
let list1: number[] = [1, 2, 3, 4]; 
let list2: Array<number> = [1, 2, 3, 4]; //泛型
// 取到 数组（类型未知） 的最后一项
let lastInArray = <T>(arr: Array<T>) => {
    return arr[arr.length - 1];
}
const l1 = lastInArray<number>([1, 2, 3, 4, 5]);
const l1 = lastInArray<string>(["1", "2", "3", "4", "5"]);

// 元组
let makeTuple = <T, Y>(x: T, y: Y) => [x, y];
const v1 = makeTuple(1, "one");
const v2 = makeTuple<boolean, number>(true, 1);
```

### 四、对象Object

```typescript
const person = {
    userName: "小明",
    age: 12
}
console.log(person.userName); // 小明;
console.log(person.nickName); // 在 TS 中会报错， 在 JS 中不会报错
person.userName = 12; // 报错（类型不一致）

// 此时将 person 设置为 any 是就不会报错
const person : any = {
    userName: "小明",
    age: 12
}
console.log(person.nickName); // 不报错

// 设置对象存放的类型
const person: {
   userName: string,
   age: number  
} = {
   userName: "小明",
   age: 12  
}

// 使用 object 笼统定义变量时 
const person: object = {
   userName: "小明",
   age: 12  
}
console.log(person.userName); // 报错
// 等价于 
const person: {} = {
   userName: "小明",
   age: 12  
}
// 编辑器必不知道 person 内部的结构，知道是个对象
```

### 五、接口 Interface

```typescript
interface Point{
    x: number;
    y: number;
}
let drawPoint = (point: Point) => {
    console.log({x: point.x, y: point.y});
}
drawPoint({x: 102, y: 104});
drawPoint({x: "102", y: 104}); // 报错
drawPoint({x: "102", y: "104"}); // 报错
```

### 六、类 class

```typescript
interface IPoint{
    x: number;
    y: number;
    drawPoint: () => void;
    getDistances: (p: IPoint) => number;
}
class Point implements IPoint {
    x: number;
    y: number;
    constructor:(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    drawPoint = () => {
        console.log(this.x, this.y);
    }
    getDistances = (p: IPoint) => {
        console.log(Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2))
    }
}
const point = new Point(3, 4);
point.drawPoint()
```

### 七、访问修饰符  Access Modifier

```typescript
// public 公开（默认）
// private 私有
// protected 保护

// public
constructor:(public x: number, public y: number) {
    this.x = x;
    this.y = y;
}
const point = new Point(3, 4);
console.log(point.x); // 3

// private
constructor:(private x: number, private y: number) {
    this.x = x;
    this.y = y;
}
const point = new Point(3, 4);
console.log(point.x); // 报错  
// 只能在定义 class 中的方法通过 this.x 才能访问
// 由此可知： 在外部通过 point.x 修改变量时是无法修改的。
// 由此引申出 set， get 方法
class Point implements IPoint {
    // 方法一
    getX = () => {
        return this.x;
    }
    setX = (x: number) => {
        this.x = x;
    }
    
    // 方法二: 需要将代码编译成 es5 或 es6 以上  tsc -t es5 [文件名]
    get Y() {
        return this.y;
    }
    set Y (y: number) {
        this.y = y;
    }
    // 方法二：需要注意的地方：在接口 IPoint 中需要修改
    /*
       interface IPoint {
         // 方法一
         getx: () => number;
         setx: (value:number) => void;
         
         // 方法二：
         Y: number
       }
    */
}
// 方法一 
point.setX(12);
console.log(point.getX()); // 12
// 方法二 
point.Y = 12;
console.log(point.Y); // 12
```

注：类的成员（**属性或变量**）设置为`private`时，由于接口时公开的，故在接口中如果设置了成员（该成员在`class`中被设置为`private`）会报错。应该在接口中将不能公开的成员去掉。

### 八、模块 Module

```typescript
// 导出
export class Point implements IPoint {....}

// 导入
import { Point } from '文件路径' // 不用加后缀
```

### 九、函数类型

```typescript
let log = (message: string, code: number) {
    console.log(message, code);
}
log("测试"); // 报错
log("测试", 404); // 正常

// code 没有传值时，默认为 undefined
let log = (message: stringf, code?: number) {
    console.log(message, code); 
}
log("测试"); // 正常
log("测试", 404); //正常

// 设置默认值
let log = (message: stringf, code: number = 0) {
    console.log(message, code); 
}
log("测试"); // 测试 0 
log("测试", 404); //测试 404
```

### 十、类型适配 Type Assertions

```typescript
let message : any;
message = "字符串";
message.endWith("ye");
```

在编辑器中编写到 `message.` 是没有提示字符串的相关方法。原因是：在最初设置是为`any` 尽管在赋值时为字符串，但编辑器是无法得知此时该变量已经确定为字符串，故编辑器没有提示。

解决方法一：我们可以将代码修改为如下，即可打开编辑器的提示代码

```typescript
let str = (<string>message).endWith("ye")
```

解决方法二：将 `message`设置为字符串类型

```typescript
let str = (message as string).endWith("ye")
```

