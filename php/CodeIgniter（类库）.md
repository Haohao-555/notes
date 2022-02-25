### 创建类库和使用原生类库

<br>

1、存储位置

你的类库文件应该放置在 *application/libraries* 目录下，当你初始化类时，CodeIgniter 会在这个目录下寻找这些类 

<br>

2、命名约定

- 文件名首字母必须大写，例如：Myclass.php
- 类名定义首字母必须大写，例如：class Myclass
- 类名和文件名必须一致

<br>

3、类文件原型

```php
defined('BASEPATH') OR exit('No direct script access allowed');
class Myclass {
    public function some_method()
    {
    }
}
```

<br>

4、使用自定义类（控制器）

```php
// 加载类
$this->load->library('myclass');
// 使用类方法
$this->myclass->some_method();
```

<br>

5、使用自定义类传参

```php
$params = array('type' => 'large', 'color' => 'red');
$this->load->library('Myclass', $params);
```

```php
defined('BASEPATH') OR exit('No direct script access allowed');
class Myclass {
    public function __construct($params)
    {
        // Do something with $params
    }
}
```

<br>

6、自定义类中使用 CodeIgniter 资源

```php
class Example_library 
{
    protected $CI;

    public function __construct()
    {
        $this->CI =& get_instance();
    }

    public function foo()
    {
        $this->CI->load->helper('url');
        redirect();
    }

    public function bar()
    {
        echo $this->CI->config->item('base_url');
    }
}
```

> （1）$this 只能在控制层、模型或视图中直接使用
>
> （2）$CI =& get_instance(); 将 原始的 CodeIgniter 对象   赋值  给变量 $CI ，而不是创建一个副本

<br>

7、替换原生类库

```php
// 替换原生的 Email 类 在 application/libraries/Email.php 创建
class CI_Email 
{

}
```

```php
$this->load->library('email');
```

>  类库文件和类定义改成和原生的类库完全一样 
>
>  注意大多数原生类都以 CI_ 开头 

<br>

8、扩展原生类库

```php
class My_Email extends CI_Email 
{

}
```

>  扩展一个类和替换一个类差不多，除了以下几点： 
>
>  *  类在定义时必须继承自父类 
>  *  你的新类名和文件名必须以 MY_ 为前缀 ( 可配置，见下文 )

如果在扩展原生类时需要使用构造函数，需确保你调用了父类的构造函数

```php
class MY_Email extends CI_Email 
{
    public function __construct($config = array())
    {
        parent::__construct($config);
    }
}
```

>  并不是所有的类库构造函数的参数都是一样的，在对类库扩展之前 先看看它是怎么实现的 

加载扩展类

```php
$this->load->library('email')
```

> 和平常调用原生库一样

<br>

9、设置自定义前缀

 `application/config/config.php` 文件 

```php
$config['subclass_prefix'] = 'MY_';
```

>  请注意所有原始的 CodeIgniter 类库都以 **CI_** 开头，所以请不要使用这个 作为你的自定义前缀 