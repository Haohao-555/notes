## 组件通信

父组件

```javascript
class App extends Element {
    constructor() {
        super();
        this.navigate = (id) = {
             console.log(子组件传递过来的ID, id);
        }
    }
    render() {
        return Aside aside={this.aside} navigateto={this.navigateto}
    }
}
```

子组件

```javascript
class Aside extends Element {
     constructor(props) {
        super();
        this.props = props;
    }
    return ul class=list
               {this.props.aside.map( 
                   (item) = 
                      li onclick{()=this.props.navigateto(item.id)}
                            i class=iconfont icon-yibiaoi
                            span {item.name}span
                       li
                      )
                 }
             ul    
}
```