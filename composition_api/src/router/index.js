import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'

/**
 * 路由懒加载：当路由被访问的时候才会加载对应的组件，这样就会高效
 * component 可以传入一个组件，也可以传入一个函数，该函数的返回值要是一个 Promise，而 import 函数就是返回的 Promise
 */
// 配置映射关系
const routes = [
  {
    path: '/',
    redirect: '/home' // 重定向
  },
  {
    path: '/home',
    // component: Home
    component: () => import('../pages/Home.vue') // 路由懒加载
  },
  {
    path: '/about',
    // component: About
    component: () => import('../pages/About.vue') // 路由懒加载
  }
]

// 创建路由对象 router
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
