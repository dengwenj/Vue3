<script setup>
import { inject } from 'vue'

const res = inject('provide1')
</script>

<template>
  <div>demo2</div>
  <div>{{ res }}</div>
</template>
