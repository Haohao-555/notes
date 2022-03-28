sciter 组件编程

入口文件：main.htm

```html
<html>
    <head>
       <style src="./css/style.css" />
       <script type="module">
           import {Aside} from "components/Aside.js"
           <!-- 全局组件 -->
           class App extends Element {
               constructor() {
                   super();
                   this.aside = [
                        {
                            id: 1,
                            name: "我的电脑"
                        },
                        {
                            id: 2,
                            name: "文件扫描" 
                        },
                        {
                            id: 3,
                            name: "审批管理"
                        },
                        {
                            id: 4,
                            name: "我的申请"
                        },
                        {
                            id: 5,
                            name: "更多工具"
                        }
                    ];
                }
               render() {
                   return <div class="wrapper">
                            <Aside aside={this.aside}/>
                          </div>
               }
           }
           <!--将全局组件添加到 html 中-->
           document.body.patch(<App/>);
       </script>
    </head>
</html>
```

注意：

* 引入css样式必须使用 style 标签，不能使用 link标签
* 引入组件必须在 script 标签添加 type="module"

组件文件：Aside

```javascript
export class Aside extends Element {
     constructor(props) {
        super();
        this.props = props;
     }
     componentDidMount() {
        this.render();
     }
     render() {
         return <div class="aside">
                   {
                     this.props.aside.map(
                        (item)
                            => <li class="item">
                                   <a href= {"route:" + item.id}>
                                     {item.name}
                                   </a>
                               </li> 
                     )
                   }
                </div>
     }
}
```