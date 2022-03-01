## codeIgniter 表单验证

表单页面 application/views/myform.php

```php
<html>
   <head>
       <title>My form</title>
   </head>
   <body>
       <?php echo validation_errors(); ?>
       <?php echo form_open('form'); ?>
           <h5>Username</h5>
           <input type="text" name="username" value="" size="50"/>
           <h5>Password</h5>
           <input type="text" name="password" value="" size="50"/>
           <h5>Password Confirm</h5>
           <input type="text" name="passconf" value="" size="50"/>
           <h5>Email Address</h5>
           <input type="text" name="email" value="" size="50"/>
           <div><input type="submit" value="Submit" /></div>
       </form>
   </body>
</html>
```

<br/>

表单提交成功页面 application/views/formsuccess.php

```php
<html>
    <head>
        <title>Upload Form</title>
    </head>
    <body>
       <h3> Your file was successfully uploaded !</h3>
       <ul>
           <?php foreach ($upload_data as $item => $value): ?>
           <li><?php echo $item; ?>: <?php echo $value ?></li>
           <?php endforeach; ?>
       </ul>
       <p><?php echo anchor('upload', 'Upload Another File!'); ?></p>
    </body>
</html>
```

<br/>

表单验证 application/controllers/Form.php

```php
class Form extends CI_Controller {

    public function index()
    {
        // 加载辅助函数
        $this->load->helper(array('form', 'url'));
        // 加载表单验证
        $this->load->library('form_validation');

        // 表单验证
        $this->form_validation->set_rules('username', '用户名', 'required');
        $this->form_validation->set_rules('password', '密码', 'required',
            // 自定义错误信息（可选）
            array('required' => 'You must provide a %s.')
        );
        $this->form_validation->set_rules('passconf', 'Password Confirmation', 'required');
        $this->form_validation->set_rules('email', 'Email', 'required');

        if ($this->form_validation->run() == FALSE)
        {
            $this->load->view('myform');
        }
        else
        {
            $this->load->view('formsuccess');
        }
    }
}
```

<br/>

访问：http://192.168.5.41/Form.php

<br/>

使用数组来设置验证规则

```php
$config = array(
    array(
        'field' => 'username',
        'label' => 'Username',
        'rules' => 'required'
    ),
    array(
        'field' => 'password',
        'label' => 'Password',
        'rules' => 'required',
        'errors' => array(
            'required' => 'You must provide a %s.',
        ),
    ),
    array(
        'field' => 'passconf',
        'label' => 'Password Confirmation',
        'rules' => 'required'
    ),
    array(
        'field' => 'email',
        'label' => 'Email',
        'rules' => 'required'
    )
);

$this->form_validation->set_rules($config);
```

<br/>

级联规则

```php
$this->form_validation->set_rules(
    'username', 'Username',
    'required|min_length[5]|max_length[12]|is_unique[users.username]',
    array(
        'required'  => 'You have not provided %s.',
        'is_unique' => 'This %s already exists.'
    )
);
$this->form_validation->set_rules('password', 'Password', 'required');
$this->form_validation->set_rules('passconf', 'Password Confirmation', 'required|matches[password]');
$this->form_validation->set_rules('email', 'Email', 'required|valid_email|is_unique[users.email]');
```

> *  用户名表单域长度不得小于 5 个字符、不得大于 12 个字符 
> *  密码表单域必须跟密码确认表单域的数据一致 
> *  电子邮件表单域必须是一个有效邮件地址 

也可以传入包含规则的数组

```php
$this->form_validation->set_rules('username', 'Username', array('required', 'min_length[5]'));
```

<br/>

填充表单值

```php+HTML
 <input type="text" name="passconf" value="<?php echo set_value('passconf'); ?>" size="50"/>
```

<br/>

回调函数

```php
class Form extends CI_Controller
{
    public function index()
    {
          $this->form_validation->set_rules('username', '用户名', 'callback_username_check[bar]');
    }
    public function username_check($val, $bar)
    {
        /*
          做一些数据操作
          $val 是表单提交的值
          $bar 是表单以外传递的值（只能是字符串）
        */
        return "TRUE 或 FASLE"
    }
}
```

>  你也可以对传给你的表单数据进行处理并返回，如果你的回调函数返回了除布尔型的 TRUE 或 FALSE 之外的任何值，它将被认为是你新处理过的表单数据