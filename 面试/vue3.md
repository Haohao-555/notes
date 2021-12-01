[]: 	"https://juejin.cn/post/7026249448233631752"

Vue3 有哪些变化

* 在打包时会去除一些无用代码，没有用到的模块，使得代码打包体积更小
* 新增（composition API）组合API；同一功能的代码可以集中在一起，不会太分散
* 重构VDOM；在编译时会将事件缓存，**保存静态节点直接复用**，Diff 算法使用 `最长递增子序列` 优化了对比流程，使得虚拟 DOM 生成速度提升 `200%`
* 支持在`<style></style>`里使用`v-bind`，给 CSS 绑定 JS 变量
* 用 `Proxy` 代替 Object.defineProperty 重构了响应式系统，可以监听到数组下标变化，及对象新增属性，因为**监听的不是对象属性，而是对象本身**，还可拦截 apply、has 等13种方法
*  删除了两个生命周期 `beforeCreate`、`created`，直接用 `setup` 代替了
* 新增了**开发环境**的两个钩子函数，在组件更新时 `onRenderTracked` 会**跟踪组件里所有变量和方法的变化、每次触发渲染时 `onRenderTriggered` 会返回发生变化的新旧值**，可以让我们进行有针对性调试

`defineProperty `和 `Proxy` 的区别

* Object.defineProperty 是 Es5 的方法，Proxy 是 Es6 的方法
* defineProperty 不能监听到数组下标变化和对象新增属性，Proxy 可以
* defineProperty 是劫持对象属性，Proxy 是代理整个对象
* defineProperty 不兼容 IE8，Proxy 不兼容 IE11
* defineProperty 不支持 Map、Set 等数据结构

