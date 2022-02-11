import Vue from 'vue'
import App from './App.vue'
import router from "./router";
const getOS = require('outils/getOS')
const OS = getOS()
Vue.prototype.Utils={OS:OS}
//作用：查看构建信息
Vue.config.productionTip = false;


/**
 * 注册一全局组件：构造、注册、使用
 * 存在的问题：在runtime-only模式下，main.js中注册定义的组件只能是两种方式
 * 1、Vue.extend()注册组件时，定义的html的方式不能使用template，必须使用render
 * 2、使用.vue文件定义这个全局组件，因为.vue中template会被解析成render，所以在运行时不存在template
 */
const cpn2=Vue.extend({
  render(createElement) {
    return createElement('h3',['我是cpn2组件'])
  }
});
//1.构造组件
const cpn = Vue.extend({
  // 构造组件方式一
  render(createEle){
    // return createEle('h3',['我是一个vue组件'])
    return createEle(cpn2)
  },
  components:{
    cpn2
  },

  // 该方式在runtiem-only下会报错
  // template:`
  //     <div>
  //     <h3>我是一个vue组件</h3>
  //     </div>
  //   `,
  data(){
    return {}
  }
});
// 构造组件方式二：定义成.vue文件
// import Component from './components/Component'

//2.注册组件（全局）
Vue.component('cpn',cpn);

// 注册全局组件语法糖：不使用extend
Vue.component('cpn-no-extend',{
  render(createEle){
    return createEle('h3',['我是一个vue全局组件，使用vue.extend语法糖注册的'])
  },
})


/**
 * runtime-compiler和runtime-only的比较
 */
// 写法一
// 内部过程：runtime-compiler
// template->ast->render->vdom->ui
// new Vue({
//   el:'#app',
//   components:{
//     cpn
//   },
//   template: '<cpn></cpn>',//cpn元素会把#app这个元素替换掉
// });

// 写法二
// runtime-only (1性能更高 2代更少)
// 内部过程：render->vdom->ui

new Vue({
  el:'#app', //这样写，vue内部也是调用.$mount执行的。和.$mount方式效果一样
  router,
  render: createElement => createElement(App),//render里的cpn元素也会替换掉#app元素
});

//写法三：
// 和写法二一样，写法二中的el最终会调用.$mount函数
// new Vue({
//   render: createElement => createElement('h2',{class:'box'},['hello']),
// }).$mount('#app');

