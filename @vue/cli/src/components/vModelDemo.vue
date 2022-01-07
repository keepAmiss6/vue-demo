<template>
  <div>
    <h2>案例三：v-model的使用和原理</h2>
    <div :style="{textAlign:'left'}">
      <!--    手动实现v-model数据双向绑定的效果-->
      <input type="text" :value="message" @input="message=$event.target.value"/>
      <p>效果等同于：</p><input type="text" v-model="message"/>
      <p>{{message}}</p>
      <h3>v-model和radio结合使用</h3>
      <div>
        <label for="male">
          <input type="radio" id="male" value="男" v-model="sex">男
        </label>
        <label for="female">
          <input type="radio" id="female" value="女" v-model="sex">女
        </label>
        <p>您选择的是:{{sex}}</p>
      </div>
      <h3>v-model和checkbox结合使用：单选框</h3>
      <div>
        <input type="checkbox" v-model="isgree">同意
        <button :disabled="!isgree">同意</button>
      </div>
      <h3>v-model和checkbox结合使用：多选框</h3>
      <div>
        <input type="checkbox" value="篮球" v-model="hobbies">篮球
        <input type="checkbox" value="足球" v-model="hobbies">足球
        <input type="checkbox" value="乒乓球" v-model="hobbies">乒乓球
        <input type="checkbox" value="高尔夫" v-model="hobbies">高尔夫
        <p>您选择的爱好是：{{hobbies}}</p>
      </div>
      <h3>v-model和select结合使用：单选</h3>
      <select v-model="fruit" name="abc">
        <option value="香蕉">香蕉</option>
        <option value="苹果">苹果</option>
        <option value="葡萄">葡萄</option>
        <option value="榴莲">榴莲</option>
      </select>
      <p>您选择的水果是:{{fruit}}</p>
      <h3>v-model和select结合使用：多选</h3>
      <select v-model="fruits" multiple>
        <option value="香蕉">香蕉</option>
        <option value="苹果">苹果</option>
        <option value="葡萄">葡萄</option>
        <option value="榴莲">榴莲</option>
      </select>
      <p>您选择的水果是:{{fruits}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vModelDemo",
    data() {
      return {
        message: 'hello',
        sex: '男',
        isgree:false,//单选框对应布尔值
        hobbies:[],//多选框对应数组
        fruit:'葡萄',
        fruits:[]
      }
    }
  }
</script>

<style scoped>

</style>