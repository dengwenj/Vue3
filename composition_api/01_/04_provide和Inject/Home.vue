<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{counter}}</h2>
    <button @click="handleHome">+1</button>
    <Demo />
  </div>
</template>

<script>
import { provide, readonly, ref } from 'vue'

import Demo from './Demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    const name = ref('dwj')
    const counter = ref(100)

    provide('name', readonly(name))
    provide('counter', readonly(counter))

    const handleHome = () => {
      counter.value++
    }

    return {
      name,
      counter,
      handleHome
    }
  }
}
</script>

<style>

</style>