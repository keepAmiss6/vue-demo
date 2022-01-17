<template>
  <div>
    <h2>小知识点</h2>
    <!--    style可是数组的形式-->
    <p :style="[baseStyle,otherStyle]">style是数组的练习</p>
    <button @click="buttonClick">查看v-on的参数：无参</button>
    <button @click="buttonClick2('hello',$event)">查看v-on的参数：有参</button>
    <div>
      <p>您当前分数的级别是：</p>
      <p v-if="score>=90">优秀</p>
      <p v-else-if="score>=80">良好</p>
      <p v-else-if="score>=60">及格</p>
      <p v-else>不及格</p>
      <p>-----------------------------------</p>
      <div>
<!--        如果-->
        <div v-if="type==='account'">
          <label >用户账号</label>
          <input placeholder="用户账号" />
        </div>
        <div v-else>
          <label >邮箱账号</label>
          <input placeholder="email账号" />
        </div>
        <button @click="changeToggle">切换类型</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "common",
    data() {
      return {
        baseStyle: {color: 'red'},
        otherStyle: {fontSize: '22px'},
        score: 80,
        type: 'account'
      }
    },
    methods: {
      buttonClick(event) {
        console.log('调用函数时什么参数也没传', event)
      },
      buttonClick2(para, event) {
        console.log('传递来的参数：', para);
        console.log('默认有的参数：', event);
      },
      changeToggle() {
        this.type = this.type === 'account' ? 'email' : 'account'
      }
    }
  }
</script>

<style scoped>

</style>