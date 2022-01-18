<template>
  <div>
<!--
1、插槽的基本使用<slot></slot>
2、插槽的默认值 <slot>默认值</slot>
3、如果有多个值，同时放入组件进行替换时，一起作为替换
-->
    <h2>slot插槽功能</h2>
<!--    具名插槽-->
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
    <div>
      <slot ></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "slotDemo"
  }
</script>

<style scoped>

</style>