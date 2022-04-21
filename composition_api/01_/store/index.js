import { createStore } from 'vuex'

import home from './modules/home'
import user from './modules/user'

const store = createStore({
  modules: {
    home,
    user
  }
})

export default store