<template>
  <div class="item" @click="itemClick">
    <div class="item-icon" v-show="!isActive"><slot name="item-img"></slot></div>
    <div class="item-active-icon" v-show="isActive"><slot name="item-img-active"></slot></div>
    <div class="item-text" :style="isActive?{'color':'red'}:{}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props:{
      link:{
        type:String,
        required:true
      }
    },
    data(){
      return{
        isActive:false
      }
    },
    methods:{
      itemClick(){
        this.isActive=!this.isActive
      }
    }
  }
</script>

<style scoped>

</style>