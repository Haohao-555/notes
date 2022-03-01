## codeIgniter3 文件上传

上传文件页面 application/views/upload_form.php

```php
<html>
    <head>
        <title>Upload Form</title>
    </head>
    <body>
        <!-- 显示错误信息 -->
        <?php echo $error; ?>
        <?php echo form_open_multipart('upload/do_upload');?>
            <input type="file" name="userfile" size="20" />
             <br/>
             <br/>
             <input type="submit" value="upload" />
        </form>
    </body>
</html>
```

> form_open_multipart()  使用了表单辅助函数来创建 form 的起始标签 

<br/>

上传成功页面 application/views/upload_success.php

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

控制器 application/controllers/Upload.php

```php
class  Upload extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        // 加载表单类
        $this->load->helper(array('form', 'url'));
    }

    public function index()
    {
        // 加载上传页面
        $this->load->view('upload_form', array('error' => ''));
    }

    // 文件上传
    public function do_upload()
    {
        // 存储路径
        $config['upload_path'] = './uploads';
        // 允许上传类型
        $config['allowed_types'] = 'gif|jpg|png';
        // 图片大小
        $config['max_size'] = 100;
        // 图片宽度
        $config['max_width'] = 1024;
        // 图片高度
        $config['max_height'] = 768;
        // 加载文件上传模块
        $this->load->library('upload', $config);

        // 上传是否成功
        if ( ! $this->upload->do_upload('userfile'))
        {
           // 获取错误信息
           $error = array('error' => $this->load->display_errors());
           // 显示上传完成页面
           $this->load->view('upload_form', $error);
        }
        else
        {
          // 获取上传信息
          $data = array('upload_data' => $this->upload->data());
          // 显示上传完成页面
          $this->load->view('upload_success', $data);
        }
    }
}
```

<br/>

在项目根路径创建目录 uploads 并设置权限 777

<br/>

访问：http://192.168.5.41/Upload