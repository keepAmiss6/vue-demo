<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <ClickColor/>
    <br/>

    <BookTable/>
  </div>
</template>

<script>
  import ClickColor from './components/ClickColor' ;
  import BookTable from "./components/BookTable";
  export default {
    name: 'App',
    components: {
      ClickColor,
      BookTable
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
