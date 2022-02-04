<script setup>
// 局部的自定义指令
const vFocus = {
  mounted(el, b, c, d) {
    console.log(el)
    el.focus()
  },
}
// const time = 1643986468
</script>

<template>
  <input type="text" v-focus>
</template>