<template>
  <div>
        <ClickColor/>
        <br/>
        <br/>
        <vModelDemo/>
        <br/>
        <h2>案例四：全局组件/局部组件</h2>
        <cpn></cpn>
        <cpn3></cpn3>
        <cpn-no-extend></cpn-no-extend>
        <PropsTrans v-bind:cMovie="['海贼王','海尔兄弟','海的女儿']" cmessage="'success'" @sonInputCh="value=>this.cmessage=value"></PropsTrans>
        <TransParamIndex></TransParamIndex>
        <computer></computer>
        <common></common>
        <pAndSvisit></pAndSvisit>
  </div>
</template>

<script>
  import ClickColor from '../components/ClickColor' ;
  import vModelDemo from '../components/vModelDemo';
  import PropsTrans from '../components/PropsTrans';
  import TransParamIndex from '../assets/TransParam/index';
  import computer from "../components/computer";
  import common from '../assets/common';
  import pAndSvisit from "../assets/pAndSvisit/pAndSvisit";
  export default {
    name: "index",
    components:{
      ClickColor,
      vModelDemo,
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

</style>