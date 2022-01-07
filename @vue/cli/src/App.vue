<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ClickColor/>
    <br/>
    <BookTable/>
    <br/>
    <vModelDemo/>
  </div>
</template>

<script>
  import ClickColor from './components/ClickColor' ;
  import BookTable from "./components/BookTable";
  import vModelDemo from './components/vModelDemo'
  export default {
    name: 'App',
    components: {
      ClickColor,
      BookTable,
      vModelDemo
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
