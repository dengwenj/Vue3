<template>
  <div>
    {{message}}
    <button @click="handleClick">点击</button>
    <!-- 不用 .value 帮我们解包了 -->
    <h2>{{counter}}</h2>
    <Demo :count="counter" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Demo from './Demo.vue'

export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  components: {
    Demo
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