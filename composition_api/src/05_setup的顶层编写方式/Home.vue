<script setup>
// 执行的很早在 dom 之前就执行了
import { ref } from 'vue'

// <script setup> 中可以使用顶层 await。结果代码会被编译成 async setup()
// const res = await gggg()

// ts 中使用 
// const props = defineProps<{
//   foo: string
//   bar?: number
// }>()

// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>()

import Demo from './Demo.vue'

const name = ref('dwj')

const name1 = (prop) => {
  console.log(prop);
}

const age1 = (prop) => {
  console.log(prop)
}

const d = ref(null) // 定义的名字要和模板中的一样
const div = ref('div')

setTimeout(() => {
  console.log(d.value);
  console.log(div.value)
  // console.log(d.value.msg);
  // d.value.fn()
  // console.log(d.value.sex); 
})
</script>

<template>
  <div>
    <div ref="div">{{ name }}</div>
    <Demo ref="d" message="我是demo" @name="name1" @age="age1" />
  </div>
</template>