<template>
  <div>
    <h2 ref="title">hhhhhh</h2>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    const title = ref(null)

    watchEffect(() => { // 默认是一上来就会调用
      console.log(title.value) // 这个是拿到的那个节点
    }, {
      flush: 'post' // 在 Dom 渲染之后会调用这个回调函数
    })

    return {
      title
    }
  }
}
</script>

<style>

</style>