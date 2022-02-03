<template>
  <div>
    {{message}}
    <button @click="handleClick">点击</button>
    <h2>{{state.name}}</h2>
    <h2>{{state.age}}</h2>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup() {
    // reactive 响应式的 返回的是这个对象，里面只能写对象或者数组不能写基本类型
    const state = reactive({
      name: 'dengwj',
      age: 22
    })

    const handleClick = () => {
      console.log('点击');
    }

    return {
      counter: 100,
      handleClick,
      state
    }
  }
}
</script>