<template>
  <div>
    {{message}}
    <button @click="handleClick">点击</button>
    <h2>{{counter}}</h2>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup() {
    // ref 返回的一个可变的响应式对象
    const counter = ref(100)

    const handleClick = () => {
      console.log(counter)
      counter.value++
    }

    return {
      handleClick,
      counter
    }
  }
}
</script>