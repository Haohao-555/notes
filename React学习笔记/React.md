### 创建项目

* `npx create-react-app demo` 
* `cd demo `
* `npm start`

> 下面案例最好删除`src` 目录下的所有文件，从头开始学

<br/>

### 案例一：搭建

`src`创建入口 `index.js`s

```javascript
import ReactDOM from "react-dom";
import App from './App'
// ReactDOM.render(组件名称，要注入的元素)
ReactDOM.render(
  <App/>,
  document.getElementById('root')
  );
```

`src` 创建组件`App.jsx`

```jsx
import React from 'react'
const title = "你好世界"
// 类组件
export default class App extends React.Component {
   render(){
     return (
       <div>
         <h2>{title}</h2>
       </div>
     )
   }
}
// 函数式组件
const App = () => {
  return <h2>{title}</h2>
}
export default App
```

> 函数组件没有 this 指向、函数组件没有生命周期、函数组件没有 state 状态

<br/>

### 案例二：细节

```jsx
import React from 'react';
const msg = "你好世界"
const mystyle = {backgroundColor: 'red'}
let flag = true;
let arr  = ["刘备", "关羽", "张飞"]
export default class App extends React.Component {
  render() {
    return (
      <>
        <h2>{msg}</h2>
       
        {/* 不能使用 for 改成 htmlFor */}
        <label htmlFor="username"></label>
        <input type="text" id="username"/>

        {/* 不能使用 class 改成 className */}
        <div className="box"></div>
       
        {/* 双括号 */}
        <div style={{backgroundColor: 'red'}}>内容</div>
        {/* 单括号 */}
        <div style={mystyle}>内容</div>
        {/* 三元运算符 */}
        <div style={{backgroundColor: flag? 'green':'red'}}>内容</div>
         {/* 循环 */}
        <ul>
          {
            {/* 只能使用 map 不能使用 forEach (forEach 没有返回值，而 map 有返回值) */}
            arr.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
      </>
    )
  }
}
```

<br/>

### 案例三：绑定事件，动态渲染

```jsx
import React, { Component } from 'react'
export default class App extends Component {
 constructor(props){
   super(props);
   // 状态管理
   this.state = {
     num: 1
   }
 }
  render() {
    return (
     <>
      <h2>{this.state.num}</h2>
      {/* 方式一：普通 */}
      <button onClick={()=>this.setState({num: this.state.num + 1})}>按钮1 - 累加</button>
      {/* 方式二：需要改变 this 指向，否则 this 为空 */}
      <button onClick={this.addNum.bind(this)}>按钮2 - 累加</button>
      {/* 方式三：箭头函数 */}
      <button onClick={() =>this.addNum()}>按钮3 - 累加</button>
     </>
    )
  }
  addNum(){
      // 修改状态
      this.setState({num: this.state.num + 1})
  }
}
```

<br/>

### 案例四：修改样式、传参

```css
/* app.css */
.box {
  width: 200px;
  height: 200px;
  background-color:skyblue;
}
```

```jsx
import React, { Component } from 'react'
import "./app.css"
export default class App extends Component {
  render() {
    return (
      <div className='box'>
        {/* 传参 */}
        <button onClick={this.btnClick.bind(this, 1)}>按钮1</button>
        <button onClick={this.btnClick.bind(this, 2)}>按钮2</button>
        <button></button>
      </div>
    )
  }
  btnClick(num) {
      console.log(num);
  }
}
```

<br/>

### 案例五：传值

```jsx
import React, { useState } from 'react'

// 父 =》子
function Child(props) {
    return <h2>子组件{props.num}</h2>
}
export default function Father() {
  return <Child num={123}/>
}

// 子 =》父
function Child(props) {
    return (
       <>
         <h2>子组件{props.num}</h2>
         <button onClick={()=>props.changeNum(321)}></button>
       </>
    )
}
export default function Father() {
  const [num, setNum] = useState(123)
  // 提供给子组件用来修改 num 的函数
  const changeNumFn = (num) => setNum(num)
  return <Child num={num} changeNumFn={changeNum}/>
}
```

<br/>

### 案例六：跨代传值

```jsx
import React, { useState, createContext } from 'react'

// 创建上下文空间 （Provider 提供者，Consumer 消费者）
const NumContext = createContext()

function Child() {
     return (
         <NumContext.Consumer>
            {
              ({num, setNum})=>{
                  return (
                     <>
                       <h2>子组件{num}</h2>
                       <button onClick={()=>setNum(456)}>修改Num</button>
                     </>
                  )
              }     
            }
         </NumContext.Consumer>
     )
}

const Father() => <Child />

// 顶级组件
export default function App() {
    const [num, setNum] = useState(123);
    return (
        <NumContext.Provider value={{num, setNum}}>
             <Father>
        </NumContext.Provider>
    )
}
```

> 也可以使用 hooks 来代替，具体看案例 七 

<br/>

### 案例七：使用 hooks 实现跨代传值

```jsx
import React, { useState, createContext, useContext } from 'react'

// 创建上下文空间 （Provider 提供者，Consumer 消费者）
const NumContext = createContext()

function Child() {
    const { num, setNum } = useContext(NumContext);
     return (
          <>
            <h2>子组件{num}</h2>
            <button onClick={()=>setNum(456)}>修改Num</button>
          </>
     )
}

const Father() => <Child />

// 顶级组件
export default function App() {
    const [num, setNum] = useState(123);
    return (
        <NumContext.Provider value={{num, setNum}}>
             <Father>
        </NumContext.Provider>
    )
}
```



### 案例八：函数式组件实现数据响应式（利用 hooks）

> 由于函数式组件没有 this 指向，导致无法获取到 setState，无法实现数据动态化

```jsx
import React from 'react'
import { useState } from 'react'
export default function App4() {
    // Hook 只能用在组件函数中的最顶层
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(1);
    return (
       <>
          <h2>{num1}</h2>
          <button onClick={() => setNum1(num1 + 1)}>修改值</button>
          <hr />
          <h2>{num2}</h2>
          <button onClick={() => setNum2(num2 + 1)}>修改值</button>
      </>
    )
}
```

<br/>

### 案例九：模拟 `挂载完成mounted`，`数据更新update`，`销毁前 beforeDestroy`（利用 hooks）

> hooks 出现在函数式组件，函数式组件并没有生命周期函数。而类组件有生命周期函数

```jsx
// 挂载完成mounted
import React from 'react'
import { useEffect } from 'react'
export default function App() {
   // Hook 只能用在组件函数中的最顶层 
   useEffect(() => {
    // 这里主要用于发送 axios 请求
    console.log("挂载完成")
  })
}
```

```jsx
// 数据更新update
import React from 'react'
import { useState, useEffect } from 'react'
export default function App() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1); 
   // 监听一个数据
   useEffect(() => {
       console.log('num1更新')
   }, [num1])
    
   // 监听多个数据
   useEffect(() => {
    console.log('更新')
  }, [num1, num2])
    
  // 监听所有
  useEffect(() => {
    console.log('更新')
  })
   
  // 不监听
  useEffect(() => {
    console.log('更新')
  }, [])
}
```

```jsx
// 销毁前 beforeDestroy
import React from 'react'
import { useEffect } from 'react'
export default function App() {
  useEffect(()=>{
      return () => {
        console.log('销毁阶段');
      }
  })
}
```


