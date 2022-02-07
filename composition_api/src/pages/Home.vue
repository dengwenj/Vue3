<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router);
</script>

<template>
  <h1>home</h1>

  <router-view />
  <router-link to="/home/message">消息</router-link>
  <router-link to="/home/goods">商品</router-link>
</template>