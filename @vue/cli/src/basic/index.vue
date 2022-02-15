<template>
  <div>
<!--        <ClickColor/>-->
<!--        <br/>-->
<!--        <br/>-->
<!--        <vModelDemo/>-->
    <div style="">
    <router-link to="/basic/smalldemo" tag="button">click demo</router-link>
    <router-link to="/basic/vmodeldemo" tag="button">v-model demo</router-link>
    </div>
    <router-view></router-view>
        <br/>
        <h2>案例四：全局组件/局部组件</h2>
        <cpn></cpn>
        <cpn3></cpn3>
        <cpn-no-extend></cpn-no-extend>
        <props-trans v-bind:cMovie="['海贼王','海尔兄弟','海的女儿']" cmessage="'success'" @sonInputCh="value=>this.cmessage=value"></props-trans>
        <trans-paramIndex></trans-paramIndex>
        <computer></computer>
        <common></common>
        <pAndSvisit></pAndSvisit>
  </div>
</template>

<script>
  // import ClickColor from '../components/ClickColor' ;
  // import vModelDemo from '../components/vModelDemo';
  import PropsTrans from '../components/PropsTrans';
  import TransParamIndex from '../assets/TransParam/index';
  import computer from "../components/computer";
  import common from '../assets/common';
  import pAndSvisit from "../assets/pAndSvisit/pAndSvisit";
  export default {
    name: "index",
    components:{
      // ClickColor,
      // vModelDemo,
      'cpn3': {
        render(createEle) {
          return createEle('h3', ['我是一个vue局部组件，使用语法糖注册的'])
        },
      },
      PropsTrans,
      TransParamIndex,
      computer,
      common,
      pAndSvisit,
    }
  }
</script>

<style scoped>
button{
  margin-right: 5px;
}
</style>