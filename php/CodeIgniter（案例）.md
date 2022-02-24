##  基于 MVC 模式开发模式 + Mysql + codeigniter3 实现小案例
![在这里插入图片描述](https://img-blog.csdnimg.cn/a090e4832d4a49389fd296b4bb5ce4b2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bKB5pyI5Y-v6LS1,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

在 `application/models` 创建数据模型 `Dbmodel`

```php
class Dbmodel extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        // 加载数据模型
        $this->load->database();
    }
    /**
     * 获取所有数据
     */
    public function get_blog_list()
    {
        $res = $this->db->get("blog");
        return $res->result();
    }
}
```

 在 `application/controllers` 创建控制层类 `Blog`

```php
class Blog extends CI_Controller
{
    public  function index()
    {
        // 加载模型
        $this->load->model('dbmodel');
        // 获取数据
        $res['blogList'] = $this->dbmodel->get_blog_list();

        // 显示数据
        $this->load->view("blogview", $res);
    }
}
```

在 `application/views` 创建视图层 `blogview`

```php+HTML
<html>
<head>
    <title></title>
    <style>
        .header {
            width: 1400px;
            height: 30px;
            margin: 120px auto 0px auto;
            display: flex;
            justify-content: end;
        }
        .header .search {
            width: 260px;
            position: relative;
            height: 30px;
            border: 1px solid rgba(135, 206, 235, .7);
            border-radius: 6px;
            overflow: hidden;
        }
        .header .search .btn {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 60px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #ffffff;
            background-color: rgba(135, 206, 235, .7);
            border-left: 1px solid rgba(135, 206, 235, .7);
        }
        .header .search input {
            height: 30px;
            width: 200px;
            border: none;
            padding-left: 6px;
            margin: 0;
            outline: none;
        }
        .header .btn-group {
            display: flex;
            justify-content: end;
            margin-left: 40px;
        }
        .header .btn-group .btn {
            width: 60px;
            line-height: 32px;
            height: 32px;
            text-align: center;
            background-color: rgba(135, 206, 235, .7);
            color: #ffffff;
            border-radius: 6px;
            margin-right: 12px;
        }
        .header .btn-group .btn:last-child {
            margin-right: 0px;
        }

        .header .btn:hover {
            cursor: pointer;
            background-color: skyblue;
        }
        table {
            width: 1400px;
            margin:  12px auto;
        }
        table thead tr {
           background-color: skyblue;
           color: #fff;
           text-align: center;
        }
        table tbody tr td {
            padding: 6px 3px;
        }
        table tbody tr:hover {
            background-color: rgba(135, 206, 235, .7);
            cursor: pointer;
        }
    </style>
</head>
<body>
<div class="header">
   <div class="search">
       <input type="text">
       <div class="btn">搜索</div>
   </div>
   <div class="btn-group">
       <div class="btn">添加</div>
       <div class="btn">刷新</div>
   </div>
</div>
<table cellpadding="0" cellspacing="0" border="1" bordercolor="#ccc">
   <thead>
        <tr>
          <td>序号</td>
          <td>标题</td>
          <td>内容</td>
          <td>用户ID</td>
        </tr>
   </thead>
   <tbody>
       <?php foreach ($blogList as $item): ?>
           <tr>
               <td><?= $item->id ;?></td>
               <td><?= $item->title ;?></td>
               <td><?= $item->content ;?></td>
               <td><?= $item->userId ;?></td>
           </tr>
       <?php endforeach;?>
   </tbody>
</table>
</body>
</html>
```



测试访问地址：http://192.168.5.41/blog