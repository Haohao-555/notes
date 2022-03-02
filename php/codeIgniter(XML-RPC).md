## XML-RPC

> CodeIgniter 的 XML-RPC 类允许你向另外一个服务器发送请求，或者建立一个自己的 XML-RPC 服务器来接受请求

客户端

```php
class Xmlrpc_client extends CI_Controller
{
    public function index()
    {
        $this->load->helper('url');
        $server_url = site_url('xmlrpc_server');
        
        $this->load->library('xmlrpc');
        $this->xmlrpc->server($server_url, 80);
        
        $request = array('How is it going');
        $this->xmlrpc->request($request);
        
        if( ! $this->xmlrpc->send_request())
        {
            echo $this->xmlrpc->display_error();
        }
        else
        {
            echo '<pre>';
            print_r($this->xmlrpc->display_response());
            echo '</pre>';
        }
    }
}
```

服务端

```php
class xmlrpc_server extends CI_Controller
{
    public function index()
    {
        $this->load->library('xmlrpc');
        $this->load->library('xmlrpcs');
        
        $config['functions']['Greetings'] = array('function' => 'Xmlrpc_server.process');
        
        $this->xmlrpcs->initialize($config);
        $this->xmlrpcs->serve();
    }
    public function process($request)
    {
        $parameters = $request->output_parameters();
        $response = array(
            array(
              'you_said' => $parameters[0],
              'i_respond' => 'Not bad at all'
            ),
            'struct'
        );
        return $this->xmlrpc->send_response($response);
    }
}
```



访问：http://192.168.5.41/xmlrpc_client