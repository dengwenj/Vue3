<script setup>
import { computed, toRefs } from 'vue'
import { useStore, mapState } from 'vuex'

import useState from '../hooks/useState';
import useGetters from '../hooks/useGetters';
import { INCREMENT_N } from '../store/mutations-types';

const { counter, name, age, sex } = useState(['counter', 'name', 'age', 'sex'])
const { fullName, zw, fnG } = useGetters(['fullName', 'zw', 'fnG'])

const store = useStore()

const handleIncrement = () => {
  // store.commit('increment')
  // store.commit('increment', { name: 'dwj', age: 22 })
  store.commit({
    type: INCREMENT_N,
    name: 'dwj', 
    age: 22 
  })
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

    <!-- <h2>{{ store.getters.fullName }}</h2>
    <h2>{{ store.getters.fnG(17) }}</h2> -->
    <h2>{{ fullName }}</h2>
    <h2>{{ zw }}</h2>
    <h2>{{ fnG(16) }}</h2>
  </div>
</template>