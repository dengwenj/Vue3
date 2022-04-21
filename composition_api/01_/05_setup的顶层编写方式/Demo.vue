<script setup>
import { defineProps, defineEmits, defineExpose } from 'vue'

const props = defineProps({
  message: {
    type: String
  }
})
console.log(props) // 可以在组件中直接使用 message，也可以加上 props.message

const emit = defineEmits(['name', 'age'])
emit('name', 'w shi name')
emit('age', 'w shi age')

defineExpose({ // Expose 暴露的意思
  msg: 'nihao',
  sex: '男',
  fn() {
    console.log('我是函数');
  }
})
</script>

<template>
  <div>
    {{props.message}}
  </div>
</template>