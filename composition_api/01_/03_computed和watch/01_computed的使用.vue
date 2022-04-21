<script setup>
  import { computed, ref } from 'vue'

  const firstName = ref('你好')
  const lastName = ref('中国')

  // computed 返回的是 ref 对象
  // 参数里面的函数就相当于 get。  简写
  // const fullName = computed(() => firstName.value + lastName.value)

  const fullName = computed({
    get() {
      return firstName.value + ' ' + lastName.value
    },
    set(newValue) {
      const name = newValue.split(' ')
      firstName.value = name[0]
      lastName.value = name[1]
    }
  })

  const update = () => {
    // firstName.value = 'Hello'
    fullName.value = 'dengwen jie'
  }
</script>

<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="update">修改</button>
  </div>
</template>

