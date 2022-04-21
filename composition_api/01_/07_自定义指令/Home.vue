<script setup>
import { getCurrentInstance, onMounted } from 'vue';
// 局部的自定义指令
// const vFocus = {
//   mounted(el, b, c, d) {
//     console.log(el)
//     el.focus()
//   },
// }
const time = 1643986468

const instance = getCurrentInstance() // 获取组件的实例
console.log(instance.appContext.config.globalProperties.$name); // dwj
</script>

<template>
  <div>
    <input type="text">
    <div v-format-time="'YYYY/MM/DD'">{{time}}</div>
  </div>
</template>