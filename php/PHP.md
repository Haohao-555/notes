## PHP 超级全局变量

### $GLOBALS

>  超级全局变量组   在一个PHP脚本的全部作用域中都可以访问 

```php
$x = 75; 
$y = 25;
 
function addition() 
{ 
    $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y']; 
}
 
addition(); 
echo $z; // 100
```

### $_SERVER

>  包含了诸如头信息(header)、路径(path)、以及脚本位置(script locations)等等信息的数组 
>
>  这里展示部分的 $_SERVER，具体可以查看参考资料

```php
// 当前执行脚本的文件名 PHP 4.3.0 版本开始
echo $_SERVER['PHP_SELF'];
// 当前运行脚本所在的服务器的 IP 地址
echo $_SERVER['SERVER_ADDR'];
// 请求页面时通信协议的名称和版本。例如，"HTTP/1.0"
echo $_SERVER['SERVER_PROTOCOL'];
// 访问页面使用的请求方法
echo $_SERVER['REQUEST_METHOD'];
// query string（查询字符串）
echo $_SERVER['QUERY_STRING'];
```

### $_REQUEST

>  用于收集HTML表单提交的数据 

```php+HTML
<html>
<body>
<!-- $_SERVER['PHP_SELF']; 当前执行脚本的地址 -->
<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
Name: <input type="text" name="fname">
<input type="submit">
</form>
 
<?php 
$name = $_REQUEST['fname']; 
echo $name; 
?>
 
</body>
</html>
```

### $_POST

>  收集表单数据  method="post" 

```php+HTML
<html>
<body>
 
<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
Name: <input type="text" name="fname">
<input type="submit">
</form>
 
<?php 
$name = $_POST['fname']; 
echo $name; 
?>
 
</body>
</html>
```

### $_GET

> 收集表单数据  method="get"  也可以收集URL中发送的数据 

```php+HTML
<a href="test_get.php?subject=PHP&web=runoob.com">Test $GET</a>

<!--test_get.php-->
<?php 
echo "Study " . $_GET['subject'] . " @ " . $_GET['web'];
?>
```

文章：[参考资料](https://www.runoob.com/php/php-superglobals.html)

<hr>

## PHP 魔术常量

>  魔术常量它们的值随着它们在代码中的位置改变而改变   这些特殊的常量不区分大小写 

### \_\_LINE\_\_

```php
echo '这是第 " '  . __LINE__ . ' " 行';
```

### \_\_FILE\_\_

>  文件的完整路径和文件名 

```php
echo '该文件位于 " '  . __FILE__ . ' " ';
```

## \_\_DIR\_\_

>  文件所在的目录 

```php
echo '该文件位于 " '  . __DIR__ . ' " ';
```

### \_\_FUNCTION\_\_

>  函数名称 

```php
function test() {
    echo  '函数名为：' . __FUNCTION__ ;
}
test(); // 函数名为：test
```

## \_\_TRAIT\_\_

>  代码复用 

```php
<?php
class Base {
    public function sayHello() {
        echo 'Hello ';
    }
}
 
trait SayWorld {
    public function sayHello() {
        parent::sayHello();
        echo 'World!';
    }
}
 
class MyHelloWorld extends Base {
    use SayWorld;
}
 
$o = new MyHelloWorld();
$o->sayHello(); // Hello World!
?>
```

### \_\_TRAIT\_\_

>  类的名称  PHP 4.3.0 新加  
>
>  注意自 PHP 5.4 起 __CLASS__ 对 trait 也起作用。当用在 trait 方法中时，__CLASS__ 是调用 trait 方法的类的名字 

```php
class test {
    function _print() {
        echo '类名为：'  . __CLASS__ . "<br>";
        echo  '函数名为：' . __FUNCTION__ ;
    }
}
$t = new test();
$t->_print();
```

### \_\_METHOD\_\_

>  类的方法名（PHP 5.0.0 新加）。返回该方法被定义时的名字（区分大小写） 

```php
class classname
{
    function __construct()
    {
        echo __METHOD__,"\n";
    }
}
$a = 'classname';
$obj = new $a; // classname::__construct
```

### \_\_NAMESPACE\_\_

>  当前命名空间的名称（区分大小写）。此常量是在编译时定义的（PHP 5.3.0 新增） 
>
>  在动态创建名称时很有用 

```php
namespace MyProject;
 
echo '命名空间为："', __NAMESPACE__, '"'; // 命名空间为："MyProject"  
```



文章：[参考资料](https://www.runoob.com/php/php-magic-constant.html)

<hr>

## PHP 命名空间

>  PHP 命名空间(namespace)是在PHP 5.3中加入的 

### 定义命名空间

* 单个文件夹单个命名空间

```php
// 定义代码在 'MyProject' 命名空间中  
namespace MyProject;  
 
// ... 代码 ... 
```

* 单个文件夹多个命名空间

```php
namespace MyProject {
    const CONNECT_OK = 1;
    class Connection { /* ... */ }
    function connect() { /* ... */  }
}

namespace AnotherProject {
    const CONNECT_OK = 1;
    class Connection { /* ... */ }
    function connect() { /* ... */  }
}
```

*  将全局的非命名空间中的代码与命名空间中的代码组合在一起 

```php
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace { // 全局代码
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
```

* 定义文件编码

>  在声明命名空间之前唯一合法的代码是用于定义源文件编码方式的 declare 语句。所有非 PHP 代码包括空白符都不能出现在命名空间的声明之前。 

```php
declare(encoding='UTF-8'); //定义多个命名空间和不包含在命名空间中的代码
namespace MyProject {
    const CONNECT_OK = 1;
    class Connection 
    { 
       static function start()
       {
          return 321;
       }
    }
    function connect() 
    { 
       echo 123;
    }
}

namespace { // 全局代码
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
```

<br>

### 子命名空间

```php
namespace MyProject\Sub\Level;  //声明分层次的单个命名空间

const CONNECT_OK = 1;
class Connection { /* ... */ }
function Connect() { /* ... */  }
```

<br>

### 命名空间使用

#### 静态

`file1.php`

```php
namespace Foo\Bar\subnamespace;

const FOO = 1;
function foo()
{
    echo "Foo\Bar\subnamespace 中的 foo";
}
class foo
{
    static function staticmethod()
    {
        echo "Foo\Bar\subnamespace 中的 staticmethod";
    }
}
```

`file2.php`

```php
namespace Foo\Bar;
include 'file1.php';

const FOO = 2;
function foo()
{
    echo "Foo\Bar 中的 foo";
}
class foo
{
    static function staticmethod()
    {
        echo "Foo\Bar 中的 staticmethod";
    }
}
```

以下操作在 `file2.php`文件中操作

*  **非限定名称，或不包含前缀的类名称** 

```php
// 解析为函数 Foo\Bar\foo
foo(); // Foo\Bar 中的 foo

// 解析为类 Foo\Bar\foo ，方法为 staticmethod
foo::staticmethod();  // Foo\Bar 中的 staticmethod

// 解析为常量 Foo\Bar\FOO
echo FOO; // 2

```

*  **限定名称,或包含前缀的名称** 

```php
// 解析为函数 Foo\Bar\subnamespace\foo 
subnamespace\foo(); // Foo\Bar\subnamespace 中的 foo

// 解析为类 Foo\Bar\subnamespace\foo, 类的方法 staticmethod
subnamespace\foo::staticmethod(); //  Foo\Bar\subnamespace 中的 staticmethod

// 解析为常量 Foo\Bar\subnamespace\FOO
echo subnamespace\FOO; // 1
```

*  **完全限定名称，或包含了全局前缀操作符的名称** 

```php
// 解析为函数 Foo\Bar\foo
\Foo\Bar\foo();  // Foo\Bar 中的 foo

// 解析为类 Foo\Bar\foo, 以及类的方法 staticmethod
\Foo\Bar\foo::staticmethod(); // Foo\Bar 中的 staticmethod

// 解析为常量 Foo\Bar\FOO
echo \Foo\Bar\FOO; // 2
```

>  注意访问任意全局类、函数或常量，都可以使用完全限定名称 
>
>  例如 \strlen() 或 \Exception 或 \INI_ALL。在命名空间内部访问全局类、函数和常量：

```php
namespace Foo;

function strlen() {}
const INI_ALL = 3;
class Exception {}

$a = \strlen('hi'); // 调用全局函数strlen
$b = \INI_ALL; // 访问全局常量 INI_ALL
$c = new \Exception('error'); // 实例化全局类 Exception
```

#### 动态

` example1.php `

```php
class classname
{
    function __construct()
    {
        echo __METHOD__,"\n";
    }
}
function funcname()
{
    echo __FUNCTION__,"\n";
}
const constname = "global";

$a = 'classname';
$obj = new $a; // prints classname::__construct
$b = 'funcname';
$b(); // prints funcname
echo constant('constname'), "\n"; // prints global
```

`example2.php ` 

```php
namespace namespacename;
class classname
{
    function __construct()
    {
        echo __METHOD__,"\n";
    }
}
function funcname()
{
    echo __FUNCTION__,"\n";
}
const constname = "namespaced";

include 'example1.php';
```

以下操作基于 `example2.php `

全局

```php
$a = 'classname';
$obj = new $a; // 输出 classname::__construct

$b = 'funcname';
$b(); // 输出 funcname

echo constant('constname'), "\n"; // 输出 global
```

局部（namespaced）

```php
$a = '\namespacename\classname';
$obj = new $a; // 输出 namespacename\classname::__construct

$b = '\namespacename\funcname';
$b(); // 输出 namespacename\funcname

echo constant('\namespacename\constname'), "\n"; // 输出 namespaced
```

```php
$a = 'namespacename\classname';
$obj = new $a; // 输出 namespacename\classname::__construct

$b = 'namespacename\funcname';
$b(); // 输出 namespacename\funcname

echo constant('namespacename\constname'), "\n"; // 输出 namespaced
```

<br>

### namespace关键字  和  \_\_NAMESPACE\_\_常量

 PHP支持两种抽象的访问当前命名空间内部元素的方法 

* namespace
* \_\_NAMESPACE\_\_

1、常量 \_\_NAMESPACE\_\_ 的值是包含当前命名空间名称的字符串。在全局的，不包括在任何命名空间中的代码，它包含一个空的字符串。 

```php
namespace MyProject;
echo '"', __NAMESPACE__, '"'; // 输出 "MyProject"
```

```php
echo '"', __NAMESPACE__, '"'; // 输出 ""
```

2、 常量 \_\_NAMESPACE\_\_ 在动态创建名称时很有用 

```php
namespace Foo\Bar;

const FOO = 2;
function foo()
{
    echo "Foo\Bar 中的 foo";
}
class foo
{
    static function staticmethod()
    {
        echo "Foo\Bar 中的 staticmethod";
    }
}


$a = __NAMESPACE__ . '\\' .'foo';
$a(); // Foo\Bar 中的 foo

$b = __NAMESPACE__ . '\\' .'foo::staticmethod';
$b(); // Foo\Bar 中的 staticmethod
```

3、 namespace 可用来显式访问当前命名空间或子命名空间中的元素 

```php
namespace MyProject;

use blah\blah as mine; // 引入了 blah\blah 命名空间，并定义了个别名mine

mine\mine(); // 调用函数 blah\blah\mine()
namespace\blah\mine(); // 调用函数 MyProject\blah\mine()
```

<br>

### 使用命名空间：别名/导入

*  使用use操作符导入/使用别名 

```php
namespace foo;
use My\Full\Classname as Another;

// 下面的例子与 use My\Full\NSname as NSname 相同
use My\Full\NSname;

// 导入一个全局类
use \ArrayObject;

// 实例化 foo\Another 对象
$obj = new namespace\Another; 

// 实例化 My\Full\Classname　对象
$obj = new Another; 

// 调用函数 My\Full\NSname\subns\func
NSname\subns\func();

// 实例化 ArrayObject 对象
$a = new ArrayObject(array(1)); 
// 如果不使用 "use \ArrayObject" ，则实例化一个 foo\ArrayObject 对象
```

*  一行中包含多个use语句 
```php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // 实例化 My\Full\Classname 对象
NSname\subns\func(); // 调用函数 My\Full\NSname\subns\func
```

* 导入和动态名称 

```php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // 实例化一个 My\Full\Classname 对象
$a = 'Another';
$obj = new $a;      // 实际化一个 Another 对象
```

*  导入和完全限定名称 
```php
use My\Full\Classname as Another, My\Full\NSname;

// 实例化 My\Full\Classname 类
$obj = new Another; 

// 实例化 Another 类
$obj = new \Another; 

// 实例化 My\Full\Classname\thing 类
$obj = new Another\thing; 

// 实例化 Another\thing 类
$obj = new \Another\thing; 
```

  <br>

### 命名空间的顺序

```php
namespace A;
use B\D, C\E as F;
```

* 函数调用

```php
/*
   首先尝试调用定义在命名空间"A"中的函数foo()
   再尝试调用全局函数 "foo"
*/ 
foo();

// 调用全局空间函数 "foo"
\foo();

// 调用定义在命名空间"A\my"中函数 "foo"
my\foo(); 

/*
   首先尝试调用定义在命名空间"A"中的函数 "F"
   再尝试调用全局函数 "F"
*/
F();
```

* 类引用

```php
/*
  创建命名空间 "A" 中定义的类 "B" 的一个对象
  如果未找到，则尝试自动装载类 "A\B"
*/
new B();

/*
  使用导入规则，创建命名空间 "B" 中定义的类 "D" 的一个对象
  如果未找到，则尝试自动装载类 "A\B"
*/
new D();

/*
  使用导入规则，创建命名空间 "C" 中定义的类 "E" 的一个对象
  如果未找到，则尝试自动装载类 "C\E"
*/
new F();   

/*
  创建定义在全局空间中的类 "B" 的一个对象
  如果未发现，则尝试自动装载类 "B"
*/
new \B();   

/*
  创建定义在全局空间中的类 "D" 的一个对象
  如果未发现，则尝试自动装载类 "D"
*/
new \D();  

/*
  创建定义在全局空间中的类 "F" 的一个对象
  如果未发现，则尝试自动装载类 "F"
*/
new \F();  
```

* 调用另一个命名空间中的静态方法或命名空间函数

```php
// 调用命名空间 "A\B" 中函数 "foo"
B\foo();    

/*
  调用命名空间 "A" 中定义的类 "B" 的 "foo" 方法
  如果未找到类 "A\B" ，则尝试自动装载类 "A\B"
*/
B::foo();  

/*
  使用导入规则，调用命名空间 "B" 中定义的类 "D" 的 "foo" 方法
  如果类 "B\D" 未找到，则尝试自动装载类 "B\D"
*/
D::foo();   

// 调用命名空间 "B" 中的函数 "foo" 
\B\foo();   

/*
  调用全局空间中的类 "B" 的 "foo" 方法
  如果类 "B" 未找到，则尝试自动装载类 "B"
*/
\B::foo();  
```

* 当前命名空间中的静态方法或函数

```php
/*
  调用命名空间 "A\A" 中定义的类 "B" 的 "foo" 方法
  如果类 "A\A\B" 未找到，则尝试自动装载类 "A\A\B"
*/
A\B::foo();   

/*
  调用命名空间 "A" 中定义的类 "B" 的 "foo" 方法
  如果类 "A\B" 未找到，则尝试自动装载类 "A\B"
*/
\A\B::foo();  
```