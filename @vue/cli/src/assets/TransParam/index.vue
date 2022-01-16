<template>
  <div>
    <h2>子向父传递参数</h2>
<!--    监听子的自定义事件
         click事件中，@click="clickItem" //如果没有指定参数，默认传递的是event对象
         自定义事件中，@itemClicked="cataloiesClick" //cataloiesclick没有指定参数，默认传递的是自定义事件过来的参数
 -->
    <cataloies @itemClicked="cataloiesClick"></cataloies>
  </div>
</template>

<script>
  import cataloies from './cataloies'
  export default {
    name: "TransParamIndex",
    components:{
      cataloies
    },
    methods:{
      cataloiesClick(item){
        console.log('子元素栏目被点击了',item)
      }
    }
  }
</script>

<style scoped>

</style>