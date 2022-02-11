<template>
  <div>
    <slotDemo>我给插槽传个文本</slotDemo>
    <slotDemo><button>我给插槽传个button元素</button></slotDemo>
    <slotDemo>
      <p>我是第一个内容</p>
      <p>我是第二个内容</p>
      <p>我是第三个内容</p>
      <span slot="left">我是替换了具名插槽左边的区域</span>
      <button slot="right">我是具名插槽右边区域</button>
      <input slot="center" placeholder="我来替换具名插槽中间的">
    </slotDemo>
    <slotDemo></slotDemo>

      <slotDemo>
        <template slot-scope="slotProps">
          <ul>
            <li v-for="info in slotProps.data" :key="info"></li>
          </ul>
        </template>
      </slotDemo>


  </div>
</template>

<script>
  import slotDemo from "./slotDemo";
  export default {
    name: "slotIndex",
    components:{
      slotDemo
    }
  }
</script>

<style scoped>

</style>