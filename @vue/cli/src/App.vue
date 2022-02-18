<template>
  <div id="app" style="display: flex">
    <div class="menu" style="flex-basis: 10%;background: #ddeac5;display: flex;flex-direction: column">
<!--      <router-link :to="'/home/'+homeId" tag="li" replace active-class="myactive">首页</router-link>-->
      <router-link :to="'/home/'+homeId" tag="li" replace>首页</router-link>
      <router-link to="/basic" tag="li" replace>基础知识点</router-link>
      <router-link to="/bookdemo" tag="li" replace>图书馆案列</router-link>
<!--      <router-link to="/slotdemo" tag="li" replace>插槽</router-link>-->
      <router-link :to="{path:'/slotdemo',query:{text:'我是通过路由的query传递过来的'}}" tag="li" replace>插槽</router-link>
<!--      <li @click="slotClick">插槽</li>-->
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
    data(){
      return{
        homeId:'zy'
      }
    },
    methods:{
      slotClick(){
        // 通过代码方式进行路由跳转
        // this.$router.push('/slotdemo')
        this.$router.replace('/slotdemo')
      }
    }
  }
</script>

<style>
  @media screen and (max-width: 800px) {
    body {
      background-color:lightblue;
    }
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  /*router-link默认加的类名：router-link-active*/
  .router-link-active{
    background:darkseagreen;
  }
  .menu{
    text-align: left;
    padding: 10px;
  }
  li{
    cursor: pointer;
    list-style: none;
    height: 30px;
    line-height: 30px;
    font-weight: 400;
  }
</style>
