### 一、Nginx 最小单元配置

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

### 二、配置二级域名转发

```nginx
http {
  include mime.types; 
  default_type application/octet-stream;
  sendfile on;
  keepalive_timeout 65;  
  server {
     listen: 81,
     server_name www.hhmax.xyz;  
     location / {
        root html;
        index index.html index.htm
     }   
  },
  server {
     listen: 80,
     server_name blog.hhmax.xyz blog1.hhmax.xyz;  
     location / {
        root blog;
        index index.html index.htm
     }   
  }       
}
```

