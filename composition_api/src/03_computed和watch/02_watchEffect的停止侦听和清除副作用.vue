<template>
  <div>
     <h2>{{name}}-{{age}}</h2>
     <button @click="updateName">修改name</button>
     <button @click="updateAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    const name = ref('dwj')
    const age = ref(22)
    
    const stop = watchEffect((onInvalidate) => {
      // 清除副作用
      onInvalidate(() => {
        console.log('会在组件销毁或更新的时候调用');
      })

      console.log(name.value, age.value);
    })

    const updateName = () => name.value = '哈哈'
    const updateAge = () => {
      age.value++
      if (age.value > 25) {
        stop() // 停止侦听
      }
    }

    return {
      name,
      age,
      updateName,
      updateAge
    }
  }
}
</script>

<style>

</style>