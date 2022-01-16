<template>
<div>
  <h2>父子组件通讯</h2>
  <div :style="{textAlign:'left'}">
    <p>获取到的cmovie参数为：{{cMovie}}</p>
    <p>获取到的cmessage参数为：{{cmessage}}</p>
<!--    <p>自定义参数为：{{cdefined}}</p>-->
    <ul v-for="item in cMovie" :key="item">
      <li>{{item}}</li>
    </ul>
    <input type="text" v-model="Pcmessage">
    实现props和data的双向绑定：<input type="text" :value="Pcmessage" @input="inputChange">
  </div>
</div>
</template>
<script>
  export default {
    // 参数的书写形式有两种：1、数组(用的少) 2、对象
    // props:['cmovie'],
    data(){
      return{
        Pcmessage:this.cmessage
      }
    },
    methods:{
      inputChange(){
        this.$emit('sonInputCh',this.Pcmessage)
      }
    },
    props:{
      cMovie:{
        type:Array,
        // Array类型的default值需要以函数的形式返回;vue版本2.5.x以下下可以直接给个数组
        default: function () {
          return [1,2,3]
        }
      },
      cmessage:{
        type:String,
        default:'default',
        require:true
      },
      // 自定义验证
      // cdefined:{
      //   validator:function (value) {
      //     return ['success','warning'].indexOf(value)!==-1
      //   }
      // }
    },
    name: "PropsTrans",
  }
</script>

<style scoped>

</style>