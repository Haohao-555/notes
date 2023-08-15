##  最小单元配置

```nginx
worker_processes 1; # 工作的进程个数

events {
    worker_connections 1024; # 一个进程可以创建多少个链接（默认 1024）
}

http {
    # 引入其他配置（返回前端的头部信息，告诉浏览器返回的数据格式）
    include mime.types; 
    # 如果没有命中 mime.types 的类型，则默认返回 application/octet-stream 的数据格式
    default_type application/octet-stream;
    # 数据零拷贝 （减少了 nginx 读取文件，拷贝文件，直接将文件返回给到前端）
    sendfile on;
    # 保存连接超时时间
    keepalive_timeout 65;
    
    # 虚拟主机
    server {
        # 监听端口
        listen 80;
        # 域名、主机名
        server_name localhost;
        
        location / { # / 转发
            # 指向 nginx 目录下的 html 目录
            root html;
            # 默认展示页
            index index.html index.htm
        }
        
        # 错误码为 500 502 503 504 会命中 50x.html
        error_page 500 502 503 504 /50x.html
        # 访问 /50x.html 会被代理到 nginx 下的 html 目录下  
        location = /50x.html {
          root html
        }
    }
}
```

<hr/>

## 二级域名转发

> 根据不同的二级域名返回不同的站点
>
> 如：
>
> * 域名 blog.hhmax.xyz 返回博客站点
> * 域名 www.hhmax.xyz 返回主站站点

原理：将不同的二级域名都指向同一个 IP 地址，在通过 Nginx 在转发时，根据不同的二级域名，返回不同的站点

下面通过俩种方式进行演示：

### 内网模拟站点映射

在 `C:\Windows\System32\drivers\etc\hosts` 文件中添加

```
39.104.61.35 blog.hhmax.xyz
39.104.61.35 www.hhmax.xyz
```

测试是否映射成功

```cmake
ping blog.hhmax.xyz
```

![](nginx/1.png)

```
ping www.hhmax.xyz
```
![](nginx/1-1692099400461-2.png)

接下来进行 Nginx 配置，配置内容如下：

```nginx
http {
  include mime.types; 
  default_type application/octet-stream;
  sendfile on;
  keepalive_timeout 65;  
  server {
     listen: 80,
     server_name www.hhmax.xyz;  
     location / {
        root html; # 转发到 nginx/html/index.html 或 index.htm
        index index.html index.htm
     }   
  },
  server {
     listen: 80,
     server_name blog.hhmax.xyz;  
     location / {
        root blog; # 转发到 nginx/blog/index.html 或 index.htm
        index index.html index.htm
     }   
  }       
}
```

<hr/>

### 外网模拟站点映射

> 需要购买域名以及一台服务器，并且服务器要备案成功才能映射成功

![](nginx/1-1692099901447-4.png)

选中域名解析，并添加记录

![](nginx/1-1692100009908-6.png)

需要设置的字段

* 记录类型：这里选择 A - 将域名指向一个 IPV4 的地址
* 主机记录：可以填写一个二级域名（即我们要设置的 blog 和 www）
* 记录值：映射的地址（即我们要映射的服务器IP地址）
> 可添加多条记录，并映射到其他 IP 或相同 IP

接下来进行 Nginx 配置，配置内容如下：

```nginx
http {
  include mime.types; 
  default_type application/octet-stream;
  sendfile on;
  keepalive_timeout 65;  
  server {
     listen: 80,
     server_name www.hhmax.xyz;  
     location / {
        root html; # 转发到 nginx/html/index.html 或 index.htm
        index index.html index.htm
     }   
  },
  server {
     listen: 80,
     server_name blog.hhmax.xyz;  
     location / {
        root blog; # 转发到 nginx/blog/index.html 或 index.htm
        index index.html index.htm
     }   
  }       
}
```

**注意：上述 Nginx 配置监听的端口是 80 端口，服务器可能需要开启**

![](nginx/1-1692100528968-8.png)

![](nginx/1-1692100561765-10.png)

<hr/>
