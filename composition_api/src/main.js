import { createApp } from 'vue'
import App from './App.vue'

import directives from './08_directives'
import pluginsObject from './09_plugins/plugins_object'
import pluginsFunction from './09_plugins/plugins_function'

const app = createApp(App)

app.use(pluginsObject)
app.use(pluginsFunction)

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
