## 数据库操作

下载 ci，并将 ci 中 的 application 和 system 以及 index.php 放入到项目根路径。并且在项目根路径下创建 .htaccess文件

在 .htaccess 文件中添加下面内容

```xml
 <IfModule mod_rewrite.c>
    RewriteEngine on
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]
 </IfModule>
```

修改 application/config/database.php 中数据库配置项

```php
$db['default'] = array(
	'hostname' => 'localhost',
	'username' => '用户名',
	'password' => '密码',
	'database' => '数据库',
	'dbdriver' => 'mysqli',
);
```

在 application/controllers创建文件（Crud.php）并创建操作数据库类（Crud）

```php
class Crud extends CI_Controller
{
     public function __construct()
     {
         parent::__construct();
         // 加载数据库
         $this->load->database();
     }
     // 插入数据
     public function c(){}
     // 查找数据
     public function r() {}
     // 获取所有数据
     public function ra() {}
     // 更新数据
     public function u() {}
     // 删除数据
     public function d() {}
}
```

实操

* 插入数据

```php
//http://192.168.5.41/index.php/crud/c
public function c()
{
 $arrUser = array();
 $arrUser['user'] = 'admin';
 $arrUser['password'] = '456';
 // 插入数据
 $this->db->insert('user', $arrUser);
 echo $this->db->insert_id();
}
```

* 查找数据

```php
// http://192.168.5.41/crud/r/id/8
public function r()
 {
       // 获取url请求携带参数
       $arrParams = $this->uri->uri_to_assoc();

       if ( empty( $arrParams ) || empty( $arrParams[ 'id' ] ))
       {
           echo 'no parameters';
           return;
       }

       // 查找数据
       $this->db->from( 'user' )->where( 'id', $arrParams[ 'id' ] );
       $res = $this->db->get();
       var_dump($res->result());
 }
```

* 获取所有数据

```php
// http://192.168.5.41/crud/ra 
public function  ra()
 {
     $res = $this->db->get( 'user' );
     var_dump($res->result());
 }
```

* 更新数据

```php
// http://192.168.5.41/crud/u
public function u()
 {
     $this->db->set( 'user' ,  'haohao' );
     $this->db->where( "id" ,  5 );

     var_dump( $this->db->update('user') );
 }
```

* 删除数据

```php
// http://192.168.5.41/crud/d
public function d()
 {
     $this->db->where( 'id', 5 );
     var_dump( $this->db->delete('user') );
 }
```