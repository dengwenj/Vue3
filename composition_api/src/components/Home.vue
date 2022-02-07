<script setup>
import { useStore } from 'vuex'

const store = useStore()

const handleIncrement = () => {
  store.commit('increment')
}

const handleDecrement = () => {
  store.commit('decrement')
}
</script>

<template>
  <div>
    vuex
    <h1>{{store.state.counter}}</h1>
    <button @click="handleIncrement">+1</button>
    <button @click="handleDecrement">-1</button>
  </div>
</template>