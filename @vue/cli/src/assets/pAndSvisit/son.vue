<template>
  <div>
    <p>我是子组件</p><button @click="showParent">查看我的父组件</button><button @click="showRoot">查看根组件</button>
  </div>

</template>

<script>
  export default {
    name: "son",
    data(){
      return{
        message:'hello'
      }
    },
    methods:{
      getMessage(){
        return this.message
      },
      showParent(){
        console.log(this.$parent)
      },
      showRoot(){
        // 访问vue实例
        console.log(this.$root)
      }
    }
  }
</script>

<style scoped>

</style>