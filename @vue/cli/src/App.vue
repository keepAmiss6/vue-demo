<template>
  <div id="app" style="display: flex">
    <div class="menu" style="flex-basis: 20%;background: #ddeac5;display: flex;flex-direction: column">
      <router-link to="/home">首页</router-link>
      <router-link to="/basic">基础知识点</router-link>
      <router-link to="/bookdemo">图书馆案列</router-link>
      <router-link to="/slotdemo">插槽</router-link>
    </div>
    <div class="content" style="background:honeydew;flex: 1;padding-left: 10px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  //1.创建组件构造器对象

  export default {
    name: 'App',
    components: {
    },
    methods:{
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
