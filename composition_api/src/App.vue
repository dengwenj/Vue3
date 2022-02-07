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
    <!-- props: href 跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate 导航函数 -->
    <!-- props: isActive 是否当前处于活跃的状态 -->
    <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
    <router-link to="/home" v-slot="props" custom>
      <button @click="props.navigate">{{props.href}}</button>
      <button @click="props.navigate">{{props.isActive}}</button>
      <button @click="props.navigate">{{props.isExactActive}}</button>
    </router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="`/user/${name}`">用户</router-link>
    <button @click="handleClick(1)">关于</button>
    <button @click="goback">前进后退</button>
    <router-link to="/admin">admin</router-link>

    <router-view v-slot="{ Component }">
      <transition name="">
        <keep-alive>
          <component :is='Component'></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>