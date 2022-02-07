import { createStore } from 'vuex'

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
    increment(state) {
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
    }
  }
})

export default store