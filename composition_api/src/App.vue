<!-- <template>
  <div>
    <Home message='我是 home 组件' />
  </div>
</template> -->

<script setup>
import { useRouter } from 'vue-router'
// import Home from './01_compositionAPI基本使用/Home.vue'
// import Home from './02_RefAPI的补充/Home.vue'
// import Home from './03_computed和watch/Home.vue'
// import Home from './04_provide和Inject/Home.vue'
// import Home from './05_setup的顶层编写方式/Home.vue'
// import Home from "./06_jsx的使用/Home.vue"
// import Home from "./07_自定义指令/Home.vue"

// export default {
//   components: {
//     Home
//   },
//   setup() {

//   }
// }
const name = 'dengwenj'
const router = useRouter()

const handleClick = (one) => {
  console.log(one);
  router.push({
    // path: '/about',
    // query: {
    //   name: 'dwj',
    //   age: 22
    // }
    name: 'about',
    params: {
      name: 'dwj',
      age: 22
    }
  })
}

const goback = () => {
  router.go(1)
}
</script>

<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="`/user/${name}`">用户</router-link>
    <button @click="handleClick(1)">关于</button>
    <button @click="goback">前进后退</button>
    <router-view />
  </div>
</template>