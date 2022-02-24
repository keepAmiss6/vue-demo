<template>
  <div class="item">
    <div class="item-icon" v-show="!isActive"><slot name="item-img"></slot></div>
    <div class="item-active-icon" v-show="isActive"><slot name="active-img-active"></slot></div>
    <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    data(){
      return{
        isActive:false
      }
    }
  }
</script>

<style scoped>

</style>