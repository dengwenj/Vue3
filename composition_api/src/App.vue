<script setup>
import { ref, onMounted, onBeforeMount, reactive, toRef } from 'vue'

// 状态
const count = ref(0)
const person = reactive({
  name: 'dengwj',
  age: 22,
  sex: '男'
})
const age = toRef(person, 'age')
console.log(age)
// 钩子
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted1')
})
onMounted(() => {
  console.log('onMounted2')
})

// 处理函数
const handleClick = () => {
  count.value++
}
const handleName = () => {
  person.name = 'ww'
}
const handleAge = () => {
  age.value = 17
}
</script>

<template>
  <h1>{{count}}</h1>
  <h2>{{person.age}}</h2>
  <h2>{{person.name}}</h2>
  <h2>{{person.sex}}</h2>
  <button @click="handleClick">+1</button>
  <button @click="handleName">修改名字</button>
  <button @click="handleAge">修改名字</button>
</template>
