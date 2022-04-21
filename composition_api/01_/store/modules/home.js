const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 10
    }
  },
  mutations: {
    incrementHome(state) {
      state.homeCounter += 10
    }
  },
  actions: {
    incrementAsync(context) {
      console.log(context.rootState.user.homeCounter);
      setTimeout(() => {
        context.commit('incrementHome')
      }, 1000);
    }
  },
  getters: {
    hh() {
      return 'hhhhhhh'
    }
  }
}

export default homeModule