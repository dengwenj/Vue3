<!-- <template>
  <div>
    <Home message='我是 home 组件' />
  </div>
</template> -->

<script setup>
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
</script>

<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view />
  </div>
</template>