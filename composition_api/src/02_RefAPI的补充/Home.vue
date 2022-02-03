<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="handleUpdate">更新</button>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from '@vue/reactivity'
export default {
  setup() {
    const person = reactive({ name: 'dwj', age: 22 })
    // 对 reactive 里面的所有属性都进行 ref
    // const { name, age } = toRefs(person)

    // 对其中的一个进行 ref
    const age = toRef(person, 'age')

    const handleUpdate = () => {
      person.age++ // 这个也可以 他们是相互连接的
      // age.value++
    }

    return {
      name,
      age,
      handleUpdate
    }
  }
}
</script>

<style>

</style>