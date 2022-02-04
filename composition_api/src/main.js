import { createApp } from 'vue'
import App from './App.vue'

import directives from './08_directives'

const app = createApp(App)

directives(app)

// 全局的自定义指令
// app.directive('focus', {
//   mounted(el) {
//     console.log(el)
//     el.focus()
//   },
//   beforeMount(el) {
//     console.log(el);
//   },
//   created(el) {
//     console.log(el);
//   }
// })

app.mount('#app')
