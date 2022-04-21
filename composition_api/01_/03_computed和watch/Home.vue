<template>
  <div>
    <h2>{{info.name}}</h2>
    <button @click="update">修改</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: 'dwj',
      age: 22
    })

    const name = ref('zww')
    
    /**
     * watch 第一次不会执行，只有数据发生改变的时候才会执行
     */

    // 侦听 watch 时，传入一个 getter 函数
    // watch(() => info.name, (newValue, oldValue) => {
    //   console.log('newValue:', newValue, 'oldValue:', oldValue);
    // })

    // 2 传入一个可响应式对象，reactive对象 ref对象
    // 情况一： reactive 对象获取到的 newValue 和 oldValue 本身都是 reactive 对象
    // watch(info, (newValue, oldValue) => {
    //   console.log('newValue:', newValue, 'oldValue:', oldValue); // newValue: Proxy {name: 'zww', age: 22} oldValue: Proxy {name: 'zww', age: 22}
    // })
    // 情况二：ref 对象获取 newValue 和 oldValue 是 value 值本身
    watch(name, (newValue, oldValue) => {
      console.log('newValue:', newValue, 'oldValue:', oldValue); // newValue: dwj oldValue: zww
    })

    // 侦听多个数据
    watch([() => info.name, name], (newV, oldV) => {
      console.log(newV, oldV); // [Proxy, 'dwj'] (2) [Proxy, 'zww']
    }, {
      immediate: true, 
      deep: true
    })



    const update = () => {
      info.name = 'zww'
      name.value = 'dwj'
    }

    return {
      info,
      update
    }
  }
}
</script>

<style>

</style>