<template>
  <div>
    <h2>小知识点</h2>
<!--    style可是数组的形式-->
    <p :style="[baseStyle,otherStyle]">style是数组的练习</p>
  </div>
</template>

<script>
  export default {
    name: "common",
    data(){
      return{
        baseStyle:{color:'red'},
        otherStyle:{fontSize:'22px'}
      }
    }
  }
</script>

<style scoped>

</style>