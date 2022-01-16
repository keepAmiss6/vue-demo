<template>
  <div>
    <button :style="{'font-size':'20px'}" v-for="item in cataloies" :key="item" @click="itemclick(item)">{{item}}</button>
  </div>
</template>

<script>
  export default {
    name: "cataloies",
    data(){
      return {
        cataloies:['首页','关于我们','工作台']
      }
    },
    methods:{
      itemclick(item){
        // 发布一个自定义事件
        this.$emit('itemClicked',item)
      }
    }
  }
</script>

<style scoped>

</style>