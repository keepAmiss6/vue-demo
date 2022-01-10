<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ClickColor/>
    <br/>
    <BookTable/>
    <br/>
    <vModelDemo/>
    <br/>
    <cpn></cpn>
  </div>
</template>

<script>
  import ClickColor from './components/ClickColor' ;
  import BookTable from "./components/BookTable";
  import vModelDemo from './components/vModelDemo';

  // import Component from './components/Component';
  //1.创建组件构造器对象

  export default {
    name: 'App',
    components: {
      ClickColor,
      BookTable,
      vModelDemo,
      // Component
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
