<template>
  <div>
    <h1>{{name}}</h1>
    <h1>{{counter}}</h1>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    const name =  inject('name')
    const counter = inject('counter')
    console.log(name);
    console.log(counter);
    return {
      name, 
      counter
    }
  }
}
</script>

<style>

</style>