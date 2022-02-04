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
    
    // 会一上来调用一次，然后回调里面有响应式改变的时候会再次调用
    watchEffect(() => {
      console.log(name.value, age.value);
    })

    const updateName = () => name.value = '哈哈'
    const updateAge = () => age.value++

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