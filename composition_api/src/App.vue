<template>
  <div>
    <Home message='我是 home 组件' />
  </div>
</template>

<script>
// import Home from './01_compositionAPI基本使用/Home.vue'
import Home from './02_RefAPI的补充/Home.vue'

export default {
  components: {
    Home
  },
  setup() {

  }
}
</script>