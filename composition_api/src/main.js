import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 全局的自定义指令
app.directive('focus', {
  mounted(el) {
    console.log(el)
    el.focus()
  }
})

app.mount('#app')
