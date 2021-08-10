

## 一、this

**介绍**：JavaScript 语言之所以有this的设计，跟内存里面的数据结构有关系。

```javascript
var obj = { foo:  5 };
```

> 上面的代码将一个对象赋值给变量obj。JavaScript 引擎会先在内存里面，生成一个对象{ foo: 5 }，然后把这个对象的内存地址赋值给变量obj。
>
>
> 也就是说，变量obj是一个地址。后面如果要读取obj.foo，引擎先从obj拿到内存地址，然后再从该地址读出原始的对象，返回它的foo属性。



## 二、判断 this 的指向

### （1）独立函数内部的this指向是全局window对象

```javascript
var x = 1;
var foo = function () {
    console.log("独立函数==>", this)     // window
    console.log("独立函数==>", this.x)   // 1
}
 foo();
```

### （2）对象内部的方法 this，指向当前对象

```javascript
var x = 1;
var obj = {
     x: 2,               // 对象的属性
     foo: function () {    // 把函数的地址复制给foo
        x = 4
     // 这里的this 指向obj
     console.log("对象里面this==>, ", this.x)    // 2
     var a = function () {
          // 指向window
          console.log(this.x) // 4（在 foo 中的 x = 4 中 x 是全局下的 x， 故此时全局下的 x 被修改了）
      }
      a()         // 1
     }
}
obj.foo()   // 对象的函数，叫对象方法，指向obj
```

### （3）构造函数内部的this, 指向new运算符创建的对象

```javascript
function Dog(name, color) {
    this.name = name;
    this.color = color;
 }
 Dog.prototype.say = function () {
     console.log("Dog构造函数的原型的方法==>", this)
 }
var dog = new Dog("旺财", "yellow");
dog.say()
```



## 三、改变函数内部this的指向

### （1）apply

**介绍**：apply() 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

**语法**：

```javascript
func.apply(thisArg, [argsArray])
```

- 参数

  - thisArg： 在 func 函数运行时使用的 this 值。

  > 请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象。
  >
  > - argsArray：一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。

- 返回值 指定this值和参数后的func函数调用后的返回值。

```javascript
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.apply(this, [name, price]);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
```

### （2）call

**介绍**：call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

**注意**：该方法的语法和作用与 apply() 方法类似，只有一个区别，就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。

**语法**:

```javascript
function.call(thisArg, arg1, arg2, ...)
```

- 参数

  - thisArg 在 function 函数运行时使用的 this 值。
  - arg1, arg2, ... 指定的参数列表。

- 返回值 指定this值和参数后的func函数调用后的返回值。

- **例子**：

  ```javascript
  function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  ```

### （3）bind

**介绍**：bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

**语法**

```javascript
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

- 参数
  - thisArg 调用绑定函数时作为 this 参数传递给目标函数的值。 如果使用new运算符构造绑定函数，则忽略该值。如果thisArg是null或undefined，执行作用域的 this 将被视为新函数的 thisArg。
  - arg1, arg2, ... 当目标函数被调用时，被预置入绑定函数的参数列表中的参数。

- 返回值返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。

```javascript
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // 该函数在全局作用域被调用
// undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// 42
```



## 四、利用 apply、call、bind 实现一些小案例

```javascript
 // (1) 用apply或call处理
 // 求数组中最大的值
 var arr = [4, 1, 88, 56, 999, 12, 7, 1000];
 Array.prototype.findMax = function () {
       console.log(this) // 当前 this 是指向调用者 [4, 1, 88, 56, 999, 12, 7, 1000]
       /*
          a.apply(b, c) 调用a函数，并且改变a函数内部的this指向b，并传入c数组作为参数
       */
       return Math.max.apply(this, this) // 第一个 this 是调用者 第二个 this 是数据
       // 其中的null是window
       return Math.max.apply(null, this)
       // 用call处理 —— 解构ES6写法
       return Math.max.call(null, ...this)
}
console.log(arr.findMax())
```



```javascript
var x = 10;
var modules = {
      x: 100,
      // getX是对象的属性
      getX: function () {
          console.log(this)
          return this.x
      }
 }
// 100, 上下文 在modules的对象里
console.log("直接调用==>", modules.getX())
// 10  把函数值复制外部的getX2,getX2是在上下文在最外部，所以执行的getX2内部的this指向window
var getX2 = modules.getX; 
console.log("外部的getX2变量==>", getX2());
var getX3 = getX2.bind(modules) // 并没有执行
console.log("外部的getX3变量==>", getX3());
```

