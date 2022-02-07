<script setup>
import { computed, toRefs } from 'vue'
import { useStore, mapState } from 'vuex'

const store = useStore()

const objKeyFns = mapState(['counter', 'name', 'age', 'sex'])
// { name: ref, age: ref, sex: ref }
const storeState = {}
Object.keys(objKeyFns).forEach(fnKey => {
  storeState[fnKey] = computed(objKeyFns[fnKey].bind({ $store: store }))
})
const { counter, name, age, sex } = storeState

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
    <h1>{{ counter }}</h1>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ sex }}</h1>
    <button @click="handleIncrement">+1</button>
    <button @click="handleDecrement">-1</button>
  </div>
</template>