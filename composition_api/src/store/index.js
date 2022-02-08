import { createStore } from 'vuex'

import { INCREMENT } from './mutations-types'

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
    [INCREMENT](state, payload) {
      console.log(payload);
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {
    asyncIncrement(context, payload) {
      console.log(payload); // 异步加
      setTimeout(() => {
        context.commit('increment')
      }, 1000);
    },
    returnPromise(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('decrement')
          resolve(context.state.counter)
        }, 1000)
      })
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