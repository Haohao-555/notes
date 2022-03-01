## codeIgniter 图像类

剪切图片，打水印

```php
class Image extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }
    // 剪切图片
    public function resize()
    {
        // 图像库
        $config['image_library'] = 'gd2';
        // 图片地址
        $config['source_image'] = $_SERVER['DOCUMENT_ROOT'].'/img/1.jpg';
        $config['create_thumb'] = TRUE;
        // 生成的缩略图将保持图像的纵横比例
        $config['maintain_ratio'] = TRUE;
        $config['width'] = 75;
        $config['height'] = 50;
        $this->load->library('image_lib', $config);
        if ( ! $this->image_lib->resize())
        {
            echo $this->image_lib->display_errors();
        }
    }
    // 打水印
    public  function watermark()
    {
        $config['source_image'] = $_SERVER['DOCUMENT_ROOT'].'/img/2.jpg';
        $config['wm_text'] = '打水印文字';
        $config['wm_type'] = 'text';
        $config['wm_font_size'] = '30';
        $config['wm_font_color'] = 'DC143C';
        $config['wm_vrt_alignment'] = 'left';
        $config['wm_hor_alignment'] = 'center';
        $config['wm_padding'] = '20';
        $this->load->library('image_lib', $config);
        $this->image_lib->initialize($config);
        $this->image_lib->watermark();
    }
}
```