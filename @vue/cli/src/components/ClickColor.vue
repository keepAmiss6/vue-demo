<template>
  <div>
    <h2>案例一：点击改变当前栏目为激活状态</h2>
    <ul :style="{width:'200px'}">
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
    methods: {
      changeColor(index) {
        this.currentIndex = index
      }
    },
    activated() {
      console.log('clickdemo的actived被调用');
    },
    deactivated() {
      console.log('clickdemo的actived被调用');
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>