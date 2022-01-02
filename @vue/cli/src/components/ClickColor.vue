<template>
  <div>
    <h2>click color change</h2>
    <ul>
      <li v-for="(item,index) in list" :key="item" :class="{active:currentIndex===index}"
          @click="changeColor(index)">{{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ClickColor",
    data() {
      return {
        list: ['javascript', 'java', 'python', 'node'],
        currentIndex: 0
      }
    },
    methods:{
      changeColor(index){
        this.currentIndex=index
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>