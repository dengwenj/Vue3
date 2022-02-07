import { createStore } from 'vuex'

import { INCREMENT_N } from './mutations-types'

const store = createStore({
  state() {
    return {
      counter: 0,
      name: 'dengwenj',
      age: 22,
      sex: '男'
    }
  },
  mutations: {
    [INCREMENT_N](state, payload) {
      console.log(payload);
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  getters: {
    fullName(state, getters) {
      console.log(getters) // { fullName: "dengwenjieandzw", zw: "zw" }
      return state.name + 'ie' + 'and' + getters.zw
    },
    zw(state, getters) {
      return 'zw'
    },
    fnG(state, getters) {
      return function(n) {
        return state.age + n
      }
    }
  }
})

export default store