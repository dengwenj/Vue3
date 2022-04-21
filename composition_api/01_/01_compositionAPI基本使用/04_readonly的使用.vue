<template>
  <button @click="handleUpdate">修改</button>
</template>

<script>
import { reactive, readonly } from '@vue/reactivity'
export default {
  setup() {
    //  readonly 里面用的是 proxy 代理
    // 只是只读了

    // 普通对象
    // const info1 = { name: 'dwj' }
    // const readonlyInfo1 = readonly(info1)

    // reactive 响应式对象
    const info2 = reactive({
      name: 'dwj'
    })
    const readonlyInfo2 = readonly(info2)
    console.log(readonlyInfo2);

    const handleUpdate = () => {
      // readonlyInfo1.name = 1 // 不能被修是只读的
      readonlyInfo2.name = 2
    }

    return {
      handleUpdate
    }
  }
}
</script>

<style>

</style>