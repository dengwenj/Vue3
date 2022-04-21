<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'

const count = ref(0)

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted1')
})
onMounted(() => {
  console.log('onMounted2')
})

const handleClick = () => {
  count.value++
}
</script>

<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="handleClick">+1</button>
  </div>
</template>
