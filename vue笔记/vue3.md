#### # data

1、可以通过 `ref`、`reactive`来定义响应式变量

* ref

```vue
<template>
   {{msg}} - {{userInfo.name}}
   <button @click="changeUserInfo">修改引用数据类型</button>
   <button @click="changeMsg">修改基本数据类型</button>
</template>
<script setup>
   import { ref } from 'vue'
   // 基本数据类型
   const msg = ref('msg') 
   // 引用数据类型
   const userInfo = ref({
       name: 'Jack'
   })
   const changeUserInfo = () => {
       userInfo.value.name = 'Tom'
   }
   const changeMsg = () => {
       msg.value = 'msg123'
   }
</script>
```

<hr/>
* reactive

```vue
<template>
   {{userInfo.name}}
   <button @click="changeUserInfo">修改引用数据类型</button>
</template>
<script setup>
   import { reactive } from 'vue'
  
   // 引用数据类型
   const userInfo = reactive({
       name: 'Jack'
   })
   const changeUserInfo = () => {
       userInfo.name = 'Tom'
   }
</script>
```

<hr>

ref 和 reactive 的区别

* 都是定义响应数据，在 template 中使用 `变量名.字段名` 即可显示在页面中
* 支持的数据类型不同
  *  ref： 基本数据类型、引用数据类型
  * reactive：引用数据类型
* 取值和修改方式不同
  * ref：`变量名.value`
  * reactive：`变量名`
* ref 存在异步问题

<hr>

2、`ref`、`toRef`、`toRefs`三者的使用

* ref：**拷贝变量**，并返回一个响应式数据，并且该值修改，并不会影响到源对象

```vue
<template>
   {{msg1}}
   <button @click="change1">修改</button>
</template>
<script setup>
    let obj1 = { name: 'Jack', sex: '男' }
    let msg1 = ref(obj1.name);
    const change1 = () => {
        msg1.value = "Tom"
        console.log("msg1:", msg1.value) // Tom
        console.log("obj1", obj1.name) // Jack
    }
</script>
```

现象：

（1）未点击按钮前，页面显示为 "Jack"，

（2）当点击按钮后，控制台输出 "msg1: Tom; obj1: Jack", 页面也更新为"Tom"

<hr>

* toRef： **引用变量**，值修改，会影响到源对象，并且视图不会被修改

```vue
<template>
   {{msg2}}
   <button @click="change2">修改</button>
</template>
<script setup>
    let obj2 = { name: 'Jack', sex: '男' }
    let msg2 = toRef(obj2, name);
    const change2 = () => {
        msg2.value = 'Tom'
        console.log('msg2:', msg2.value) // Tom
        console.log('obj2', obj2.name) // Tom
    }
</script>
```

现象：

（1）未点击按钮前，页面显示为 "Jack"，

（2）当点击按钮后，控制台输出" msg2: Tom;obj2: Tom;", 页面没有变化

<hr>

* toRefs 是 toRef 的升级版

```vue
<template>
   {{msg3.name}} - {{msg3.sex}}
   <button @click="change3">修改</button>
</template>
<script setup>
    let obj3 = { name: 'Jack', sex: '男' }
    let msg3 = toRef(obj3);
    const change3 = () => {
        msg3.name = 'Tom'
        msg3.sex = '女'
        console.log('msg3:', msg3.name, msg3.sex) // Tom 女
        console.log('obj3', obj3.name, obj3.sex) // Jack 男
    }
</script>
```

现象：

（1）未点击按钮前，页面显示为 "Jack - 男"，

（2）当点击按钮后，控制台输出 "msg3: Tom 女; obj2: Jack 男;", 页面没有变化

<hr>

toRef 和 toRefs 的区别

* toRef 和 toRefs 都是将响应数据变量转成普通对象
* toRef 和 toRefs 修改值时，不会影响到视图
* 使用 toRef 修改值会修改到源对象，而toRefs 则不会 (`@3.0.0`，`@3.2.8`)
* toRef 设置一个数据字段，toRefs 设置所有数据字段



toRef 和 toRefs 常用于

* 子组件给父组件暴露出一些数据时，**对数据进行解绑**，避免父组件修改值导致子组件数据的改变

暴露出去的数据如果是父组件传递进来的数据，则没有必要将其暴露给父组件。

而且暴露出去的数据尽可能是不要对子组件造成太大影响。避免后期修改值时，造成不必要的影响。

<hr>

#### # 侦听、计算、方法

```vue
<template>
    <div>{{state}}</div>
    <button @click="changeState">computed:{{ramdom}}</button>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
let state = ref(1)

const changeState = () => {
    ++state.value
} 

const ramdom = computed(() => {
    return Math.random()
})

// 侦听
watch(state, () => {
  console.log("watch")
}, {
    immediate: true, // 初始化执行
    deep: true // 深度监听
})
</script>
```

与 vue2 的使用没有太大区别

<hr>

#### #父与子

1、父给子传值

```vue
// 子
<template>
    {{ msg }}
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
   msg: {
       type: String,
       default: '默认值',
       required: true, // 必填项
   }  
})
console.log("父组件传递的值", props.msg)
</script>
```

```vue
// 父
<template>
    <HelloWorld :msg="msg"/>
</template>
<script setup>
import { ref } from 'vue'
const msg = ref('msg')
</script>
```

子不能修改父的值，只能读取，子如要修改需通知父


<hr>

2、父给子修值

方法一：父自定义方法

```vue
// 子
<template>
    {{ msg }}
    <button @click="changeMsg"></button>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
    
const props = defineProps({
   msg: {
       type: String,
       default: '默认值',
       required: true, // 必填项
   }  
})
console.log("父组件传递的值", props.msg)
    
// 定义事件
const emit = ['changeMsg']
const changeMsg = () => {
    emit('changeMsg', '把值给我修改了')
}
</script>
```

```vue
// 父
<template>
    <HelloWorld :msg="msg" @changeMsg="changeMsg"/>
</template>
<script setup>
  import { ref } from 'vue'
  const msg = ref('msg')
  
  const changeMsg = (newValue) => {
      console.log(newValue) // 把值给我修改了
      msg.value = newValue
  }
</script>
```

方法二：v-model 和 emit

```vue
// 子
<template>
    {{ msg }}
    <button @click="changeMsg"></button>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
    
const props = defineProps({
   msg: {
       type: String,
       default: '默认值',
       required: true, // 必填项
   }  
})
console.log("父组件传递的值", props.msg)
    
    
// 定义事件
const emit = ['update:msg']
const changeMsg = () => {
    emit('update:msg', '把值给我修改了')
}
</script>
```

```vue
// 父
<template>
    <HelloWorld v-model:msg="msg"/>
</template>
<script setup>
  import { ref } from 'vue'
  const msg = ref('msg')
</script>
```

两者比较：

* 方法一好处：在修改值前，父可以根据子传递的值进行其他操作后，再将值赋给子
* 方法一不足：父需要自定义方法
* 方法二好处：父无需自定义方法，但绑定值需要使用 `v-model: 变量名`，并且子 emit 的格式必须是 `update: 变量名`
* 方法二不足：父无法对子传递的值进行其他操作

方法三： inject 与 provide

```vue
// 父
<template>  
    <div class="app">    
        <child :name="name"></child>  
    </div>
</template>
<script setup>
    import { provide, ref, watch } from 'vue'
    import Children from '@/components/children.vue'
    let name = ref('Jack')provide('provideState', {  
        name,  
        changeName: () => {    
            name.value = 'Tom'
        }
    })
    watch(name, () => {  
        console.log(`name变成了${name.value}`);
    })
</script>
```

```vue
// 子
<template>    
<div class="">{{ name }}</div>    
<button @click="changeName">修改</button>
</template>
<script setup>
    import { inject, defineProps } from 'vue'
    defineProps({    
        name: {        
            type: String,        
            required: true    
        }
    })
    // 注入const 
    providerState = inject('provideState')const changeName = () => {    
    // 子组件触发 name 改变    
   providerState.changeName()}
</script>
```

> 方法三：也适用于祖孙传值

<hr>
3、子给父传值 

```vue
// 子
<template>
    {{ userInfo.name }} - {{ userInfo.age }}
</template>
<script setup>
import { defineExpose, ref } from 'vue'
const userInfo = ref({
    name: "Tom",
    age: 13
})    
defineExpose({
    // 值
    ...toRefs(userInfo)
    // 方法
    changeuserInfo() {
      console.log("子组件的方法")
    }
})   
</script>
```

```vue
// 父
<template>
   <HelloWorld ref="child" />
</template>
<script setup>
  import { ref } from 'vue'
  const child = ref<InstanceType<typeof child>>()
  console.log(child.value.userInfo)
  child.value.changeuserInfo()
</script>
```

目前该方法只能支持 Typescript，js并不支持。

[https://github.com/vuejs/core/issues/4397]: https://github.com/vuejs/core/issues/4397

<hr>

#### # 插槽

```vue
// child.vue
<template>   
  <div class="container">      
      <slot />      
      <slot name='title' />      
      <slot name='footer' :scope="state" />   
   </div>
</template>
<script setup>   
    import { useSlots, reactive } from 'vue'       
    const state = reactive({ 
        name: '张三',        
        age: 25   
    })  
   const slots = useSlots()   // 匿名插槽   const defaultSlot = reactive(slots.default().length)   console.log(defaultSlot)   // 具名插槽   const titleSlot = reactive(slots.title && slots.title().length)   console.log(titleSlot)
</script>
```
```vue
// App.vue
<template> 
   <my-slot>      
       <span>默认插槽</span>     
       <template #title>      
           <h1>具名插槽</h1>      
           <h1>具名插槽</h1>  
       </template>         
       <template #footer="{ scope }">      
           <footer>作用域插槽 {{ scope.name }} - {{ scope.age }}</footer>   
       </template> 
   </my-slot>
</template>
<script>   
    import child from '@/components/child.vue';
</script>
```

