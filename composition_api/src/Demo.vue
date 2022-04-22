<script setup>
import { defineProps, defineEmits } from 'vue'

import Demo2 from './Demo2.vue'

defineProps({
  message: {
    type: String,
    default: 'ddd'
  },
  gggg: {
    type: Number
  }
})
const emits = defineEmits(['dwj'])
const handleDWJ = () => {
  emits('dwj', '我是dengwj')
  emits('update:gggg', 'hhhh')
}
</script>

<template>
  <div>{{ message }}</div>
  <div>{{ gggg }}</div>
  <button @click="handleDWJ">传给父</button>
  <Demo2 />
</template>