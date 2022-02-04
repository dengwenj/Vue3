<template>
  <div>
    <Home message='我是 home 组件' />
  </div>
</template>

<script>
// import Home from './01_compositionAPI基本使用/Home.vue'
// import Home from './02_RefAPI的补充/Home.vue'
// import Home from './03_computed和watch/Home.vue'
import Home from './04_provide和Inject/Home.vue'

export default {
  components: {
    Home
  },
  setup() {

  }
}
</script>