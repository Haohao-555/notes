## Session

初始化 session  `application/controllers/Mysession.php`

```php
class Mysession extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
    }

}
```

<br/>

session 是如何工作的

* 当页面载入后，session 会检查用户的 cookie 是否存在有效的 session 数据。

* 如果 session 数据不存在（或者与服务器不匹配，或者已经过期），那么就会创建一个新的 session 并保存。
* 如果 session 数据存在并且有效，那么就会更新 session 的信息。根据配置，每次更新都会生成一个新的 session ID

<br/>

获取 session

```php
// 全局获取
$_SESSION['item']

// magic getter
$this->session->item

// 兼容旧版本
$this->session->userdata('item')
    
// 获取所有 session 数据
$this->session->userdata();
$_SESSION;

// 将 session 数据赋值给变量
$item = $this->session->userdata();
```

<br/>

添加 session 数据

```php
$newdata = array(
    'username'  => 'johndoe',
    'email'     => 'johndoe@some-site.com',
    'logged_in' => TRUE
);

$this->session->set_userdata($newdata);

// 一次只添加一个值
$this->session->set_userdata('some_name', 'some_value');

// 检查某个 session 值是否存在
isset($_SESSION['some_name'])
$this->session->has_userdata('some_name');
```

<br/>

删除 session 数据

```php
// 删除一个
unset($_SESSION['some_name']);
// 删除多个
unset(
    $_SESSION['some_name'],
    $_SESSION['another_name']
);

// 兼容老版本 删除一个
$this->session->unset_userdata('some_name');
// 兼容老版本 删除多个
$array_items = array('username', 'email');
$this->session->unset_userdata($array_items);
```

<br/>

session 的特殊类型数据：flashdata 和 tempdata

<br/>

Flashdata

> 指的是一种只对下一次请求有效的 session 数据，之后将会自动被清除

```php
// 将 item 标记成 flashdata
$this->session->mark_as_flash('item')

// 标记多个值
$this->session->mark_as_flash(array('item1', 'item2'));

// 设置值
$_SESSION['item'] = 'value';
$this->session->mark_as_flash('item');

// 或者
$this->session->set_flashdata('item', 'value');
```

>  `userdata()` 方法不会返回 flashdata 数据。 

确保读取的就是 flashdata 数据

```php
$this->session->flashdata('item');

$this->session->flashdata();
```

在另外一个请求中还继续保持 flashdata 变量

```php
$this->session->keep_flashdata('item');
$this->session->keep_flashdata(array('item1', 'item2'));
```

<br/>

Tempdata

> 指的是带有有效时间的 session 数据，当它的有效时间已过期，或在有效时间被删除，都会自动被清除

```php
// 将 item 标记成 tempdata 过期时间 300 秒
$this->session->mark_as_temp('item', 300);

// 标记多个值
$this->session->mark_as_temp(array('item1', 'item2'), 300);
$this->session->mark_as_temp(array('item' => 300, 'item' => 200));

// 设置值
$_SESSION['item'] = 'value';
$this->session->mark_as_temp('item', 300);
// 或者
$this->session->set_tempdata('item', 'value', 300);
// 再或者
$tempdata = array('newuser' => TRUE, 'message' => 'Thanks for joining!');
$this->session->set_tempdata($tempdata, NULL, $expire);
```

> 如果没有设置 tempdata 参数，或者设置为 0，将默认使用 300 秒作为生存时间
>
> `userdata()` 方法不会返回 flashdata 数据

确保读取 tempdata 数据

```php
$this->session->tempdata('item');
$this->session->tempdata();
```

过期前删除 tempdata 数据

```php
unset($_SESSION['item'])
```

> 只会删除 item 的值，不会删除 item 是 tempdata 的数据类型

<br/>

销毁 session

```php
session_destroy()
// or
$this->session->sess_destroy();
```

> 必须是同一个请求中关于 session 的最后一次操作，所有的 session 数据（包括 flashdata 和 tempdata）都被永久性销毁，销毁之后，关于 session 的方法将不可用