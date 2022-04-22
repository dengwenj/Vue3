<script setup>
import {
  ref, 
  onMounted, 
  onBeforeMount, 
  reactive, 
  toRef, 
  toRefs,
  computed,
  watch,
  watchEffect
} from 'vue'

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
const ageJJ = computed(() => {
  // 这个函数的返回值就会 计算属性的值
  return age.value + 100
})

// 监听 ref 数据
watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  console.log(count.value + '变了')
})
// 监听 reactive 数据 person 全部的
watch(person, () => {
  console.log('监听person数据')
})
// 监听对个改变
watch([count, person], (newValue, oldValue) => {
  console.log(newValue);
  console.log(oldValue);
})
// 监听 对象中的某一个
watch(() => person.name, (newValue, oldValue) => {
  console.log(newValue);
  console.log(oldValue);
})
// 监听对象中某个属性是引用类型要用 deep
watch(() => person.hobby, (newValue, oldValue) => {
  console.log(newValue);
  console.log(oldValue);
}, {
  deep: true,
  immediate: true
})
// 一上来会调用一次和当数据发生变化了就会调用
watchEffect((onCleanup) => {
  onCleanup(() => {
    console.log('在组件更新和卸载的时候会调用')
  })
  console.log('watchEffect 一上来会调用一次和当数据发生变化了就会调用');
  console.log(count.value)
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
const handleHobby1 = () => {
  person.hobby[0] = '不当社会人了'
}
</script>

<template>
  <h1>{{count}}</h1>
  <h2>{{age}}</h2>
  <h2>{{name}}</h2>
  <h2>{{sex}}</h2>
  <h2>{{ ageJJ }}</h2>
  <button @click="handleClick">+1</button>
  <button @click="handleName">修改名字</button>
  <button @click="handleAge">修改年龄</button>
  <button @click="handleSex">修改性别</button>
  <button @click="handleHobby1">修改元素1</button>
</template>
