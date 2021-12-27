一、PHP的数据类型

* 字符串

```php
$x = "Hello";
$y = "PHP"
echo $x. "-" .$y; // Hello PHP
```

* 整型
  * 整数必须至少有一个数字 (0-9)
  * 整数不能包含逗号或空格
  * 整数是没有小数点的
  * 整数可以是正数或负数
  * 整型可以用三种格式来指定：十进制， 十六进制（ 以 0x 为前缀）或八进制（前缀为 0）

* 浮点型
* 布尔型
* 数组
* 对象

> 对象数据类型也可以用于存储数据。在 PHP 中，对象必须声明。
>
> 首先，你必须使用class关键字声明类对象。类是可以包含属性和方法的结构。
>
> 然后我们在类中定义数据类型，然后在实例化的类中使用数据类型：

```php
class Car
{
  var $color;
  function __construct($color="green") {
    $this->color = $color;
  }
  function what_color() {
    return $this->color;
  }
}
```

* NULL 值

  > NULL 值表示变量没有值。NULL 是数据类型为 NULL 的值。NULL 值指明一个变量是否为空值。 同样可用于数据空值和NULL值的区别。

* `var_dump() `函数返回变量的数据类型和值

```php
$x = 5985;
var_dump($x);

$x = 2.4e3;
var_dump($x);

$cars=array("Volvo","BMW","Toyota");
var_dump($cars);
```

  二、PHP类型比较

> 跟 `javaScript`差不多，都是弱类型语言。
>
> - 松散比较：使用两个等号 **==** 比较，只比较值，不比较类型。
> - 严格比较：用三个等号 **===** 比较，除了比较值，也比较类型。

```php
var_dump(0 == false);// bool(true)
var_dump(0 === false);// bool(false)

var_dump(0 == null);// bool(true)
var_dump(0 === null);// bool(false)

var_dump(false == null);// bool(true)
var_dump(false === null);// bool(false)

var_dump("0" == false);// bool(true)
var_dump("0" === false);// bool(false)
 
var_dump("0" == null);// bool(false)
var_dump("0" === null);// bool(false)

var_dump("" == false);// bool(true)
var_dump("" === false);// bool(false)

var_dump("" == null);// bool(true)
var_dump("" === null);// bool(false)
```

三、PHP常量

> 常量是一个简单值的标识符。**该值在脚本中不能改变**。
>
> 一个常量由英文字母、下划线、和数字组成,但数字不能作为首字母出现。 (**常量名不需要加 $ 修饰符**)
>
> **注意：** 常量在整个脚本中都可以使用（全局）

```php
// 区分大小写的常量名  flag: true 忽略大小写
define("GREETING", "hello php", flag);
echo GREETING;    // 输出 "hello php"
echo '<br>';
echo greeting;   // 输出 "greeting"，但是有警告信息，表示该常量未定义
```

四、PHP运算符

* 基本跟 `javaScript`一样

* 不同的地方：

  * PHP7+ 版本新增整除运算符 **intdiv()**，该函数返回值为第一个参数除于第二个参数的值并取整（向下取整）

    ```php
    var_dump(intdiv(10, 3)); // int(3)
    ```

  * 比较运算符

    ```php
    `x <> y` 不等于  和 `x != y` 用法一致
    ```

  * 逻辑运算符

    ```php
    `x and y` 和 `x && y` 都是与
    
    `x or y` 和 `x || y` 都是或
    
    `x xor y` 异或（x 和 y 有且只有一个为真）
    
    `!x` 非
    ```

  * 组合比较符(PHP7+)

    ```php
    $c = $a <=> $b;
    如果 $a > $b, 则 $c 的值为 1。
    如果 $a == $b, 则 $c 的值为 0。
    如果 $a < $b, 则 $c 的值为 -1。
    ```

  五、PHP常用语句

  * `if else elseif`
  * `switch`
  * `while dowhile`
  * `for`

  > 跟`javascript`一样

