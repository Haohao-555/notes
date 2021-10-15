### 同步编程与异步编程

```javascript
// 同步编程
console.log(1);
console.log(2);
console.log(3);
// 1 2 3

// 异步编程
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
// 1 3 2
```



> 这里具体使用不细讲，具体可以看https://blog.csdn.net/weixin_44659458/article/details/107247226
>
> 主要是源码

### Promise 基本使用

```javascript
let n1 = 10;
let n2 = 7;
let promise = new Promise((resolve, reject) => {
    let v1 = 4;
    if(n1 - n2 == v1) {
        resolve({code: 200, message: "正确"})
    }else {
        reject({code: -1, message: "错误"});
    }
})

promise.then(
    // 成功
    data => console.log(data),
    // 错误
    error => console.log(error)
)

promise.finally(
    () => console.log("不够成功与否，都会执行")
)
```

> 在 Promise 中使用 reject() 没有接收的函数进行处理时会报错

```javascript
// 方式一
promise.catch(
    error => console.log(error)
)

// 方式二
promise.then(
    data => console.log(data),
    error => console.log(error)
)
```

源码：

```javascript

```



### *Promise* 链式调用

```javascript
let p3 = new Promise((resolve, reject) => {
    reject("不满足条件");
    //   resolve("数据");
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
}).finally(
    () => {
        console.log("不够成功与否，都会执行")
    }
)
```

> 这里必须使用 catch 否则当执行 reject("不满足条件"); 会报错



### *Promise*.race()

> 多个 promise 实例执行时，比较那个 promise 执行的效率更高（快）

```javascript
let p1 = new Promise(
    (resolve, reject) => {
        let d = setTimeout(() => {
            resolve("第一个任务")
        }, 1000)
    }
)

let p2 = new Promise(
    (resolve, reject) => {
        let d = setTimeout(() => {
            resolve("第二个任务")
        }, 500)
    }
)

let p3 = new Promise(
    (resolve, reject) => {
        let d = setTimeout(() => {
            resolve("第三个任务")
        }, 2000)
    }
)

let pro2 = Promise.all([p1, p2, p3]);
pro.then(
    (data) => {
        console.log(data); // 第二个任务
    },
)
```



源码：

```javascript

```



### Promise.all()

> 判断全部任务（promise）是否都执行完成

```javascript
let p1 = new Promise(
    (resolve, reject) => {
        let d = setTimeout(() => {
            resolve("第一个任务")
        }, 1000)
    }
)

let p2 = new Promise(
    (resolve, reject) => {
        let d = setTimeout(() => {
            resolve("第二个任务")
        }, 500)
    }
)

let p3 = new Promise(
    (resolve, reject) => {
        let d = setTimeout(() => {
            resolve("第三个任务")
        }, 2000)
    }
)

pro2.then(
    (data) => {
        // [ '第一个任务', '第二个任务', '第三个任务' ]
        console.log(data);
    }
)
```

源码：

```javascript

```



### async 与 await 结合 promise

> async 与 await 是 ES7 的语法，只要用于后端（koa2）从数据库中取数据，并返回给前端
>
> 前端也可以使用，比较少而已。

```javascript
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("登录")
        }, 1000)
    })
}

async function foo() {
    // 取到返回的数据
    await login().then(data => console.log(data))
    // let data = await login();
    console.log("其他任务");
}
foo()
```



### Genterator

```javascript
function *foo() {
    yield function() {return"第一个任务"};
    yield function() {return"第二个任务"};
    yield function() {return"第三个任务"};
}

let obj = foo();
console.log(obj); // Object [Generator] {}

let firstTask = obj.next();
let secondTask = obj.next();
let thirdTask = obj.next();

// console.log(firstTask); // { value: [Function (anonymous)], done: false }
// console.log(secondTask); // { value: [Function (anonymous)], done: false }
// console.log(secondTask);  // { value: [Function (anonymous)], done: false }


console.log(firstTask.value()); //  第一个任务
console.log(secondTask.value()); // 第二个任务 
console.log(secondTask.value()); // 第三个任务
```





> 案例：../ES6编程题

