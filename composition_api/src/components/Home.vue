<script setup>
import { computed, toRefs, onMounted } from 'vue'
import { useStore, mapState, mapMutations, mapActions } from 'vuex'

import useState from '../hooks/useState';
import useGetters from '../hooks/useGetters';
import { INCREMENT } from '../store/mutations-types';

const { counter, name, age, sex } = useState(['counter', 'name', 'age', 'sex'])
const { fullName, zw, fnG } = useGetters(['fullName', 'zw', 'fnG'])

const store = useStore()
console.log(store);
// const handleIncrement = () => {
//   // store.commit('increment')
//   // store.commit('increment', { name: 'dwj', age: 22 })
//   store.commit({
//     type: INCREMENT,
//     name: 'dwj', 
//     age: 22 
//   })
// }

// const handleDecrement = () => {
//   store.commit('decrement')
// }
const { add } = mapMutations({ // 对象的写法
  add: INCREMENT
})
const increment3 = add.bind({ $store: store }) // 这里要绑定 this

const { increment, decrement } = mapMutations([INCREMENT, 'decrement']) // 数组的写法
const increment1 = increment.bind({ $store: store }) // 这里要绑定 this
const decrement1 = decrement.bind({ $store: store })

const { asyncIncrement } = mapActions(['asyncIncrement'])
const asyncIncrement1 = asyncIncrement.bind({ $store: store })


// onMounted(() => {
//   const promise = store.dispatch('returnPromise') // 想要知道是否成功返回结果，可以返回一个 promise 来看
//   promise.then((res) => {
//     console.log(res);
//   })
// })

</script>

<template>
  <div>
    vuex
    <h1>{{store.state.counter}}</h1>
    <h1>{{ counter }}</h1>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ sex }}</h1>
    <button @click="increment1({n: 10})">+1</button>
    <button @click="increment3({n: 10})">+1</button>
    <button @click="decrement1">-1</button>
    <button @click="asyncIncrement1('异步加')">异步加</button>

    <!-- <h2>{{ store.getters.fullName }}</h2>
    <h2>{{ store.getters.fnG(17) }}</h2> -->
    <!-- <h2>{{ fullName }}</h2> -->
    <!-- <h2>{{ zw }}</h2> -->
    <!-- <h2>{{ fnG(16) }}</h2> -->
    <h2>{{ store.state.home.homeCounter }}</h2>
  </div>
</template>