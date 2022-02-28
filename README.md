<!--
 * @Description: 邢浩东的项目
 * @Version: 2.0
 * @Autor: 邢浩东
 * @Date: 2022-02-23 16:49:24
 * @LastEditors: 邢浩东
 * @LastEditTime: 2022-02-25 11:36:14
-->
# pinia
1、可以对Vue2和Vue3做到很好的支持，也就是老项目也可以使用Pinia。

抛弃了Mutations的操作，只有state、getters和actions.极大的简化了状态管理库的使用，让代码编写更加容易直观。

不需要嵌套模块，符合Vue3的Composition api ，让代码更加扁平化。

完整的TypeScript支持。Vue3版本的一大优势就是对TypeScript的支持，所以Pinia也做到了完整的支持。如果你对Vuex很熟悉的化，一定知道Vuex对TS的语法支持不是完整的（经常被吐槽）。

代码更加简洁，可以实现很好的代码自动分割。Vue2的时代，写代码需要来回翻滚屏幕屏幕找变量，非常的麻烦，Vue3的Composition api完美了解决这个问题。 可以实现代码自动分割，pinia也同样继承了这个优点。


Vuex 和 Pinia 的优缺点
Vuex的优点

● 支持调试功能，如时间旅行和编辑

● 适用于大型、高复杂度的Vue.js项目

Vuex的缺点

● 从 Vue 3 开始，getter 的结果不会像计算属性那样缓存

● Vuex 4有一些与类型安全相关的问题

Pinia的优点

● 完整的 TypeScript 支持：与在 Vuex 中添加 TypeScript 相比，添加 TypeScript 更容易

● 极其轻巧（体积约 1KB）

● store 的 action 被调度为常规的函数调用，而不是使用 dispatch 方法或 MapAction 辅助函数，这在 Vuex 中很常见

● 支持多个Store

● 支持 Vue devtools、SSR 和 webpack 代码拆分

Pinia的缺点

● 不支持时间旅行和编辑等调试功能

何时使用Pinia，何时使用Vuex

由于Pinea是轻量级的，体积很小，它适合于中小型应用。它也适用于低复杂度的Vue.js项目，因为一些调试功能，如时间旅行和编辑仍然不被支持。

将 Vuex 用于中小型 Vue.js 项目是过度的，因为它重量级的，对性能降低有很大影响。因此，Vuex 适用于大规模、高复杂度的 Vue.js 项目。
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
