####  # vue 

```vue
<template>
   <div class="container">
       <el-input v-model="loginForm.username"></el-input>
       <el-button @click="getPropsValue"></el-button> 
   </div>
</template>
<script setup>
import { defineProps, computed, ref } from 'vue'
// props 操作
const props = defineProps({
    // 参数一
    icon: {
        type: String, // 类型
        required: true, // 必填项
    },
    // 参数二
    list: {
        type: Array,
        default: [] // 设置默认值
    }
})
const getPropsValue = () => {
    console.log(props.icon)
    console.log(props.list)
}  


// 计算属性
const isExternal = computed(() => {
    // 判断是否为外部链接
    return /^(https?:|mailto:|tel:)/.test(props.icon)
})


// 创建响应式变量
// 基本数据类型
const passwordType = ref('password') 
console.log(passwordType.value) 
// 引用数据类型   
const loginForm = ref({
  username: 'admin',
  password: '123456'
}) 
console.log(loginForm.value) // {username: 'admin', password: '123456'}
</script>
<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 300px;
        border: 1px solid #333;
        // 深度选择器
        ::v-deep .el-button {
            width: 100px;
        }
    }
</style>
```

#### # vue-router

```javascript
import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: () => import('@/layout/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
```

#### # vuex

user 模块

```javascript
export default {
  namespaced: true, // 该模块为单独的模块
  state: () => ({
    token: 'c3551e1c-9cc0-4365-83cc-c7eda0b10e01'
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: { // 行为
    // 登录
    login (context, userInfo) {
      const { username, password } = userInfo
      // to do 登录操作
      
      // 登录成功： 保存 token
      this.commit('user/setToken', data.token)
    }
  }
}
```

快捷获取值 getters

```javascript
const getters = {
  token: state => state.user.token
}
```

在入口文件`index`中注册 user 模块及 getters

```javascript
import { createStore } from 'vuex'
import user from './modules/user.js'
import getters from './getters'
export default createStore({
  getters,
  modules: {
    user
  }
})
```

在页面中使用

```vue
<script setup>
import { useStore } from 'vuex'
// 获取 store 实例
let store = userStore()
// 获取 token
console.log(store.getters.token)  
// 调用 user 模块中 actions 的 login 方法
store.dispatch('user/login', loginForm.value)
</script>
```

#### # main.js 全局注册

```vue
<template>
   <router-view></router-view>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style lang="scss" scoped></style>
```

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
app.use(store).use(router).mount('#app')
```

