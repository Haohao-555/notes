### 一、下载安装 git （忽略）

### 二、工作区、暂存区、本地仓库、远端仓库的区别

* 工作区：是开发人员通过编辑器在编辑代码，此时代码并没有在本地仓库里

* 暂存区：就是一个中间媒介，当代码完成需要保存到本地仓库时，需要通过改媒介。好处在于：可以回退，一旦代码不想提交到本地仓库时，可以撤销，避免造成本地仓库代码的污染。

* 本地仓库：就是可以在自己电脑中存放代码

* 远端仓库：就是第三方仓库，将代码放在第三方仓库，可以多人协同工作。

  <img src="https://i.loli.net/2021/08/01/Jp6to824MrG9aXk.png" style="zoom:80%;" />

### 三、在创建项目并提交到本地仓库的操作

打开 git 创建项目目录 text （mkdir text）

 

此时是一个空目录，需要初始化 git 环境 （git init）



需要 name 和 email 凭证 （只是个凭证，没有任何作用）全局 或 局部（项目）二选一

* 全局

> git config user.name Haohao-555
>
> git config user.email 3283627490@qq.com

* 局部

> git config --global user.name Haohao-555
>
> git config --global user.email 3283627490@qq.com



查看配置信息

* 项目：进入到项目目录 cat .git/config

<img src="https://i.loli.net/2021/08/01/Ob25V3LE1Inlvm7.png" style="zoom:80%;" />

* 全局： cd ~    cat .gitconfig

<img src="https://i.loli.net/2021/08/01/ucBGsEv9PxQkmVK.png" style="zoom:80%;" />



**接下来就是对项目的一些操作！！！！！！**



首先，创建文件 good.txt 后



输入命令 git status 查看当前项目状态

<img src="https://i.loli.net/2021/08/01/UgfONVSAaourXIv.png" style="zoom:80%;" />



git add 后 再次查看 git status

<img src="https://i.loli.net/2021/08/01/3T2t8KhUYy5Apew.png" style="zoom:80%;" />



此时，如果我们后悔将 good.txt 提交到暂存区时，可以撤销

> git rm --cached good.txt



再次 git status 时，就是最开始创建文件后查看状态一样。



修改后，并 git add good.txt 后



提交到本地仓库后，

> git commit -m "日志信息" good.txt

<img src="https://i.loli.net/2021/08/01/ezCBvFEKtml5OyW.png" style="zoom:80%;" />



再次 git status

<img src="https://i.loli.net/2021/08/01/NAQkHUEzv5WgJPD.png" style="zoom:80%;" />



到这里，我们的本地仓库就已经更新完毕 ！！！！



补充：如果此时我们已经追踪了 good.txt（git add good.txt) ，并且没有撤销（git rm --cached good.txt）的前提下，修改 good.txt 内容时，我们再次 git status

<img src="https://i.loli.net/2021/08/01/ojvPpf2XW8BsVZU.png" style="zoom:80%;" />



这时我们可以不用 git add good.txt 将其提交到暂存区了，因为暂存区已经存在该文件，直接 git commit -m "" good.txt 就可以提交到本地仓库。



如果再git add good.txt 也不会影响后面的操作。



### 四、查看提交日志并进行版本控制

1、查看提交日志

* 方法一：git log 

<img src="https://i.loli.net/2021/08/01/Oa1VrC9znwsbRpj.png" style="zoom:80%;" />

   多屏显示控制方法： 空格向下翻页  b 向上翻页  q退出


* 方法二：git log --pretty=oneline 一行显示完

只能显示过去的

<img src="https://i.loli.net/2021/08/01/syVp54KmwIkLGbO.png" style="zoom:80%;" />



* 方法三：git reflog

​    可以显示过去和现在的版本号<img src="https://i.loli.net/2021/08/01/4KuVGtQb5WXefwT.png" style="zoom:80%;" />



2、前进后退

* 基于索引操作【推荐】
  * git reset --hard 【局部索引值】
  * git reset --hard 8bdb3ff

<img src="https://i.loli.net/2021/08/02/2tX7JDidFkIQCO3.png" style="zoom:80%;" />

* 使用 ^ 符号，只能后退
  * git reset --hard^
  * 注：一个^代表后退一步
* 使用 ~ 符号，只能后退
  * git reset --hard~n
  * 注：表示后退 n 步









更新中.......