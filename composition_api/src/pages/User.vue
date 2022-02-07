<script setup>
  import { useRoute } from 'vue-router'

  const route = useRoute() // 获取的是当前的路由
  // console.log(route)
</script>

<template>
  <h2>
    user: {{route.params.username}}
  </h2>
</template>