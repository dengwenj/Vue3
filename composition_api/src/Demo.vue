<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  message: {
    type: String,
    default: 'ddd'
  }
})
const emits = defineEmits(['dwj'])
const handleDWJ = () => {
  emits('dwj', '我是dengwj')
}
</script>

<template>
  <div>{{ message }}</div>
  <button @click="handleDWJ">传给父</button>
</template>