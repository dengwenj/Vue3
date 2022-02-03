<template>
  <div>
    <h2>{{ p }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="handleUpdate">更新</button>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
import { reactive, shallowRef, toRef, toRefs, triggerRef, unref } from '@vue/reactivity'
export default {
  setup() {
    // 如果直接解构是直接把他的值赋值过去了 没有响应式 要用 toRefs
    const person = reactive({ name: 'dwj', age: 22 })
    // 对 reactive 里面的所有属性都进行 ref
    // const { name, age } = toRefs(person)
    // 参数必须是一个 reactive 响应式对象
    // 对其中的一个进行 ref
    const age = toRef(person, 'age')

    const handleUpdate = () => {
      person.age++ // 这个也可以 他们是相互连接的
      // age.value++
    }

    console.log(unref(age)) // 22

    const p = shallowRef({ name: 'z' })

    const handleClick = () => {
      p.value.name = 'd'
      triggerRef(p)
    }


    return {
      name,
      age,
      p,
      handleUpdate,
      handleClick
    }
  }
}
</script>

<style>

</style>