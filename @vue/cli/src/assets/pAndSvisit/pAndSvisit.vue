<template>

 <div>
   <h2>测试子组组件的访问</h2>
   <button @click="showSon">使用$children查看子元素</button>
   <button @click="showSonByRef">使用$refs查看子元素</button>
   <son ref="son"></son>
 </div>

</template>

<script>
  import son from './son'
  export default {
    name: "pAndSvisit",
    components:{
      son
    },
    methods:{
      showSon(){
        console.log(this.$children)
        let res=this.$children[0].getMessage();
        console.log('我从子元素里拿到的mess为',res)
      },
      showSonByRef(){
        // this.$refs它是一个对象类，型默认是一个空对象，必须在组件上加ref='xx'才会有
        console.log(this.$refs)
      }
    }
  }
</script>

<style scoped>

</style>