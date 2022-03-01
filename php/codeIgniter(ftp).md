## ftp

```php
class Myftp extends CI_Controller
{
    private static $config;
    public function __construct()
    {
        parent::__construct();
        // 加载 ftp 模型
        $this->load->library('ftp');

        // 设置参数
        self::$config['hostname'] = '服务器地址';
        self::$config['username'] = '用户名';
        self::$config['password'] = '密码';
        // 是否开启调试模式，显示错误信息
        self::$config['debug'] = TRUE;

    }
    // 上传文件
    public function upload()
    {
        // ftp 连接 服务器
        $this->ftp->connect(self::$config);
        // 上传文件
        $this->ftp->upload('待上传路径地址', '保存到服务器地址', 'ascii', 0775);
        // 关闭连接
        $this->ftp->close();
    }
    // 获取服务器文件列表
    public function getDir()
    {
        // ftp 连接 服务器
        $this->ftp->connect(self::$config);
        // 读取文件目录信息
        $list = $this->ftp->list_files('服务器地址');
        print_r($list);
        // 关闭连接
        $this->ftp->close();
    }
    // 下载文件
    public function downFile()
    {
        // ftp 连接服务器
        $this->ftp->connect(self::$config);
        // 下载文件
        $this->ftp->download('服务器地址', '本地地址', '编码');
        // 关闭连接
        $this->ftp->close();
    }
}
```