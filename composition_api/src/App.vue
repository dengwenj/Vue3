<script setup>
import { ref, onMounted, onBeforeMount, reactive, toRef, toRefs } from 'vue'

// 状态
const count = ref(0)
const person = reactive({
  name: 'dengwj',
  age: 22,
  sex: '男',
  hobby: ['当社会人', '不睡觉']
})
// const age = toRef(person, 'age')
const { name, age, sex } = toRefs(person)

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
const handleSex = () => {
  person.sex = '女'
}
</script>

<template>
  <h1>{{count}}</h1>
  <h2>{{age}}</h2>
  <h2>{{name}}</h2>
  <h2>{{sex}}</h2>
  <button @click="handleClick">+1</button>
  <button @click="handleName">修改名字</button>
  <button @click="handleAge">修改名字</button>
  <button @click="handleSex">修改性别</button>
</template>
