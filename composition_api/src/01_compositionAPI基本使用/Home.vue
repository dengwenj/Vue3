<template>
  <div>
    {{message}}
    <button @click="handleClick">点击</button>
    <h2>{{counter}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  /**
   * 第一个参数是 props， 第二个参数是 context 上下文
   * setup 的返回值可以在模板中直接使用，也就是说我们可以通过 setup 的返回值来代替 data 选项
   */
  setup(props, { attrs, slots, emit }) {
    console.log(props.message)
    console.log(attrs, slots, emit)

    const handleClick = () => {
      console.log('点击');
    }

    return {
      counter: 100,
      handleClick
    }
  }
}
</script>