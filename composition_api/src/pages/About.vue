<script setup>
import { useRoute } from "vue-router"
const route = useRoute()
console.log(route.params);
console.log(route.query);
console.log(route);
</script>

<template>
  <h1>
    about
  </h1>
</template>