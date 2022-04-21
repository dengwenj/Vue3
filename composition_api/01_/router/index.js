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
    redirect: '/home', // 重定向
  },
  {
    path: '/home',
    // component: Home
    component: () => import('../pages/Home.vue'), // 路由懒加载
    name: 'home',
    meta: {
      name: 'dwj',
      age: 22
    },
    children: [
      {
        path: '/home',
        redirect: '/home/message'
      },
      {
        path: 'message',
        component: import('../pages/HomeMessage.vue')
      },
      {
        path: 'goods',
        component: import('../pages/HomeGoods.vue')
      }
    ]
  },
  {
    path: '/about',
    // component: About
    component: () => import('../pages/About.vue'), // 路由懒加载
    name: 'about'
  },
  {
    path: '/user/:username', // 动态路由匹配
    component: () => import('../pages/User.vue')
  },
  {
    // 匹配不到任何路径会来到这里
    path: '/:pathMatch(.*)',
    component: () => import('../pages/NotFound.vue')
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue')
  }
]

// 创建路由对象 router
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 动态添加路由
router.addRoute({
  path: '/admin',
  component: import('../pages/Admin.vue')
})

// 动态添加子路由
router.addRoute('home', {
  path: '/home/monent',
  component: import('../pages/HomeMonent.vue')
})

console.log(router.hasRoute('home')); // true 里面写的是 name 名称 看存不存在

/**
 * to: Route 对象，即将跳转到的 Route 对象
 * from: Route 对象，跳转之前的 Route 对象
 */
/**
 * 返回值问题：
 *   1 false：不进行导航
 *   2 undefined或者不写返回值：进行默认导航
 *   3 字符串：路径，跳转到对应的路径中
 *   4 对象：{ path: '/login', query: {...} }
 */
router.beforeEach((to, from) => {
  console.log('进行了跳转')

  if (to.path.includes('/home')) {
    return '/login'
  }

  // 后面不返回东西 进行的是默认导航，该到哪里就到哪里
})

export default router
